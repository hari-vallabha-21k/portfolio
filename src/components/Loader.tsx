import { useEffect, useState } from "react";
import { bootLines } from "../data/misc";
import { s } from "../lib/css";

const LINES = bootLines(true);
const STEP = 300;

function setBoot(delay: string) {
  document.body.style.setProperty("--boot", delay);
}

/** Boot-sequence overlay. Click to skip. Hero entrance animations wait on the `--boot` delay. */
export default function Loader() {
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [shown, setShown] = useState(!reduced);
  const [lines, setLines] = useState(0);
  const [tail, setTail] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (reduced) {
      setBoot("0.2s");
      return;
    }
    document.body.style.overflow = "hidden";
    const timers: number[] = [];
    LINES.forEach((_, i) => {
      timers.push(window.setTimeout(() => setLines(i + 1), 240 + i * STEP));
    });
    timers.push(window.setTimeout(() => setTail(true), 240 + LINES.length * STEP));
    timers.push(window.setTimeout(() => setLeaving(true), 900 + LINES.length * STEP));
    return () => {
      for (const t of timers) window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [reduced]);

  useEffect(() => {
    if (!leaving) return;
    setBoot("0.2s");
    document.body.style.overflow = "";
    const t = window.setTimeout(() => setShown(false), 700);
    return () => window.clearTimeout(t);
  }, [leaving]);

  if (!shown) return null;
  const pct = leaving
    ? 100
    : Math.round((Math.min(lines, LINES.length) / (LINES.length + 1)) * 100);

  return (
    <button
      type="button"
      aria-label="Skip intro"
      onClick={() => setLeaving(true)}
      style={s(
        `position:fixed;inset:0;z-index:100;background:#0A0A0A;color:#F5F4F0;display:flex;align-items:center;justify-content:center;border:0;padding:0;text-align:left;cursor:pointer;transform:${leaving ? "translateY(-101%)" : "translateY(0)"};transition:transform .65s cubic-bezier(.7,0,.3,1)`,
      )}
    >
      <span
        style={s(
          "display:block;width:min(580px,86vw);font-family:'DM Mono',ui-monospace,monospace;font-size:13px;line-height:2.15",
        )}
      >
        <span
          style={s(
            "display:flex;align-items:center;gap:10px;font-size:10px;letter-spacing:.32em;color:rgba(245,244,240,.45);margin-bottom:20px",
          )}
        >
          <span
            style={s(
              "width:7px;height:7px;border-radius:50%;background:var(--accent,#C93A1A);animation:pulseDot 1.2s ease-in-out infinite",
            )}
          />
          HV — BOOT SEQUENCE v2.6
        </span>
        {LINES.slice(0, lines).map((b) => (
          <span key={b.t} style={s("display:flex;justify-content:space-between;gap:20px")}>
            <span style={s("color:rgba(245,244,240,.78)")}>{b.t}</span>
            <span style={s("color:var(--accent,#C93A1A)")}>{b.s}</span>
          </span>
        ))}
        <span style={s("display:block")}>
          <span style={s("color:rgba(245,244,240,.9)")}>
            {tail ? "$ hv start — shipping…" : ""}
          </span>
          <span
            style={s(
              "display:inline-block;width:9px;height:16px;background:var(--accent,#C93A1A);vertical-align:-2px;animation:blink 1s step-end infinite",
            )}
          />
        </span>
        <span
          style={s("display:block;margin-top:24px;height:2px;background:rgba(245,244,240,.12)")}
        >
          <span
            style={s(
              `display:block;height:2px;background:var(--accent,#C93A1A);transition:width .35s ease;width:${pct}%`,
            )}
          />
        </span>
      </span>
      <span
        style={s(
          "position:absolute;bottom:26px;right:30px;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.28em;color:rgba(245,244,240,.35)",
        )}
      >
        CLICK TO SKIP
      </span>
    </button>
  );
}
