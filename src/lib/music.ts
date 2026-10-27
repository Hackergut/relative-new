import catalog from "@/lib/catalog.json";

export type Track = {
  id: string;
  stato: string;
  date: string | null;
  ref: string;
  set: string;
  artist: string;
  title: string;
  label: string;
  bpm: number;
  key: string | null;
  cam: string;
  lowpeak: number | null;
  sim: number;
  sub: string;
  url: string | null;
  bands: number[];
};

export const tracks = catalog as Track[];

export const SUBSTYLE: Record<string, { key: string; short: string }> = {
  "Rumble ipnotico (sub continuo)": { key: "rumble-ipnotico", short: "Rumble ipnotico" },
  "Deep / scuro ipnotico": { key: "deep-scuro", short: "Deep / scuro" },
  "Ipnotico luminoso / percussivo": { key: "ipnotico-luminoso", short: "Ipnotico luminoso" },
  "Raw / driving (bilanciato)": { key: "raw-driving", short: "Raw / driving" },
};

export function subOf(t: Track) {
  return SUBSTYLE[t.sub] ?? { key: "industrial", short: "Industrial" };
}

export const references = () => tracks.filter((t) => t.set === "riferimento");

const CAMELOT_ADJ: Record<string, string[]> = {
  "1A": ["1A", "1B", "2A", "12A"],
  "1B": ["1B", "1A", "2B", "12B"],
  "2A": ["2A", "2B", "1A", "3A"],
  "2B": ["2B", "2A", "1B", "3B"],
  "3A": ["3A", "3B", "2A", "4A"],
  "3B": ["3B", "3A", "2B", "4B"],
  "4A": ["4A", "4B", "3A", "5A"],
  "4B": ["4B", "4A", "3B", "5B"],
  "5A": ["5A", "5B", "4A", "6A"],
  "5B": ["5B", "5A", "4B", "6B"],
  "6A": ["6A", "6B", "5A", "7A"],
  "6B": ["6B", "6A", "5B", "7B"],
  "7A": ["7A", "7B", "6A", "8A"],
  "7B": ["7B", "7A", "6B", "8B"],
  "8A": ["8A", "8B", "7A", "9A"],
  "8B": ["8B", "8A", "7B", "9B"],
  "9A": ["9A", "9B", "8A", "10A"],
  "9B": ["9B", "9A", "8B", "10B"],
  "10A": ["10A", "10B", "9A", "11A"],
  "10B": ["10B", "10A", "9B", "11B"],
  "11A": ["11A", "11B", "10A", "12A"],
  "11B": ["11B", "11A", "10B", "12B"],
  "12A": ["12A", "12B", "11A", "1A"],
  "12B": ["12B", "12A", "11B", "1B"],
};

export function camelotCompatible(cam: string) {
  return CAMELOT_ADJ[cam] ?? [cam];
}

export function deepRelative(
  refTrack: Track,
  q: { bpmRange?: number; camCompatible?: boolean; sub?: string | null; limit?: number } = {},
) {
  const bpmRange = q.bpmRange ?? 3;
  const camCompatible = q.camCompatible ?? true;
  const allowed = camCompatible ? camelotCompatible(refTrack.cam) : [refTrack.cam];
  return tracks
    .filter((t) => {
      if (t.id === refTrack.id) return false;
      if (Math.abs(t.bpm - refTrack.bpm) > bpmRange) return false;
      if (t.cam && !allowed.includes(t.cam)) return false;
      if (q.sub && subOf(t).key !== q.sub) return false;
      return true;
    })
    .sort((a, b) => {
      const subA = subOf(a).key === subOf(refTrack).key ? 0 : 1;
      const subB = subOf(b).key === subOf(refTrack).key ? 0 : 1;
      if (subA !== subB) return subA - subB;
      const bpmA = Math.abs(a.bpm - refTrack.bpm);
      const bpmB = Math.abs(b.bpm - refTrack.bpm);
      if (bpmA !== bpmB) return bpmA - bpmB;
      return (a.sim || 99) - (b.sim || 99);
    })
    .slice(0, q.limit ?? 40);
}

export function searchTracks(q: string) {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  const num = s.match(/\b(1[2-5]\d)\b/);
  const words = s.replace(/\b1[2-5]\d\b/, "").trim();
  return tracks
    .filter((t) => {
      const okBpm = num ? Math.abs(t.bpm - Number(num[1])) <= 1 : true;
      const hay = `${t.artist} ${t.title} ${t.label} ${t.cam} ${t.sub}`.toLowerCase();
      return okBpm && (!words || words.split(/\s+/).every((w) => hay.includes(w)));
    })
    .slice(0, 24);
}

export const TECHNO_FILTERS = [
  { id: "all", label: "Tutti" },
  { id: "rumble-ipnotico", label: "Rumble" },
  { id: "deep-scuro", label: "Deep" },
  { id: "ipnotico-luminoso", label: "Ipnotico" },
  { id: "raw-driving", label: "Raw" },
  { id: "industrial", label: "Industrial" },
];

export const STEMS = ["Vocals", "Drums", "Bass", "Piano", "Electric Guitar", "Acoustic Guitar", "Other"];

export function abletonNotes(track: Track, relatives: Track[]) {
  const cues = ["Intro@1", "Build@17", "Drop@33", "Break@49", "Outro@65"];
  return [
    `RELATIVE Ableton notes — ${track.artist} — ${track.title}`,
    `BPM ${track.bpm} | Key ${track.cam} (${track.key ?? "?"}) | ${subOf(track).short}`,
    `Low peak ${track.lowpeak ?? "—"} Hz`,
    "",
    "Workflow Ableton Live",
    "1. Importa gli stems (Vocals / Drums / Bass / Piano / Guitar / Other) su tracce separate.",
    `2. Tempo progetto: ${track.bpm}. Warp: Complex o Complex Pro.`,
    `3. Hot cues: ${cues.join(", ")}.`,
    "4. Export stems: WAV 24-bit, start 1.1.1, Normalize OFF, Rendered Track = All Individual Tracks.",
    "",
    "Relative per harmonic mixing",
    ...relatives.slice(0, 8).map((r) => `• ${r.artist} — ${r.title} (${r.bpm} BPM, ${r.cam}, ${subOf(r).short})`),
  ].join("\n");
}
