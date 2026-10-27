import type { StemClip } from "@/lib/audio-lab";

const SAMPLE_RATE = 44100;
const N_SAMPLES = Math.round(7.8 * SAMPLE_RATE);
const STEMS = [
  ["Batteria", 0],
  ["Basso", 1],
  ["Altro", 2],
  ["Voce", 3],
] as const;

type OrtModule = typeof import("onnxruntime-web/wasm");
type Session = Awaited<ReturnType<OrtModule["InferenceSession"]["create"]>>;

let loading: Promise<Session> | null = null;

async function loadSession(onStatus: (note: string) => void) {
  if (!loading) {
    loading = (async () => {
      onStatus("Carico Demucs. La prima volta scarica 166 MB.");
      const ort = await import("onnxruntime-web/wasm");
      ort.env.wasm.numThreads = 1;
      ort.env.wasm.proxy = true;
      ort.env.wasm.wasmPaths = "/ort/";
      return ort.InferenceSession.create("/demucs/model", {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all",
      });
    })().catch((error: unknown) => {
      loading = null;
      throw error;
    });
  }
  return loading;
}

export async function separateDemucs(buffer: AudioBuffer, onStatus: (note: string) => void = () => {}): Promise<StemClip[]> {
  if (typeof window === "undefined") throw new Error("Demucs gira nel browser.");
  const session = await loadSession(onStatus);
  onStatus("Demucs separa i primi 7,8 secondi.");
  const mix = await stereo441(buffer);
  const ort = await import("onnxruntime-web/wasm");
  const input = new ort.Tensor("float32", mix, [1, 2, N_SAMPLES]);
  const output = await session.run({ mix: input });
  const stems = output.stems;
  if (!stems) throw new Error("Demucs non ha restituito gli stems.");
  const data = stems.data as Float32Array;
  const total = Math.min(N_SAMPLES, Math.max(1, Math.round(buffer.duration * SAMPLE_RATE)));
  return STEMS.map(([name, index]) => {
    const left = new Float32Array(total);
    const right = new Float32Array(total);
    const leftAt = index * 2 * N_SAMPLES;
    const rightAt = leftAt + N_SAMPLES;
    left.set(data.subarray(leftAt, leftAt + total));
    right.set(data.subarray(rightAt, rightAt + total));
    return { name, url: stereoWavUrl(left, right) };
  });
}

async function stereo441(buffer: AudioBuffer) {
  const length = Math.min(N_SAMPLES, Math.max(1, Math.ceil(buffer.duration * SAMPLE_RATE)));
  const offline = new OfflineAudioContext(2, length, SAMPLE_RATE);
  const source = offline.createBufferSource();
  source.buffer = buffer;
  source.connect(offline.destination);
  source.start();
  const rendered = await offline.startRendering();
  const mix = new Float32Array(2 * N_SAMPLES);
  mix.set(rendered.getChannelData(0));
  mix.set(rendered.numberOfChannels > 1 ? rendered.getChannelData(1) : rendered.getChannelData(0), N_SAMPLES);
  return mix;
}

function stereoWavUrl(left: Float32Array, right: Float32Array) {
  const bytes = new ArrayBuffer(44 + left.length * 4);
  const view = new DataView(bytes);
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + left.length * 4, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 2, true);
  view.setUint32(24, SAMPLE_RATE, true);
  view.setUint32(28, SAMPLE_RATE * 4, true);
  view.setUint16(32, 4, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, "data");
  view.setUint32(40, left.length * 4, true);
  let offset = 44;
  for (let i = 0; i < left.length; i++) {
    view.setInt16(offset, pcm(left[i]), true);
    view.setInt16(offset + 2, pcm(right[i]), true);
    offset += 4;
  }
  return URL.createObjectURL(new Blob([bytes], { type: "audio/wav" }));
}

function pcm(sample: number) {
  const clamped = Math.max(-1, Math.min(1, sample));
  return clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff;
}

function writeString(view: DataView, offset: number, text: string) {
  for (let i = 0; i < text.length; i++) view.setUint8(offset + i, text.charCodeAt(i));
}
