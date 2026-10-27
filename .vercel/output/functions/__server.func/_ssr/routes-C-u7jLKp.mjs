import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { _ as Airplay, a as SkipBack, c as Search, d as Play, f as Pause, g as Download, h as Ellipsis, i as SkipForward, l as Repeat, m as LayoutGrid, o as Shuffle, p as Mic, r as Star, s as Share2, t as Volume2, u as Plus } from "../_libs/lucide-react.mjs";
import { n as pg, t as Rl } from "../_libs/revenuecat__purchases-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C-u7jLKp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Query = object({
	artist: string().trim().min(1).max(120),
	title: string().trim().min(1).max(160)
});
var findOfficialPreview = createServerFn({ method: "GET" }).inputValidator(Query).handler(createSsrRpc("c8788a3574c23145e845adc1480576d4256e7319893358bcbe7d543ec63dfcba"));
createServerFn({ method: "GET" }).inputValidator(object({ artist: string().trim().min(1).max(120) })).handler(createSsrRpc("abb5e642cea26e0246967d0fbbf64aab29b5f69b2d4f16bc86648bbd728a79fe"));
var searchDeezer = createServerFn({ method: "GET" }).inputValidator(object({ q: string().trim().min(1).max(120) })).handler(createSsrRpc("a05319d0af59e9ff6fb7a38378a099042a5252cd25b4389a6fb66ff773380919"));
var recognizeSong = createServerFn({ method: "POST" }).inputValidator(object({ wav: string().min(1e3).max(2e6) })).handler(createSsrRpc("c9c45fdfe75b31c075e49904493165fa4ce11bb315f840bb54a1394046b1b85d"));
var tracks = /* @__PURE__ */ JSON.parse("[{\"id\":\"t000\",\"stato\":\"Pre-order (non ancora uscito)\",\"date\":\"2026-11-13\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"YNNY\",\"title\":\"D001\",\"label\":\"Planet Rhythm\",\"bpm\":138,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":91.5,\"sim\":1.82,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://planetrhythm.bandcamp.com/track/d001\",\"bands\":[0.3,30.1,50.3,9.5,4.5,2.4,2.1,0.8]},{\"id\":\"t001\",\"stato\":\"Pre-order (non ancora uscito)\",\"date\":\"2026-11-13\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Luigi Madonna\",\"title\":\"GateAway\",\"label\":\"Planet Rhythm\",\"bpm\":142,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":59.2,\"sim\":3.02,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://planetrhythm.bandcamp.com/track/gateaway\",\"bands\":[3.0,44.2,29.6,6.7,9.4,3.2,2.6,1.2]},{\"id\":\"t002\",\"stato\":\"Pre-order (non ancora uscito)\",\"date\":\"2026-11-13\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Klint\",\"title\":\"Roses & Revolt\",\"label\":\"Planet Rhythm\",\"bpm\":144,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":1.69,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://planetrhythm.bandcamp.com/track/roses-revolt\",\"bands\":[0.8,60.0,25.9,7.9,1.3,1.3,1.8,0.9]},{\"id\":\"t003\",\"stato\":\"Pre-order (non ancora uscito)\",\"date\":\"2026-11-06\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Axel Karakasis\",\"title\":\"Thrust\",\"label\":\"Special Series\",\"bpm\":142,\"key\":\"F\",\"cam\":\"7B\",\"lowpeak\":43.1,\"sim\":3.57,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://specialseries.bandcamp.com/track/thrust\",\"bands\":[5.7,58.6,21.4,6.8,3.8,1.5,1.6,0.6]},{\"id\":\"t004\",\"stato\":\"Pre-order (non ancora uscito)\",\"date\":\"2026-10-30\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Hioll\",\"title\":\"Lord Clouds\",\"label\":\"Planet Rhythm\",\"bpm\":136,\"key\":\"G\",\"cam\":\"9B\",\"lowpeak\":48.4,\"sim\":3.37,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://planetrhythm.bandcamp.com/track/lord-clouds\",\"bands\":[0.4,68.9,11.1,11.3,1.8,3.8,1.9,0.7]},{\"id\":\"t005\",\"stato\":\"Pre-order (non ancora uscito)\",\"date\":\"2026-10-30\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Hioll\",\"title\":\"Rent Algo\",\"label\":\"Planet Rhythm\",\"bpm\":136,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":2.48,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://planetrhythm.bandcamp.com/track/rent-algo\",\"bands\":[0.3,61.4,9.2,18.6,1.7,4.7,2.6,1.4]},{\"id\":\"t006\",\"stato\":\"Pre-order (non ancora uscito)\",\"date\":\"2026-10-27\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Hemka\",\"title\":\"Echoes\",\"label\":\"Vault Records\",\"bpm\":140,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":48.4,\"sim\":1.78,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://vaultrecords.bandcamp.com/track/echoes\",\"bands\":[4.2,62.9,19.8,7.5,1.3,0.9,2.1,1.2]},{\"id\":\"t007\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-10-16\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Hervás gm\",\"title\":\"Contacto Estrecho\",\"label\":\"Illegal Alien Records\",\"bpm\":135,\"key\":\"Dm\",\"cam\":\"7A\",\"lowpeak\":53.8,\"sim\":3.03,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://illegalalienrecords.bandcamp.com/track/herva-s-gm-contacto-estrecho\",\"bands\":[0.4,47.1,21.0,18.4,4.1,3.7,3.2,2.1]},{\"id\":\"t008\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-10-16\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Drewtech\",\"title\":\"Disco Chord\",\"label\":\"Special Series\",\"bpm\":145,\"key\":\"A#m\",\"cam\":\"3A\",\"lowpeak\":64.6,\"sim\":3.62,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://specialseries.bandcamp.com/track/disco-chord\",\"bands\":[2.6,50.7,25.1,8.9,6.4,2.7,3.0,0.7]},{\"id\":\"t009\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-10-09\",\"ref\":\"Ghost\",\"set\":\"riferimento\",\"artist\":\"THISISTHX\",\"title\":\"Ghost\",\"label\":\"Planet Rhythm\",\"bpm\":140,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":53.8,\"sim\":0,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://planetrhythm.bandcamp.com/track/ghost\",\"bands\":[1.8,40.2,22.1,16.8,7.2,1.5,7.9,2.5]},{\"id\":\"t010\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-10-09\",\"ref\":\"Ghost\",\"set\":\"stesso EP (Ghost EP)\",\"artist\":\"THISISTHX\",\"title\":\"Destroy To Create\",\"label\":\"Planet Rhythm\",\"bpm\":139,\"key\":\"Dm\",\"cam\":\"7A\",\"lowpeak\":53.8,\"sim\":4.7,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://planetrhythm.bandcamp.com/track/destroy-to-create\",\"bands\":[0.5,33.9,46.2,13.0,3.4,1.0,1.6,0.4]},{\"id\":\"t011\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-10-09\",\"ref\":\"Ghost\",\"set\":\"stesso EP (Ghost EP)\",\"artist\":\"THISISTHX\",\"title\":\"Quadrant\",\"label\":\"Planet Rhythm\",\"bpm\":140,\"key\":\"Cm\",\"cam\":\"5A\",\"lowpeak\":53.8,\"sim\":2.54,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://planetrhythm.bandcamp.com/track/quadrant-2\",\"bands\":[0.8,39.7,27.7,20.5,4.4,2.4,3.2,1.3]},{\"id\":\"t012\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-10-09\",\"ref\":\"Ghost\",\"set\":\"stesso EP (Ghost EP)\",\"artist\":\"THISISTHX\",\"title\":\"Extrude\",\"label\":\"Planet Rhythm\",\"bpm\":142,\"key\":\"F\",\"cam\":\"7B\",\"lowpeak\":53.8,\"sim\":2.78,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://planetrhythm.bandcamp.com/track/extrude\",\"bands\":[0.4,37.2,27.9,20.8,6.8,1.2,3.6,2.0]},{\"id\":\"t013\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-10-09\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Filterheadz, Melvin Spix & TimeKube\",\"title\":\"Raw Frequency\",\"label\":\"Special Series\",\"bpm\":141,\"key\":\"Fm\",\"cam\":\"4A\",\"lowpeak\":43.1,\"sim\":1.54,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://specialseries.bandcamp.com/track/raw-frequency\",\"bands\":[6.9,41.8,26.7,5.0,5.3,9.1,4.3,0.7]},{\"id\":\"t014\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-10-09\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Filterheadz, Melvin Spix & TimeKube\",\"title\":\"Acceleration\",\"label\":\"Special Series\",\"bpm\":141,\"key\":\"Em\",\"cam\":\"9A\",\"lowpeak\":53.8,\"sim\":1.58,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://specialseries.bandcamp.com/track/acceleration\",\"bands\":[0.9,46.3,23.2,7.4,7.0,9.1,4.7,1.3]},{\"id\":\"t015\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-10-06\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Setaoc Mass\",\"title\":\"Function Four\",\"label\":\"Vault Records\",\"bpm\":140,\"key\":\"G\",\"cam\":\"9B\",\"lowpeak\":48.4,\"sim\":4.68,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://vaultrecords.bandcamp.com/track/function-four\",\"bands\":[1.4,64.0,19.0,11.0,2.4,0.7,1.0,0.4]},{\"id\":\"t016\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-29\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Grovskopa\",\"title\":\"Kagig\",\"label\":\"Mord\",\"bpm\":137,\"key\":\"F\",\"cam\":\"7B\",\"lowpeak\":53.8,\"sim\":3.22,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://mord.bandcamp.com/track/kagig\",\"bands\":[3.1,42.8,31.4,9.4,3.2,3.9,4.9,0.7]},{\"id\":\"t017\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-29\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Grovskopa\",\"title\":\"Prega\",\"label\":\"Mord\",\"bpm\":137,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":59.2,\"sim\":3.7,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://mord.bandcamp.com/track/prega\",\"bands\":[3.8,66.2,13.2,4.9,3.5,4.5,2.3,1.2]},{\"id\":\"t018\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-25\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Oscar Mulero\",\"title\":\"Lost Verses in You\",\"label\":\"Semantica\",\"bpm\":138,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":53.8,\"sim\":4.01,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://semanticarecords.bandcamp.com/track/lost-verses-in-you\",\"bands\":[0.5,54.0,34.3,7.6,1.1,0.8,1.2,0.5]},{\"id\":\"t019\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-25\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"K.O.M.S.\",\"title\":\"Beyond the noise\",\"label\":\"PoleGroup\",\"bpm\":137,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":53.8,\"sim\":1.22,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://polegroup.bandcamp.com/track/beyond-the-noise\",\"bands\":[0.4,44.2,26.1,18.5,5.0,2.4,2.6,0.8]},{\"id\":\"t020\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-25\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"K.O.M.S.\",\"title\":\"Raw & unbroken\",\"label\":\"PoleGroup\",\"bpm\":137,\"key\":\"F\",\"cam\":\"7B\",\"lowpeak\":43.1,\"sim\":1.73,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://polegroup.bandcamp.com/track/raw-unbroken\",\"bands\":[5.4,52.7,26.3,8.8,2.4,1.9,1.8,0.7]},{\"id\":\"t021\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-25\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Disguised\",\"title\":\"Carcosa\",\"label\":\"Sublunar\",\"bpm\":139,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":2.15,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://sublunarrecords.bandcamp.com/track/carcosa\",\"bands\":[0.6,43.6,20.2,24.1,3.4,1.6,4.8,1.7]},{\"id\":\"t022\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-25\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Disguised\",\"title\":\"Rust Never Sleeps\",\"label\":\"Sublunar\",\"bpm\":142,\"key\":\"A#m\",\"cam\":\"3A\",\"lowpeak\":59.2,\"sim\":0.45,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://sublunarrecords.bandcamp.com/track/rust-never-sleeps\",\"bands\":[0.4,48.0,22.1,17.5,6.6,1.6,2.3,1.5]},{\"id\":\"t023\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-25\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"CV1\",\"title\":\"Monster Hunter\",\"label\":\"Illegal Alien Records\",\"bpm\":140,\"key\":\"G\",\"cam\":\"9B\",\"lowpeak\":53.8,\"sim\":3.37,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://illegalalienrecords.bandcamp.com/track/cv1-monster-hunter\",\"bands\":[0.2,31.8,35.7,20.0,8.0,2.3,1.6,0.4]},{\"id\":\"t024\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-25\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"CV1\",\"title\":\"Hangover\",\"label\":\"Illegal Alien Records\",\"bpm\":140,\"key\":\"E\",\"cam\":\"12B\",\"lowpeak\":102.3,\"sim\":3.57,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://illegalalienrecords.bandcamp.com/track/cv1-hangover\",\"bands\":[0.4,34.0,42.2,16.7,3.6,0.7,1.7,0.6]},{\"id\":\"t025\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-25\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Altinbas\",\"title\":\"Entanglement\",\"label\":\"Ostgut Ton\",\"bpm\":136,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":53.8,\"sim\":2.77,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://ostgut.bandcamp.com/track/entanglement\",\"bands\":[0.1,62.1,18.7,10.9,6.0,1.1,0.5,0.4]},{\"id\":\"t026\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-25\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Altinbas\",\"title\":\"Beyond The Veil\",\"label\":\"Ostgut Ton\",\"bpm\":136,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":3.4,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://ostgut.bandcamp.com/track/beyond-the-veil\",\"bands\":[0.1,74.8,12.9,8.0,1.1,0.8,1.1,1.1]},{\"id\":\"t027\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-18\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Toni Alvarez\",\"title\":\"The Answer\",\"label\":\"Special Series\",\"bpm\":142,\"key\":\"A#m\",\"cam\":\"3A\",\"lowpeak\":53.8,\"sim\":2.99,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://specialseries.bandcamp.com/track/the-answer\",\"bands\":[0.4,68.7,17.4,5.6,2.4,3.0,1.8,0.7]},{\"id\":\"t028\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-18\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Toni Alvarez\",\"title\":\"La Tortuga\",\"label\":\"Special Series\",\"bpm\":143,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":48.4,\"sim\":1.54,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://specialseries.bandcamp.com/track/la-tortuga\",\"bands\":[1.8,58.5,15.7,5.3,7.8,8.0,1.9,0.8]},{\"id\":\"t029\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-18\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Tensal\",\"title\":\"The Bearers Of The Banner\",\"label\":\"Planet Rhythm\",\"bpm\":138,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":2.9,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://planetrhythm.bandcamp.com/track/the-bearers-of-the-banner\",\"bands\":[2.0,53.4,23.9,10.2,6.5,0.5,2.2,1.2]},{\"id\":\"t030\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-18\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Sarf\",\"title\":\"Codigo Alterado\",\"label\":\"Illegal Alien Records\",\"bpm\":135,\"key\":\"Dm\",\"cam\":\"7A\",\"lowpeak\":48.4,\"sim\":4.06,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://illegalalienrecords.bandcamp.com/track/sarf-codigo-alterado\",\"bands\":[1.2,50.8,14.3,13.0,12.5,0.7,5.0,2.5]},{\"id\":\"t031\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-18\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Hashashin\",\"title\":\"Breekijzer\",\"label\":\"Diffuse Reality Records\",\"bpm\":140,\"key\":\"A#m\",\"cam\":\"3A\",\"lowpeak\":48.4,\"sim\":3.31,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://diffusereality.bandcamp.com/track/breekijzer\",\"bands\":[4.7,70.3,9.7,7.6,3.7,2.4,1.2,0.3]},{\"id\":\"t032\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-18\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Andrei Morant\",\"title\":\"Choke Protocol\",\"label\":\"Planet Rhythm\",\"bpm\":138,\"key\":\"A#m\",\"cam\":\"3A\",\"lowpeak\":48.4,\"sim\":1,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://planetrhythm.bandcamp.com/track/choke-protocol\",\"bands\":[2.9,41.5,17.8,8.4,17.3,7.5,3.5,0.9]},{\"id\":\"t033\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-18\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Andrei Morant\",\"title\":\"Cease Fire\",\"label\":\"Planet Rhythm\",\"bpm\":138,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":1.61,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://planetrhythm.bandcamp.com/track/cease-fire\",\"bands\":[1.0,53.0,13.2,8.5,12.6,9.1,2.0,0.6]},{\"id\":\"t034\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-11\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"quasr\",\"title\":\"Rust & Reverb\",\"label\":\"Special Series\",\"bpm\":138,\"key\":\"A#m\",\"cam\":\"3A\",\"lowpeak\":53.8,\"sim\":1.44,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://specialseries.bandcamp.com/track/rust-reverb\",\"bands\":[1.8,69.1,10.3,3.4,1.9,8.3,4.1,1.0]},{\"id\":\"t035\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-11\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"quasr\",\"title\":\"Formula B\",\"label\":\"Special Series\",\"bpm\":144,\"key\":\"Fm\",\"cam\":\"4A\",\"lowpeak\":43.1,\"sim\":1.94,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://specialseries.bandcamp.com/track/formula-b\",\"bands\":[6.1,49.6,20.1,9.3,4.3,6.6,3.0,1.0]},{\"id\":\"t036\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-11\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Colomboi\",\"title\":\"Alchemy\",\"label\":\"Illegal Alien Records\",\"bpm\":138,\"key\":\"A#m\",\"cam\":\"3A\",\"lowpeak\":70,\"sim\":2.81,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://illegalalienrecords.bandcamp.com/track/colomboi-alchemy\",\"bands\":[0.7,35.6,34.0,20.0,3.1,2.2,3.0,1.4]},{\"id\":\"t037\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-11\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Colomboi\",\"title\":\"Need\",\"label\":\"Illegal Alien Records\",\"bpm\":141,\"key\":\"Dm\",\"cam\":\"7A\",\"lowpeak\":70,\"sim\":3.26,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://illegalalienrecords.bandcamp.com/track/colomboi-need\",\"bands\":[3.4,40.8,23.8,21.5,6.6,1.2,1.7,1.0]},{\"id\":\"t038\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-04\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Sciahri\",\"title\":\"Night Sentinel\",\"label\":\"Mutual Rytm\",\"bpm\":140,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":53.8,\"sim\":1.72,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://mutual-rytm.bandcamp.com/track/night-sentinel\",\"bands\":[0.4,59.3,17.8,11.0,7.4,1.0,1.9,1.1]},{\"id\":\"t039\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-04\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Sciahri\",\"title\":\"Moonwake\",\"label\":\"Mutual Rytm\",\"bpm\":140,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":48.4,\"sim\":2.22,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://mutual-rytm.bandcamp.com/track/moonwake\",\"bands\":[0.6,37.5,30.4,17.5,8.6,3.0,1.5,0.8]},{\"id\":\"t040\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-04\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Sciahri\",\"title\":\"Silent Frontier\",\"label\":\"Mutual Rytm\",\"bpm\":140,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":59.2,\"sim\":1.12,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://mutual-rytm.bandcamp.com/track/silent-frontier\",\"bands\":[0.8,36.2,27.2,12.5,18.5,1.4,2.1,1.4]},{\"id\":\"t041\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-04\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"P.E.A.R.L.\",\"title\":\"Paradise\",\"label\":\"Falling Ethics\",\"bpm\":137,\"key\":\"G#\",\"cam\":\"4B\",\"lowpeak\":53.8,\"sim\":1.5,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://fallingethics.bandcamp.com/track/paradise\",\"bands\":[2.4,67.0,13.3,11.0,3.1,1.3,0.9,1.1]},{\"id\":\"t042\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-09-04\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"P.E.A.R.L.\",\"title\":\"Destello\",\"label\":\"Falling Ethics\",\"bpm\":138,\"key\":\"G#\",\"cam\":\"4B\",\"lowpeak\":53.8,\"sim\":1.72,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://fallingethics.bandcamp.com/track/destello\",\"bands\":[1.2,70.0,17.6,5.4,2.6,0.9,0.9,1.5]},{\"id\":\"t043\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-08-28\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Lee Holman\",\"title\":\"Technological\",\"label\":\"Diffuse Reality Records\",\"bpm\":140,\"key\":\"F\",\"cam\":\"7B\",\"lowpeak\":59.2,\"sim\":1.13,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://diffusereality.bandcamp.com/track/technological\",\"bands\":[0.3,30.4,34.2,19.7,5.3,5.6,3.6,0.8]},{\"id\":\"t044\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-08-28\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Lee Holman\",\"title\":\"Core Concept\",\"label\":\"Diffuse Reality Records\",\"bpm\":140,\"key\":\"Cm\",\"cam\":\"5A\",\"lowpeak\":59.2,\"sim\":1.32,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://diffusereality.bandcamp.com/track/core-concept\",\"bands\":[3.1,38.4,24.5,15.8,6.7,5.0,4.3,2.1]},{\"id\":\"t045\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-07-31\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Linear System & Yrsen\",\"title\":\"Pusher\",\"label\":\"Planet Rhythm\",\"bpm\":140,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":3.31,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://planetrhythm.bandcamp.com/track/pusher\",\"bands\":[0.6,62.8,14.6,16.3,1.9,0.9,1.6,1.3]},{\"id\":\"t046\",\"stato\":\"Novità (ultimi 90 gg)\",\"date\":\"2026-07-20\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Stanislav Tolkachev\",\"title\":\"Something Breaks Something Grows\",\"label\":\"Mord\",\"bpm\":140,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":2.14,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://mord.bandcamp.com/track/something-breaks-something-grows\",\"bands\":[2.8,65.0,12.6,13.0,3.9,1.7,0.6,0.2]},{\"id\":\"t047\",\"stato\":\"Uscito\",\"date\":\"2026-07-17\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Phil Berg\",\"title\":\"Dārin\",\"label\":\"Mutual Rytm\",\"bpm\":141.9,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":0.27,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://mutual-rytm.bandcamp.com/track/d-rin\",\"bands\":[0.1,47.6,27.0,14.9,4.4,3.6,1.8,0.6]},{\"id\":\"t048\",\"stato\":\"Uscito\",\"date\":\"2026-07-17\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Phil Berg\",\"title\":\"Mephisto\",\"label\":\"Mutual Rytm\",\"bpm\":142,\"key\":\"C#\",\"cam\":\"3B\",\"lowpeak\":53.8,\"sim\":0.6,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://mutual-rytm.bandcamp.com/track/mephisto\",\"bands\":[1.3,53.9,24.7,12.9,2.0,2.0,2.4,0.9]},{\"id\":\"t049\",\"stato\":\"Uscito\",\"date\":\"2026-07-02\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Domenico Crisci & Giri\",\"title\":\"Vortalis\",\"label\":\"Semantica\",\"bpm\":134,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":96.9,\"sim\":5.68,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://semanticarecords.bandcamp.com/track/vortalis\",\"bands\":[0.6,35.1,47.9,12.6,1.5,0.9,1.0,0.2]},{\"id\":\"t050\",\"stato\":\"Uscito\",\"date\":\"2026-07-01\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Oliver Rosemann\",\"title\":\"I could see your lips move\",\"label\":\"Mord\",\"bpm\":138,\"key\":\"Bm\",\"cam\":\"10A\",\"lowpeak\":59.2,\"sim\":1.77,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://mord.bandcamp.com/track/i-could-see-your-lips-move\",\"bands\":[0.8,40.8,39.8,10.8,2.4,1.3,2.7,1.4]},{\"id\":\"t051\",\"stato\":\"Uscito\",\"date\":\"2026-07-01\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Oliver Rosemann\",\"title\":\"Everything Is Under Control\",\"label\":\"Mord\",\"bpm\":138,\"key\":\"Bm\",\"cam\":\"10A\",\"lowpeak\":59.2,\"sim\":2.99,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://mord.bandcamp.com/track/everything-is-under-control\",\"bands\":[0.7,44.5,18.6,19.9,7.6,3.3,4.1,1.1]},{\"id\":\"t052\",\"stato\":\"Uscito\",\"date\":\"2026-06-26\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"The Southern\",\"title\":\"Ultrasound (Original Mix)\",\"label\":\"Mutual Rytm\",\"bpm\":143,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":48.4,\"sim\":3.2,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://mutual-rytm.bandcamp.com/track/ultrasound-original-mix\",\"bands\":[2.5,53.7,16.6,10.3,3.6,6.8,5.5,1.0]},{\"id\":\"t053\",\"stato\":\"Uscito\",\"date\":\"2026-06-26\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Answer Code Request\",\"title\":\"Fading Shadows\",\"label\":\"Answer Code Request (Bandcamp)\",\"bpm\":130,\"key\":\"G#\",\"cam\":\"4B\",\"lowpeak\":53.8,\"sim\":3.67,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://answercoderequest.bandcamp.com/track/fading-shadows\",\"bands\":[1.8,55.8,18.7,14.3,6.0,1.4,1.9,0.1]},{\"id\":\"t054\",\"stato\":\"Uscito\",\"date\":\"2026-06-23\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"VEILBORN\",\"title\":\"Vicious Game\",\"label\":\"Vault Records\",\"bpm\":137,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":48.4,\"sim\":3.61,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://vaultrecords.bandcamp.com/track/vicious-game\",\"bands\":[2.5,62.0,16.8,14.2,1.7,0.8,1.2,0.8]},{\"id\":\"t055\",\"stato\":\"Uscito\",\"date\":\"2026-06-12\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Polygonia & Rødhåd\",\"title\":\"MAUVIER 01 [250120]\",\"label\":\"WSNWG\",\"bpm\":136,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":48.4,\"sim\":1.86,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://rodhad.bandcamp.com/track/mauvier-01-250120\",\"bands\":[2.8,66.3,13.9,8.9,5.0,1.8,1.0,0.2]},{\"id\":\"t056\",\"stato\":\"Uscito\",\"date\":\"2026-06-12\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Polygonia & Rødhåd\",\"title\":\"MAUVIER 02 [250331.1]\",\"label\":\"WSNWG\",\"bpm\":138,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":3.32,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://rodhad.bandcamp.com/track/mauvier-02-2503311\",\"bands\":[1.1,64.5,19.7,9.2,3.7,0.7,0.7,0.3]},{\"id\":\"t057\",\"stato\":\"Uscito\",\"date\":\"2026-06-05\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"NWHR\",\"title\":\"El Precio Del Tiempo\",\"label\":\"Mord\",\"bpm\":138,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":64.6,\"sim\":1.34,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://mord.bandcamp.com/track/el-precio-del-tiempo\",\"bands\":[1.5,58.9,20.6,11.2,4.0,1.6,1.3,0.3]},{\"id\":\"t058\",\"stato\":\"Uscito\",\"date\":\"2026-05-29\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Mark Broom\",\"title\":\"Reality Check\",\"label\":\"Blueprint\",\"bpm\":140,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":2.63,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://blueprintrecords.bandcamp.com/track/reality-check\",\"bands\":[0.0,58.4,18.3,14.4,3.0,1.0,3.3,1.5]},{\"id\":\"t059\",\"stato\":\"Uscito\",\"date\":\"2026-05-29\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Mark Broom\",\"title\":\"M-Tallic\",\"label\":\"Blueprint\",\"bpm\":141,\"key\":\"F#\",\"cam\":\"2B\",\"lowpeak\":43.1,\"sim\":3.09,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://blueprintrecords.bandcamp.com/track/m-tallic\",\"bands\":[2.4,52.2,24.5,7.7,4.9,3.8,2.8,1.6]},{\"id\":\"t060\",\"stato\":\"Uscito\",\"date\":\"2026-05-22\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Peryl\",\"title\":\"Chromestep\",\"label\":\"Peryl (Bandcamp)\",\"bpm\":129,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":3.24,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://peryl.bandcamp.com/track/chromestep-2\",\"bands\":[2.3,70.8,9.9,8.2,5.6,2.4,0.4,0.1]},{\"id\":\"t061\",\"stato\":\"Uscito\",\"date\":\"2026-05-22\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Peryl\",\"title\":\"Swell\",\"label\":\"Peryl (Bandcamp)\",\"bpm\":132,\"key\":\"Cm\",\"cam\":\"5A\",\"lowpeak\":48.4,\"sim\":2.32,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://peryl.bandcamp.com/track/swell-2\",\"bands\":[0.4,53.5,27.0,11.6,6.4,0.3,0.4,0.3]},{\"id\":\"t062\",\"stato\":\"Uscito\",\"date\":\"2026-05-22\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Klint\",\"title\":\"Dobermann\",\"label\":\"Mutual Rytm\",\"bpm\":140,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":53.8,\"sim\":1.16,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://mutual-rytm.bandcamp.com/track/dobermann\",\"bands\":[7.5,63.3,12.8,10.0,1.9,1.1,2.7,0.6]},{\"id\":\"t063\",\"stato\":\"Uscito\",\"date\":\"2026-05-22\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Hemka\",\"title\":\"Leave it\",\"label\":\"Mutual Rytm\",\"bpm\":142,\"key\":\"A#m\",\"cam\":\"3A\",\"lowpeak\":53.8,\"sim\":0.94,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://mutual-rytm.bandcamp.com/track/leave-it\",\"bands\":[2.3,60.1,19.3,12.7,1.8,1.4,1.5,0.9]},{\"id\":\"t064\",\"stato\":\"Uscito\",\"date\":\"2026-05-22\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Decoder\",\"title\":\"Flowing\",\"label\":\"Enemy Records\",\"bpm\":138,\"key\":\"Fm\",\"cam\":\"4A\",\"lowpeak\":48.4,\"sim\":0.44,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://enemyrecords.bandcamp.com/track/flowing\",\"bands\":[5.1,51.1,22.7,14.3,3.4,2.2,0.7,0.6]},{\"id\":\"t065\",\"stato\":\"Uscito\",\"date\":\"2026-05-15\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Planetary Assault Systems\",\"title\":\"Into the Night\",\"label\":\"Ostgut Ton\",\"bpm\":134.3,\"key\":\"D#m\",\"cam\":\"2A\",\"lowpeak\":37.7,\"sim\":1.65,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://ostgut.bandcamp.com/track/into-the-night\",\"bands\":[45.5,27.1,3.2,9.9,10.1,3.7,0.5,0.0]},{\"id\":\"t066\",\"stato\":\"Uscito\",\"date\":\"2026-05-08\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Ribé\",\"title\":\"Son Etapas\",\"label\":\"Mord\",\"bpm\":139,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":70,\"sim\":2.8,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://mord.bandcamp.com/track/son-etapas\",\"bands\":[0.2,46.5,30.1,7.9,5.1,5.3,4.4,0.4]},{\"id\":\"t067\",\"stato\":\"Uscito\",\"date\":\"2026-05-08\",\"ref\":\"Nightrun\",\"set\":\"riferimento\",\"artist\":\"Disguised\",\"title\":\"Nightrun\",\"label\":\"Mutual Rytm\",\"bpm\":142,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":48.4,\"sim\":0,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://mutual-rytm.bandcamp.com/track/nightrun\",\"bands\":[2.3,58.0,20.5,9.6,4.1,2.4,1.8,1.4]},{\"id\":\"t068\",\"stato\":\"Uscito\",\"date\":\"2026-04-28\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Voorman\",\"title\":\"Unbeknownst To Us\",\"label\":\"Vault Records\",\"bpm\":138,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":48.4,\"sim\":2.51,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://vaultrecords.bandcamp.com/track/unbeknownst-to-us-2\",\"bands\":[3.7,63.9,14.2,9.0,2.9,1.8,2.4,2.1]},{\"id\":\"t069\",\"stato\":\"Uscito\",\"date\":\"2026-04-28\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Clotur\",\"title\":\"Arkadia\",\"label\":\"Vault Records\",\"bpm\":138,\"key\":\"G#\",\"cam\":\"4B\",\"lowpeak\":53.8,\"sim\":4.97,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://vaultrecords.bandcamp.com/track/arkadia-2\",\"bands\":[0.1,64.2,14.1,16.9,3.8,0.2,0.4,0.3]},{\"id\":\"t070\",\"stato\":\"Uscito\",\"date\":\"2026-04-24\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"THISISTHX\",\"title\":\"Hydra\",\"label\":\"Illegal Alien Records\",\"bpm\":140,\"key\":\"C#m\",\"cam\":\"12A\",\"lowpeak\":53.8,\"sim\":1.65,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://illegalalienrecords.bandcamp.com/track/thisisthx-hydra\",\"bands\":[0.3,41.1,16.9,28.0,5.6,4.1,2.5,1.5]},{\"id\":\"t071\",\"stato\":\"Uscito\",\"date\":\"2026-04-24\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Regent\",\"title\":\"Control Room\",\"label\":\"Mutual Rytm\",\"bpm\":140,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":59.2,\"sim\":1.31,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://mutual-rytm.bandcamp.com/track/control-room\",\"bands\":[0.8,37.2,44.8,12.2,1.3,0.9,1.7,1.1]},{\"id\":\"t072\",\"stato\":\"Uscito\",\"date\":\"2026-04-17\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"STIPP & Sandrien\",\"title\":\"Corrie\",\"label\":\"Token\",\"bpm\":140,\"key\":\"Fm\",\"cam\":\"4A\",\"lowpeak\":48.4,\"sim\":4.32,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://tokenrecords.bandcamp.com/track/corrie\",\"bands\":[2.0,50.5,18.7,16.8,9.6,0.9,0.8,0.5]},{\"id\":\"t073\",\"stato\":\"Uscito\",\"date\":\"2026-04-13\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Hertz Collision\",\"title\":\"Body Circuit\",\"label\":\"Hertz Collision (self-released)\",\"bpm\":140,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":1.85,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://hertzcollision.bandcamp.com/track/body-circuit\",\"bands\":[0.2,54.0,25.0,9.3,4.2,2.6,4.1,0.6]},{\"id\":\"t074\",\"stato\":\"Uscito\",\"date\":\"2026-04-10\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Peryl\",\"title\":\"A03_02\",\"label\":\"Peryl (Bandcamp)\",\"bpm\":132.9,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":48.4,\"sim\":3.62,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://peryl.bandcamp.com/track/a03-02\",\"bands\":[2.3,73.5,11.6,8.2,2.3,0.5,0.7,0.9]},{\"id\":\"t075\",\"stato\":\"Uscito\",\"date\":\"2026-04-10\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Peryl\",\"title\":\"A03_01\",\"label\":\"Peryl (Bandcamp)\",\"bpm\":134,\"key\":\"Fm\",\"cam\":\"4A\",\"lowpeak\":43.1,\"sim\":3.94,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://peryl.bandcamp.com/track/a03-01\",\"bands\":[4.5,63.4,18.4,8.6,3.7,0.4,0.7,0.4]},{\"id\":\"t076\",\"stato\":\"Uscito\",\"date\":\"2026-04-10\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Oliver Rosemann\",\"title\":\"Possibility turns probability\",\"label\":\"PoleGroup\",\"bpm\":138,\"key\":\"Bm\",\"cam\":\"10A\",\"lowpeak\":59.2,\"sim\":0.62,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://polegroup.bandcamp.com/track/possibility-turns-probability\",\"bands\":[0.1,61.5,20.9,11.0,3.9,1.2,1.0,0.5]},{\"id\":\"t077\",\"stato\":\"Uscito\",\"date\":\"2026-04-10\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Oliver Rosemann\",\"title\":\"Thought becomes thing\",\"label\":\"PoleGroup\",\"bpm\":138,\"key\":\"A#m\",\"cam\":\"3A\",\"lowpeak\":59.2,\"sim\":2.41,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://polegroup.bandcamp.com/track/thought-becomes-thing\",\"bands\":[0.3,59.5,20.8,10.8,2.9,0.9,3.3,1.5]},{\"id\":\"t078\",\"stato\":\"Uscito\",\"date\":\"2026-04-03\",\"ref\":\"Designer Concrete Boots\",\"set\":\"riferimento\",\"artist\":\"dc11\",\"title\":\"Designer Concrete Boots\",\"label\":\"Falling Ethics\",\"bpm\":138,\"key\":\"Bm\",\"cam\":\"10A\",\"lowpeak\":53.8,\"sim\":0,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://fallingethics.bandcamp.com/track/designer-concrete-boots\",\"bands\":[0.3,62.2,20.8,11.1,1.3,0.8,1.9,1.6]},{\"id\":\"t079\",\"stato\":\"Uscito\",\"date\":\"2026-04-03\",\"ref\":\"Designer Concrete Boots\",\"set\":\"stesso EP (Stuck In The Overhead)\",\"artist\":\"dc11\",\"title\":\"Stuck In The Overhead\",\"label\":\"Falling Ethics\",\"bpm\":133,\"key\":\"C#m\",\"cam\":\"12A\",\"lowpeak\":64.6,\"sim\":4.51,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://fallingethics.bandcamp.com/track/stuck-in-the-overhead\",\"bands\":[3.2,65.1,15.0,5.6,1.9,4.8,2.9,1.4]},{\"id\":\"t080\",\"stato\":\"Uscito\",\"date\":\"2026-04-03\",\"ref\":\"Designer Concrete Boots\",\"set\":\"stesso EP (Stuck In The Overhead)\",\"artist\":\"dc11\",\"title\":\"One Verse No Chorus\",\"label\":\"Falling Ethics\",\"bpm\":135,\"key\":\"D\",\"cam\":\"10B\",\"lowpeak\":48.4,\"sim\":2.14,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://fallingethics.bandcamp.com/track/one-verse-no-chorus\",\"bands\":[0.9,63.0,17.9,10.9,1.6,2.0,2.7,0.9]},{\"id\":\"t081\",\"stato\":\"Uscito\",\"date\":\"2026-04-03\",\"ref\":\"Designer Concrete Boots\",\"set\":\"stesso EP (Stuck In The Overhead)\",\"artist\":\"dc11\",\"title\":\"Beste Norabideak\",\"label\":\"Falling Ethics\",\"bpm\":138,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":48.4,\"sim\":2.14,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://fallingethics.bandcamp.com/track/beste-norabideak\",\"bands\":[1.9,62.0,10.7,12.9,3.8,4.9,2.7,0.8]},{\"id\":\"t082\",\"stato\":\"Uscito\",\"date\":\"2026-04-03\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Peryl\",\"title\":\"FORM 02\",\"label\":\"Semantica\",\"bpm\":132,\"key\":\"Fm\",\"cam\":\"4A\",\"lowpeak\":48.4,\"sim\":1.82,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://semanticarecords.bandcamp.com/track/form-02\",\"bands\":[2.6,55.7,24.2,14.3,2.4,0.5,0.2,0.1]},{\"id\":\"t083\",\"stato\":\"Uscito\",\"date\":\"2026-04-03\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Lewis Fautzi\",\"title\":\"Inner Mechanism\",\"label\":\"Mutual Rytm\",\"bpm\":138,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":2.14,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://mutual-rytm.bandcamp.com/track/inner-mechanism\",\"bands\":[0.7,40.1,38.8,12.7,3.6,1.0,2.2,0.8]},{\"id\":\"t084\",\"stato\":\"Uscito\",\"date\":\"2026-03-13\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Ribé & Roll Dann\",\"title\":\"Sub Terra\",\"label\":\"Mutual Rytm\",\"bpm\":146,\"key\":\"A#m\",\"cam\":\"3A\",\"lowpeak\":70,\"sim\":2.07,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://mutual-rytm.bandcamp.com/track/sub-terra\",\"bands\":[0.2,51.2,28.6,11.6,3.8,1.7,1.9,1.0]},{\"id\":\"t085\",\"stato\":\"Uscito\",\"date\":\"2026-02-27\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"THISISTHX\",\"title\":\"Ultravisitor\",\"label\":\"Special Series\",\"bpm\":140,\"key\":\"B\",\"cam\":\"1B\",\"lowpeak\":53.8,\"sim\":1.73,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://specialseries.bandcamp.com/track/ultravisitor\",\"bands\":[1.9,48.3,25.7,10.3,6.1,4.4,2.0,1.4]},{\"id\":\"t086\",\"stato\":\"Uscito\",\"date\":\"2026-02-27\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Erik Luebs\",\"title\":\"Acetic\",\"label\":\"Non Series\",\"bpm\":135,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":43.1,\"sim\":2.13,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://nonseries.bandcamp.com/track/acetic\",\"bands\":[18.3,47.9,11.6,11.8,8.2,1.4,0.5,0.4]},{\"id\":\"t087\",\"stato\":\"Uscito\",\"date\":\"2026-02-27\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Erik Luebs\",\"title\":\"Vibrating Membrane\",\"label\":\"Non Series\",\"bpm\":135,\"key\":\"A#m\",\"cam\":\"3A\",\"lowpeak\":59.2,\"sim\":2.9,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://nonseries.bandcamp.com/track/vibrating-membrane\",\"bands\":[9.8,50.2,16.4,14.0,6.5,1.0,1.3,0.7]},{\"id\":\"t088\",\"stato\":\"Uscito\",\"date\":\"2026-02-24\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Disguised x FANK\",\"title\":\"Where They At\",\"label\":\"Vault Records\",\"bpm\":143,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":59.2,\"sim\":1.44,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://vaultrecords.bandcamp.com/track/where-they-at\",\"bands\":[2.9,53.0,20.6,15.4,3.6,1.5,1.6,1.4]},{\"id\":\"t089\",\"stato\":\"Uscito\",\"date\":\"2026-02-17\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Antigone\",\"title\":\"OSTINATO IV\",\"label\":\"Rødhåd (Bandcamp)\",\"bpm\":128,\"key\":\"Em\",\"cam\":\"9A\",\"lowpeak\":48.4,\"sim\":5.04,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://rodhad.bandcamp.com/track/antigone-ostinato-iv\",\"bands\":[3.3,72.0,8.9,6.3,6.6,1.6,0.8,0.4]},{\"id\":\"t090\",\"stato\":\"Uscito\",\"date\":\"2026-02-13\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Vinicius Honorio & R.M.K\",\"title\":\"Berlin\",\"label\":\"Blueprint\",\"bpm\":138,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":2.2,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://blueprintrecords.bandcamp.com/track/berlin\",\"bands\":[0.4,39.1,38.3,11.2,7.8,0.9,1.4,0.8]},{\"id\":\"t091\",\"stato\":\"Uscito\",\"date\":\"2026-02-13\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Vinicius Honorio & R.M.K\",\"title\":\"In My House\",\"label\":\"Blueprint\",\"bpm\":140,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":2.56,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://blueprintrecords.bandcamp.com/track/in-my-house\",\"bands\":[0.8,62.2,15.0,13.1,3.7,2.1,2.0,0.9]},{\"id\":\"t092\",\"stato\":\"Uscito\",\"date\":\"2026-02-06\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Sciahri\",\"title\":\"Essenza\",\"label\":\"Sublunar\",\"bpm\":138,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":2.7,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://sublunarrecords.bandcamp.com/track/essenza\",\"bands\":[0.9,66.4,13.8,12.9,3.0,0.9,1.2,0.9]},{\"id\":\"t093\",\"stato\":\"Uscito\",\"date\":\"2026-02-06\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Sciahri\",\"title\":\"Just 30 Seconds\",\"label\":\"Sublunar\",\"bpm\":141,\"key\":\"D#\",\"cam\":\"5B\",\"lowpeak\":48.4,\"sim\":2.9,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://sublunarrecords.bandcamp.com/track/just-30-seconds\",\"bands\":[3.5,62.0,21.0,8.6,2.9,0.9,0.5,0.5]},{\"id\":\"t094\",\"stato\":\"Uscito\",\"date\":\"2026-02-06\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Nørbak\",\"title\":\"Chuva\",\"label\":\"Token\",\"bpm\":138,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":2.02,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://tokenrecords.bandcamp.com/track/chuva\",\"bands\":[0.2,50.1,17.2,20.1,5.6,3.6,1.9,1.2]},{\"id\":\"t095\",\"stato\":\"Uscito\",\"date\":\"2026-02-06\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Kike Pravda\",\"title\":\"Guided by Light\",\"label\":\"Semantica\",\"bpm\":137,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":53.8,\"sim\":3.76,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://semanticarecords.bandcamp.com/track/guided-by-light\",\"bands\":[11.4,45.8,20.7,16.5,2.6,0.7,1.6,0.6]},{\"id\":\"t096\",\"stato\":\"Uscito\",\"date\":\"2026-01-30\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Perc\",\"title\":\"Morgen\",\"label\":\"Perc Trax\",\"bpm\":140,\"key\":\"Em\",\"cam\":\"9A\",\"lowpeak\":43.1,\"sim\":3.98,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://perctrax.bandcamp.com/track/morgen\",\"bands\":[13.9,46.0,21.3,12.4,5.3,0.6,0.2,0.1]},{\"id\":\"t097\",\"stato\":\"Uscito\",\"date\":\"2026-01-30\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Perc\",\"title\":\"See Yourself\",\"label\":\"Perc Trax\",\"bpm\":143,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":53.8,\"sim\":4.25,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://perctrax.bandcamp.com/track/see-yourself\",\"bands\":[12.1,45.4,20.9,14.8,5.0,0.6,0.5,0.5]},{\"id\":\"t098\",\"stato\":\"Uscito\",\"date\":\"2026-01-20\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Peryl\",\"title\":\"Synthetic Dawn\",\"label\":\"Peryl (Bandcamp)\",\"bpm\":126,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":48.4,\"sim\":3.21,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://peryl.bandcamp.com/track/synthetic-dawn\",\"bands\":[0.7,72.2,17.7,5.8,1.9,1.2,0.3,0.1]},{\"id\":\"t099\",\"stato\":\"Uscito\",\"date\":\"2026-01-20\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Peryl\",\"title\":\"Wave Field\",\"label\":\"Peryl (Bandcamp)\",\"bpm\":137.1,\"key\":\"E\",\"cam\":\"12B\",\"lowpeak\":59.2,\"sim\":2.38,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://peryl.bandcamp.com/track/wave-field\",\"bands\":[1.6,42.6,22.8,20.1,8.8,2.6,1.4,0.2]},{\"id\":\"t100\",\"stato\":\"Uscito\",\"date\":\"2025-12-12\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Isabel Soto\",\"title\":\"Elemental Core\",\"label\":\"Ostgut Ton\",\"bpm\":138,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":1.77,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://ostgut.bandcamp.com/track/elemental-core\",\"bands\":[0.0,60.4,24.8,9.0,4.4,1.1,0.2,0.0]},{\"id\":\"t101\",\"stato\":\"Uscito\",\"date\":\"2025-12-12\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Isabel Soto\",\"title\":\"Foxglove\",\"label\":\"Ostgut Ton\",\"bpm\":138,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":1.97,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://ostgut.bandcamp.com/track/foxglove\",\"bands\":[1.0,63.0,18.2,12.4,3.3,1.6,0.2,0.3]},{\"id\":\"t102\",\"stato\":\"Uscito\",\"date\":\"2025-12-05\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Phase Fatale & P.E.A.R.L.\",\"title\":\"Climbing Silver\",\"label\":\"Falling Ethics\",\"bpm\":138,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":0.59,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://fallingethics.bandcamp.com/track/climbing-silver\",\"bands\":[2.4,54.7,29.0,4.1,5.5,2.2,1.7,0.5]},{\"id\":\"t103\",\"stato\":\"Uscito\",\"date\":\"2025-12-05\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Phase Fatale & P.E.A.R.L.\",\"title\":\"Wipe Out The Past\",\"label\":\"Falling Ethics\",\"bpm\":138,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":2.02,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://fallingethics.bandcamp.com/track/wipe-out-the-past\",\"bands\":[0.4,61.9,21.3,9.2,4.9,1.7,0.4,0.2]},{\"id\":\"t104\",\"stato\":\"Uscito\",\"date\":\"2025-11-07\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Kameliia & Rødhåd\",\"title\":\"CARMINE 02 [240715]\",\"label\":\"WSNWG\",\"bpm\":138,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":3.68,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://rodhad.bandcamp.com/track/carmine-02-240715\",\"bands\":[0.1,44.0,25.2,17.8,9.1,2.0,1.2,0.6]},{\"id\":\"t105\",\"stato\":\"Uscito\",\"date\":\"2025-10-17\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Adriana Lopez\",\"title\":\"A series of propositions\",\"label\":\"Warm Up Recordings\",\"bpm\":128,\"key\":\"G#\",\"cam\":\"4B\",\"lowpeak\":53.8,\"sim\":5.16,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://warmuprecordings.bandcamp.com/track/a-series-of-propositions\",\"bands\":[2.0,77.4,6.7,8.9,0.8,1.7,1.5,0.7]},{\"id\":\"t106\",\"stato\":\"Uscito\",\"date\":\"2025-10-17\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Adriana Lopez\",\"title\":\"Negative publicity\",\"label\":\"Warm Up Recordings\",\"bpm\":138,\"key\":\"Fm\",\"cam\":\"4A\",\"lowpeak\":43.1,\"sim\":2.99,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://warmuprecordings.bandcamp.com/track/negative-publicity\",\"bands\":[7.4,61.9,16.6,11.0,1.3,0.8,0.7,0.2]},{\"id\":\"t107\",\"stato\":\"Uscito\",\"date\":\"2025-10-10\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Phara\",\"title\":\"Second Skin\",\"label\":\"Token\",\"bpm\":138,\"key\":\"Fm\",\"cam\":\"4A\",\"lowpeak\":53.8,\"sim\":3.53,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://tokenrecords.bandcamp.com/track/second-skin\",\"bands\":[0.8,52.7,26.8,14.1,2.3,2.3,0.9,0.1]},{\"id\":\"t108\",\"stato\":\"Uscito\",\"date\":\"2025-09-17\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"THISISTHX\",\"title\":\"Unknown Balances\",\"label\":\"Complex Fractals\",\"bpm\":142,\"key\":\"G\",\"cam\":\"9B\",\"lowpeak\":53.8,\"sim\":3.71,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://complexfractals.bandcamp.com/track/unknown-balances\",\"bands\":[0.2,58.4,20.1,15.5,2.8,0.9,1.5,0.6]},{\"id\":\"t109\",\"stato\":\"Uscito\",\"date\":\"2025-09-17\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Facundo Rondinella\",\"title\":\"Toolwork 01\",\"label\":\"Complex Fractals\",\"bpm\":140,\"key\":\"D#m\",\"cam\":\"2A\",\"lowpeak\":48.4,\"sim\":3.24,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://complexfractals.bandcamp.com/track/toolwork-01\",\"bands\":[4.3,71.5,6.8,8.2,4.2,2.0,2.5,0.4]},{\"id\":\"t110\",\"stato\":\"Uscito\",\"date\":\"2025-09-12\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Sev Dah\",\"title\":\"Summer Love\",\"label\":\"Falling Ethics\",\"bpm\":136,\"key\":\"A\",\"cam\":\"11B\",\"lowpeak\":53.8,\"sim\":1.33,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://fallingethics.bandcamp.com/track/summer-love\",\"bands\":[0.3,53.8,28.9,11.9,1.1,0.7,2.4,0.8]},{\"id\":\"t111\",\"stato\":\"Uscito\",\"date\":\"2025-09-12\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Sev Dah\",\"title\":\"Dry Pond\",\"label\":\"Falling Ethics\",\"bpm\":140,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":53.8,\"sim\":2.14,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://fallingethics.bandcamp.com/track/dry-pond\",\"bands\":[0.1,60.0,26.3,7.7,2.2,0.7,2.3,0.8]},{\"id\":\"t112\",\"stato\":\"Uscito\",\"date\":\"2025-09-04\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Sciahri & Hertz Collision\",\"title\":\"Contatto\",\"label\":\"Sublunar\",\"bpm\":140,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":53.8,\"sim\":1.4,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://sublunarrecords.bandcamp.com/track/contatto\",\"bands\":[0.2,69.3,11.2,12.0,3.0,1.3,2.4,0.7]},{\"id\":\"t113\",\"stato\":\"Uscito\",\"date\":\"2025-08-15\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"THISISTHX\",\"title\":\"Nothing Is Something\",\"label\":\"Planet Rhythm\",\"bpm\":142,\"key\":\"Bm\",\"cam\":\"10A\",\"lowpeak\":53.8,\"sim\":1.07,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://planetrhythm.bandcamp.com/track/nothing-is-something\",\"bands\":[2.1,50.9,17.4,14.4,3.6,7.9,2.8,0.8]},{\"id\":\"t114\",\"stato\":\"Uscito\",\"date\":\"2025-08-15\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"THISISTHX\",\"title\":\"Vega\",\"label\":\"Planet Rhythm\",\"bpm\":142,\"key\":\"A\",\"cam\":\"11B\",\"lowpeak\":53.8,\"sim\":3.09,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://planetrhythm.bandcamp.com/track/vega\",\"bands\":[2.6,56.0,19.0,11.0,4.7,3.3,1.9,1.5]},{\"id\":\"t115\",\"stato\":\"Uscito\",\"date\":\"2025-08-07\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Disguised\",\"title\":\"Indigo (Hertz Collision Remix)\",\"label\":\"INHERIT\",\"bpm\":140,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":48.4,\"sim\":1.49,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://inheritberlin.bandcamp.com/track/indigo-hertz-collision-remix\",\"bands\":[0.7,67.3,19.0,7.9,1.7,1.2,1.6,0.6]},{\"id\":\"t116\",\"stato\":\"Uscito\",\"date\":\"2025-08-07\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Disguised\",\"title\":\"Dirty Marbles\",\"label\":\"INHERIT\",\"bpm\":145,\"key\":\"G#\",\"cam\":\"4B\",\"lowpeak\":53.8,\"sim\":2.42,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://inheritberlin.bandcamp.com/track/dirty-marbles\",\"bands\":[1.8,46.8,27.0,14.5,5.4,2.8,1.1,0.6]},{\"id\":\"t117\",\"stato\":\"Uscito\",\"date\":\"2025-08-07\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"Disguised\",\"title\":\"Indigo\",\"label\":\"INHERIT\",\"bpm\":146,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":53.8,\"sim\":2.48,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://inheritberlin.bandcamp.com/track/indigo\",\"bands\":[4.6,53.4,21.0,10.4,3.5,2.4,3.1,1.6]},{\"id\":\"t118\",\"stato\":\"Uscito\",\"date\":\"2025-07-25\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Ribé & Roll Dann\",\"title\":\"Tregua\",\"label\":\"Klockworks\",\"bpm\":142,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":3.08,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://riberolldann.bandcamp.com/track/tregua\",\"bands\":[0.1,48.4,32.6,14.0,2.4,0.9,1.3,0.2]},{\"id\":\"t119\",\"stato\":\"Uscito\",\"date\":\"2025-07-25\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Ribé & Roll Dann\",\"title\":\"Interludio\",\"label\":\"Klockworks\",\"bpm\":142,\"key\":\"D#\",\"cam\":\"5B\",\"lowpeak\":53.8,\"sim\":5.22,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://riberolldann.bandcamp.com/track/interludio\",\"bands\":[0.1,43.6,25.6,23.1,2.3,1.6,2.9,0.8]},{\"id\":\"t120\",\"stato\":\"Uscito\",\"date\":\"2025-07-18\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Oscar Mulero\",\"title\":\"Shiny Gold And Green Spots\",\"label\":\"Falling Ethics\",\"bpm\":139,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":59.2,\"sim\":0.81,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://fallingethics.bandcamp.com/track/shiny-gold-and-green-spots\",\"bands\":[0.9,50.8,31.2,12.7,1.0,0.9,1.8,0.6]},{\"id\":\"t121\",\"stato\":\"Uscito\",\"date\":\"2025-07-18\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Oscar Mulero\",\"title\":\"La Loma\",\"label\":\"Falling Ethics\",\"bpm\":139,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":53.8,\"sim\":0.84,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://fallingethics.bandcamp.com/track/la-loma\",\"bands\":[0.8,60.6,22.0,11.4,1.9,0.5,2.4,0.4]},{\"id\":\"t122\",\"stato\":\"Uscito\",\"date\":\"2025-06-20\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Rene Wise\",\"title\":\"Insomnia\",\"label\":\"Enemy Records\",\"bpm\":130,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":53.8,\"sim\":3.55,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://enemyrecords.bandcamp.com/track/insomnia-4\",\"bands\":[0.2,64.9,18.6,8.2,4.3,1.4,1.6,0.7]},{\"id\":\"t123\",\"stato\":\"Uscito\",\"date\":\"2025-06-20\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Rene Wise\",\"title\":\"Anxiety\",\"label\":\"Enemy Records\",\"bpm\":132,\"key\":\"C#\",\"cam\":\"3B\",\"lowpeak\":53.8,\"sim\":2.68,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://enemyrecords.bandcamp.com/track/anxiety\",\"bands\":[0.3,69.6,18.4,6.7,2.5,1.0,1.0,0.4]},{\"id\":\"t124\",\"stato\":\"Uscito\",\"date\":\"2025-06-20\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Psyk\",\"title\":\"Resonant Modulation\",\"label\":\"Non Series\",\"bpm\":132.9,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":3.83,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://nonseries.bandcamp.com/track/resonant-modulation\",\"bands\":[9.5,57.2,14.7,10.0,6.0,0.8,0.5,1.1]},{\"id\":\"t125\",\"stato\":\"Uscito\",\"date\":\"2025-06-20\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"P.E.A.R.L.\",\"title\":\"Unknown V\",\"label\":\"Falling Ethics\",\"bpm\":138,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":0.77,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://fallingethics.bandcamp.com/track/unknown-v\",\"bands\":[0.8,78.5,12.8,1.9,1.3,2.2,1.8,0.6]},{\"id\":\"t126\",\"stato\":\"Uscito\",\"date\":\"2025-06-06\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Inox Traxx & Rødhåd\",\"title\":\"SILVENE 01 [240122]\",\"label\":\"WSNWG\",\"bpm\":135,\"key\":\"Bm\",\"cam\":\"10A\",\"lowpeak\":64.6,\"sim\":4.53,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://rodhad.bandcamp.com/track/silvene-01-240122\",\"bands\":[0.1,53.8,21.5,11.5,6.4,2.8,2.5,1.4]},{\"id\":\"t127\",\"stato\":\"Uscito\",\"date\":\"2025-05-02\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"Declan James\",\"title\":\"Solar Plexus\",\"label\":\"Synergie (SYEP033, Bandcamp THISISTHX)\",\"bpm\":138,\"key\":\"A\",\"cam\":\"11B\",\"lowpeak\":48.4,\"sim\":3.8,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://thisisthx.bandcamp.com/track/solar-plexus-syep033\",\"bands\":[0.6,72.1,12.5,8.6,2.0,2.6,0.7,0.9]},{\"id\":\"t128\",\"stato\":\"Uscito\",\"date\":\"2025-05-02\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Alexander Johansson & Mattias Fridell\",\"title\":\"Mikrohabitat\",\"label\":\"Blueprint\",\"bpm\":136,\"key\":\"F\",\"cam\":\"7B\",\"lowpeak\":59.2,\"sim\":1.22,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://blueprintrecords.bandcamp.com/track/mikrohabitat\",\"bands\":[6.8,40.5,27.2,13.8,6.8,2.0,1.9,0.7]},{\"id\":\"t129\",\"stato\":\"Uscito\",\"date\":\"2025-04-28\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"THISISTHX\",\"title\":\"Messier 51\",\"label\":\"Illegal Alien Records\",\"bpm\":140,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":53.8,\"sim\":3.16,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://illegalalienrecords.bandcamp.com/track/thisisthx-messier-51\",\"bands\":[0.6,38.9,24.3,24.0,7.2,2.3,1.7,1.0]},{\"id\":\"t130\",\"stato\":\"Uscito\",\"date\":\"2025-04-28\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"THISISTHX\",\"title\":\"Caldwell 49\",\"label\":\"Illegal Alien Records\",\"bpm\":140,\"key\":\"C#m\",\"cam\":\"12A\",\"lowpeak\":53.8,\"sim\":3.31,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://illegalalienrecords.bandcamp.com/track/thisisthx-caldwell-49\",\"bands\":[0.2,61.4,18.2,15.7,2.4,0.7,0.9,0.5]},{\"id\":\"t131\",\"stato\":\"Uscito\",\"date\":\"2025-03-07\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Nastia Reigel\",\"title\":\"What Can You Do\",\"label\":\"Falling Ethics\",\"bpm\":138,\"key\":\"A#m\",\"cam\":\"3A\",\"lowpeak\":86.1,\"sim\":0.94,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://fallingethics.bandcamp.com/track/what-can-you-do\",\"bands\":[5.4,37.7,33.7,10.8,6.3,4.4,1.4,0.2]},{\"id\":\"t132\",\"stato\":\"Uscito\",\"date\":\"2025-03-07\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Nastia Reigel\",\"title\":\"If So Then\",\"label\":\"Falling Ethics\",\"bpm\":138,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":53.8,\"sim\":1.29,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://fallingethics.bandcamp.com/track/if-so-then\",\"bands\":[2.4,81.7,5.9,5.3,1.6,1.2,1.4,0.6]},{\"id\":\"t133\",\"stato\":\"Uscito\",\"date\":\"2025-02-21\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"CONCEPTUAL\",\"title\":\"Approach Slowly\",\"label\":\"PoleGroup\",\"bpm\":133.2,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":2.92,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://polegroup.bandcamp.com/track/approach-slowly\",\"bands\":[13.7,68.9,10.2,1.9,3.5,0.5,0.3,0.2]},{\"id\":\"t134\",\"stato\":\"Uscito\",\"date\":\"2025-02-13\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Ketch & Hertz Collision\",\"title\":\"Anechoic\",\"label\":\"Hertz Collision (self-released)\",\"bpm\":140,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":5.35,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://hertzcollision.bandcamp.com/track/anechoic\",\"bands\":[0.1,57.1,20.8,14.6,6.2,0.6,0.4,0.2]},{\"id\":\"t135\",\"stato\":\"Uscito\",\"date\":\"2025-02-07\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Uväll & Rødhåd\",\"title\":\"KINVA 02 [240206]\",\"label\":\"WSNWG\",\"bpm\":138,\"key\":\"G#m\",\"cam\":\"1A\",\"lowpeak\":53.8,\"sim\":3.89,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://rodhad.bandcamp.com/track/kinva-02-240206\",\"bands\":[0.0,59.2,20.4,12.7,3.3,1.7,2.0,0.7]},{\"id\":\"t136\",\"stato\":\"Uscito\",\"date\":\"2025-01-13\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"Luigi Tozzi\",\"title\":\"Sentient\",\"label\":\"Hypnus\",\"bpm\":130,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":43.1,\"sim\":10.86,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://hypnus.bandcamp.com/track/sentient\",\"bands\":[3.7,70.5,13.5,7.9,3.3,0.8,0.2,0.0]},{\"id\":\"t137\",\"stato\":\"Uscito\",\"date\":\"2024-12-12\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"FANK\",\"title\":\"Octo Fades\",\"label\":\"INHERIT\",\"bpm\":145,\"key\":\"D\",\"cam\":\"10B\",\"lowpeak\":48.4,\"sim\":2.36,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://inheritberlin.bandcamp.com/track/octo-fades\",\"bands\":[0.5,46.8,28.4,8.7,7.2,3.2,3.6,1.5]},{\"id\":\"t138\",\"stato\":\"Uscito\",\"date\":\"2024-11-22\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Kwartz\",\"title\":\"The Golden Hour\",\"label\":\"PoleGroup\",\"bpm\":138,\"key\":\"E\",\"cam\":\"12B\",\"lowpeak\":53.8,\"sim\":1.2,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://polegroup.bandcamp.com/track/the-golden-hour\",\"bands\":[3.1,62.3,20.5,7.2,2.6,1.9,1.6,0.7]},{\"id\":\"t139\",\"stato\":\"Uscito\",\"date\":\"2024-06-07\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"UFO95 & Rødhåd\",\"title\":\"LAVANDE 02 [240107.1]\",\"label\":\"WSNWG\",\"bpm\":138,\"key\":\"A#m\",\"cam\":\"3A\",\"lowpeak\":59.2,\"sim\":3.14,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://rodhad.bandcamp.com/track/lavande-02-2401071\",\"bands\":[1.9,57.5,25.3,8.5,2.7,1.6,2.3,0.2]},{\"id\":\"t140\",\"stato\":\"Uscito\",\"date\":\"2024-06-07\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"UFO95 & Rødhåd\",\"title\":\"LAVANDE 01 [240107.2]\",\"label\":\"WSNWG\",\"bpm\":138,\"key\":\"Fm\",\"cam\":\"4A\",\"lowpeak\":43.1,\"sim\":5.2,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://rodhad.bandcamp.com/track/lavande-01-2401072\",\"bands\":[2.7,58.6,21.1,6.6,4.4,3.6,2.5,0.4]},{\"id\":\"t141\",\"stato\":\"Uscito\",\"date\":\"2024-05-31\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"THISISTHX\",\"title\":\"Source Code\",\"label\":\"Antistage Records\",\"bpm\":140,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":53.8,\"sim\":1.27,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://antistagerecords.bandcamp.com/track/source-code\",\"bands\":[0.3,38.1,25.8,20.5,7.0,4.7,2.3,1.2]},{\"id\":\"t142\",\"stato\":\"Uscito\",\"date\":\"2024-05-31\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"THISISTHX\",\"title\":\"Directional\",\"label\":\"Antistage Records\",\"bpm\":140,\"key\":\"F#m\",\"cam\":\"11A\",\"lowpeak\":53.8,\"sim\":1.9,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://antistagerecords.bandcamp.com/track/directional\",\"bands\":[0.2,29.1,18.3,28.5,8.8,10.8,2.4,2.0]},{\"id\":\"t143\",\"stato\":\"Uscito\",\"date\":\"2024-05-15\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"THISISTHX\",\"title\":\"Perpetual Rotation\",\"label\":\"THISISTHX (self-release)\",\"bpm\":140,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":53.8,\"sim\":2,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://thisisthx.bandcamp.com/track/perpetual-rotation-2\",\"bands\":[1.3,62.8,16.4,8.2,2.5,3.6,4.1,1.0]},{\"id\":\"t144\",\"stato\":\"Uscito\",\"date\":\"2024-05-15\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"THISISTHX\",\"title\":\"Cyclotron\",\"label\":\"THISISTHX (self-release)\",\"bpm\":140,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":53.8,\"sim\":3.45,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://thisisthx.bandcamp.com/track/cyclotron-2\",\"bands\":[0.4,66.7,17.8,11.3,1.9,0.5,0.9,0.4]},{\"id\":\"t145\",\"stato\":\"Uscito\",\"date\":\"2024-03-15\",\"ref\":\"Designer Concrete Boots\",\"set\":\"nuovo\",\"artist\":\"Xupid\",\"title\":\"Fractal Keel\",\"label\":\"Falling Ethics\",\"bpm\":143,\"key\":\"G#\",\"cam\":\"4B\",\"lowpeak\":53.8,\"sim\":3.72,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://fallingethics.bandcamp.com/track/fractal-keel\",\"bands\":[6.6,53.7,23.6,4.4,4.1,1.4,5.2,0.8]},{\"id\":\"t146\",\"stato\":\"Uscito\",\"date\":\"2023-10-18\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"THISISTHX\",\"title\":\"Antistar\",\"label\":\"THISISTHX (self-release)\",\"bpm\":140,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":53.8,\"sim\":2.91,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://thisisthx.bandcamp.com/track/antistar\",\"bands\":[0.2,57.1,15.4,17.2,5.7,1.5,1.9,0.8]},{\"id\":\"t147\",\"stato\":\"Uscito\",\"date\":\"2023-10-18\",\"ref\":\"Ghost\",\"set\":\"nuovo\",\"artist\":\"THISISTHX\",\"title\":\"Caustica\",\"label\":\"THISISTHX (self-release)\",\"bpm\":140,\"key\":\"A\",\"cam\":\"11B\",\"lowpeak\":53.8,\"sim\":3.41,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://thisisthx.bandcamp.com/track/caustica\",\"bands\":[0.2,64.9,19.6,10.7,2.6,0.7,0.7,0.6]},{\"id\":\"t148\",\"stato\":\"Uscito\",\"date\":\"2023-10-13\",\"ref\":\"Kallait 03\",\"set\":\"riferimento\",\"artist\":\"Peryl & Rødhåd\",\"title\":\"KALLAIT 03 [230211.3]\",\"label\":\"WSNWG\",\"bpm\":135,\"key\":\"Dm\",\"cam\":\"7A\",\"lowpeak\":48.4,\"sim\":0,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://rodhad.bandcamp.com/track/kallait-03-2302113\",\"bands\":[0.1,60.2,21.5,10.1,6.2,0.8,0.7,0.3]},{\"id\":\"t149\",\"stato\":\"Uscito\",\"date\":\"2023-10-13\",\"ref\":\"Kallait 03\",\"set\":\"stesso EP (Kallait)\",\"artist\":\"Peryl & Rødhåd\",\"title\":\"KALLAIT 04 [230211.1]\",\"label\":\"WSNWG\",\"bpm\":135,\"key\":\"Fm\",\"cam\":\"4A\",\"lowpeak\":43.1,\"sim\":0.88,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://rodhad.bandcamp.com/track/kallait-04-2302111\",\"bands\":[4.7,59.8,17.3,12.1,3.8,1.4,0.8,0.1]},{\"id\":\"t150\",\"stato\":\"Uscito\",\"date\":\"2023-10-13\",\"ref\":\"Kallait 03\",\"set\":\"stesso EP (Kallait)\",\"artist\":\"Peryl & Rødhåd\",\"title\":\"KALLAIT 02 [230831]\",\"label\":\"WSNWG\",\"bpm\":135,\"key\":\"G\",\"cam\":\"9B\",\"lowpeak\":48.4,\"sim\":1.83,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://rodhad.bandcamp.com/track/kallait-02-230831\",\"bands\":[0.1,43.0,22.4,27.1,5.1,0.9,0.8,0.6]},{\"id\":\"t151\",\"stato\":\"Uscito\",\"date\":\"2023-10-13\",\"ref\":\"Kallait 03\",\"set\":\"stesso EP (Kallait)\",\"artist\":\"Peryl & Rødhåd\",\"title\":\"KALLAIT 01 [230509]\",\"label\":\"WSNWG\",\"bpm\":136,\"key\":\"G\",\"cam\":\"9B\",\"lowpeak\":43.1,\"sim\":2.44,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://rodhad.bandcamp.com/track/kallait-01-230509\",\"bands\":[7.1,59.4,15.3,10.8,4.5,1.2,1.3,0.4]},{\"id\":\"t152\",\"stato\":\"Uscito\",\"date\":\"2023-06-12\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Ignez & Rødhåd\",\"title\":\"VERDUROUS 01 [220207.2]\",\"label\":\"WSNWG\",\"bpm\":135,\"key\":\"E\",\"cam\":\"12B\",\"lowpeak\":59.2,\"sim\":1.63,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://rodhad.bandcamp.com/track/verdurous-01-2202072\",\"bands\":[0.0,53.0,26.5,13.8,3.1,1.8,1.3,0.4]},{\"id\":\"t153\",\"stato\":\"Uscito\",\"date\":\"2023-06-12\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Ignez & Rødhåd\",\"title\":\"VERDUROUS 02 [221130.1]\",\"label\":\"WSNWG\",\"bpm\":135,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":2.23,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://rodhad.bandcamp.com/track/verdurous-02-2211301\",\"bands\":[0.1,68.1,16.2,8.8,3.3,1.6,1.3,0.5]},{\"id\":\"t154\",\"stato\":\"Uscito\",\"date\":\"2023-06-02\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Temudo\",\"title\":\"Scars\",\"label\":\"Klockworks\",\"bpm\":137,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":53.8,\"sim\":1.13,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://temudoklockworks.bandcamp.com/track/scars\",\"bands\":[0.7,50.9,20.2,19.2,6.4,2.1,0.4,0.2]},{\"id\":\"t155\",\"stato\":\"Uscito\",\"date\":\"2023-06-02\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Temudo\",\"title\":\"Minus 2\",\"label\":\"Klockworks\",\"bpm\":141,\"key\":\"G\",\"cam\":\"9B\",\"lowpeak\":64.6,\"sim\":4.28,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://temudoklockworks.bandcamp.com/track/minus-2\",\"bands\":[0.3,59.9,13.6,19.7,3.5,0.4,2.2,0.3]},{\"id\":\"t156\",\"stato\":\"Uscito\",\"date\":\"2023-05-05\",\"ref\":\"Nightrun\",\"set\":\"primo giro\",\"artist\":\"SHDW & Obscure Shape\",\"title\":\"Eraser\",\"label\":\"Mutual Rytm\",\"bpm\":143,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":53.8,\"sim\":4.85,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://mutual-rytm.bandcamp.com/track/eraser\",\"bands\":[1.0,50.3,22.6,7.6,4.2,4.9,6.3,3.1]},{\"id\":\"t157\",\"stato\":\"Uscito\",\"date\":\"2023-02-28\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Ignez & Rødhåd\",\"title\":\"VERMILLION 01 [220207.1]\",\"label\":\"WSNWG\",\"bpm\":135,\"key\":\"Am\",\"cam\":\"8A\",\"lowpeak\":53.8,\"sim\":1.75,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://rodhad.bandcamp.com/track/vermillion-01-2202071\",\"bands\":[0.1,52.7,26.0,14.0,4.4,1.1,1.3,0.4]},{\"id\":\"t158\",\"stato\":\"Uscito\",\"date\":\"2023-01-20\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"SHDW & Obscure Shape\",\"title\":\"Vergessene Welt\",\"label\":\"From Another Mind\",\"bpm\":140,\"key\":\"F\",\"cam\":\"7B\",\"lowpeak\":59.2,\"sim\":1.48,\"sub\":\"Ipnotico luminoso / percussivo\",\"url\":\"https://fromanothermind.bandcamp.com/track/vergessene-welt\",\"bands\":[0.4,38.8,35.3,10.1,10.9,1.9,1.3,1.4]},{\"id\":\"t159\",\"stato\":\"Uscito\",\"date\":\"2023-01-20\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"SHDW & Obscure Shape\",\"title\":\"Planet Der Stürme\",\"label\":\"From Another Mind\",\"bpm\":144,\"key\":\"A#\",\"cam\":\"6B\",\"lowpeak\":59.2,\"sim\":1.66,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://fromanothermind.bandcamp.com/track/planet-der-st-rme\",\"bands\":[0.1,36.7,30.0,23.9,5.4,1.5,2.0,0.5]},{\"id\":\"t160\",\"stato\":\"Uscito\",\"date\":\"2022-09-22\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\".Vril & Rødhåd\",\"title\":\"PANGAEA\",\"label\":\"WSNWG\",\"bpm\":140,\"key\":\"F\",\"cam\":\"7B\",\"lowpeak\":64.6,\"sim\":3.26,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://outofplaceartefacts.bandcamp.com/track/pangaea\",\"bands\":[3.9,42.1,33.5,6.5,11.0,2.8,0.2,0.0]},{\"id\":\"t161\",\"stato\":\"Uscito\",\"date\":\"2022-05-20\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"JakoJako & Rødhåd\",\"title\":\"PASSERI\",\"label\":\"WSNWG\",\"bpm\":135,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":118.4,\"sim\":2.65,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://rodhad.bandcamp.com/track/passeri\",\"bands\":[0.0,0.6,4.6,43.7,45.0,5.9,0.2,0.0]},{\"id\":\"t162\",\"stato\":\"Uscito\",\"date\":\"2021-10-08\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Stef Mendesidis\",\"title\":\"Stalker\",\"label\":\"Klockworks\",\"bpm\":142,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":2.64,\"sub\":\"Deep / scuro ipnotico\",\"url\":\"https://stefmendesidis.bandcamp.com/track/stalker\",\"bands\":[2.8,67.8,12.5,8.6,6.9,0.8,0.6,0.1]},{\"id\":\"t163\",\"stato\":\"Uscito\",\"date\":\"2021-10-08\",\"ref\":\"Kallait 03\",\"set\":\"nuovo\",\"artist\":\"Stef Mendesidis\",\"title\":\"Profiler\",\"label\":\"Klockworks\",\"bpm\":142,\"key\":\"Gm\",\"cam\":\"6A\",\"lowpeak\":48.4,\"sim\":4.46,\"sub\":\"Raw / driving (bilanciato)\",\"url\":\"https://stefmendesidis.bandcamp.com/track/profiler\",\"bands\":[0.3,51.2,14.9,14.8,11.2,3.4,4.2,0.1]},{\"id\":\"t164\",\"stato\":\"Uscito\",\"date\":\"2016-04-01\",\"ref\":\"Nightrun\",\"set\":\"nuovo\",\"artist\":\"SHDW & Obscure Shape\",\"title\":\"Die Weisse Rose\",\"label\":\"From Another Mind\",\"bpm\":130,\"key\":\"A\",\"cam\":\"11B\",\"lowpeak\":43.1,\"sim\":5.47,\"sub\":\"Rumble ipnotico (sub continuo)\",\"url\":\"https://fromanothermind.bandcamp.com/track/die-weisse-rose\",\"bands\":[5.2,55.3,21.4,9.7,4.1,2.2,1.3,0.7]}]");
var SUBSTYLE = {
	"Rumble ipnotico (sub continuo)": {
		key: "rumble-ipnotico",
		short: "Rumble ipnotico"
	},
	"Deep / scuro ipnotico": {
		key: "deep-scuro",
		short: "Deep / scuro"
	},
	"Ipnotico luminoso / percussivo": {
		key: "ipnotico-luminoso",
		short: "Ipnotico luminoso"
	},
	"Raw / driving (bilanciato)": {
		key: "raw-driving",
		short: "Raw / driving"
	}
};
function subOf(t) {
	return SUBSTYLE[t.sub] ?? {
		key: "industrial",
		short: "Industrial"
	};
}
var references = () => tracks.filter((t) => t.set === "riferimento");
var CAMELOT_ADJ = {
	"1A": [
		"1A",
		"1B",
		"2A",
		"12A"
	],
	"1B": [
		"1B",
		"1A",
		"2B",
		"12B"
	],
	"2A": [
		"2A",
		"2B",
		"1A",
		"3A"
	],
	"2B": [
		"2B",
		"2A",
		"1B",
		"3B"
	],
	"3A": [
		"3A",
		"3B",
		"2A",
		"4A"
	],
	"3B": [
		"3B",
		"3A",
		"2B",
		"4B"
	],
	"4A": [
		"4A",
		"4B",
		"3A",
		"5A"
	],
	"4B": [
		"4B",
		"4A",
		"3B",
		"5B"
	],
	"5A": [
		"5A",
		"5B",
		"4A",
		"6A"
	],
	"5B": [
		"5B",
		"5A",
		"4B",
		"6B"
	],
	"6A": [
		"6A",
		"6B",
		"5A",
		"7A"
	],
	"6B": [
		"6B",
		"6A",
		"5B",
		"7B"
	],
	"7A": [
		"7A",
		"7B",
		"6A",
		"8A"
	],
	"7B": [
		"7B",
		"7A",
		"6B",
		"8B"
	],
	"8A": [
		"8A",
		"8B",
		"7A",
		"9A"
	],
	"8B": [
		"8B",
		"8A",
		"7B",
		"9B"
	],
	"9A": [
		"9A",
		"9B",
		"8A",
		"10A"
	],
	"9B": [
		"9B",
		"9A",
		"8B",
		"10B"
	],
	"10A": [
		"10A",
		"10B",
		"9A",
		"11A"
	],
	"10B": [
		"10B",
		"10A",
		"9B",
		"11B"
	],
	"11A": [
		"11A",
		"11B",
		"10A",
		"12A"
	],
	"11B": [
		"11B",
		"11A",
		"10B",
		"12B"
	],
	"12A": [
		"12A",
		"12B",
		"11A",
		"1A"
	],
	"12B": [
		"12B",
		"12A",
		"11B",
		"1B"
	]
};
function camelotCompatible(cam) {
	return CAMELOT_ADJ[cam] ?? [cam];
}
function deepRelative(refTrack, q = {}) {
	const bpmRange = q.bpmRange ?? 3;
	const allowed = q.camCompatible ?? true ? camelotCompatible(refTrack.cam) : [refTrack.cam];
	return tracks.filter((t) => {
		if (t.id === refTrack.id) return false;
		if (Math.abs(t.bpm - refTrack.bpm) > bpmRange) return false;
		if (t.cam && !allowed.includes(t.cam)) return false;
		if (q.sub && subOf(t).key !== q.sub) return false;
		return true;
	}).sort((a, b) => {
		const subA = subOf(a).key === subOf(refTrack).key ? 0 : 1;
		const subB = subOf(b).key === subOf(refTrack).key ? 0 : 1;
		if (subA !== subB) return subA - subB;
		const bpmA = Math.abs(a.bpm - refTrack.bpm);
		const bpmB = Math.abs(b.bpm - refTrack.bpm);
		if (bpmA !== bpmB) return bpmA - bpmB;
		return (a.sim || 99) - (b.sim || 99);
	}).slice(0, q.limit ?? 40);
}
function searchTracks(q) {
	const s = q.trim().toLowerCase();
	if (!s) return [];
	const num = s.match(/\b(1[2-5]\d)\b/);
	const words = s.replace(/\b1[2-5]\d\b/, "").trim();
	return tracks.filter((t) => {
		const okBpm = num ? Math.abs(t.bpm - Number(num[1])) <= 1 : true;
		const hay = `${t.artist} ${t.title} ${t.label} ${t.cam} ${t.sub}`.toLowerCase();
		return okBpm && (!words || words.split(/\s+/).every((w) => hay.includes(w)));
	}).slice(0, 24);
}
var TECHNO_FILTERS = [
	{
		id: "all",
		label: "Tutti"
	},
	{
		id: "rumble-ipnotico",
		label: "Rumble"
	},
	{
		id: "deep-scuro",
		label: "Deep"
	},
	{
		id: "ipnotico-luminoso",
		label: "Ipnotico"
	},
	{
		id: "raw-driving",
		label: "Raw"
	},
	{
		id: "industrial",
		label: "Industrial"
	}
];
function abletonNotes(track, relatives) {
	return [
		`RELATIVE Ableton notes — ${track.artist} — ${track.title}`,
		`BPM ${track.bpm} | Key ${track.cam} (${track.key ?? "?"}) | ${subOf(track).short}`,
		`Low peak ${track.lowpeak ?? "—"} Hz`,
		"",
		"Workflow Ableton Live",
		"1. Importa gli stems (Vocals / Drums / Bass / Piano / Guitar / Other) su tracce separate.",
		`2. Tempo progetto: ${track.bpm}. Warp: Complex o Complex Pro.`,
		`3. Hot cues: ${[
			"Intro@1",
			"Build@17",
			"Drop@33",
			"Break@49",
			"Outro@65"
		].join(", ")}.`,
		"4. Export stems: WAV 24-bit, start 1.1.1, Normalize OFF, Rendered Track = All Individual Tracks.",
		"",
		"Relative per harmonic mixing",
		...relatives.slice(0, 8).map((r) => `• ${r.artist} — ${r.title} (${r.bpm} BPM, ${r.cam}, ${subOf(r).short})`)
	].join("\n");
}
var CENTERS = [
	60,
	150,
	300,
	600,
	1200,
	2400,
	4800,
	8e3
];
function measurePcm(samples, sampleRate) {
	const hop = Math.max(1, Math.floor(sampleRate / 100));
	const env = [];
	for (let i = 0; i < samples.length; i += hop) {
		let energy = 0;
		const end = Math.min(samples.length, i + hop);
		for (let j = i; j < end; j++) energy += samples[j] * samples[j];
		env.push(energy / (end - i));
	}
	const flux = env.map((value, i) => Math.max(0, value - (env[i - 1] ?? value)));
	const minLag = Math.round(60 / 200 / .01);
	const maxLag = Math.round(60 / 70 / .01);
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
	const bpm = Math.round(60 / (bestLag * .01));
	const state = CENTERS.map((freq) => {
		const w0 = 2 * Math.PI * freq / sampleRate;
		const alpha = Math.sin(w0) / 2.4;
		const b0 = alpha;
		const b2 = -alpha;
		const a0 = 1 + alpha;
		const a1 = -2 * Math.cos(w0);
		const a2 = 1 - alpha;
		return {
			b0: b0 / a0,
			b2: b2 / a0,
			a1: a1 / a0,
			a2: a2 / a0,
			x1: 0,
			x2: 0,
			y1: 0,
			y2: 0,
			energy: 0
		};
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
	const bands = raw.map((value) => Math.round(value / sum * 1e3) / 10);
	return {
		bpm: Math.min(200, Math.max(70, bpm)),
		bands
	};
}
function mono(buffer) {
	const out = new Float32Array(buffer.length);
	for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
		const data = buffer.getChannelData(channel);
		for (let i = 0; i < data.length; i++) out[i] += data[i] / buffer.numberOfChannels;
	}
	return out;
}
async function decodeFile(file) {
	const ctx = new AudioContext();
	try {
		const copy = (await file.arrayBuffer()).slice(0);
		return await ctx.decodeAudioData(copy);
	} finally {
		await ctx.close();
	}
}
function captureMic(seconds, signal) {
	return new Promise((resolve, reject) => {
		if (signal.aborted) {
			reject(new DOMException("aborted", "AbortError"));
			return;
		}
		navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
			const ctx = new AudioContext();
			const source = ctx.createMediaStreamSource(stream);
			const processor = ctx.createScriptProcessor(4096, 1, 1);
			const mute = ctx.createGain();
			mute.gain.value = 0;
			const chunks = [];
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
				ctx.close();
				resolve(buffer);
			}, seconds * 1e3);
			signal.addEventListener("abort", () => {
				window.clearTimeout(timer);
				stop();
				ctx.close();
				reject(new DOMException("aborted", "AbortError"));
			}, { once: true });
		}).catch(reject);
	});
}
function clipWavBase64(buffer, seconds = 12) {
	const rate = 16e3;
	const src = mono(buffer);
	const used = Math.min(src.length, Math.floor(buffer.sampleRate * seconds));
	const length = Math.max(1, Math.floor(used * rate / buffer.sampleRate));
	const pcm = new Int16Array(length);
	for (let i = 0; i < length; i++) {
		const sample = src[Math.min(used - 1, Math.floor(i * buffer.sampleRate / rate))] ?? 0;
		const clamped = Math.max(-1, Math.min(1, sample));
		pcm[i] = clamped < 0 ? clamped * 32768 : clamped * 32767;
	}
	const bytes = new Uint8Array(44 + pcm.byteLength);
	const view = new DataView(bytes.buffer);
	bytes.set([
		82,
		73,
		70,
		70
	], 0);
	view.setUint32(4, 36 + pcm.byteLength, true);
	bytes.set([
		87,
		65,
		86,
		69,
		102,
		109,
		116,
		32
	], 8);
	view.setUint32(16, 16, true);
	view.setUint16(20, 1, true);
	view.setUint16(22, 1, true);
	view.setUint32(24, rate, true);
	view.setUint32(28, rate * 2, true);
	view.setUint16(32, 2, true);
	view.setUint16(34, 16, true);
	bytes.set([
		100,
		97,
		116,
		97
	], 36);
	view.setUint32(40, pcm.byteLength, true);
	bytes.set(new Uint8Array(pcm.buffer), 44);
	let binary = "";
	for (let i = 0; i < bytes.length; i += 32768) binary += String.fromCharCode(...bytes.subarray(i, i + 32768));
	return btoa(binary);
}
var VERT = `
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
var FRAG = `
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
function ListenOrb({ live, drive, className }) {
	const host = (0, import_react.useRef)(null);
	const liveRef = (0, import_react.useRef)(live);
	const driveRef = (0, import_react.useRef)(drive);
	liveRef.current = live;
	driveRef.current = drive;
	(0, import_react.useEffect)(() => {
		const canvas = host.current;
		if (!canvas) return;
		let stopped = false;
		let frame = 0;
		const cleanups = [];
		import("../_libs/three.mjs").then((n) => n.t).then((THREE) => {
			if (stopped || !host.current) return;
			const renderer = new THREE.WebGLRenderer({
				canvas,
				antialias: true,
				alpha: true
			});
			renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
			renderer.setClearColor(0, 0);
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(35, 1, .1, 20);
			camera.position.z = 6.4;
			const uniforms = {
				uTime: { value: 0 },
				uAmp: { value: .55 },
				uPointer: { value: new THREE.Vector2(0, 0) }
			};
			const material = new THREE.ShaderMaterial({
				uniforms,
				vertexShader: VERT,
				fragmentShader: FRAG
			});
			const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 80, 80), material);
			scene.add(mesh);
			const pointer = new THREE.Vector2();
			const move = (event) => {
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
				if (!reduced) uniforms.uTime.value += .016 + hot * .02;
				uniforms.uAmp.value = THREE.MathUtils.lerp(uniforms.uAmp.value, .38 + hot * .28, .08);
				uniforms.uPointer.value.lerp(pointer, .12);
				mesh.rotation.y += .004 + hot * .01;
				mesh.rotation.x = uniforms.uPointer.value.y * .35;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: host,
		className: `${className ?? ""} h-full w-full`,
		"aria-hidden": true
	});
}
var BARS = [
	38,
	72,
	54,
	88,
	46,
	70,
	34,
	62
];
var STEMS = [
	["Batteria", 78],
	["Basso", 92],
	["Altro", 44],
	["Voce", 26]
];
var WHEEL = [
	"1A",
	"2A",
	"3A",
	"4A",
	"5A",
	"6A",
	"7A",
	"8A",
	"9A",
	"10A",
	"11A",
	"12A"
];
function DetailsBoard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Metri, ruota Camelot e livelli stem. Sono i dettagli grafici dell’ascolto, in movimento."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border border-border bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-faint",
						children: "BPM"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto mt-3 grid size-40 place-items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 120 120",
							className: "size-40",
							"aria-hidden": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "60",
								cy: "60",
								r: "46",
								fill: "none",
								className: "stroke-border",
								strokeWidth: "8"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "60",
								cy: "60",
								r: "46",
								fill: "none",
								className: "stroke-accent bpm-arc",
								strokeWidth: "8",
								strokeLinecap: "round",
								strokeDasharray: "180 290"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl",
								children: "140"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-faint",
								children: "BPM"
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border border-border bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-faint",
						children: "CAMELOT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "camelot-spin mx-auto mt-3 size-40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 120 120",
							className: "size-40",
							"aria-hidden": true,
							children: [WHEEL.map((key, index) => {
								const angle = index / WHEEL.length * Math.PI * 2 - Math.PI / 2;
								const x = 60 + Math.cos(angle) * 42;
								const y = 60 + Math.sin(angle) * 42;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x,
									y,
									textAnchor: "middle",
									dominantBaseline: "middle",
									className: "fill-muted",
									fontSize: "7",
									children: key
								}, key);
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "60",
								cy: "60",
								r: "18",
								fill: "none",
								className: "stroke-accent",
								strokeWidth: "1.4"
							})]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border border-border bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-faint",
					children: "DNA"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex h-24 items-end gap-2",
					"aria-hidden": true,
					children: BARS.map((height, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "level-bar flex-1 rounded-sm bg-accent",
						style: {
							height: `${height}%`,
							animationDelay: `${index * 90}ms`
						}
					}, index))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border border-border bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-faint",
					children: "STEM"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-3",
					children: STEMS.map(([name, level], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-faint",
							children: level
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 overflow-hidden bg-raised",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stem-fill block h-full bg-accent",
							style: {
								width: `${level}%`,
								animationDelay: `${index * 120}ms`
							}
						})
					})] }, name))
				})]
			})
		]
	});
}
var GENRES$1 = [
	{
		id: "techno",
		name: "Techno",
		line: "Kick dritto, loop che non si apre",
		range: "132–145"
	},
	{
		id: "hard",
		name: "Hard Techno",
		line: "Distorsione sul kick",
		range: "145–158"
	},
	{
		id: "industrial",
		name: "Industrial Techno",
		line: "Metallico, poco aria, macchine",
		range: "118–150"
	},
	{
		id: "deep",
		name: "Deep House",
		line: "Basso tondo, più spazio",
		range: "110–124"
	},
	{
		id: "techhouse",
		name: "Tech House",
		line: "Groove secco, percussioni in levare",
		range: "124–132"
	},
	{
		id: "groove",
		name: "Groove",
		line: "Basso che cammina, corpi in pista",
		range: "118–128"
	},
	{
		id: "hardcore",
		name: "Hardcore",
		line: "Kick distorto, oltre il techno",
		range: "160–200"
	},
	{
		id: "psy",
		name: "Psytrance",
		line: "Basso a spirale, frasi lunghe",
		range: "136–155"
	},
	{
		id: "acid",
		name: "Acid",
		line: "303, risonanza che sale",
		range: "120–145"
	},
	{
		id: "garage",
		name: "UK Garage",
		line: "Shuffle e vocal chop",
		range: "130–138"
	},
	{
		id: "breaks",
		name: "Breaks",
		line: "Batteria spezzata, non four-on-the-floor",
		range: "130–165"
	}
];
function Onboarding({ onEnter, onListen, onSearch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 overflow-y-auto bg-bg px-5 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-lg border border-border bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-[0.2em] text-faint",
					children: "INIZIO"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold tracking-tight",
					children: "Da dove partiamo?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Scegli i generi. I sottostili, tipo rumble o raw, li trovi dopo in Cerca."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5",
					children: GENRES$1.map((genre, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "onboard-row border-t border-border",
						style: { animationDelay: `${index * 40}ms` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onEnter(genre.id),
							className: "flex min-h-16 w-full items-center gap-3 py-2 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-semibold",
									children: genre.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm text-muted",
									children: genre.line
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-faint",
								children: genre.range
							})]
						})
					}, genre.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onEnter("techno"),
							className: "min-h-11 bg-accent font-semibold text-accent-fg",
							children: "Entra e scopri"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onListen("techno"),
							className: "min-h-11 border border-border font-semibold",
							children: "Riconosci un brano"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onSearch("techno"),
							className: "min-h-11 border border-border font-semibold",
							children: "Cerca su Deezer"
						})
					]
				})
			]
		})
	});
}
var ENTITLEMENT_ID = "project-Ska5cKGS Pro";
var API_KEY = "test_FJcxhgAPNydDQJGCpqYXZLviWtE";
function getPurchases() {
	const appUserId = userId();
	if (Rl.isConfigured()) return Rl.getSharedInstance();
	return Rl.configure({
		apiKey: API_KEY,
		appUserId
	});
}
async function loadPackages() {
	return (await getPurchases().getOfferings()).current?.availablePackages ?? [];
}
async function buyPackage(rcPackage, htmlTarget) {
	return getPurchases().purchase({
		rcPackage,
		htmlTarget
	});
}
function trackPaywall() {
	getPurchases().trackCustomPaywallImpression();
}
function userId() {
	const key = "relative.rc.user";
	const existing = window.localStorage.getItem(key);
	if (existing) return existing;
	const id = crypto.randomUUID();
	window.localStorage.setItem(key, id);
	return id;
}
var OFFERS = [
	{
		id: "monthly",
		name: "Mensile",
		fallback: "9,99 USD",
		period: "al mese",
		type: pg.Monthly,
		ids: ["monthly", "$rc_monthly"]
	},
	{
		id: "yearly",
		name: "Annuale",
		fallback: "79 USD",
		period: "all’anno",
		type: pg.Annual,
		ids: ["yearly", "$rc_annual"],
		mark: "Scelta da cabina"
	},
	{
		id: "lifetime",
		name: "Lifetime",
		fallback: "149 USD",
		period: "una volta",
		type: pg.Lifetime,
		ids: ["lifetime", "$rc_lifetime"]
	}
];
var INCLUDED = [
	"Analisi degli strumenti su ogni traccia",
	"Stem Demucs: batteria, basso, voce, altro",
	"Relative, Camelot e export per Ableton",
	"Anteprime ufficiali, senza il limite free"
];
function PaywallPanel({ onClose, onUnlocked }) {
	const host = (0, import_react.useRef)(null);
	const [packages, setPackages] = (0, import_react.useState)([]);
	const [picked, setPicked] = (0, import_react.useState)("yearly");
	const [note, setNote] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let live = true;
		loadPackages().then((items) => {
			if (!live) return;
			setPackages(items);
			trackPaywall();
		}).catch((error) => {
			if (live) setNote(error instanceof Error ? error.message : "RevenueCat non risponde. I prezzi restano quelli di listino.");
		});
		return () => {
			live = false;
		};
	}, []);
	const offer = OFFERS.find((item) => item.id === picked) ?? OFFERS[1];
	const pkg = packages.find((item) => offer.ids.includes(item.identifier) || item.packageType === offer.type);
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
			if ((await buyPackage(pkg, target)).customerInfo.entitlements.active["project-Ska5cKGS Pro"]) onUnlocked();
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
			if ((await getPurchases().getCustomerInfo()).entitlements.active["project-Ska5cKGS Pro"]) onUnlocked();
			else setNote("Nessun Pro attivo su questo account.");
		} catch (error) {
			setNote(error instanceof Error ? error.message : "Ripristino non riuscito.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 overflow-y-auto bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-screen w-full max-w-lg flex-col px-5 pt-8 pb-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-[0.22em] text-accent",
						children: "RELATIVE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "min-h-11 px-2 text-sm text-muted",
						children: "Chiudi"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-10 font-display text-3xl leading-tight",
					children: "Pro, per chi gira i dischi."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-sm text-sm text-muted",
					children: [
						"Spettro, stem e relativi. Un solo accesso: ",
						ENTITLEMENT_ID,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-2",
					children: OFFERS.map((item) => {
						const shown = packages.find((pkgItem) => item.ids.includes(pkgItem.identifier) || pkgItem.packageType === item.type)?.product.currentPrice.formattedPrice ?? item.fallback;
						const on = picked === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setPicked(item.id),
							className: `flex min-h-20 w-full items-center justify-between gap-3 border px-4 text-left ${on ? "border-accent bg-surface" : "border-border"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-xs text-muted",
								children: "mark" in item ? item.mark : item.period
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-mono text-sm",
									children: shown
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-faint",
									children: item.period
								})]
							})]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-2 text-sm text-muted",
					children: INCLUDED.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 bg-accent" }), line]
					}, line))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => void unlock(),
					disabled: busy,
					className: "mt-8 min-h-12 bg-accent font-semibold text-accent-fg disabled:opacity-60",
					children: busy ? "Apro il checkout…" : `Sblocca Pro · ${price}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => void restore(),
					disabled: busy,
					className: "mt-2 min-h-11 text-sm text-muted",
					children: "Ripristina acquisti"
				}),
				note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: note
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: host })
			]
		})
	});
}
var GENRES = [
	{
		id: "tutti",
		name: "Tutti",
		line: "Tutto il catalogo",
		range: "70–200",
		min: 70,
		max: 200
	},
	{
		id: "techno",
		name: "Techno",
		line: "Kick dritto, loop che non si apre",
		range: "132–145",
		min: 132,
		max: 145
	},
	{
		id: "hard",
		name: "Hard Techno",
		line: "Distorsione sul kick",
		range: "145–158",
		min: 145,
		max: 158
	},
	{
		id: "industrial",
		name: "Industrial Techno",
		line: "Metallico, poco aria, macchine",
		range: "118–150",
		min: 118,
		max: 150
	},
	{
		id: "deep",
		name: "Deep House",
		line: "Basso tondo, più spazio",
		range: "110–124",
		min: 110,
		max: 124
	},
	{
		id: "techhouse",
		name: "Tech House",
		line: "Groove secco, percussioni in levare",
		range: "124–132",
		min: 124,
		max: 132
	},
	{
		id: "groove",
		name: "Groove",
		line: "Basso che cammina, corpi in pista",
		range: "118–128",
		min: 118,
		max: 128
	},
	{
		id: "hardcore",
		name: "Hardcore",
		line: "Kick distorto, oltre il techno",
		range: "160–200",
		min: 160,
		max: 200
	},
	{
		id: "psy",
		name: "Psytrance",
		line: "Basso a spirale, frasi lunghe",
		range: "136–155",
		min: 136,
		max: 155
	},
	{
		id: "acid",
		name: "Acid",
		line: "303, risonanza che sale",
		range: "120–145",
		min: 120,
		max: 145
	},
	{
		id: "garage",
		name: "UK Garage",
		line: "Shuffle e vocal chop",
		range: "130–138",
		min: 130,
		max: 138
	},
	{
		id: "breaks",
		name: "Breaks",
		line: "Batteria spezzata, non four-on-the-floor",
		range: "130–165",
		min: 130,
		max: 165
	}
];
var GENRE_QUERY = {
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
	breaks: "breakbeat"
};
var KEYS = [
	"Tutte",
	"1A",
	"1B",
	"2A",
	"2B",
	"3A",
	"3B",
	"4A",
	"4B",
	"5A",
	"5B",
	"6A",
	"6B",
	"7A",
	"7B",
	"8A",
	"8B",
	"9A",
	"9B",
	"10A",
	"10B",
	"11A",
	"11B",
	"12A",
	"12B"
];
function RelativeApp() {
	const refs = (0, import_react.useMemo)(() => references(), []);
	const [view, setView] = (0, import_react.useState)("radar");
	const [active, setActive] = (0, import_react.useState)(refs[0] ?? tracks[0]);
	const [query, setQuery] = (0, import_react.useState)("");
	const [bpmRange, setBpmRange] = (0, import_react.useState)(3);
	const [camOn, setCamOn] = (0, import_react.useState)(true);
	const [sub, setSub] = (0, import_react.useState)(null);
	const [report, setReport] = (0, import_react.useState)({
		status: "idle",
		step: 0,
		stems: []
	});
	const [deezer, setDeezer] = (0, import_react.useState)([]);
	const [cards, setCards] = (0, import_react.useState)([]);
	const [heard, setHeard] = (0, import_react.useState)({ status: "idle" });
	const [listenError, setListenError] = (0, import_react.useState)(null);
	const [sheet, setSheet] = (0, import_react.useState)(false);
	const [elapsed, setElapsed] = (0, import_react.useState)(0);
	const [loved, setLoved] = (0, import_react.useState)(false);
	const [volume, setVolume] = (0, import_react.useState)(.7);
	const [sourceLabel, setSourceLabel] = (0, import_react.useState)("Ascolto live");
	const [link, setLink] = (0, import_react.useState)("");
	const [linkErr, setLinkErr] = (0, import_react.useState)(null);
	const [now, setNow] = (0, import_react.useState)(null);
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [seen, setSeen] = (0, import_react.useState)(false);
	const [paywall, setPaywall] = (0, import_react.useState)(false);
	const [left, setLeft] = (0, import_react.useState)(5);
	const [genre, setGenre] = (0, import_react.useState)("tutti");
	const [bpmMin, setBpmMin] = (0, import_react.useState)(70);
	const [bpmMax, setBpmMax] = (0, import_react.useState)(200);
	const [keyFilter, setKeyFilter] = (0, import_react.useState)("Tutte");
	const audioRef = (0, import_react.useRef)(null);
	const stemRef = (0, import_react.useRef)(null);
	const fileRef = (0, import_react.useRef)(null);
	const listenAbort = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (window.localStorage.getItem("relative.onboarded") === "1") setSeen(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!seen) return;
		if (window.localStorage.getItem("relative.pro") === "1") return;
		if (window.localStorage.getItem("relative.paywall.dismissed") === "1") return;
		setPaywall(true);
	}, [seen]);
	(0, import_react.useEffect)(() => {
		let live = true;
		const q = query.trim() || GENRE_QUERY[genre];
		const timer = window.setTimeout(() => {
			searchDeezer({ data: { q } }).then((hits) => {
				if (live) setCards(hits);
			}).catch(() => {
				if (live) setCards([]);
			});
		}, 250);
		return () => {
			live = false;
			window.clearTimeout(timer);
		};
	}, [genre, query]);
	function finishOnboarding(genreId, next) {
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
	const relatives = (0, import_react.useMemo)(() => deepRelative(active, {
		bpmRange,
		camCompatible: camOn,
		sub,
		limit: 36
	}), [
		active,
		bpmRange,
		camOn,
		sub
	]);
	const relativeGroups = (0, import_react.useMemo)(() => {
		const groups = /* @__PURE__ */ new Map();
		for (const track of relatives) {
			const name = subOf(track).short;
			groups.set(name, [...groups.get(name) ?? [], track]);
		}
		return [...groups.entries()];
	}, [relatives]);
	const found = (0, import_react.useMemo)(() => searchTracks(query), [query]);
	const shelf = (0, import_react.useMemo)(() => {
		return tracks.filter((t) => t.bpm >= bpmMin && t.bpm <= bpmMax).filter((t) => keyFilter === "Tutte" ? true : t.cam === keyFilter).slice(0, 6);
	}, [
		bpmMin,
		bpmMax,
		keyFilter
	]);
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
		const tick = window.setInterval(() => setLeft((value) => Math.max(0, value - 1)), 1e3);
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
	async function identify(buffer) {
		setHeard({ status: "search" });
		const measured = measurePcm(mono(buffer), buffer.sampleRate);
		try {
			const song = await recognizeSong({ data: { wav: clipWavBase64(buffer) } });
			if (!song) {
				setHeard({
					status: "miss",
					bpm: measured.bpm,
					bands: measured.bands,
					note: "Nessun brano riconosciuto. Lo spettro dell’ascolto è qui sotto."
				});
				return;
			}
			const official = await findOfficialPreview({ data: {
				artist: song.artist,
				title: song.title
			} });
			const related = await searchDeezer({ data: { q: song.artist } });
			const hit = official ?? {
				source: "apple",
				title: song.title,
				artist: song.artist,
				previewUrl: related.find((item) => item.title.toLowerCase() === song.title.toLowerCase())?.previewUrl ?? "",
				link: song.link,
				cover: song.cover
			};
			if (!hit.cover) hit.cover = song.cover;
			if (!hit.link) hit.link = song.link;
			if (related.length) setCards(related);
			setHeard({
				status: hit.title ? "found" : "miss",
				hit,
				bpm: measured.bpm,
				bands: measured.bands,
				note: "Spettro misurato sull’ascolto"
			});
		} catch {
			setHeard({
				status: "miss",
				bpm: measured.bpm,
				bands: measured.bands,
				note: "Il riconoscimento non ha risposto. Lo spettro resta valido."
			});
		}
	}
	async function playHit(hit) {
		const audio = audioRef.current;
		if (!audio || !hit.previewUrl) {
			if (hit.link) window.open(hit.link, "_blank", "noopener,noreferrer");
			return;
		}
		const id = hit.previewUrl;
		if (now?.id === id) {
			if (now.state === "playing") {
				audio.pause();
				setNow({
					...now,
					state: "paused"
				});
			} else {
				await audio.play();
				setNow({
					...now,
					state: "playing"
				});
			}
			return;
		}
		audio.src = hit.previewUrl;
		setNow({
			...hit,
			id,
			state: "paused"
		});
		try {
			await audio.play();
			setNow({
				...hit,
				id,
				state: "playing"
			});
		} catch {
			setNow({
				...hit,
				id,
				state: "paused"
			});
		}
	}
	function openRelatives(t) {
		setActive(t);
		setView("relatives");
	}
	async function onAudioFile(file) {
		setView("radar");
		setListenError(null);
		setHeard({ status: "search" });
		try {
			await identify(await decodeFile(file));
		} catch {
			setHeard({
				status: "miss",
				note: "File audio non leggibile."
			});
		}
	}
	function analyzeLink() {
		if (!/^https?:\/\/(www\.)?(instagram\.com|soundcloud\.com|youtube\.com|youtu\.be|[a-z0-9-]+\.bandcamp\.com|beatport\.com)\//i.test(link.trim())) {
			setLinkErr("Usa Instagram, SoundCloud, YouTube, Bandcamp o Beatport.");
			return;
		}
		setLinkErr("Da un link non posso scaricare l'audio. Carica il file o usa il microfono.");
	}
	function playStem(url) {
		const audio = stemRef.current;
		if (!audio) return;
		audio.src = url;
		audio.play();
	}
	async function togglePreview(t) {
		const audio = audioRef.current;
		if (!audio) return;
		if (now?.id === t.id && now.previewUrl) {
			if (now.state === "playing") {
				audio.pause();
				setNow({
					...now,
					state: "paused"
				});
			} else {
				await audio.play();
				setNow({
					...now,
					state: "playing"
				});
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
			state: "loading"
		});
		try {
			const hit = await findOfficialPreview({ data: {
				artist: t.artist,
				title: t.title
			} });
			if (!hit) {
				setNow({
					id: t.id,
					source: "deezer",
					title: t.title,
					artist: t.artist,
					previewUrl: "",
					link: "",
					state: "missing"
				});
				return;
			}
			if (hit.embed) {
				audio.pause();
				setNow({
					...hit,
					id: t.id,
					state: "playing"
				});
				setSheet(true);
				return;
			}
			audio.src = hit.previewUrl;
			setNow({
				...hit,
				id: t.id,
				state: "paused"
			});
			try {
				await audio.play();
				setNow({
					...hit,
					id: t.id,
					state: "playing"
				});
			} catch {
				setNow({
					...hit,
					id: t.id,
					state: "paused"
				});
			}
		} catch {
			setNow({
				id: t.id,
				source: "deezer",
				title: t.title,
				artist: t.artist,
				previewUrl: "",
				link: "",
				state: "missing"
			});
		}
	}
	async function exportAbleton() {
		const text = abletonNotes(active, relatives);
		const file = new File([text], `${active.title.replace(/\s+/g, "_")}_ableton.txt`, { type: "text/plain" });
		if (navigator.share && navigator.canShare?.({ files: [file] })) {
			await navigator.share({
				files: [file],
				title: "Export Ableton",
				text
			});
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-bg text-fg lg:pr-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [
				view !== "radar" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between px-5 pt-6 pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl",
						children: view === "relatives" ? "Relative" : view === "analysis" ? "Analisi" : view === "add" ? "Studio" : view === "board" ? "Dettagli" : "Cerca"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs text-muted",
						children: [tracks.length, " tracce"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: `flex-1 px-5 pb-36 ${view === "radar" ? "mx-auto w-full max-w-6xl pt-6" : "mx-auto w-full max-w-3xl space-y-4"}`,
					children: [
						view === "radar" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: query,
									onChange: (e) => setQuery(e.target.value),
									placeholder: "Cerca artista, label o titolo",
									className: "h-11 min-w-0 flex-1 rounded-full border border-border bg-surface px-4 text-sm outline-none placeholder:text-faint"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => fileRef.current?.click(),
									className: "h-11 shrink-0 rounded-full border border-border px-4 text-sm",
									children: "Carica file"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileRef,
									type: "file",
									accept: "audio/*",
									className: "sr-only",
									onChange: (e) => {
										const file = e.target.files?.[0];
										if (!file) return;
										onAudioFile(file);
									}
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:grid lg:grid-cols-2 lg:items-start lg:gap-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center text-center lg:sticky lg:top-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-label": "Ascolta",
										onClick: () => void beginListen(),
										className: "relative grid size-72 place-items-center sm:size-80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListenOrb, {
											live: phase === "listen",
											drive: phase === "listen" ? (6 - left) / 5 : 0,
											className: "absolute inset-0"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "pointer-events-none relative size-12 text-white/85" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-6 font-display text-3xl",
										children: phase === "listen" ? "In ascolto" : phase === "paused" ? "In pausa" : "Ascolta"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-xs text-sm text-muted",
										children: phase === "listen" ? `Sto ascoltando. ${left}s. Tocca per fermare.` : heard.status === "search" ? "Sto riconoscendo il brano." : "Tocca il cerchio. Ascolta e resta qui."
									}),
									listenError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-xs text-sm text-accent",
										children: listenError
									}),
									heard.hit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => void playHit(heard.hit),
										className: "mt-6 flex w-full max-w-sm items-center gap-3 rounded-md border border-border bg-surface p-3 text-left",
										children: [
											heard.hit.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: heard.hit.cover,
												alt: "",
												className: "size-16 rounded-md object-cover"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-16 place-items-center rounded-md bg-raised text-xs text-faint",
												children: "Deezer"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "min-w-0 flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block truncate font-semibold",
														children: heard.hit.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block truncate text-sm text-muted",
														children: heard.hit.artist
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "mt-1 block font-mono text-xs text-faint",
														children: [heard.bpm ? `${Math.round(heard.bpm)} BPM · ` : "", heard.note]
													})
												]
											}),
											now?.id === heard.hit.previewUrl && now.state === "playing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-5 text-accent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-5 text-accent" })
										]
									}),
									heard.status === "miss" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 max-w-xs text-sm text-muted",
										children: [heard.note, heard.bpm ? ` · ${Math.round(heard.bpm)} BPM` : ""]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => fileRef.current?.click(),
										className: "mt-6 min-h-11 rounded-full border border-border px-5 text-sm",
										children: "Carica un file"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								heard.bands && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechPanel, {
									title: heard.hit?.title ?? "Ascolto",
									artist: heard.hit?.artist ?? "Microfono",
									bpm: Math.round(heard.bpm ?? 0),
									cam: "live",
									keyName: null,
									sub: heard.note ?? "Spettro misurato",
									low: null,
									bands: heard.bands
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-xl",
										children: "Genere"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: "Scegli prima il genere. I brani sotto seguono quella fascia."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex gap-2 overflow-x-auto pb-1",
										children: GENRES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setGenre(g.id);
												setBpmMin(g.min);
												setBpmMax(g.max);
											},
											className: `min-h-11 shrink-0 rounded-full px-4 text-sm ${genre === g.id ? "bg-fg text-bg" : "bg-raised text-muted"}`,
											children: g.name
										}, g.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 grid gap-2 sm:grid-cols-2",
										children: GENRES.filter((g) => g.id !== "tutti").map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setGenre(g.id);
												setBpmMin(g.min);
												setBpmMax(g.max);
											},
											className: `min-h-16 rounded-md border px-3 py-3 text-left ${genre === g.id ? "border-accent" : "border-border"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-sm font-medium",
													children: g.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-1 block text-xs text-muted",
													children: g.line
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-1 block font-mono text-xs text-faint",
													children: g.range
												})
											]
										}, g.id))
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid grid-cols-2 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs text-muted",
											children: ["BPM da", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												min: 70,
												max: 200,
												value: bpmMin,
												onChange: (e) => setBpmMin(Number(e.target.value) || 70),
												className: "mt-1 h-11 w-full rounded-md border border-border bg-surface px-3 font-mono text-sm text-fg"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs text-muted",
											children: ["BPM a", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												min: 70,
												max: 200,
												value: bpmMax,
												onChange: (e) => setBpmMax(Number(e.target.value) || 200),
												className: "mt-1 h-11 w-full rounded-md border border-border bg-surface px-3 font-mono text-sm text-fg"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs text-muted",
											children: ["Tonalità", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												value: keyFilter,
												onChange: (e) => setKeyFilter(e.target.value),
												className: "mt-1 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg",
												children: KEYS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: k }, k))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs text-muted",
											children: ["Match", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												disabled: keyFilter === "Tutte",
												className: "mt-1 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg disabled:opacity-50",
												defaultValue: "Compatibili",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Compatibili" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Stessa key" })]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-xl",
											children: "Analisi"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted",
											children: "Strumenti letti dalle otto bande di ogni traccia nel genere scelto."
										}),
										shelf.map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechPanel, {
											title: track.title,
											artist: track.artist,
											bpm: track.bpm,
											cam: track.cam,
											keyName: track.key,
											sub: subOf(track).short,
											low: track.lowpeak,
											bands: track.bands,
											onPlay: () => void togglePreview(track),
											playing: now?.id === track.id && now.state === "playing"
										}, track.id)),
										shelf.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted",
											children: "Nessuna traccia in questa fascia. Allarga il BPM."
										})
									]
								})
							] })]
						})] }),
						view === "search" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "glass-bar grid size-11 place-items-center rounded-full text-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										const first = (query ? found : refs)[0];
										if (first) togglePreview(first);
										setSheet(true);
									},
									className: "flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-semibold text-bg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 fill-current" }), " Play"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Artista, label, 140, 11A…",
								className: "h-12 w-full rounded-md border border-border bg-raised px-3 font-mono text-sm text-fg outline-none placeholder:text-faint"
							}),
							(query ? found : refs).map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackLine, {
								t,
								rank: i + 1,
								playing: now?.id === t.id && now.state === "playing",
								onOpen: () => openRelatives(t),
								onPlay: () => void togglePreview(t)
							}, t.id)),
							query && found.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Nessun risultato."
							})
						] }),
						view === "add" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted",
								children: "In questa preview l’analisi audio è simulata. I relative e l’export Ableton usano le 165 tracce reali."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-border bg-surface p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "font-mono text-xs text-faint",
										htmlFor: "link",
										children: "Link"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "link",
										value: link,
										onChange: (e) => {
											setLink(e.target.value);
											setLinkErr(null);
										},
										placeholder: "https://www.instagram.com/reel/…",
										className: "mt-2 h-12 w-full rounded-md border border-border bg-raised px-3 font-mono text-sm outline-none placeholder:text-faint"
									}),
									linkErr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-accent",
										children: linkErr
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: analyzeLink,
										className: "mt-3 min-h-11 w-full rounded-md bg-accent font-semibold text-accent-fg",
										children: "Analizza"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-5 text-accent" }),
								title: "Ascolto live",
								sub: "5 secondi, poi stems",
								onClick: () => void beginListen()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-16 cursor-pointer items-center gap-3 rounded-md border border-border bg-surface px-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5 text-accent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-semibold",
											children: "Carica file audio"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted",
											children: "WAV, AIFF, MP3"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "audio/*",
										className: "sr-only",
										onChange: (e) => {
											const file = e.target.files?.[0];
											if (!file) return;
											onAudioFile(file);
										}
									})
								]
							})
						] }),
						view === "analysis" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-border bg-surface p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs text-faint",
										children: sourceLabel
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xl font-semibold",
										children: active.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted",
										children: [active.artist, report.bpm ? ` · misurato ${report.bpm} BPM` : ""]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dna, { bands: report.bands ?? active.bands }),
									report.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-accent",
										children: report.error
									}),
									report.note && !report.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted",
										children: report.note
									})
								]
							}),
							[
								"Preparazione",
								"Riconoscimento",
								"Separazione stems",
								"DNA spettrale",
								"Relative"
							].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-h-11 items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `grid size-6 place-items-center rounded-full font-mono text-xs ${i < report.step ? "bg-ok text-accent-fg" : i === report.step ? "bg-accent text-accent-fg" : "bg-raised text-faint"}`,
									children: i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: i <= report.step ? "text-fg" : "text-faint",
									children: label
								})]
							}, label)),
							report.stems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-border bg-surface p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-2 font-semibold",
										children: "Stems"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2",
										children: report.stems.map((stem) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center justify-between gap-3 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: stem.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => void playStem(stem.url),
													className: "min-h-11 font-semibold text-accent",
													children: "Ascolta"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: stem.url,
													download: `${stem.name}.wav`,
													className: "inline-flex min-h-11 items-center font-semibold text-fg",
													children: "WAV"
												})]
											})]
										}, stem.name))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs text-faint",
										children: "HTDemucs: batteria, basso, altro e voce, sui primi 7,8 secondi."
									})
								]
							}),
							report.status === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setView("relatives"),
								className: "min-h-11 w-full rounded-md bg-accent font-semibold text-accent-fg",
								children: ["Vedi i relative di ", active.title]
							})
						] }),
						view === "board" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailsBoard, {}),
						view === "relatives" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-border bg-surface p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-lg font-semibold",
												children: active.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "truncate text-sm text-muted",
												children: [
													active.artist,
													" · ",
													active.label
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: active.bpm }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: active.cam })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dna, { bands: active.bands }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-accent",
											children: subOf(active).short
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => void exportAbleton(),
											className: "inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-3 text-sm font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" }), "Export Ableton"]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 overflow-x-auto pb-1",
								children: TECHNO_FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSub(f.id === "all" ? null : f.id),
									className: `min-h-11 shrink-0 rounded-full px-4 text-sm ${sub === f.id || f.id === "all" && !sub ? "bg-accent text-accent-fg" : "bg-raised text-muted"}`,
									children: f.label
								}, f.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setBpmRange((v) => v === 1 ? 3 : v === 3 ? 5 : 1),
									className: "min-h-11 rounded-full bg-raised px-4 text-sm",
									children: ["BPM ±", bpmRange]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setCamOn((v) => !v),
									className: `min-h-11 rounded-full px-4 text-sm ${camOn ? "bg-accent text-accent-fg" : "bg-raised text-muted"}`,
									children: camOn ? "Camelot compatibile" : "Solo stessa key"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-xs text-faint",
								children: [
									relatives.length,
									" relative · keys ",
									camelotCompatible(active.cam).join(" ")
								]
							}),
							deezer.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-sm text-muted",
									children: "Stesso artista su Deezer"
								}), deezer.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-h-16 items-center gap-3 rounded-md border border-border bg-surface px-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												const audio = audioRef.current;
												if (!audio) return;
												audio.src = hit.previewUrl;
												audio.play();
												setNow({
													...hit,
													id: hit.link,
													state: "playing"
												});
											},
											className: "grid size-11 shrink-0 place-items-center rounded-full bg-raised text-accent",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate font-semibold",
												children: hit.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm text-muted",
												children: hit.artist
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: hit.link,
											target: "_blank",
											rel: "noreferrer",
											className: "text-xs font-semibold text-accent",
											children: "Apri"
										})
									]
								}, hit.link))]
							}),
							relatives.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Nessun relative con questi filtri. Allarga il BPM."
							}),
							relativeGroups.map(([name, group]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-sm text-muted",
									children: [
										name,
										" · ",
										group.length
									]
								}), group.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackLine, {
									t,
									rank: i + 1,
									playing: now?.id === t.id && now.state === "playing",
									onOpen: () => openRelatives(t),
									onPlay: () => void togglePreview(t)
								}, t.id))]
							}, name))
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
					ref: audioRef,
					preload: "none",
					onTimeUpdate: () => setElapsed(audioRef.current?.currentTime ?? 0),
					onEnded: () => setNow((cur) => cur ? {
						...cur,
						state: "paused"
					} : cur)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
					ref: stemRef,
					preload: "none"
				}),
				now && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-bar fixed inset-x-3 bottom-20 z-20 mx-auto flex max-w-3xl items-center gap-3 rounded-full px-3 py-2 lg:right-24 lg:bottom-6 lg:left-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": now.state === "playing" ? "Pausa" : "Play",
							onClick: () => {
								if (now.previewUrl) playHit(now);
							},
							className: "grid size-11 shrink-0 place-items-center rounded-full bg-accent text-accent-fg",
							children: now.state === "playing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
						}),
						now.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: now.cover,
							alt: "",
							className: "size-9 rounded-md object-cover"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSheet(true),
							className: "min-w-0 flex-1 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold",
								children: now.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted",
								children: now.state === "loading" ? "Cerco su Deezer…" : now.state === "missing" ? "Nessuna anteprima ufficiale" : `${now.artist} · ${now.source === "deezer" ? "Deezer" : "Apple Music"} · 30s`
							})]
						}),
						now.link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: now.link,
							target: "_blank",
							rel: "noreferrer",
							className: "shrink-0 px-2 text-xs font-semibold text-accent",
							children: "Apri"
						}) : null
					]
				}),
				sheet && now && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NowPlaying, {
					now,
					elapsed,
					loved,
					volume,
					onClose: () => setSheet(false),
					onLove: () => setLoved((value) => !value),
					onToggle: () => {
						if (now.previewUrl) playHit(now);
					},
					onSeek: (value) => {
						const audio = audioRef.current;
						if (!audio) return;
						audio.currentTime = value;
						setElapsed(value);
					},
					onVolume: (value) => {
						setVolume(value);
						if (audioRef.current) audioRef.current.volume = value;
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "glass-rail fixed top-4 right-3 bottom-4 z-30 hidden w-14 flex-col items-center justify-between rounded-full py-3 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-5" }),
								label: "Ascolta",
								on: view === "radar",
								onClick: () => setView("radar")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" }),
								label: "Cerca",
								on: view === "search",
								onClick: () => setView("search")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-5" }),
								label: "Relative",
								on: view === "relatives",
								onClick: () => setView("relatives")
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5" }),
							label: "Studio",
							on: view === "add" || view === "analysis",
							onClick: () => setView("add")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-5" }),
							label: "Dettagli",
							on: view === "board",
							onClick: () => setView("board")
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "fixed inset-x-0 bottom-0 flex border-t border-border bg-surface lg:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-5" }),
							label: "Ascolta",
							on: view === "radar",
							onClick: () => setView("radar")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" }),
							label: "Cerca",
							on: view === "search",
							onClick: () => setView("search")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5" }),
							label: "Aggiungi",
							on: view === "add" || view === "analysis",
							onClick: () => setView("add")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-5" }),
							label: "Relative",
							on: view === "relatives",
							onClick: () => setView("relatives")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-5" }),
							label: "Board",
							on: view === "board",
							onClick: () => setView("board")
						})
					]
				}),
				paywall && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaywallPanel, {
					onClose: () => {
						window.localStorage.setItem("relative.paywall.dismissed", "1");
						setPaywall(false);
					},
					onUnlocked: () => {
						window.localStorage.setItem("relative.pro", "1");
						setPaywall(false);
					}
				}),
				seen === false && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {
					onEnter: (genreId) => finishOnboarding(genreId, "radar"),
					onListen: (genreId) => finishOnboarding(genreId, "radar"),
					onSearch: (genreId) => finishOnboarding(genreId, "search")
				})
			]
		})
	});
}
function clock(seconds) {
	const value = Math.max(0, Math.floor(seconds));
	return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, "0")}`;
}
function NowPlaying({ now, elapsed, loved, volume, onClose, onLove, onToggle, onSeek, onVolume }) {
	const duration = 30;
	const known = tracks.find((track) => track.id === now.id) ?? tracks.find((track) => track.title.toLowerCase() === now.title.toLowerCase() && track.artist.toLowerCase() === now.artist.toLowerCase()) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-40 overflow-y-auto bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Chiudi",
			onClick: onClose,
			className: "mx-auto mt-3 block h-1.5 w-9 rounded-full bg-raised"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-6 pt-6 pb-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden bg-blob",
					children: now.embed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: `${now.title} su Apple Music`,
						src: now.embed,
						height: 450,
						allow: "autoplay *; encrypted-media *; fullscreen *; clipboard-write",
						sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation",
						className: "w-full border-0"
					}) : now.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: now.cover,
						alt: "",
						className: "aspect-square w-full object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-square w-full bg-raised" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-lg font-semibold",
							children: now.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-muted",
							children: now.artist
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Preferito",
							onClick: onLove,
							className: "grid size-11 place-items-center rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-5 ${loved ? "fill-accent text-accent" : "text-muted"}` })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: now.link || void 0,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Altro",
							className: "grid size-11 place-items-center rounded-full text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-5" })
						})]
					})]
				}),
				!now.embed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						"aria-label": "Posizione",
						type: "range",
						min: 0,
						max: duration,
						step: .1,
						value: Math.min(duration, elapsed),
						onChange: (event) => onSeek(Number(event.target.value)),
						className: "mt-4 w-full accent-fg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between font-mono text-xs text-faint",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: clock(elapsed) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["-", clock(duration - elapsed)] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between px-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "size-4 text-faint" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Indietro",
								onClick: () => onSeek(0),
								className: "grid size-11 place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, { className: "size-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": now.state === "playing" ? "Pausa" : "Play",
								onClick: onToggle,
								className: "grid size-16 place-items-center rounded-full bg-fg text-bg",
								children: now.state === "playing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-7" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-7 fill-current" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "size-6 text-fg" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "size-4 text-faint" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-3 text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								"aria-label": "Volume",
								type: "range",
								min: 0,
								max: 1,
								step: .01,
								value: volume,
								onChange: (event) => onVolume(Number(event.target.value)),
								className: "w-full accent-fg"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Airplay, { className: "size-4" })
						]
					})
				] })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col",
				children: known ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechPanel, {
					title: known.title,
					artist: known.artist,
					bpm: known.bpm,
					cam: known.cam,
					keyName: known.key,
					sub: subOf(known).short,
					low: known.lowpeak,
					bands: known.bands
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Questa anteprima non è nel catalogo analizzato. Nessuno spettro da mostrare."
				})
			})]
		})]
	});
}
function Rail({ icon, label, on, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: `grid size-11 place-items-center rounded-full ${on ? "bg-accent text-accent-fg" : "text-muted"}`,
		children: icon
	});
}
function Nav({ icon, label, on, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: `flex min-h-16 flex-1 flex-col items-center justify-center gap-1 text-xs ${on ? "text-accent" : "text-faint"}`,
		children: [icon, label]
	});
}
function Pill({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "rounded-full bg-raised px-2 py-1 font-mono text-xs text-fg",
		children
	});
}
function Dna({ bands }) {
	const max = Math.max(...bands, 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 flex h-10 items-end gap-1",
		"aria-hidden": "true",
		children: bands.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex-1 rounded-sm bg-accent",
			style: {
				height: `${Math.max(8, b / max * 100)}%`,
				opacity: .45 + b / max * .55
			}
		}, i))
	});
}
var PARTS = [
	{
		name: "Sub",
		role: "sintetizzatore"
	},
	{
		name: "Kick",
		role: "cassa"
	},
	{
		name: "Basso",
		role: "basso"
	},
	{
		name: "Corpo",
		role: "tom e rumble"
	},
	{
		name: "Medio",
		role: "rullante"
	},
	{
		name: "Presenza",
		role: "ride"
	},
	{
		name: "Hat",
		role: "hi-hat"
	},
	{
		name: "Aria",
		role: "piatti"
	}
];
function TechPanel({ title, artist, bpm, cam, keyName, sub, low, bands, onPlay, playing }) {
	const lead = PARTS.map((part, index) => ({
		...part,
		level: bands[index] ?? 0
	})).sort((a, b) => b.level - a.level).filter((part) => part.level >= 8).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-md border border-border bg-surface p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate font-semibold",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm text-muted",
						children: artist
					})]
				}), onPlay ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": playing ? "Pausa" : "Play",
					onClick: onPlay,
					className: "grid size-11 shrink-0 place-items-center rounded-full bg-raised text-accent",
					children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: ["In primo piano: ", lead.length ? lead.map((part) => `${part.name} · ${part.role}`).join(", ") : "nessun picco netto"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-1.5",
				children: PARTS.map((part, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[4.5rem_1fr_2.5rem] items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: part.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-1.5 overflow-hidden rounded-full bg-raised",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block h-full bg-accent",
								style: { width: `${Math.min(100, bands[index] ?? 0)}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-right font-mono text-xs text-faint",
							children: Math.round(bands[index] ?? 0)
						})
					]
				}, part.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 font-mono text-xs text-faint",
				children: [
					bpm || "—",
					" BPM · ",
					cam,
					" · ",
					keyName ?? "key n/d",
					" · picco basso ",
					low ?? "—",
					" Hz · ",
					sub
				]
			})
		]
	});
}
function TrackLine({ t, onOpen, onPlay, playing, rank }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-16 w-full items-center gap-2 rounded-md border border-border bg-surface px-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": playing ? `Pausa ${t.title}` : `Ascolta ${t.title}`,
			onClick: onPlay,
			className: "grid size-11 shrink-0 place-items-center rounded-full bg-raised text-accent",
			children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onOpen,
			className: "flex min-w-0 flex-1 items-center gap-3 py-2 text-left",
			children: [
				rank != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-6 font-mono text-xs text-faint",
					children: rank
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate font-semibold",
						children: t.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block truncate text-sm text-muted",
						children: [
							t.artist,
							" · ",
							subOf(t).short
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: t.bpm }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: t.cam })
			]
		})]
	});
}
function Action({ icon, title, sub, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "flex min-h-16 w-full items-center gap-3 rounded-md border border-border bg-surface px-4 text-left",
		children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted",
				children: sub
			})]
		})]
	});
}
var SplitComponent = RelativeApp;
//#endregion
export { SplitComponent as component };
