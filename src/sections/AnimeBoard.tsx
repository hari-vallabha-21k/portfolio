import { Fragment, useState } from "react";
import { ANIME } from "../data/anime";
import { s } from "../lib/css";

/** The off-duty anime board, its own section so it sits after Journey instead of inside About. */
export default function AnimeBoard() {
  const [qi, setQi] = useState<number[]>(() => ANIME.map(() => 0));
  const animeCards = ANIME.map((a, i) => {
    const k = qi[i] % a.quotes.length;
    return {
      kanji: a.kanji,
      label: a.label,
      rot: `rotate(${a.rot})`,
      q: `“${a.quotes[k].q}”`,
      w: `— ${a.quotes[k].w}`,
      count: `QUOTE ${k + 1} / ${a.quotes.length}`,
      cycle: () => setQi((prev) => prev.map((v, j) => (j === i ? (v + 1) % a.quotes.length : v))),
    };
  });
  return (
    <section
      id="offduty"
      data-screen-label={"04b Off duty"}
      style={s(
        "position:relative;background:var(--paper);color:rgba(var(--ink),1);padding:clamp(64px,9vh,100px) clamp(24px,6vw,84px);scroll-margin-top:62px;overflow:hidden",
      )}
    >
      <div data-reveal>
        <div
          style={s(
            "display:flex;align-items:baseline;justify-content:space-between;gap:18px;flex-wrap:wrap;margin-bottom:18px",
          )}
        >
          <div
            style={s(
              "display:flex;align-items:center;gap:10px;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.3em;color:rgba(var(--ink),.45)",
            )}
          >
            <span
              style={s("width:7px;height:7px;border-radius:50%;background:var(--accent,#C93A1A)")}
            ></span>
            OFF DUTY — THE ANIME BOARD
          </div>
          <div
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.2em;color:rgba(var(--ink),.4)",
            )}
          >
            CLICK A CARD TO CYCLE ↻
          </div>
        </div>
        <div
          style={s(
            "position:relative;border:1px solid rgba(var(--ink),.15);background:var(--paper2);background-image:radial-gradient(var(--dot) 1px, transparent 1px);background-size:20px 20px;padding:clamp(30px,4vw,48px) clamp(20px,4vw,48px) clamp(28px,4vw,44px);display:flex;flex-wrap:wrap;gap:clamp(20px,3vw,36px);justify-content:center",
          )}
        >
          <div
            style={s(
              "position:absolute;top:10px;left:14px;font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.26em;color:rgba(var(--ink),.35)",
            )}
          >
            BOARD — 05 PINNED
          </div>
          {animeCards.map((a) => (
            <Fragment key={a.label}>
              {/* biome-ignore lint/a11y/useSemanticElements: a <button> would add default button styling to the card */}
              <div
                role="button"
                tabIndex={0}
                onClick={a.cycle}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    a.cycle();
                  }
                }}
                style={s(
                  `position:relative;flex:1 1 250px;max-width:340px;background:var(--card);border:1px solid rgba(var(--ink),.16);box-shadow:0 22px 44px -28px rgba(10,10,10,.4);padding:28px 22px 16px;cursor:pointer;transform:${a.rot};transition:transform .4s cubic-bezier(.22,.61,.36,1),box-shadow .4s,border-color .4s`,
                )}
                className="hv11"
              >
                <div
                  style={s(
                    "position:absolute;top:-11px;left:50%;transform:translateX(-50%) rotate(-3deg);width:76px;height:22px;background:color-mix(in srgb, var(--accent,#C93A1A) 82%, #F5F4F0);opacity:.9",
                  )}
                ></div>
                <div
                  style={s(
                    "font-family:'Noto Serif JP','Cormorant Garamond',serif;font-weight:600;font-size:20px;line-height:1.35",
                  )}
                >
                  {a.kanji}
                </div>
                <div
                  style={s(
                    "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.22em;color:var(--accent,#C93A1A);margin:8px 0 14px",
                  )}
                >
                  {a.label}
                </div>
                <p
                  style={s(
                    "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:19px;line-height:1.45;color:rgba(var(--ink),.75);min-height:84px",
                  )}
                >
                  {a.q}
                </p>
                <div
                  style={s(
                    "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.22em;color:rgba(var(--ink),.5);margin-top:10px",
                  )}
                >
                  {a.w}
                </div>
                <div
                  style={s(
                    "display:flex;justify-content:space-between;align-items:center;margin-top:16px;padding-top:12px;border-top:1px solid rgba(var(--ink),.1)",
                  )}
                >
                  <span
                    style={s(
                      "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.2em;color:rgba(var(--ink),.4)",
                    )}
                  >
                    {a.count}
                  </span>
                  <span
                    style={s(
                      "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.2em;color:var(--accent,#C93A1A)",
                    )}
                  >
                    CYCLE ↻
                  </span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
