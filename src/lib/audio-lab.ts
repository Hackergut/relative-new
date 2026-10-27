import { tracks, type Track } from "@/lib/music";

export type StemClip = {
  name: string;
  url: string;
};

export type Measure = {
  bpm: number;
  bands: number[];
};

const CENTERS = [60, 150, 300, 600, 1200, 2400, 4800, 8000];

export function measurePcm(samples: Float32Array, sampleRate: number): Measure {
  const hop = Math.max(1, Math.floor(sampleRate / 100));
  const env: number[] = [];
  for (let i = 0; i < samples.length; i += hop) {
    let energy = 0;
    const end = Math.min(samples.length, i + hop);
    for (let j = i; j < end; j++) energy += samples[j] * samples[j];
    env.push(energy / (end - i));
  }
  const flux = env.map((value, i) => Math.max(0, value - (env[i - 1] ?? value)));
  const minLag = Math.round(60 / 200 / 0.01);
  const maxLag = Math.round(60 / 70 / 0.01);
  let bestLag = minLag;
  let best = -1;
  for (let lag = minLag; lag <= maxLag; lag++) {
    let score = 0;
    for (let i = 0; i < flux.length - lag; i++) score += flux[i] * flux[i + lag];
    if (score > best) {
      best = score;
      bestLag = lag;
    }
  }
  const bpm = Math.round(60 / (bestLag * 0.01));

  const state = CENTERS.map((freq) => {
    const w0 = (2 * Math.PI * freq) / sampleRate;
    const alpha = Math.sin(w0) / (2 * 1.2);
    const b0 = alpha;
    const b2 = -alpha;
    const a0 = 1 + alpha;
    const a1 = -2 * Math.cos(w0);
    const a2 = 1 - alpha;
    return { b0: b0 / a0, b2: b2 / a0, a1: a1 / a0, a2: a2 / a0, x1: 0, x2: 0, y1: 0, y2: 0, energy: 0 };
  });
  for (let i = 0; i < samples.length; i++) {
    const x = samples[i];
    for (const band of state) {
      const y = band.b0 * x + band.b2 * band.x2 - band.a1 * band.y1 - band.a2 * band.y2;
      band.x2 = band.x1;
      band.x1 = x;
      band.y2 = band.y1;
      band.y1 = y;
      band.energy += y * y;
    }
  }
  const raw = state.map((band) => band.energy);
  const sum = raw.reduce((total, value) => total + value, 0) || 1;
  const bands = raw.map((value) => Math.round((value / sum) * 1000) / 10);
  return { bpm: Math.min(200, Math.max(70, bpm)), bands };
}

export function matchTrack(measure: Measure): Track {
  let best = tracks[0];
  let bestScore = Number.POSITIVE_INFINITY;
  for (const track of tracks) {
    const bpmScore = Math.abs(track.bpm - measure.bpm);
    const bandScore = bandDistance(track.bands, measure.bands);
    const score = bpmScore * 40 + bandScore;
    if (score < bestScore) {
      bestScore = score;
      best = track;
    }
  }
  return best;
}

function bandDistance(a: number[], b: number[]) {
  const left = normalize(a);
  const right = normalize(b);
  let sum = 0;
  for (let i = 0; i < left.length; i++) {
    const delta = left[i] - (right[i] ?? 0);
    sum += delta * delta;
  }
  return Math.sqrt(sum) * 100;
}

function normalize(values: number[]) {
  const sum = values.reduce((total, value) => total + value, 0) || 1;
  return values.map((value) => value / sum);
}

export function mono(buffer: AudioBuffer) {
  const out = new Float32Array(buffer.length);
  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const data = buffer.getChannelData(channel);
    for (let i = 0; i < data.length; i++) out[i] += data[i] / buffer.numberOfChannels;
  }
  return out;
}

export async function decodeFile(file: File) {
  const ctx = new AudioContext();
  try {
    const copy = (await file.arrayBuffer()).slice(0);
    return await ctx.decodeAudioData(copy);
  } finally {
    await ctx.close();
  }
}

export function captureMic(seconds: number, signal: AbortSignal) {
  return new Promise<AudioBuffer>((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException("aborted", "AbortError"));
      return;
    }
    void navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const ctx = new AudioContext();
        const source = ctx.createMediaStreamSource(stream);
        const processor = ctx.createScriptProcessor(4096, 1, 1);
        const mute = ctx.createGain();
        mute.gain.value = 0;
        const chunks: Float32Array[] = [];
        source.connect(processor);
        processor.connect(mute);
        mute.connect(ctx.destination);
        processor.onaudioprocess = (event) => {
          chunks.push(new Float32Array(event.inputBuffer.getChannelData(0)));
        };
        const stop = () => {
          processor.onaudioprocess = null;
          processor.disconnect();
          source.disconnect();
          stream.getTracks().forEach((track) => track.stop());
        };
        const timer = window.setTimeout(() => {
          stop();
          const length = chunks.reduce((total, chunk) => total + chunk.length, 0);
          const buffer = ctx.createBuffer(1, Math.max(1, length), ctx.sampleRate);
          const data = buffer.getChannelData(0);
          let offset = 0;
          for (const chunk of chunks) {
            data.set(chunk, offset);
            offset += chunk.length;
          }
          void ctx.close();
          resolve(buffer);
        }, seconds * 1000);
        signal.addEventListener(
          "abort",
          () => {
            window.clearTimeout(timer);
            stop();
            void ctx.close();
            reject(new DOMException("aborted", "AbortError"));
          },
          { once: true },
        );
      })
      .catch(reject);
  });
}

export function clipWavBase64(buffer: AudioBuffer, seconds = 12) {
  const rate = 16000;
  const src = mono(buffer);
  const used = Math.min(src.length, Math.floor(buffer.sampleRate * seconds));
  const length = Math.max(1, Math.floor((used * rate) / buffer.sampleRate));
  const pcm = new Int16Array(length);
  for (let i = 0; i < length; i++) {
    const sample = src[Math.min(used - 1, Math.floor((i * buffer.sampleRate) / rate))] ?? 0;
    const clamped = Math.max(-1, Math.min(1, sample));
    pcm[i] = clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff;
  }
  const bytes = new Uint8Array(44 + pcm.byteLength);
  const view = new DataView(bytes.buffer);
  bytes.set([82, 73, 70, 70], 0);
  view.setUint32(4, 36 + pcm.byteLength, true);
  bytes.set([87, 65, 86, 69, 102, 109, 116, 32], 8);
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, rate, true);
  view.setUint32(28, rate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  bytes.set([100, 97, 116, 97], 36);
  view.setUint32(40, pcm.byteLength, true);
  bytes.set(new Uint8Array(pcm.buffer), 44);
  let binary = "";
  for (let i = 0; i < bytes.length; i += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  }
  return btoa(binary);
}


