import { useEffect, useRef, useState } from "react";
import { PackageType, type Package } from "@revenuecat/purchases-js";
import { ENTITLEMENT_ID, buyPackage, getPurchases, loadPackages, trackPaywall } from "@/lib/purchases";

const OFFERS = [
  {
    id: "monthly",
    name: "Mensile",
    fallback: "9,99 USD",
    period: "al mese",
    type: PackageType.Monthly,
    ids: ["monthly", "$rc_monthly"],
  },
  {
    id: "yearly",
    name: "Annuale",
    fallback: "79 USD",
    period: "all’anno",
    type: PackageType.Annual,
    ids: ["yearly", "$rc_annual"],
    mark: "Scelta da cabina",
  },
  {
    id: "lifetime",
    name: "Lifetime",
    fallback: "149 USD",
    period: "una volta",
    type: PackageType.Lifetime,
    ids: ["lifetime", "$rc_lifetime"],
  },
] as const;

const INCLUDED = [
  "Analisi degli strumenti su ogni traccia",
  "Stem Demucs: batteria, basso, voce, altro",
  "Relative, Camelot e export per Ableton",
  "Anteprime ufficiali, senza il limite free",
];

export function PaywallPanel({ onClose, onUnlocked }: { onClose: () => void; onUnlocked: () => void }) {
  const host = useRef<HTMLDivElement>(null);
  const [packages, setPackages] = useState<Package[]>([]);
  const [picked, setPicked] = useState<(typeof OFFERS)[number]["id"]>("yearly");
  const [note, setNote] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let live = true;
    void loadPackages()
      .then((items) => {
        if (!live) return;
        setPackages(items);
        trackPaywall();
      })
      .catch((error: unknown) => {
        if (live) setNote(error instanceof Error ? error.message : "RevenueCat non risponde. I prezzi restano quelli di listino.");
      });
    return () => {
      live = false;
    };
  }, []);

  const offer = OFFERS.find((item) => item.id === picked) ?? OFFERS[1];
  const pkg = packages.find((item) => (offer.ids as readonly string[]).includes(item.identifier) || item.packageType === offer.type);
  const price = pkg?.product.currentPrice.formattedPrice ?? offer.fallback;

  async function unlock() {
    const target = host.current;
    if (!pkg || !target) {
      setNote("Questo piano non è ancora nel negozio RevenueCat. Controlla monthly, yearly e lifetime.");
      return;
    }
    setBusy(true);
    setNote(null);
    try {
      const result = await buyPackage(pkg, target);
      if (result.customerInfo.entitlements.active[ENTITLEMENT_ID]) onUnlocked();
      else setNote("Checkout chiuso, Pro non attivo.");
    } catch (error) {
      setNote(error instanceof Error ? error.message : "Acquisto non completato.");
    } finally {
      setBusy(false);
    }
  }

  async function restore() {
    setBusy(true);
    setNote(null);
    try {
      const info = await getPurchases().getCustomerInfo();
      if (info.entitlements.active[ENTITLEMENT_ID]) onUnlocked();
      else setNote("Nessun Pro attivo su questo account.");
    } catch (error) {
      setNote(error instanceof Error ? error.message : "Ripristino non riuscito.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-bg text-fg">
      <div className="mx-auto flex min-h-screen w-full max-w-lg flex-col px-5 pt-8 pb-10">
        <div className="flex items-center justify-between">
          <p className="font-display text-xs tracking-[0.22em] text-accent">RELATIVE</p>
          <button type="button" onClick={onClose} className="min-h-11 px-2 text-sm text-muted">
            Chiudi
          </button>
        </div>
        <h1 className="mt-10 font-display text-3xl leading-tight">Pro, per chi gira i dischi.</h1>
        <p className="mt-3 max-w-sm text-sm text-muted">Spettro, stem e relativi. Un solo accesso: {ENTITLEMENT_ID}.</p>

        <div className="mt-8 space-y-2">
          {OFFERS.map((item) => {
            const match = packages.find((pkgItem) => (item.ids as readonly string[]).includes(pkgItem.identifier) || pkgItem.packageType === item.type);
            const shown = match?.product.currentPrice.formattedPrice ?? item.fallback;
            const on = picked === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setPicked(item.id)}
                className={`flex min-h-20 w-full items-center justify-between gap-3 border px-4 text-left ${on ? "border-accent bg-surface" : "border-border"}`}
              >
                <span>
                  <span className="block font-semibold">{item.name}</span>
                  <span className="mt-1 block text-xs text-muted">{"mark" in item ? item.mark : item.period}</span>
                </span>
                <span className="text-right">
                  <span className="block font-mono text-sm">{shown}</span>
                  <span className="block text-xs text-faint">{item.period}</span>
                </span>
              </button>
            );
          })}
        </div>

        <ul className="mt-8 space-y-2 text-sm text-muted">
          {INCLUDED.map((line) => (
            <li key={line} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 bg-accent" />
              {line}
            </li>
          ))}
        </ul>

        <button type="button" onClick={() => void unlock()} disabled={busy} className="mt-8 min-h-12 bg-accent font-semibold text-accent-fg disabled:opacity-60">
          {busy ? "Apro il checkout…" : `Sblocca Pro · ${price}`}
        </button>
        <button type="button" onClick={() => void restore()} disabled={busy} className="mt-2 min-h-11 text-sm text-muted">
          Ripristina acquisti
        </button>
        {note && <p className="mt-3 text-sm text-muted">{note}</p>}
        <div ref={host} />
      </div>
    </div>
  );
}
