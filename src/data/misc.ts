export const EASE = "cubic-bezier(.22,.61,.36,1)";

/** Current model-drift PSI shown in the hero chip, the Data Room card and the ML Monitoring card. */
export const PSI_DRIFT = 0.05;

/** Set this to the LinkedIn profile URL to show the link in Contact; empty hides it. */
export const LINKEDIN_URL = "https://www.linkedin.com/in/harii-vallabha-4892602a5/";

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
