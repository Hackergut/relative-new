import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listen-DVrN8UJC.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Query = object({
	artist: string().trim().min(1).max(120),
	title: string().trim().min(1).max(160)
});
var findOfficialPreview_createServerFn_handler = createServerRpc({
	id: "c8788a3574c23145e845adc1480576d4256e7319893358bcbe7d543ec63dfcba",
	name: "findOfficialPreview",
	filename: "src/lib/listen.ts"
}, (opts) => findOfficialPreview.__executeServer(opts));
var findOfficialPreview = createServerFn({ method: "GET" }).inputValidator(Query).handler(findOfficialPreview_createServerFn_handler, async ({ data }) => {
	const q = `${data.artist} ${data.title}`;
	const [deezer, apple] = await Promise.all([deezerPreview(q), applePreview(q)]);
	if (deezer && apple?.embed) return {
		...deezer,
		embed: apple.embed,
		cover: deezer.cover || apple.cover
	};
	return deezer ?? apple;
});
var findRelatedOnDeezer_createServerFn_handler = createServerRpc({
	id: "abb5e642cea26e0246967d0fbbf64aab29b5f69b2d4f16bc86648bbd728a79fe",
	name: "findRelatedOnDeezer",
	filename: "src/lib/listen.ts"
}, (opts) => findRelatedOnDeezer.__executeServer(opts));
var findRelatedOnDeezer = createServerFn({ method: "GET" }).inputValidator(object({ artist: string().trim().min(1).max(120) })).handler(findRelatedOnDeezer_createServerFn_handler, async ({ data }) => {
	const res = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(data.artist)}&limit=12`, { headers: { Accept: "application/json" } });
	if (!res.ok) return [];
	const json = await res.json();
	const artist = data.artist.toLowerCase();
	return (json.data ?? []).filter((hit) => hit.preview && hit.title && hit.artist?.name && hit.link).filter((hit) => {
		const name = hit.artist?.name?.toLowerCase() ?? "";
		return name === artist || name.startsWith(`${artist} `) || artist.startsWith(`${name} `) || artist.startsWith(`${name},`);
	}).slice(0, 6).map((hit) => ({
		source: "deezer",
		title: hit.title,
		artist: hit.artist?.name,
		previewUrl: hit.preview,
		link: hit.link,
		cover: hit.album?.cover_medium
	}));
});
var searchDeezer_createServerFn_handler = createServerRpc({
	id: "a05319d0af59e9ff6fb7a38378a099042a5252cd25b4389a6fb66ff773380919",
	name: "searchDeezer",
	filename: "src/lib/listen.ts"
}, (opts) => searchDeezer.__executeServer(opts));
var searchDeezer = createServerFn({ method: "GET" }).inputValidator(object({ q: string().trim().min(1).max(120) })).handler(searchDeezer_createServerFn_handler, async ({ data }) => {
	const res = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(data.q)}&limit=12`, { headers: { Accept: "application/json" } });
	if (!res.ok) return [];
	return ((await res.json()).data ?? []).map(toPreview).filter((hit) => hit !== null).slice(0, 12);
});
var recognizeSong_createServerFn_handler = createServerRpc({
	id: "c9c45fdfe75b31c075e49904493165fa4ce11bb315f840bb54a1394046b1b85d",
	name: "recognizeSong",
	filename: "src/lib/listen.ts"
}, (opts) => recognizeSong.__executeServer(opts));
var recognizeSong = createServerFn({ method: "POST" }).inputValidator(object({ wav: string().min(1e3).max(2e6) })).handler(recognizeSong_createServerFn_handler, async ({ data }) => {
	const { default: shazam } = await import("../_libs/shazamio-api+shazamio-core.mjs").then((n) => n.t);
	const audio = Buffer.from(data.wav, "base64");
	try {
		const track = (await shazam.recognize(audio, { seconds: 8 })).track;
		const title = typeof track?.title === "string" ? track.title : "";
		const artist = typeof track?.subtitle === "string" ? track.subtitle : "";
		if (!title || !artist) return null;
		const images = track?.images;
		const share = track?.share;
		const url = typeof track?.url === "string" ? track.url : share?.href;
		return {
			title,
			artist,
			cover: images?.coverart,
			link: url || `https://www.shazam.com/search/${encodeURIComponent(`${artist} ${title}`)}`
		};
	} catch (error) {
		if ((error instanceof Error ? error.name : "") === "NoMatchesFoundError" || String(error).toLowerCase().includes("no match")) return null;
		throw error;
	}
});
function toPreview(hit) {
	if (!hit.preview || !hit.title || !hit.artist?.name || !hit.link) return null;
	return {
		source: "deezer",
		title: hit.title,
		artist: hit.artist.name,
		previewUrl: hit.preview,
		link: hit.link,
		cover: hit.album?.cover_medium
	};
}
async function deezerPreview(q) {
	const res = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(q)}&limit=5`, { headers: { Accept: "application/json" } });
	if (!res.ok) return null;
	return ((await res.json()).data ?? []).map(toPreview).find((hit) => hit !== null) ?? null;
}
async function applePreview(q) {
	const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(q)}&entity=song&limit=5`, { headers: { Accept: "application/json" } });
	if (!res.ok) return null;
	const hit = (await res.json()).results?.find((t) => t.previewUrl && t.trackName && t.artistName && t.trackViewUrl);
	if (!hit?.previewUrl || !hit.trackName || !hit.artistName || !hit.trackViewUrl) return null;
	return {
		source: "apple",
		title: hit.trackName,
		artist: hit.artistName,
		previewUrl: hit.previewUrl,
		link: hit.trackViewUrl,
		cover: hit.artworkUrl100,
		embed: hit.collectionId && hit.collectionName ? appleEmbed(hit.collectionName, hit.collectionId, hit.trackId) : void 0
	};
}
function appleEmbed(collectionName, collectionId, trackId) {
	const base = `https://embed.music.apple.com/us/album/${collectionName.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}/${collectionId}`;
	return trackId ? `${base}?i=${trackId}` : base;
}
//#endregion
export { findOfficialPreview_createServerFn_handler, findRelatedOnDeezer_createServerFn_handler, recognizeSong_createServerFn_handler, searchDeezer_createServerFn_handler };
