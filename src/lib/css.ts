import type { CSSProperties } from "react";

const cache = new Map<string, CSSProperties>();

/** Split on top-level `;` (ignoring ones inside parentheses or quotes, e.g. data URIs). */
function declarations(css: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let quote = "";
  let cur = "";
  for (const ch of css) {
    if (quote) {
      if (ch === quote) quote = "";
    } else if (ch === '"' || ch === "'") quote = ch;
    else if (ch === "(") depth++;
    else if (ch === ")") depth--;
    if (ch === ";" && depth === 0 && !quote) {
      out.push(cur);
      cur = "";
    } else cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out;
}

/** Turn a CSS declaration string ("a:b;c:d") into a React style object. */
export function s(css: string): CSSProperties {
  const hit = cache.get(css);
  if (hit) return hit;
  const style: Record<string, string> = {};
  for (const d of declarations(css)) {
    const i = d.indexOf(":");
    if (i < 0) continue;
    const prop = d.slice(0, i).trim();
    const val = d.slice(i + 1).trim();
    const key = prop.startsWith("--")
      ? prop
      : prop
          .replace(/^-(\w)/, (_, c: string) => c.toUpperCase())
          .replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    style[key] = val;
  }
  cache.set(css, style);
  return style;
}
