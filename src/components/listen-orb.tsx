import { useEffect, useRef } from "react";

const VERT = `
uniform float uTime;
uniform float uAmp;
uniform vec2 uPointer;
varying vec3 vNormal;
varying vec3 vWorld;
varying float vDisp;

float hash(vec3 p) {
  return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
}

float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash(i);
  float n100 = hash(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash(i + vec3(1.0, 1.0, 1.0));
  float nx00 = mix(n000, n100, f.x);
  float nx10 = mix(n010, n110, f.x);
  float nx01 = mix(n001, n101, f.x);
  float nx11 = mix(n011, n111, f.x);
  return mix(mix(nx00, nx10, f.y), mix(nx01, nx11, f.y), f.z);
}

void main() {
  float lobe = sin(position.x * 3.0 + uTime) * sin(position.y * 2.5 - uTime * 0.8) * sin(position.z * 2.8 + uTime * 0.4);
  float n = noise(position * 2.0 + vec3(uTime * 0.3, uPointer.x, uPointer.y));
  float disp = (lobe * 0.75 + (n - 0.5) * 0.45) * uAmp;
  vec3 moved = position + normal * disp;
  moved.xy += uPointer * 0.22;
  vec4 worldPos = modelMatrix * vec4(moved, 1.0);
  vec4 viewPos = viewMatrix * worldPos;
  vNormal = normalize(normalMatrix * normal);
  vWorld = worldPos.xyz;
  vDisp = disp;
  gl_Position = projectionMatrix * viewPos;
}
`;

const FRAG = `
uniform float uTime;
varying vec3 vNormal;
varying vec3 vWorld;
varying float vDisp;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(cameraPosition - vWorld);
  float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.2);
  vec3 lightDir = normalize(vec3(0.35, 0.7, 0.8));
  vec3 halfDir = normalize(lightDir + viewDir);
  float spec = pow(max(dot(normal, halfDir), 0.0), 48.0);
  float band = sin(vWorld.y * 8.0 + uTime * 1.6 + vDisp * 12.0) * 0.5 + 0.5;
  vec3 ink = vec3(0.05, 0.02, 0.09);
  vec3 violet = vec3(0.72, 0.38, 0.98);
  vec3 silver = vec3(0.94, 0.95, 1.0);
  vec3 color = mix(ink, violet, fresnel * 0.9 + band * 0.22);
  color += silver * spec * 1.35;
  color += silver * fresnel * 0.28;
  gl_FragColor = vec4(color, 1.0);
}
`;

export function ListenOrb({
  live,
  drive,
  className,
}: {
  live: boolean;
  drive: number;
  className?: string;
}) {
  const host = useRef<HTMLCanvasElement>(null);
  const liveRef = useRef(live);
  const driveRef = useRef(drive);
  liveRef.current = live;
  driveRef.current = drive;

  useEffect(() => {
    const canvas = host.current;
    if (!canvas) return;
    let stopped = false;
    let frame = 0;
    const cleanups: Array<() => void> = [];

    void import("three").then((THREE) => {
      if (stopped || !host.current) return;
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 20);
      camera.position.z = 6.4;

      const uniforms = {
        uTime: { value: 0 },
        uAmp: { value: 0.55 },
        uPointer: { value: new THREE.Vector2(0, 0) },
      };
      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: VERT,
        fragmentShader: FRAG,
      });
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 80, 80), material);
      scene.add(mesh);

      const pointer = new THREE.Vector2();
      const move = (event: PointerEvent) => {
        const box = canvas.getBoundingClientRect();
        const x = (event.clientX - box.left) / Math.max(1, box.width);
        const y = (event.clientY - box.top) / Math.max(1, box.height);
        if (x < 0 || y < 0 || x > 1 || y > 1) return;
        pointer.set(x * 2 - 1, -(y * 2 - 1));
      };
      window.addEventListener("pointermove", move);
      cleanups.push(() => window.removeEventListener("pointermove", move));

      const resize = () => {
        const box = canvas.getBoundingClientRect();
        const width = Math.max(2, box.width);
        const height = Math.max(2, box.height);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      resize();
      const observer = new ResizeObserver(resize);
      observer.observe(canvas);
      cleanups.push(() => observer.disconnect());

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const tick = () => {
        if (stopped) return;
        frame = requestAnimationFrame(tick);
        const hot = liveRef.current ? 1 : driveRef.current;
        if (!reduced) uniforms.uTime.value += 0.016 + hot * 0.02;
        uniforms.uAmp.value = THREE.MathUtils.lerp(uniforms.uAmp.value, 0.38 + hot * 0.28, 0.08);
        uniforms.uPointer.value.lerp(pointer, 0.12);
        mesh.rotation.y += 0.004 + hot * 0.01;
        mesh.rotation.x = uniforms.uPointer.value.y * 0.35;
        renderer.render(scene, camera);
      };
      frame = requestAnimationFrame(tick);

      cleanups.push(() => {
        cancelAnimationFrame(frame);
        mesh.geometry.dispose();
        material.dispose();
        renderer.dispose();
      });
    });

    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return <canvas ref={host} className={`${className ?? ""} h-full w-full`} aria-hidden />;
}
