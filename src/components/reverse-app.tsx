import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Airplay, Download, LayoutGrid, Mic, MoreHorizontal, Pause, Play, Plus, Repeat, Search, Share2, Shuffle, SkipBack, SkipForward, Star, Volume2 } from "lucide-react";
import { findOfficialPreview, findRelatedOnDeezer, recognizeSong, searchDeezer, type OfficialPreview } from "@/lib/listen";
import { captureMic, clipWavBase64, decodeFile, matchTrack, measurePcm, mono, type StemClip } from "@/lib/audio-lab";
import { separateDemucs } from "@/lib/demucs";
import { ListenOrb } from "@/components/listen-orb";
import { DetailsBoard } from "@/components/details-board";
import { Onboarding } from "@/components/onboarding";
import { PaywallPanel } from "@/components/paywall-panel";
import {
  TECHNO_FILTERS,
  abletonNotes,
  camelotCompatible,
  deepRelative,
  references,
  searchTracks,
  subOf,
  tracks,
  type Track,
} from "@/lib/music";

type View = "radar" | "search" | "add" | "analysis" | "relatives" | "board";

const GENRES = [
  { id: "tutti", name: "Tutti", line: "Tutto il catalogo", range: "70–200", min: 70, max: 200 },
  { id: "techno", name: "Techno", line: "Kick dritto, loop che non si apre", range: "132–145", min: 132, max: 145 },
  { id: "hard", name: "Hard Techno", line: "Distorsione sul kick", range: "145–158", min: 145, max: 158 },
  { id: "industrial", name: "Industrial Techno", line: "Metallico, poco aria, macchine", range: "118–150", min: 118, max: 150 },
  { id: "deep", name: "Deep House", line: "Basso tondo, più spazio", range: "110–124", min: 110, max: 124 },
  { id: "techhouse", name: "Tech House", line: "Groove secco, percussioni in levare", range: "124–132", min: 124, max: 132 },
  { id: "groove", name: "Groove", line: "Basso che cammina, corpi in pista", range: "118–128", min: 118, max: 128 },
  { id: "hardcore", name: "Hardcore", line: "Kick distorto, oltre il techno", range: "160–200", min: 160, max: 200 },
  { id: "psy", name: "Psytrance", line: "Basso a spirale, frasi lunghe", range: "136–155", min: 136, max: 155 },
  { id: "acid", name: "Acid", line: "303, risonanza che sale", range: "120–145", min: 120, max: 145 },
  { id: "garage", name: "UK Garage", line: "Shuffle e vocal chop", range: "130–138", min: 130, max: 138 },
  { id: "breaks", name: "Breaks", line: "Batteria spezzata, non four-on-the-floor", range: "130–165", min: 130, max: 165 },
] as const;

const GENRE_QUERY: Record<(typeof GENRES)[number]["id"], string> = {
  tutti: "techno",
  techno: "techno",
  hard: "hard techno",
  industrial: "industrial techno",
  deep: "deep house",
  techhouse: "tech house",
  groove: "funky house",
  hardcore: "hardcore",
  psy: "psytrance",
  acid: "acid techno",
  garage: "uk garage",
  breaks: "breakbeat",
};

const KEYS = ["Tutte", "1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B", "5A", "5B", "6A", "6B", "7A", "7B", "8A", "8B", "9A", "9B", "10A", "10B", "11A", "11B", "12A", "12B"];

type Now = OfficialPreview & { id: string; state: "loading" | "playing" | "paused" | "missing" };

export function RelativeApp() {
  const refs = useMemo(() => references(), []);
  const [view, setView] = useState<View>("radar");
  const [active, setActive] = useState<Track>(refs[0] ?? tracks[0]);
  const [query, setQuery] = useState("");
  const [bpmRange, setBpmRange] = useState(3);
  const [camOn, setCamOn] = useState(true);
  const [sub, setSub] = useState<string | null>(null);
  const [report, setReport] = useState<{
    status: "idle" | "running" | "done" | "error";
    step: number;
    error?: string;
    note?: string;
    bpm?: number;
    bands?: number[];
    stems: StemClip[];
  }>({ status: "idle", step: 0, stems: [] });
  const [deezer, setDeezer] = useState<OfficialPreview[]>([]);
  const [cards, setCards] = useState<OfficialPreview[]>([]);
  const [heard, setHeard] = useState<{ status: "idle" | "search" | "found" | "miss"; bpm?: number; bands?: number[]; hit?: OfficialPreview | null; note?: string }>({ status: "idle" });
  const [listenError, setListenError] = useState<string | null>(null);
  const [sheet, setSheet] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [loved, setLoved] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [sourceLabel, setSourceLabel] = useState("Ascolto live");
  const [link, setLink] = useState("");
  const [linkErr, setLinkErr] = useState<string | null>(null);
  const [now, setNow] = useState<Now | null>(null);
  const [phase, setPhase] = useState<"idle" | "listen" | "paused">("idle");
  const [seen, setSeen] = useState(false);
  const [paywall, setPaywall] = useState(false);
  const [left, setLeft] = useState(5);
  const [genre, setGenre] = useState<(typeof GENRES)[number]["id"]>("tutti");
  const [bpmMin, setBpmMin] = useState(70);
  const [bpmMax, setBpmMax] = useState(200);
  const [keyFilter, setKeyFilter] = useState("Tutte");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const stemRef = useRef<HTMLAudioElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const listenAbort = useRef<AbortController | null>(null);

  useEffect(() => {
    if (window.localStorage.getItem("relative.onboarded") === "1") setSeen(true);
  }, []);

  useEffect(() => {
    if (!seen) return;
    if (window.localStorage.getItem("relative.pro") === "1") return;
    if (window.localStorage.getItem("relative.paywall.dismissed") === "1") return;
    setPaywall(true);
  }, [seen]);

  useEffect(() => {
    let live = true;
    const q = query.trim() || GENRE_QUERY[genre];
    const timer = window.setTimeout(() => {
      void searchDeezer({ data: { q } })
        .then((hits) => {
          if (live) setCards(hits);
        })
        .catch(() => {
          if (live) setCards([]);
        });
    }, 250);
    return () => {
      live = false;
      window.clearTimeout(timer);
    };
  }, [genre, query]);

  function finishOnboarding(genreId: string, next: View) {
    window.localStorage.setItem("relative.onboarded", "1");
    const pickedGenre = GENRES.find((item) => item.id === genreId);
    if (pickedGenre) {
      setGenre(pickedGenre.id);
      setBpmMin(pickedGenre.min);
      setBpmMax(pickedGenre.max);
    }
    setSeen(true);
    setView(next);
  }

  const relatives = useMemo(
    () => deepRelative(active, { bpmRange, camCompatible: camOn, sub, limit: 36 }),
    [active, bpmRange, camOn, sub],
  );
  const relativeGroups = useMemo(() => {
    const groups = new Map<string, Track[]>();
    for (const track of relatives) {
      const name = subOf(track).short;
      groups.set(name, [...(groups.get(name) ?? []), track]);
    }
    return [...groups.entries()];
  }, [relatives]);
  const found = useMemo(() => searchTracks(query), [query]);

  const shelf = useMemo(() => {
    return tracks
      .filter((t) => t.bpm >= bpmMin && t.bpm <= bpmMax)
      .filter((t) => (keyFilter === "Tutte" ? true : t.cam === keyFilter))
      .slice(0, 6);
  }, [bpmMin, bpmMax, keyFilter]);

  async function runOnBuffer(label: string, buffer: AudioBuffer) {
    setReport((current) => {
      current.stems.forEach((stem) => URL.revokeObjectURL(stem.url));
      return { status: "running", step: 0, stems: [] };
    });
    setSourceLabel(label);
    setDeezer([]);
    setView("analysis");
    const measured = measurePcm(mono(buffer), buffer.sampleRate);
    const match = matchTrack(measured);
    setActive(match);
    setBpmMin(Math.max(70, Math.round(match.bpm) - 3));
    setBpmMax(Math.min(200, Math.round(match.bpm) + 3));
    setReport({ status: "running", step: 2, stems: [], bpm: measured.bpm, bands: measured.bands, note: "Demucs" });
    let stems: StemClip[];
    try {
      stems = await separateDemucs(buffer, (note) => {
        setReport({ status: "running", step: 2, stems: [], bpm: measured.bpm, bands: measured.bands, note });
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Demucs non è riuscito a separare.";
      setReport({ status: "error", step: 2, stems: [], bpm: measured.bpm, bands: measured.bands, error: message });
      return;
    }
    setReport({ status: "running", step: 3, stems, bpm: measured.bpm, bands: measured.bands });
    try {
      setDeezer(await findRelatedOnDeezer({ data: { artist: match.artist } }));
    } catch {
      setDeezer([]);
    }
    setReport({ status: "done", step: 4, stems, bpm: measured.bpm, bands: measured.bands });
  }

  async function beginListen() {
    if (phase === "listen") {
      listenAbort.current?.abort();
      setPhase("idle");
      return;
    }
    const ac = new AbortController();
    listenAbort.current = ac;
    setListenError(null);
    setHeard({ status: "idle" });
    setLeft(5);
    setPhase("listen");
    const tick = window.setInterval(() => setLeft((value) => Math.max(0, value - 1)), 1000);
    try {
      const buffer = await captureMic(5, ac.signal);
      window.clearInterval(tick);
      setPhase("idle");
      await identify(buffer);
    } catch (error) {
      window.clearInterval(tick);
      setPhase("idle");
      if (error instanceof DOMException && error.name === "AbortError") return;
      setListenError("Microfono non disponibile. Consenti l’accesso e tocca di nuovo, senza cambiare pagina.");
    }
  }

  async function identify(buffer: AudioBuffer) {
    setHeard({ status: "search" });
    const measured = measurePcm(mono(buffer), buffer.sampleRate);
    try {
      const song = await recognizeSong({ data: { wav: clipWavBase64(buffer) } });
      if (!song) {
        setHeard({
          status: "miss",
          bpm: measured.bpm,
          bands: measured.bands,
          note: "Nessun brano riconosciuto. Lo spettro dell’ascolto è qui sotto.",
        });
        return;
      }
      const official = await findOfficialPreview({ data: { artist: song.artist, title: song.title } });
      const related = await searchDeezer({ data: { q: song.artist } });
      const hit = official ?? {
        source: "apple" as const,
        title: song.title,
        artist: song.artist,
        previewUrl: related.find((item) => item.title.toLowerCase() === song.title.toLowerCase())?.previewUrl ?? "",
        link: song.link,
        cover: song.cover,
      };
      if (!hit.cover) hit.cover = song.cover;
      if (!hit.link) hit.link = song.link;
      if (related.length) setCards(related);
      setHeard({ status: hit.title ? "found" : "miss", hit, bpm: measured.bpm, bands: measured.bands, note: "Spettro misurato sull’ascolto" });
    } catch {
      setHeard({ status: "miss", bpm: measured.bpm, bands: measured.bands, note: "Il riconoscimento non ha risposto. Lo spettro resta valido." });
    }
  }

  async function playHit(hit: OfficialPreview) {
    const audio = audioRef.current;
    if (!audio || !hit.previewUrl) {
      if (hit.link) window.open(hit.link, "_blank", "noopener,noreferrer");
      return;
    }
    const id = hit.previewUrl;
    if (now?.id === id) {
      if (now.state === "playing") {
        audio.pause();
        setNow({ ...now, state: "paused" });
      } else {
        await audio.play();
        setNow({ ...now, state: "playing" });
      }
      return;
    }
    audio.src = hit.previewUrl;
    setNow({ ...hit, id, state: "paused" });
    try {
      await audio.play();
      setNow({ ...hit, id, state: "playing" });
    } catch {
      setNow({ ...hit, id, state: "paused" });
    }
  }

  function openRelatives(t: Track) {
    setActive(t);
    setView("relatives");
  }

  async function onAudioFile(file: File) {
    setView("radar");
    setListenError(null);
    setHeard({ status: "search" });
    try {
      await identify(await decodeFile(file));
    } catch {
      setHeard({ status: "miss", note: "File audio non leggibile." });
    }
  }

  function analyzeLink() {
    const ok = /^https?:\/\/(www\.)?(instagram\.com|soundcloud\.com|youtube\.com|youtu\.be|[a-z0-9-]+\.bandcamp\.com|beatport\.com)\//i.test(
      link.trim(),
    );
    if (!ok) {
      setLinkErr("Usa Instagram, SoundCloud, YouTube, Bandcamp o Beatport.");
      return;
    }
    setLinkErr("Da un link non posso scaricare l'audio. Carica il file o usa il microfono.");
  }

  function playStem(url: string) {
    const audio = stemRef.current;
    if (!audio) return;
    audio.src = url;
    void audio.play();
  }

  async function togglePreview(t: Track) {
    const audio = audioRef.current;
    if (!audio) return;
    if (now?.id === t.id && now.previewUrl) {
      if (now.state === "playing") {
        audio.pause();
        setNow({ ...now, state: "paused" });
      } else {
        await audio.play();
        setNow({ ...now, state: "playing" });
      }
      return;
    }
    setNow({
      id: t.id,
      source: "deezer",
      title: t.title,
      artist: t.artist,
      previewUrl: "",
      link: "",
      state: "loading",
    });
    try {
      const hit = await findOfficialPreview({ data: { artist: t.artist, title: t.title } });
      if (!hit) {
        setNow({
          id: t.id,
          source: "deezer",
          title: t.title,
          artist: t.artist,
          previewUrl: "",
          link: "",
          state: "missing",
        });
        return;
      }
      if (hit.embed) {
        audio.pause();
        setNow({ ...hit, id: t.id, state: "playing" });
        setSheet(true);
        return;
      }
      audio.src = hit.previewUrl;
      setNow({ ...hit, id: t.id, state: "paused" });
      try {
        await audio.play();
        setNow({ ...hit, id: t.id, state: "playing" });
      } catch {
        setNow({ ...hit, id: t.id, state: "paused" });
      }
    } catch {
      setNow({
        id: t.id,
        source: "deezer",
        title: t.title,
        artist: t.artist,
        previewUrl: "",
        link: "",
        state: "missing",
      });
    }
  }

  async function exportAbleton() {
    const text = abletonNotes(active, relatives);
    const file = new File([text], `${active.title.replace(/\s+/g, "_")}_ableton.txt`, { type: "text/plain" });
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: "Export Ableton", text });
      return;
    }
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-bg text-fg lg:pr-20">
      <div className="flex min-w-0 flex-1 flex-col">
        {view !== "radar" && (
          <header className="flex items-center justify-between px-5 pt-6 pb-3">
            <h1 className="font-display text-2xl">
              {view === "relatives" ? "Relative" : view === "analysis" ? "Analisi" : view === "add" ? "Studio" : view === "board" ? "Dettagli" : "Cerca"}
            </h1>
            <p className="font-mono text-xs text-muted">{tracks.length} tracce</p>
          </header>
        )}

        <main className={`flex-1 px-5 pb-36 ${view === "radar" ? "mx-auto w-full max-w-6xl pt-6" : "mx-auto w-full max-w-3xl space-y-4"}`}>
          {view === "radar" && (
            <>
              <div className="mb-6 flex items-center gap-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cerca artista, label o titolo"
                  className="h-11 min-w-0 flex-1 rounded-full border border-border bg-surface px-4 text-sm outline-none placeholder:text-faint"
                />
                <button type="button" onClick={() => fileRef.current?.click()} className="h-11 shrink-0 rounded-full border border-border px-4 text-sm">
                  Carica file
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="audio/*"
                  className="sr-only"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    onAudioFile(file);
                  }}
                />
              </div>

              <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">
              <div className="flex flex-col items-center text-center lg:sticky lg:top-8">
                <button
                  type="button"
                  aria-label="Ascolta"
                  onClick={() => void beginListen()}
                  className="relative grid size-72 place-items-center sm:size-80"
                >
                  <ListenOrb live={phase === "listen"} drive={phase === "listen" ? (6 - left) / 5 : 0} className="absolute inset-0" />
                  <Mic className="pointer-events-none relative size-12 text-white/85" />
                </button>
                <h1 className="mt-6 font-display text-3xl">
                  {phase === "listen" ? "In ascolto" : phase === "paused" ? "In pausa" : "Ascolta"}
                </h1>
                <p className="mt-2 max-w-xs text-sm text-muted">
                  {phase === "listen"
                    ? `Sto ascoltando. ${left}s. Tocca per fermare.`
                    : heard.status === "search"
                      ? "Sto riconoscendo il brano."
                      : "Tocca il cerchio. Ascolta e resta qui."}
                </p>
                {listenError && <p className="mt-3 max-w-xs text-sm text-accent">{listenError}</p>}
                {heard.hit && (
                  <button type="button" onClick={() => void playHit(heard.hit as OfficialPreview)} className="mt-6 flex w-full max-w-sm items-center gap-3 rounded-md border border-border bg-surface p-3 text-left">
                    {heard.hit.cover ? (
                      <img src={heard.hit.cover} alt="" className="size-16 rounded-md object-cover" />
                    ) : (
                      <span className="grid size-16 place-items-center rounded-md bg-raised text-xs text-faint">Deezer</span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-semibold">{heard.hit.title}</span>
                      <span className="block truncate text-sm text-muted">{heard.hit.artist}</span>
                      <span className="mt-1 block font-mono text-xs text-faint">{heard.bpm ? `${Math.round(heard.bpm)} BPM · ` : ""}{heard.note}</span>
                    </span>
                    {now?.id === heard.hit.previewUrl && now.state === "playing" ? <Pause className="size-5 text-accent" /> : <Play className="size-5 text-accent" />}
                  </button>
                )}
                {heard.status === "miss" && <p className="mt-4 max-w-xs text-sm text-muted">{heard.note}{heard.bpm ? ` · ${Math.round(heard.bpm)} BPM` : ""}</p>}
                <button type="button" onClick={() => fileRef.current?.click()} className="mt-6 min-h-11 rounded-full border border-border px-5 text-sm">
                  Carica un file
                </button>
              </div>

              <div>
                {heard.bands && (
                  <TechPanel
                    title={heard.hit?.title ?? "Ascolto"}
                    artist={heard.hit?.artist ?? "Microfono"}
                    bpm={Math.round(heard.bpm ?? 0)}
                    cam="live"
                    keyName={null}
                    sub={heard.note ?? "Spettro misurato"}
                    low={null}
                    bands={heard.bands}
                  />
                )}

              <section>
                <h2 className="font-display text-xl">Genere</h2>
                <p className="mt-1 text-sm text-muted">Scegli prima il genere. I brani sotto seguono quella fascia.</p>
                <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                  {GENRES.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => {
                        setGenre(g.id);
                        setBpmMin(g.min);
                        setBpmMax(g.max);
                      }}
                      className={`min-h-11 shrink-0 rounded-full px-4 text-sm ${genre === g.id ? "bg-fg text-bg" : "bg-raised text-muted"}`}
                    >
                      {g.name}
                    </button>
                  ))}
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {GENRES.filter((g) => g.id !== "tutti").map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => {
                        setGenre(g.id);
                        setBpmMin(g.min);
                        setBpmMax(g.max);
                      }}
                      className={`min-h-16 rounded-md border px-3 py-3 text-left ${genre === g.id ? "border-accent" : "border-border"}`}
                    >
                      <span className="block text-sm font-medium">{g.name}</span>
                      <span className="mt-1 block text-xs text-muted">{g.line}</span>
                      <span className="mt-1 block font-mono text-xs text-faint">{g.range}</span>
                    </button>
                  ))}
                </div>
              </section>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <label className="text-xs text-muted">
                  BPM da
                  <input
                    type="number"
                    min={70}
                    max={200}
                    value={bpmMin}
                    onChange={(e) => setBpmMin(Number(e.target.value) || 70)}
                    className="mt-1 h-11 w-full rounded-md border border-border bg-surface px-3 font-mono text-sm text-fg"
                  />
                </label>
                <label className="text-xs text-muted">
                  BPM a
                  <input
                    type="number"
                    min={70}
                    max={200}
                    value={bpmMax}
                    onChange={(e) => setBpmMax(Number(e.target.value) || 200)}
                    className="mt-1 h-11 w-full rounded-md border border-border bg-surface px-3 font-mono text-sm text-fg"
                  />
                </label>
                <label className="text-xs text-muted">
                  Tonalità
                  <select
                    value={keyFilter}
                    onChange={(e) => setKeyFilter(e.target.value)}
                    className="mt-1 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg"
                  >
                    {KEYS.map((k) => (
                      <option key={k}>{k}</option>
                    ))}
                  </select>
                </label>
                <label className="text-xs text-muted">
                  Match
                  <select disabled={keyFilter === "Tutte"} className="mt-1 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg disabled:opacity-50" defaultValue="Compatibili">
                    <option>Compatibili</option>
                    <option>Stessa key</option>
                  </select>
                </label>
              </div>

              <div className="mt-8 space-y-3">
                <h2 className="font-display text-xl">Analisi</h2>
                <p className="text-sm text-muted">Strumenti letti dalle otto bande di ogni traccia nel genere scelto.</p>
                {shelf.map((track) => (
                  <TechPanel
                    key={track.id}
                    title={track.title}
                    artist={track.artist}
                    bpm={track.bpm}
                    cam={track.cam}
                    keyName={track.key}
                    sub={subOf(track).short}
                    low={track.lowpeak}
                    bands={track.bands}
                    onPlay={() => void togglePreview(track)}
                    playing={now?.id === track.id && now.state === "playing"}
                  />
                ))}
                {shelf.length === 0 && <p className="text-sm text-muted">Nessuna traccia in questa fascia. Allarga il BPM.</p>}
              </div>
              </div>
              </div>
            </>
          )}

        {view === "search" && (
          <>
            <div className="mb-2 flex items-center gap-3">
              <span className="glass-bar grid size-11 place-items-center rounded-full text-muted">
                <Shuffle className="size-4" />
              </span>
              <button
                type="button"
                onClick={() => {
                  const first = (query ? found : refs)[0];
                  if (first) void togglePreview(first);
                  setSheet(true);
                }}
                className="flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-semibold text-bg"
              >
                <Play className="size-4 fill-current" /> Play
              </button>
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Artista, label, 140, 11A…"
              className="h-12 w-full rounded-md border border-border bg-raised px-3 font-mono text-sm text-fg outline-none placeholder:text-faint"
            />
            {(query ? found : refs).map((t, i) => (
              <TrackLine key={t.id} t={t} rank={i + 1} playing={now?.id === t.id && now.state === "playing"} onOpen={() => openRelatives(t)} onPlay={() => void togglePreview(t)} />
            ))}
            {query && found.length === 0 && <p className="text-sm text-muted">Nessun risultato.</p>}
          </>
        )}

        {view === "add" && (
          <>
            <p className="text-sm leading-relaxed text-muted">
              In questa preview l’analisi audio è simulata. I relative e l’export Ableton usano le 165 tracce reali.
            </p>
            <div className="rounded-md border border-border bg-surface p-4">
              <label className="font-mono text-xs text-faint" htmlFor="link">
                Link
              </label>
              <input
                id="link"
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                  setLinkErr(null);
                }}
                placeholder="https://www.instagram.com/reel/…"
                className="mt-2 h-12 w-full rounded-md border border-border bg-raised px-3 font-mono text-sm outline-none placeholder:text-faint"
              />
              {linkErr && <p className="mt-2 text-sm text-accent">{linkErr}</p>}
              <button
                type="button"
                onClick={analyzeLink}
                className="mt-3 min-h-11 w-full rounded-md bg-accent font-semibold text-accent-fg"
              >
                Analizza
              </button>
            </div>
            <Action
              icon={<Mic className="size-5 text-accent" />}
              title="Ascolto live"
              sub="5 secondi, poi stems"
              onClick={() => void beginListen()}
            />
            <label className="flex min-h-16 cursor-pointer items-center gap-3 rounded-md border border-border bg-surface px-4">
              <Plus className="size-5 text-accent" />
              <span className="flex-1">
                <span className="block font-semibold">Carica file audio</span>
                <span className="text-sm text-muted">WAV, AIFF, MP3</span>
              </span>
              <input
                type="file"
                accept="audio/*"
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  onAudioFile(file);
                }}
              />
            </label>
          </>
        )}

        {view === "analysis" && (
          <>
            <div className="rounded-md border border-border bg-surface p-4">
              <p className="font-mono text-xs text-faint">{sourceLabel}</p>
              <p className="mt-1 text-xl font-semibold">{active.title}</p>
              <p className="text-sm text-muted">
                {active.artist}
                {report.bpm ? ` · misurato ${report.bpm} BPM` : ""}
              </p>
              <Dna bands={report.bands ?? active.bands} />
              {report.error && <p className="mt-3 text-sm text-accent">{report.error}</p>}
              {report.note && !report.error && <p className="mt-3 text-sm text-muted">{report.note}</p>}
            </div>
            {["Preparazione", "Riconoscimento", "Separazione stems", "DNA spettrale", "Relative"].map((label, i) => (
              <div key={label} className="flex min-h-11 items-center gap-3">
                <span
                  className={`grid size-6 place-items-center rounded-full font-mono text-xs ${i < report.step ? "bg-ok text-accent-fg" : i === report.step ? "bg-accent text-accent-fg" : "bg-raised text-faint"}`}
                >
                  {i + 1}
                </span>
                <span className={i <= report.step ? "text-fg" : "text-faint"}>{label}</span>
              </div>
            ))}
            {report.stems.length > 0 && (
              <div className="rounded-md border border-border bg-surface p-4">
                <p className="mb-2 font-semibold">Stems</p>
                <ul className="space-y-2">
                  {report.stems.map((stem) => (
                    <li key={stem.name} className="flex items-center justify-between gap-3 text-sm">
                      <span>{stem.name}</span>
                      <span className="flex gap-2">
                        <button type="button" onClick={() => void playStem(stem.url)} className="min-h-11 font-semibold text-accent">
                          Ascolta
                        </button>
                        <a href={stem.url} download={`${stem.name}.wav`} className="inline-flex min-h-11 items-center font-semibold text-fg">
                          WAV
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-faint">HTDemucs: batteria, basso, altro e voce, sui primi 7,8 secondi.</p>
              </div>
            )}
            {report.status === "done" && (
              <button
                type="button"
                onClick={() => setView("relatives")}
                className="min-h-11 w-full rounded-md bg-accent font-semibold text-accent-fg"
              >
                Vedi i relative di {active.title}
              </button>
            )}
          </>
        )}

        {view === "board" && <DetailsBoard />}
        {view === "relatives" && (
          <>
            <div className="rounded-md border border-border bg-surface p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-lg font-semibold">{active.title}</p>
                  <p className="truncate text-sm text-muted">
                    {active.artist} · {active.label}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Pill>{active.bpm}</Pill>
                  <Pill>{active.cam}</Pill>
                </div>
              </div>
              <Dna bands={active.bands} />
              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="text-xs text-accent">{subOf(active).short}</span>
                <button
                  type="button"
                  onClick={() => void exportAbleton()}
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-3 text-sm font-semibold"
                >
                  <Share2 className="size-4" />
                  Export Ableton
                </button>
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {TECHNO_FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSub(f.id === "all" ? null : f.id)}
                  className={`min-h-11 shrink-0 rounded-full px-4 text-sm ${sub === f.id || (f.id === "all" && !sub) ? "bg-accent text-accent-fg" : "bg-raised text-muted"}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setBpmRange((v) => (v === 1 ? 3 : v === 3 ? 5 : 1))}
                className="min-h-11 rounded-full bg-raised px-4 text-sm"
              >
                BPM ±{bpmRange}
              </button>
              <button
                type="button"
                onClick={() => setCamOn((v) => !v)}
                className={`min-h-11 rounded-full px-4 text-sm ${camOn ? "bg-accent text-accent-fg" : "bg-raised text-muted"}`}
              >
                {camOn ? "Camelot compatibile" : "Solo stessa key"}
              </button>
            </div>
            <p className="font-mono text-xs text-faint">
              {relatives.length} relative · keys {camelotCompatible(active.cam).join(" ")}
            </p>
            {deezer.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-sm text-muted">Stesso artista su Deezer</h2>
                {deezer.map((hit) => (
                  <div key={hit.link} className="flex min-h-16 items-center gap-3 rounded-md border border-border bg-surface px-3">
                    <button
                      type="button"
                      onClick={() => {
                        const audio = audioRef.current;
                        if (!audio) return;
                        audio.src = hit.previewUrl;
                        void audio.play();
                        setNow({ ...hit, id: hit.link, state: "playing" });
                      }}
                      className="grid size-11 shrink-0 place-items-center rounded-full bg-raised text-accent"
                    >
                      <Play className="size-4" />
                    </button>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">{hit.title}</p>
                      <p className="truncate text-sm text-muted">{hit.artist}</p>
                    </div>
                    <a href={hit.link} target="_blank" rel="noreferrer" className="text-xs font-semibold text-accent">
                      Apri
                    </a>
                  </div>
                ))}
              </div>
            )}
            {relatives.length === 0 && <p className="text-sm text-muted">Nessun relative con questi filtri. Allarga il BPM.</p>}
            {relativeGroups.map(([name, group]) => (
              <section key={name} className="space-y-2">
                <h2 className="text-sm text-muted">
                  {name} · {group.length}
                </h2>
                {group.map((t, i) => (
                  <TrackLine key={t.id} t={t} rank={i + 1} playing={now?.id === t.id && now.state === "playing"} onOpen={() => openRelatives(t)} onPlay={() => void togglePreview(t)} />
                ))}
              </section>
            ))}
          </>
        )}
      </main>

      <audio
        ref={audioRef}
        preload="none"
        onTimeUpdate={() => setElapsed(audioRef.current?.currentTime ?? 0)}
        onEnded={() => setNow((cur) => (cur ? { ...cur, state: "paused" } : cur))}
      />
      <audio ref={stemRef} preload="none" />
      {now && (
        <div className="glass-bar fixed inset-x-3 bottom-20 z-20 mx-auto flex max-w-3xl items-center gap-3 rounded-full px-3 py-2 lg:right-24 lg:bottom-6 lg:left-6">
          <button
            type="button"
            aria-label={now.state === "playing" ? "Pausa" : "Play"}
            onClick={() => {
              if (now.previewUrl) void playHit(now);
            }}
            className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-accent-fg"
          >
            {now.state === "playing" ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>
          {now.cover ? <img src={now.cover} alt="" className="size-9 rounded-md object-cover" /> : null}
          <button type="button" onClick={() => setSheet(true)} className="min-w-0 flex-1 text-left">
            <p className="truncate text-sm font-semibold">{now.title}</p>
            <p className="truncate text-xs text-muted">
              {now.state === "loading"
                ? "Cerco su Deezer…"
                : now.state === "missing"
                  ? "Nessuna anteprima ufficiale"
                  : `${now.artist} · ${now.source === "deezer" ? "Deezer" : "Apple Music"} · 30s`}
            </p>
          </button>
          {now.link ? (
            <a href={now.link} target="_blank" rel="noreferrer" className="shrink-0 px-2 text-xs font-semibold text-accent">
              Apri
            </a>
          ) : null}
        </div>
      )}

      {sheet && now && (
        <NowPlaying
          now={now}
          elapsed={elapsed}
          loved={loved}
          volume={volume}
          onClose={() => setSheet(false)}
          onLove={() => setLoved((value) => !value)}
          onToggle={() => {
            if (now.previewUrl) void playHit(now);
          }}
          onSeek={(value) => {
            const audio = audioRef.current;
            if (!audio) return;
            audio.currentTime = value;
            setElapsed(value);
          }}
          onVolume={(value) => {
            setVolume(value);
            if (audioRef.current) audioRef.current.volume = value;
          }}
        />
      )}

      <nav className="glass-rail fixed top-4 right-3 bottom-4 z-30 hidden w-14 flex-col items-center justify-between rounded-full py-3 lg:flex">
        <div className="flex flex-col gap-1">
          <Rail icon={<Mic className="size-5" />} label="Ascolta" on={view === "radar"} onClick={() => setView("radar")} />
          <Rail icon={<Search className="size-5" />} label="Cerca" on={view === "search"} onClick={() => setView("search")} />
          <Rail icon={<Download className="size-5" />} label="Relative" on={view === "relatives"} onClick={() => setView("relatives")} />
        </div>
        <div className="flex flex-col gap-1">
          <Rail icon={<Plus className="size-5" />} label="Studio" on={view === "add" || view === "analysis"} onClick={() => setView("add")} />
          <Rail icon={<LayoutGrid className="size-5" />} label="Dettagli" on={view === "board"} onClick={() => setView("board")} />
        </div>
      </nav>

      <nav className="fixed inset-x-0 bottom-0 flex border-t border-border bg-surface lg:hidden">
        <Nav icon={<Mic className="size-5" />} label="Ascolta" on={view === "radar"} onClick={() => setView("radar")} />
        <Nav icon={<Search className="size-5" />} label="Cerca" on={view === "search"} onClick={() => setView("search")} />
        <Nav icon={<Plus className="size-5" />} label="Aggiungi" on={view === "add" || view === "analysis"} onClick={() => setView("add")} />
        <Nav icon={<Download className="size-5" />} label="Relative" on={view === "relatives"} onClick={() => setView("relatives")} />
        <Nav icon={<LayoutGrid className="size-5" />} label="Board" on={view === "board"} onClick={() => setView("board")} />
      </nav>
      {paywall && (
        <PaywallPanel
          onClose={() => {
            window.localStorage.setItem("relative.paywall.dismissed", "1");
            setPaywall(false);
          }}
          onUnlocked={() => {
            window.localStorage.setItem("relative.pro", "1");
            setPaywall(false);
          }}
        />
      )}
      {seen === false && (
        <Onboarding
          onEnter={(genreId) => finishOnboarding(genreId, "radar")}
          onListen={(genreId) => finishOnboarding(genreId, "radar")}
          onSearch={(genreId) => finishOnboarding(genreId, "search")}
        />
      )}
      </div>
    </div>
  );
}

function clock(seconds: number) {
  const value = Math.max(0, Math.floor(seconds));
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, "0")}`;
}

function NowPlaying({
  now,
  elapsed,
  loved,
  volume,
  onClose,
  onLove,
  onToggle,
  onSeek,
  onVolume,
}: {
  now: Now;
  elapsed: number;
  loved: boolean;
  volume: number;
  onClose: () => void;
  onLove: () => void;
  onToggle: () => void;
  onSeek: (value: number) => void;
  onVolume: (value: number) => void;
}) {
  const duration = 30;
  const known =
    tracks.find((track) => track.id === now.id) ??
    tracks.find((track) => track.title.toLowerCase() === now.title.toLowerCase() && track.artist.toLowerCase() === now.artist.toLowerCase()) ??
    null;
  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-bg text-fg">
      <button type="button" aria-label="Chiudi" onClick={onClose} className="mx-auto mt-3 block h-1.5 w-9 rounded-full bg-raised" />
      <div className="mx-auto grid max-w-6xl gap-8 px-6 pt-6 pb-16 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden bg-blob">
            {now.embed ? (
              <iframe
                title={`${now.title} su Apple Music`}
                src={now.embed}
                height={450}
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                className="w-full border-0"
              />
            ) : now.cover ? (
              <img src={now.cover} alt="" className="aspect-square w-full object-cover" />
            ) : (
              <div className="aspect-square w-full bg-raised" />
            )}
          </div>
          <div className="mt-4 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-lg font-semibold">{now.title}</p>
              <p className="truncate text-muted">{now.artist}</p>
            </div>
            <div className="flex gap-1">
              <button type="button" aria-label="Preferito" onClick={onLove} className="grid size-11 place-items-center rounded-full">
                <Star className={`size-5 ${loved ? "fill-accent text-accent" : "text-muted"}`} />
              </button>
              <a href={now.link || undefined} target="_blank" rel="noreferrer" aria-label="Altro" className="grid size-11 place-items-center rounded-full text-muted">
                <MoreHorizontal className="size-5" />
              </a>
            </div>
          </div>
          {!now.embed && (
            <>
          <input
            aria-label="Posizione"
            type="range"
            min={0}
            max={duration}
            step={0.1}
            value={Math.min(duration, elapsed)}
            onChange={(event) => onSeek(Number(event.target.value))}
            className="mt-4 w-full accent-fg"
          />
          <div className="flex justify-between font-mono text-xs text-faint">
            <span>{clock(elapsed)}</span>
            <span>-{clock(duration - elapsed)}</span>
          </div>
          <div className="mt-4 flex items-center justify-between px-2">
            <Shuffle className="size-4 text-faint" />
            <button type="button" aria-label="Indietro" onClick={() => onSeek(0)} className="grid size-11 place-items-center">
              <SkipBack className="size-6" />
            </button>
            <button type="button" aria-label={now.state === "playing" ? "Pausa" : "Play"} onClick={onToggle} className="grid size-16 place-items-center rounded-full bg-fg text-bg">
              {now.state === "playing" ? <Pause className="size-7" /> : <Play className="size-7 fill-current" />}
            </button>
            <SkipForward className="size-6 text-fg" />
            <Repeat className="size-4 text-faint" />
          </div>
          <div className="mt-6 flex items-center gap-3 text-muted">
            <Volume2 className="size-4" />
            <input aria-label="Volume" type="range" min={0} max={1} step={0.01} value={volume} onChange={(event) => onVolume(Number(event.target.value))} className="w-full accent-fg" />
            <Airplay className="size-4" />
          </div>
            </>
          )}
        </div>
        <div className="flex flex-col">
          {known ? (
            <TechPanel
              title={known.title}
              artist={known.artist}
              bpm={known.bpm}
              cam={known.cam}
              keyName={known.key}
              sub={subOf(known).short}
              low={known.lowpeak}
              bands={known.bands}
            />
          ) : (
            <p className="text-sm text-muted">Questa anteprima non è nel catalogo analizzato. Nessuno spettro da mostrare.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Rail({ icon, label, on, onClick }: { icon: ReactNode; label: string; on: boolean; onClick: () => void }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className={`grid size-11 place-items-center rounded-full ${on ? "bg-accent text-accent-fg" : "text-muted"}`}>
      {icon}
    </button>
  );
}

function Nav({ icon, label, on, onClick }: { icon: ReactNode; label: string; on: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`flex min-h-16 flex-1 flex-col items-center justify-center gap-1 text-xs ${on ? "text-accent" : "text-faint"}`}>
      {icon}
      {label}
    </button>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-raised px-2 py-1 font-mono text-xs text-fg">{children}</span>;
}

function Dna({ bands }: { bands: number[] }) {
  const max = Math.max(...bands, 1);
  return (
    <div className="mt-3 flex h-10 items-end gap-1" aria-hidden="true">
      {bands.map((b, i) => (
        <span key={i} className="flex-1 rounded-sm bg-accent" style={{ height: `${Math.max(8, (b / max) * 100)}%`, opacity: 0.45 + (b / max) * 0.55 }} />
      ))}
    </div>
  );
}

const PARTS = [
  { name: "Sub", role: "sintetizzatore" },
  { name: "Kick", role: "cassa" },
  { name: "Basso", role: "basso" },
  { name: "Corpo", role: "tom e rumble" },
  { name: "Medio", role: "rullante" },
  { name: "Presenza", role: "ride" },
  { name: "Hat", role: "hi-hat" },
  { name: "Aria", role: "piatti" },
];

function TechPanel({
  title,
  artist,
  bpm,
  cam,
  keyName,
  sub,
  low,
  bands,
  onPlay,
  playing,
}: {
  title: string;
  artist: string;
  bpm: number;
  cam: string;
  keyName: string | null;
  sub: string;
  low: number | null;
  bands: number[];
  onPlay?: () => void;
  playing?: boolean;
}) {
  const ranked = PARTS.map((part, index) => ({ ...part, level: bands[index] ?? 0 })).sort((a, b) => b.level - a.level);
  const lead = ranked.filter((part) => part.level >= 8).slice(0, 3);
  return (
    <article className="rounded-md border border-border bg-surface p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-semibold">{title}</p>
          <p className="truncate text-sm text-muted">{artist}</p>
        </div>
        {onPlay ? (
          <button type="button" aria-label={playing ? "Pausa" : "Play"} onClick={onPlay} className="grid size-11 shrink-0 place-items-center rounded-full bg-raised text-accent">
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-muted">
        In primo piano: {lead.length ? lead.map((part) => `${part.name} · ${part.role}`).join(", ") : "nessun picco netto"}
      </p>
      <div className="mt-3 space-y-1.5">
        {PARTS.map((part, index) => (
          <div key={part.name} className="grid grid-cols-[4.5rem_1fr_2.5rem] items-center gap-2">
            <span className="text-xs text-muted">{part.name}</span>
            <span className="h-1.5 overflow-hidden rounded-full bg-raised">
              <span className="block h-full bg-accent" style={{ width: `${Math.min(100, bands[index] ?? 0)}%` }} />
            </span>
            <span className="text-right font-mono text-xs text-faint">{Math.round(bands[index] ?? 0)}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-xs text-faint">
        {bpm || "—"} BPM · {cam} · {keyName ?? "key n/d"} · picco basso {low ?? "—"} Hz · {sub}
      </p>
    </article>
  );
}

function TrackCard({
  t,
  onOpen,
  onPlay,
  playing,
}: {
  t: Track;
  onOpen: () => void;
  onPlay: () => void;
  playing: boolean;
}) {
  return (
    <article className="w-40 shrink-0">
      <button type="button" onClick={onOpen} className="block w-full text-left">
        <span className="grid aspect-square place-items-end rounded-md bg-[linear-gradient(160deg,var(--color-accent),var(--color-blob))] p-3">
          <span className="font-mono text-xs text-fg">{t.cam}</span>
        </span>
        <span className="mt-2 block truncate text-sm font-semibold">{t.title}</span>
        <span className="block truncate text-xs text-muted">{t.artist}</span>
      </button>
      <button type="button" onClick={onPlay} className="mt-1 flex min-h-11 items-center gap-2 text-xs text-accent">
        {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
        {playing ? "Pausa" : "Ascolta"} · {t.bpm}
      </button>
    </article>
  );
}

function TrackLine({
  t,
  onOpen,
  onPlay,
  playing,
  rank,
}: {
  t: Track;
  onOpen: () => void;
  onPlay: () => void;
  playing: boolean;
  rank?: number;
}) {
  return (
    <div className="flex min-h-16 w-full items-center gap-2 rounded-md border border-border bg-surface px-2">
      <button
        type="button"
        aria-label={playing ? `Pausa ${t.title}` : `Ascolta ${t.title}`}
        onClick={onPlay}
        className="grid size-11 shrink-0 place-items-center rounded-full bg-raised text-accent"
      >
        {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
      </button>
      <button type="button" onClick={onOpen} className="flex min-w-0 flex-1 items-center gap-3 py-2 text-left">
        {rank != null && <span className="w-6 font-mono text-xs text-faint">{rank}</span>}
        <span className="min-w-0 flex-1">
          <span className="block truncate font-semibold">{t.title}</span>
          <span className="block truncate text-sm text-muted">
            {t.artist} · {subOf(t).short}
          </span>
        </span>
        <Pill>{t.bpm}</Pill>
        <Pill>{t.cam}</Pill>
      </button>
    </div>
  );
}

function Action({ icon, title, sub, onClick }: { icon: ReactNode; title: string; sub: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex min-h-16 w-full items-center gap-3 rounded-md border border-border bg-surface px-4 text-left">
      {icon}
      <span className="flex-1">
        <span className="block font-semibold">{title}</span>
        <span className="text-sm text-muted">{sub}</span>
      </span>
    </button>
  );
}
