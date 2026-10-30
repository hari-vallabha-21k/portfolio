import { useEffect, useRef } from "react";
import { createHeroScene } from "./createHeroScene";

/** Mounts the 3D workstation scene into a full-size layer and disposes it on unmount. */
export default function HeroScene() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const css = getComputedStyle(document.documentElement);
    const accent = css.getPropertyValue("--accent").trim() || "#C93A1A";
    const light = !document.documentElement.classList.contains("dark");
    try {
      return createHeroScene(el, { accent, light });
    } catch {
      // WebGL context creation failed: leave the page as it is without 3D
      return;
    }
  }, []);

  return (
    <div
      ref={host}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}
