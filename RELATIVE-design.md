# RELATIVE — design system e schermate

File da dare a RevenueCat (paywall) o a Sketch (tutte le schermate).
Copia i blocchi «Prompt» così come sono. I colori sono hex, le misure in px su artboard 390×844 (iPhone) e 1280×800 (desktop).

App: RELATIVE. Non Reverse. Non un clone di Apple Music: il player ufficiale è un embed, il resto è cabina techno.

---

## 1. Come usarlo

### RevenueCat

Offering corrente, tre package:

| Package id | Tipo RevenueCat | Prezzo di listino | Periodo |
|---|---|---|---|
| `monthly` | `$rc_monthly` | 9,99 USD | al mese |
| `yearly` | `$rc_annual` | 79 USD | all’anno |
| `lifetime` | `$rc_lifetime` | 149 USD | una volta |

Entitlement: `project-Ska5cKGS Pro`.

Incolla il blocco **Prompt paywall** nel generatore. Poi controlla che i package siano quelli della tabella, non testi inventati. Il pulsante compra il package selezionato. Default selezionato: `yearly`.

### Sketch

Un file, due pagine.

- Pagina `Phone` — artboard 390×844, margine 20, colonna unica.
- Pagina `Desk` — artboard 1280×800. Ascolto e Player sono a due colonne: sinistra 560, destra il resto, gutter 32, padding 24. Rail destra 56× piena altezza, staccata 12 dal bordo.

Font da installare: Michroma (display), Inter (testo), JetBrains Mono (dati).

---

## 2. Token

### Colore

| Token | Hex | Uso |
|---|---|---|
| bg | `#121212` | Sfondo di ogni schermata |
| surface | `#171717` | Card, riga selezionata |
| raised | `#202020` | Pillole, barre vuote, grabber |
| fg | `#F5F5F5` | Testo primario |
| muted | `#A3A3A3` | Secondario |
| faint | `#737373` | Meta, timestamp |
| accent | `#C084FC` | Selezione, play, wordmark, barre spettro |
| accent-fg | `#160818` | Testo sui bottoni accent |
| border | `#2A2A2A` | Filetti 1 px |
| ok | `#3DCC8A` | Stato sbloccato |
| blob | `#2A1038` | Campo dietro l’orb e le cover |
| liquid | `#050505` | Nucleo dell’orb |
| liquid-edge | `#404040` | Bordo dell’orb |

Niente gradienti marketing. Niente viola pieno a tutto schermo. L’accent è solo su wordmark, bordo selezionato, barre e CTA.

### Tipo

| Ruolo | Font | Peso | Size / leading | Tracking |
|---|---|---|---|---|
| Wordmark | Michroma | 400 | 12 / 16 | 0.22 em, maiuscolo |
| Titolo schermata | Michroma | 400 | 30 / 36 | 0 |
| Titolo sezione | Michroma | 400 | 20 / 28 | 0 |
| Corpo | Inter | 400 | 14 / 20 | 0 |
| Corpo forte | Inter | 600 | 16 / 22 | 0 |
| Meta | JetBrains Mono | 400 | 12 / 16 | 0 |

### Spazio e forma

- Unità 4. Scala usata: 8, 12, 16, 20, 32, 40.
- Card e bottoni: raggio 0. Sono rettangoli. Solo l’orb, le pillole e il grabber sono tondi.
- Bottone primario: altezza 48, fill accent, testo accent-fg, Inter 16 semibold, larghezza piena.
- Bottone ghost: altezza 44, niente fill, testo muted.
- Card piano: altezza minima 80, padding 16, bordo 1. Selezionata: bordo accent, fill surface. Le altre: bordo border, fill trasparente.
- Bullet feature: quadrato 6×6 accent, non un check rotondo.

### Orb (solo Ascolto)

Sfera 3D fluida, Shader Three.js. A riposo è scura, liquida, bordo `#404040` su campo `#2A1038`. Al tocco il displacement sale e il liquido si muove. Non è una palla viola piatta. Non sostituirla con un’icona.

---

## 3. Prompt paywall (incolla in RevenueCat)

```
Dark techno paywall for RELATIVE. Full screen, background #121212, no gradients, no rounded cards, no stock photos, no purple wash.

Top row: wordmark RELATIVE in Michroma 12px, tracking 0.22em, color #C084FC, left. Text button Chiudi, Inter 14, #A3A3A3, right.

Headline, Michroma 30, #F5F5F5, left: Pro, per chi gira i dischi.
Subline, Inter 14, #A3A3A3: Spettro, stem e relativi. Un solo accesso: project-Ska5cKGS Pro.

Three package rows, stacked, gap 8, full width, min height 80, padding 16, square corners.
Unselected: 1px border #2A2A2A, transparent fill.
Selected: 1px border #C084FC, fill #171717.
Default selected: yearly.

Row monthly — left title Mensile, Inter 16 semibold #F5F5F5. Right price from package monthly, JetBrains Mono 14. Under price: al mese, 12px #737373.
Row yearly — title Annuale. Under title: Scelta da cabina, 12px #A3A3A3. Price from package yearly. Under price: all’anno.
Row lifetime — title Lifetime. Price from package lifetime. Under price: una volta.

Feature list, gap 8, Inter 14 #A3A3A3. Each row starts with a 6px square #C084FC, not a checkmark.
- Analisi degli strumenti su ogni traccia
- Stem Demucs: batteria, basso, voce, altro
- Relative, Camelot e export per Ableton
- Anteprime ufficiali, senza il limite free

Primary button, height 48, full width, fill #C084FC, label #160818, Inter 16 semibold: Sblocca Pro · {prezzo del package selezionato}.
It purchases the selected package. It is not a button that opens another paywall.

Text button under it, Inter 14 #A3A3A3: Ripristina acquisti.

Locale: it. No free plan on this screen. No annual toggle separate from the three rows.
```

### Stati del paywall

Stesse misure. Cambia solo il blocco indicato.

**RC-01 Default.** Annuale selezionato. CTA: `Sblocca Pro · 79 USD`.

**RC-02 Mensile.** Selezione su Mensile. CTA: `Sblocca Pro · 9,99 USD`.

**RC-03 Lifetime.** Selezione su Lifetime. CTA: `Sblocca Pro · 149 USD`.

**RC-04 Checkout.** CTA disabilitata, opacità 60%, testo `Apro il checkout…`. Le righe non si possono ripremere.

**RC-05 Errore.** Sotto la CTA, Inter 14 muted: `Questo piano non è ancora nel negozio RevenueCat.` Non un alert di sistema.

**RC-06 Ripristino vuoto.** Stessa schermata. Sotto la CTA: `Nessun Pro attivo su questo account.`

**RC-07 Sbloccato.** Schermata breve, stesso sfondo. Wordmark. Titolo Michroma: `Pro attivo.` Riga mono muted: `project-Ska5cKGS Pro`. Un bottone accent: `Torna in cabina.` Poi la schermata si chiude.

**RC-08 Chiuso.** Non è una schermata. Il paywall esce e resta Ascolto. Non lasciare un tasto «Apri paywall» da nessuna parte.

---

## 4. Schermate app (Sketch)

Nome artboard, cosa c’è, copia esatta.

### SK-01 Onboarding — `Da dove partiamo?`

Sfondo bg. Titolo Michroma 30: `Da dove partiamo?`
Sottotitolo Inter 14 muted: una riga, non un paragrafo marketing.
Griglia di generi, 1 colonna su phone, 2 su desk. Ogni cella: bordo border, padding 12, altezza minima 64.

Generi, in quest’ordine, con la riga e la fascia BPM in mono faint:

| Nome | Riga | Fascia |
|---|---|---|
| Techno | Kick dritto, loop che non si apre | 132–145 |
| Hard Techno | Distorsione sul kick | 145–158 |
| Industrial Techno | Metallico, poco aria, macchine | 118–150 |
| Deep House | Basso tondo, più spazio | 110–124 |
| Tech House | Groove secco, percussioni in levare | 124–132 |
| Groove | Basso che cammina, corpi in pista | 118–128 |
| Hardcore | Kick distorto, oltre il techno | 160–200 |
| Psytrance | Basso a spirale, frasi lunghe | 136–155 |
| Acid | 303, risonanza che sale | 120–145 |
| UK Garage | Shuffle e vocal chop | 130–138 |
| Breaks | Batteria spezzata, non four-on-the-floor | 130–165 |

Il genere scelto ha bordo accent. In fondo due azioni: `Entra` (accent) e `Ascolta` (ghost). Non un carosello.

### SK-02 Ascolto — `Cabina`

Phone: colonna. Desk: due pannelli.

Sinistra, dall’alto:

- Azioni `Carica file` e `Ascolta`, pillole. Ascolta è il gesto Shazam: tiene premuto, non cambia pagina.
- Orb centrata. Sotto, Inter 14 muted: `Tocca il cerchio. Ascolta e resta qui.`
- Se il riconoscimento riesce: titolo e artista del brano, una riga mono faint con i BPM. Se fallisce: il testo di errore resta sotto l’orb, stessa pagina.

Destra, in ordine, mai il contrario:

1. **Genere.** Titolo sezione. Una riga muted: `Scegli prima il genere. I brani sotto seguono quella fascia.` Poi le pillole (Tutti, Techno, Hard Techno, …). Poi le stesse card di SK-01.
2. Filtri su due colonne: `BPM da`, `BPM a`, `Tonalità`, `Match`. Input altezza 44, fill surface, bordo border, numeri in mono.
3. **Analisi.** Non una lista di copertine. Vedi SK-03.

Rail desk, destra, tonda, vetro scuro (`backdrop-filter` blur 22, fill `#121212` all’80%): Ascolta, Cerca, Relative, Studio, Dettagli. Icone 20, niente etichetta. Voce attiva: pallino accent. Phone: tab bar in basso, 5 voci con etichetta 11 px. Nessuna voce Piani.

### SK-03 Analisi traccia — componente, ripetuto

Card surface, bordo border, padding 12, raggio 0.

- Riga 1: titolo Inter 16 semibold, artista 14 muted. A destra un play tondo 44, fill raised, icona accent.
- Riga 2, 14 muted: `In primo piano: Kick · cassa, Basso · basso` (i tre strumenti sopra l’8%).
- Otto barre. Etichetta a sinistra 72 px, muted 12. Track 6 px, fill raised, valore in accent. Numero a destra, mono 12 faint, larghezza 40.

| Barra | Strumento |
|---|---|
| Sub | sintetizzatore |
| Kick | cassa |
| Basso | basso |
| Corpo | tom e rumble |
| Medio | rullante |
| Presenza | ride |
| Hat | hi-hat |
| Aria | piatti |

- Footer mono 12 faint: `{bpm} BPM · {camelot} · {key} · picco basso {hz} Hz · {sottogenere}`

Esempio reale, GateAway, Luigi Madonna: barre circa 3, 44, 30, 7, 9, 3, 3, 1. Footer: `142 BPM · 1A · G#m · picco basso 59.2 Hz · Ipnotico luminoso`.

Dopo un ascolto dal microfono, la prima card non è un brano del catalogo. Titolo `Ascolto`, artista `Microfono`, Camelot `live`. I numeri sono lo spettro misurato.

### SK-04 Cerca

Header Michroma 24: `Cerca`. Campo 48, mono, bordo border. Lista di tracce del catalogo, altezza riga 64: titolo, artista, BPM e Camelot in pillole. In testa un play pill `Play` fill fg, testo bg.

### SK-05 Player

Si apre sopra tutto, sfondo bg, grabber 36×6 raised.

Desk, due colonne.

Sinistra: embed Apple Music, iframe 100% × 450, raggio 10 solo qui perché è il widget Apple. Sotto: titolo 18 semibold e artista muted. Stella e Altro, 44. Non mostrare scrubber, volume e transport da 30 secondi se l’embed c’è.

Esempio Ghost, THISISTHX: embed `https://embed.music.apple.com/us/album/ghost-ep/6807842769?i=6807842771`.

Destra: la card SK-03 del brano, senza il bottone play. Niente titoli giganti che scorrono. Niente la frase `Anteprima ufficiale · 30 secondi`.

Se Apple Music non ha l’album: al posto dell’iframe, cover quadrata a tutta colonna. Sotto, scrubber, `0:00` / `-0:30` in mono, transport (shuffle, back, play 64, forward, repeat), volume.

Mini player, sopra la tab bar: play 44 accent, cover 36, titolo, meta `artista · Apple Music · 30s` oppure `Cerco su Deezer…`.

### SK-06 Relative

Header `Relative`. Card della traccia attiva con BPM e Camelot in pillole. Gruppi per sottogenere. Ogni riga: artista, titolo, BPM, Camelot. Azione `Export Ableton`, bordo, non accent.

### SK-07 Studio

Header `Studio`. Tre ingressi: file audio, link (Instagram, SoundCloud, YouTube, Bandcamp, Beatport), microfono. Quando l’analisi è in corso: quattro barre di avanzamento, non uno spinner. A fine: quattro stem in riga — Batteria, Basso, Altro, Voce — con `Ascolta` e `WAV`. Nota faint: `HTDemucs: batteria, basso, altro e voce, sui primi 7,8 secondi.`

### SK-08 Dettagli

Board da cabina. Numeri grossi in Michroma, non un dashboard a card colorate. BPM grande (es. `140`), Camelot, key, sottogenere, una striscia di otto bande. Sfondo bg, numeri fg, accent solo sulla banda più alta.

### SK-09 Paywall

Come RC-01, artboard piena. Sta sopra Ascolto, non è una tab.

---

## 5. Cosa non disegnare

- Tasto `Apri paywall`, `Apri RevenueCat`, voce di menu `Piani`.
- Lista di copertine stile Apple Music nella sezione Ascolto.
- Colonna di titoli che scorrono (`Anteprima ufficiale · 30 secondi`).
- Paywall con piano Free, con toggle Mensile/Annuale separato dalle tre righe, o con illustrazione.
- Orb viola piatta, gradient mesh, vetro colorato sopra tutto lo schermo.

## 6. Ordine di costruzione in Sketch

1. Stili di colore e testo, una sola libreria.
2. Simboli: `Piano`, `Barra spettro`, `Card analisi`, `Pillola`, `Orb`.
3. RC-01 … RC-07.
4. SK-01 … SK-08, phone e poi la variante desk di SK-02 e SK-05.
