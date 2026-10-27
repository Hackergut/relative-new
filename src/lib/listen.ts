import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Query = z.object({
  artist: z.string().trim().min(1).max(120),
  title: z.string().trim().min(1).max(160),
});

export type OfficialPreview = {
  source: "deezer" | "apple";
  title: string;
  artist: string;
  previewUrl: string;
  link: string;
  cover?: string;
  embed?: string;
};

export const findOfficialPreview = createServerFn({ method: "GET" })
  .inputValidator(Query)
  .handler(async ({ data }): Promise<OfficialPreview | null> => {
    const q = `${data.artist} ${data.title}`;
    const [deezer, apple] = await Promise.all([deezerPreview(q), applePreview(q)]);
    if (deezer && apple?.embed) return { ...deezer, embed: apple.embed, cover: deezer.cover || apple.cover };
    return deezer ?? apple;
  });

export const findRelatedOnDeezer = createServerFn({ method: "GET" })
  .inputValidator(z.object({ artist: z.string().trim().min(1).max(120) }))
  .handler(async ({ data }): Promise<OfficialPreview[]> => {
    const res = await fetch(
      `https://api.deezer.com/search?q=${encodeURIComponent(data.artist)}&limit=12`,
      { headers: { Accept: "application/json" } },
    );
    if (!res.ok) return [];
    const json = (await res.json()) as {
      data?: Array<{
        title?: string;
        preview?: string;
        link?: string;
        artist?: { name?: string };
        album?: { cover_medium?: string };
      }>;
    };
    const artist = data.artist.toLowerCase();
    return (json.data ?? [])
      .filter((hit) => hit.preview && hit.title && hit.artist?.name && hit.link)
      .filter((hit) => {
        const name = hit.artist?.name?.toLowerCase() ?? "";
        return name === artist || name.startsWith(`${artist} `) || artist.startsWith(`${name} `) || artist.startsWith(`${name},`);
      })
      .slice(0, 6)
      .map((hit) => ({
        source: "deezer" as const,
        title: hit.title as string,
        artist: hit.artist?.name as string,
        previewUrl: hit.preview as string,
        link: hit.link as string,
        cover: hit.album?.cover_medium,
      }));
  });

export const searchDeezer = createServerFn({ method: "GET" })
  .inputValidator(z.object({ q: z.string().trim().min(1).max(120) }))
  .handler(async ({ data }): Promise<OfficialPreview[]> => {
    const res = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(data.q)}&limit=12`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return [];
    const json = (await res.json()) as { data?: DeezerHit[] };
    return (json.data ?? []).map(toPreview).filter((hit): hit is OfficialPreview => hit !== null).slice(0, 12);
  });

export type RecognizedSong = {
  title: string;
  artist: string;
  cover?: string;
  link: string;
};

export const recognizeSong = createServerFn({ method: "POST" })
  .inputValidator(z.object({ wav: z.string().min(1000).max(2_000_000) }))
  .handler(async ({ data }): Promise<RecognizedSong | null> => {
    const { default: shazam } = await import("shazamio-api");
    const audio = Buffer.from(data.wav, "base64");
    try {
      const result = await shazam.recognize(audio, { seconds: 8 });
      const track = result.track;
      const title = typeof track?.title === "string" ? track.title : "";
      const artist = typeof track?.subtitle === "string" ? track.subtitle : "";
      if (!title || !artist) return null;
      const images = track?.images as { coverart?: string } | undefined;
      const share = track?.share as { href?: string } | undefined;
      const url = typeof track?.url === "string" ? track.url : share?.href;
      return {
        title,
        artist,
        cover: images?.coverart,
        link: url || `https://www.shazam.com/search/${encodeURIComponent(`${artist} ${title}`)}`,
      };
    } catch (error) {
      const name = error instanceof Error ? error.name : "";
      if (name === "NoMatchesFoundError" || String(error).toLowerCase().includes("no match")) return null;
      throw error;
    }
  });

type DeezerHit = {
  title?: string;
  preview?: string;
  link?: string;
  artist?: { name?: string };
  album?: { cover_medium?: string };
};

function toPreview(hit: DeezerHit): OfficialPreview | null {
  if (!hit.preview || !hit.title || !hit.artist?.name || !hit.link) return null;
  return {
    source: "deezer",
    title: hit.title,
    artist: hit.artist.name,
    previewUrl: hit.preview,
    link: hit.link,
    cover: hit.album?.cover_medium,
  };
}

async function deezerPreview(q: string): Promise<OfficialPreview | null> {
  const res = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(q)}&limit=5`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return null;
  const json = (await res.json()) as { data?: DeezerHit[] };
  return (json.data ?? []).map(toPreview).find((hit): hit is OfficialPreview => hit !== null) ?? null;
}

async function applePreview(q: string): Promise<OfficialPreview | null> {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(q)}&entity=song&limit=5`,
    { headers: { Accept: "application/json" } },
  );
  if (!res.ok) return null;
  const json = (await res.json()) as {
    results?: Array<{
      trackName?: string;
      artistName?: string;
      previewUrl?: string;
      trackViewUrl?: string;
      artworkUrl100?: string;
      collectionId?: number;
      collectionName?: string;
      trackId?: number;
    }>;
  };
  const hit = json.results?.find((t) => t.previewUrl && t.trackName && t.artistName && t.trackViewUrl);
  if (!hit?.previewUrl || !hit.trackName || !hit.artistName || !hit.trackViewUrl) return null;
  return {
    source: "apple",
    title: hit.trackName,
    artist: hit.artistName,
    previewUrl: hit.previewUrl,
    link: hit.trackViewUrl,
    cover: hit.artworkUrl100,
    embed: hit.collectionId && hit.collectionName ? appleEmbed(hit.collectionName, hit.collectionId, hit.trackId) : undefined,
  };
}

function appleEmbed(collectionName: string, collectionId: number, trackId?: number) {
  const slug = collectionName
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const base = `https://embed.music.apple.com/us/album/${slug}/${collectionId}`;
  return trackId ? `${base}?i=${trackId}` : base;
}
