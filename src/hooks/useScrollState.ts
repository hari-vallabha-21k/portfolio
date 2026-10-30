import { useEffect, useState } from "react";

const IDS = ["hero", "about", "skills", "journey", "work", "data", "contact"];

/** Scroll progress (0-1), back-to-top visibility (after 600px) and the section currently in view. */
export function useScrollState() {
  const [state, setState] = useState({ progress: 0, showTop: false, active: "hero" });

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      let active = "hero";
      for (const id of IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) active = id;
      }
      const next = {
        progress: Math.round(Math.min(1, window.scrollY / max) * 1000) / 1000,
        showTop: window.scrollY > 600,
        active,
      };
      setState((prev) =>
        prev.progress === next.progress && prev.showTop === next.showTop && prev.active === active
          ? prev
          : next,
      );
    };
    let raf = 0;
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        onScroll();
      });
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return state;
}
