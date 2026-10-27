const GENRES = [
  { id: "techno", name: "Techno", line: "Kick dritto, loop che non si apre", range: "132–145" },
  { id: "hard", name: "Hard Techno", line: "Distorsione sul kick", range: "145–158" },
  { id: "industrial", name: "Industrial Techno", line: "Metallico, poco aria, macchine", range: "118–150" },
  { id: "deep", name: "Deep House", line: "Basso tondo, più spazio", range: "110–124" },
  { id: "techhouse", name: "Tech House", line: "Groove secco, percussioni in levare", range: "124–132" },
  { id: "groove", name: "Groove", line: "Basso che cammina, corpi in pista", range: "118–128" },
  { id: "hardcore", name: "Hardcore", line: "Kick distorto, oltre il techno", range: "160–200" },
  { id: "psy", name: "Psytrance", line: "Basso a spirale, frasi lunghe", range: "136–155" },
  { id: "acid", name: "Acid", line: "303, risonanza che sale", range: "120–145" },
  { id: "garage", name: "UK Garage", line: "Shuffle e vocal chop", range: "130–138" },
  { id: "breaks", name: "Breaks", line: "Batteria spezzata, non four-on-the-floor", range: "130–165" },
] as const;

export function Onboarding({
  onEnter,
  onListen,
  onSearch,
}: {
  onEnter: (genreId: string) => void;
  onListen: (genreId: string) => void;
  onSearch: (genreId: string) => void;
}) {
  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-bg px-5 py-8">
      <div className="mx-auto w-full max-w-lg border border-border bg-surface p-5">
        <p className="font-mono text-xs tracking-[0.2em] text-faint">INIZIO</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Da dove partiamo?</h2>
        <p className="mt-2 text-sm text-muted">Scegli i generi. I sottostili, tipo rumble o raw, li trovi dopo in Cerca.</p>
        <ul className="mt-5">
          {GENRES.map((genre, index) => (
            <li key={genre.id} className="onboard-row border-t border-border" style={{ animationDelay: `${index * 40}ms` }}>
              <button type="button" onClick={() => onEnter(genre.id)} className="flex min-h-16 w-full items-center gap-3 py-2 text-left">
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{genre.name}</span>
                  <span className="block text-sm text-muted">{genre.line}</span>
                </span>
                <span className="font-mono text-xs text-faint">{genre.range}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-5 grid gap-2">
          <button type="button" onClick={() => onEnter("techno")} className="min-h-11 bg-accent font-semibold text-accent-fg">
            Entra e scopri
          </button>
          <button type="button" onClick={() => onListen("techno")} className="min-h-11 border border-border font-semibold">
            Riconosci un brano
          </button>
          <button type="button" onClick={() => onSearch("techno")} className="min-h-11 border border-border font-semibold">
            Cerca su Deezer
          </button>
        </div>
      </div>
    </div>
  );
}
