import { useEffect, useState } from "react";
import { ACCENTS } from "../data/misc";

const THEME_KEY = "hv-theme";
const ACCENT_KEY = "hv-accent";

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // storage unavailable (private mode): the choice just won't persist
  }
}

/** Theme (`.dark` on <html>) and accent colour, both saved to localStorage. */
export function useTheme() {
  const [dark, setDark] = useState(() => read(THEME_KEY) === "dark");
  const [accent, setAccent] = useState<string>(() => {
    const saved = read(ACCENT_KEY);
    return ACCENTS.find((a) => a === saved) ?? ACCENTS[0];
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);

  const toggle = () => {
    write(THEME_KEY, dark ? "light" : "dark");
    setDark(!dark);
  };
  const pickAccent = (c: string) => {
    write(ACCENT_KEY, c);
    setAccent(c);
  };

  return { dark, toggle, accent, setAccent: pickAccent };
}
