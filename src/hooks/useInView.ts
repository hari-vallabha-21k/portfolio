import { useEffect } from "react";

/**
 * Adds `data-in` to every `[data-reveal]`, `[data-draw]`, `[data-fade]` and `[data-line]`
 * element the first time it scrolls into view. The transitions live in CSS (see index.css).
 */
export function useInView(): void {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal], [data-draw], [data-fade], [data-line]");
    if (!("IntersectionObserver" in window)) {
      for (const el of els) el.setAttribute("data-in", "");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.setAttribute("data-in", "");
          io.unobserve(e.target);
        }
      },
      { threshold: 0.12 },
    );
    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, []);
}
