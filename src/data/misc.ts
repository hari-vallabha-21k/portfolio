export const EASE = "cubic-bezier(.22,.61,.36,1)";

export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  src: string;
}

// NOTE: these are commercial tracks — replace with royalty-free audio before going live.
export const SONGS: Song[] = [
  {
    id: "reflection",
    title: "REFLECTIONS",
    artist: "THE NEIGHBOURHOOD",
    genre: "ALT ROCK",
    src: "/music/The Neighbourhood - Reflections (Lyrics).mp3",
  },
  {
    id: "starboy",
    title: "STARBOY",
    artist: "THE WEEKND FT. DAFT PUNK",
    genre: "SYNTH-POP",
    src: "/music/120._The_Weeknd_feat._Daft_Pu_-_Starboy_(mp3.pm).mp3",
  },
];

export const SQL_TEXT =
  "SELECT lang, COUNT(*) AS queries,\n       ROUND(AVG(resolution_s), 1) AS avg_s\nFROM   assistant_logs\nWHERE  ts > now() - interval '90 days'\nGROUP  BY lang ORDER BY 2 DESC;\n\n lang | queries | avg_s\n------+---------+-------\n EN   |   7,412 | 168.4\n HI   |   3,458 | 181.2\n TE   |   1,904 | 176.9\n(3 rows · 41 ms)";

export interface BootLine {
  t: string;
  s: "ok";
}

/** Boot-loader lines; the 4th depends on the `anime` prop (default on). */
export const bootLines = (anime = true): BootLine[] => [
  { t: "▸ mounting /portfolio", s: "ok" },
  { t: "▸ compiling experience (2022–2026)", s: "ok" },
  { t: "▸ hydrating dashboards + drift monitors", s: "ok" },
  anime
    ? { t: "▸ importing shonen.energy — AOT · NARUTO · MHA", s: "ok" }
    : { t: "▸ calibrating custom cursor", s: "ok" },
  { t: "▸ opening to visitors", s: "ok" },
];

/** Accent colour options from the original page props. */
export const ACCENTS = ["#C93A1A", "#1A6C8C", "#7A8C5E"] as const;
