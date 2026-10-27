const BARS = [38, 72, 54, 88, 46, 70, 34, 62];
const STEMS = [
  ["Batteria", 78],
  ["Basso", 92],
  ["Altro", 44],
  ["Voce", 26],
];
const WHEEL = ["1A", "2A", "3A", "4A", "5A", "6A", "7A", "8A", "9A", "10A", "11A", "12A"];

export function DetailsBoard() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">Metri, ruota Camelot e livelli stem. Sono i dettagli grafici dell’ascolto, in movimento.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <section className="border border-border bg-surface p-4">
          <p className="font-mono text-xs text-faint">BPM</p>
          <div className="relative mx-auto mt-3 grid size-40 place-items-center">
            <svg viewBox="0 0 120 120" className="size-40" aria-hidden>
              <circle cx="60" cy="60" r="46" fill="none" className="stroke-border" strokeWidth="8" />
              <circle cx="60" cy="60" r="46" fill="none" className="stroke-accent bpm-arc" strokeWidth="8" strokeLinecap="round" strokeDasharray="180 290" />
            </svg>
            <div className="absolute text-center">
              <p className="font-display text-3xl">140</p>
              <p className="font-mono text-xs text-faint">BPM</p>
            </div>
          </div>
        </section>
        <section className="border border-border bg-surface p-4">
          <p className="font-mono text-xs text-faint">CAMELOT</p>
          <div className="camelot-spin mx-auto mt-3 size-40">
            <svg viewBox="0 0 120 120" className="size-40" aria-hidden>
              {WHEEL.map((key, index) => {
                const angle = (index / WHEEL.length) * Math.PI * 2 - Math.PI / 2;
                const x = 60 + Math.cos(angle) * 42;
                const y = 60 + Math.sin(angle) * 42;
                return (
                  <text key={key} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="fill-muted" fontSize="7">
                    {key}
                  </text>
                );
              })}
              <circle cx="60" cy="60" r="18" fill="none" className="stroke-accent" strokeWidth="1.4" />
            </svg>
          </div>
        </section>
      </div>
      <section className="border border-border bg-surface p-4">
        <p className="font-mono text-xs text-faint">DNA</p>
        <div className="mt-4 flex h-24 items-end gap-2" aria-hidden>
          {BARS.map((height, index) => (
            <span key={index} className="level-bar flex-1 rounded-sm bg-accent" style={{ height: `${height}%`, animationDelay: `${index * 90}ms` }} />
          ))}
        </div>
      </section>
      <section className="border border-border bg-surface p-4">
        <p className="font-mono text-xs text-faint">STEM</p>
        <ul className="mt-3 space-y-3">
          {STEMS.map(([name, level], index) => (
            <li key={name}>
              <div className="mb-1 flex justify-between text-sm">
                <span>{name}</span>
                <span className="font-mono text-xs text-faint">{level}</span>
              </div>
              <div className="h-2 overflow-hidden bg-raised">
                <span className="stem-fill block h-full bg-accent" style={{ width: `${level}%`, animationDelay: `${index * 120}ms` }} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
