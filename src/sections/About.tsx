import { Fragment, useState } from "react";
import { ANIME } from "../data/anime";
import { s } from "../lib/css";

export default function About() {
  const animeOn = true;
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
      id="about"
      data-screen-label={"02 About"}
      style={s(
        "position:relative;background:var(--paper);color:rgba(var(--ink),1);padding:clamp(96px,14vh,150px) clamp(24px,6vw,84px);scroll-margin-top:62px;overflow:hidden",
      )}
    >
      <div
        style={s(
          "position:absolute;right:clamp(16px,4vw,60px);top:56px;font-family:'Cormorant Garamond',Georgia,serif;font-weight:700;font-size:clamp(90px,12vw,170px);line-height:.8;color:rgba(var(--ink),.06);pointer-events:none",
        )}
      >
        02
      </div>
      <div style={s("display:flex;flex-wrap:wrap;gap:clamp(40px,6vw,90px);align-items:flex-start")}>
        <div data-reveal style={s("flex:1 1 320px;max-width:430px;position:relative")}>
          <div
            style={s(
              "position:relative;height:480px;border-radius:2px;overflow:hidden;background:#16130f",
            )}
          >
            <img
              src="/images/graduation-photo.jpg"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              alt={"Hari Vallabha at graduation, VBIT class of 2026"}
              style={s(
                "width:100%;height:100%;object-fit:cover;object-position:center;display:block;",
              )}
            />
            <div
              style={s(
                "position:absolute;inset:0;background:linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.1) 40%, transparent 100%);pointer-events:none",
              )}
            ></div>
            <div
              style={s(
                "position:absolute;left:20px;bottom:20px;z-index:2;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.24em;color:rgba(245,244,240,.9);background:rgba(10,10,10,.7);backdrop-filter:blur(6px);padding:8px 12px;border:1px solid rgba(245,244,240,.15)",
              )}
            >
              SECUNDERABAD, IN — 17.44°N 78.55°E
            </div>
            <div
              style={s(
                "position:absolute;right:20px;bottom:20px;z-index:2;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.22em;color:var(--accent,#C93A1A);background:rgba(10,10,10,.7);backdrop-filter:blur(6px);padding:8px 12px;border:1px solid rgba(245,244,240,.15)",
              )}
            >
              VBIT CLASS OF 2026
            </div>
          </div>
          <div
            style={s(
              "display:flex;justify-content:space-between;margin-top:16px;font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:rgba(var(--ink),.55)",
            )}
          >
            <span>K. Hari Vallabha</span>
            <span>VBIT Class of 2026</span>
          </div>
        </div>
        <div style={s("flex:1.4 1 380px;padding-top:16px")}>
          <div
            data-reveal
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.34em;text-transform:uppercase;color:var(--accent,#C93A1A)",
            )}
          >
            The origin story ·{" "}
            <span style={s("font-family:'Noto Serif JP',serif;letter-spacing:.14em")}>起源</span>
          </div>
          <h2
            data-reveal
            style={s(
              "font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(34px,4vw,54px);line-height:1.04;letter-spacing:-.01em;max-width:560px;margin:22px 0 46px",
            )}
          >
            Engineer first, analyst always — I ship the product, then read its pulse.
          </h2>
          <div
            data-reveal
            style={s(
              "display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:40px;max-width:640px",
            )}
          >
            <div>
              <h3
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.26em;text-transform:uppercase;font-weight:500;color:var(--accent,#C93A1A);margin-bottom:14px",
                )}
              >
                The engineer
              </h3>
              <p
                style={s(
                  "font-size:14px;line-height:1.75;color:rgba(var(--ink),.66);font-weight:300",
                )}
              >
                Full-stack developer building and deploying scalable web and desktop apps with
                React, Node.js and Python — RESTful APIs, third-party integrations, backend
                performance. End-to-end, with a bias for usability and reliability.
              </p>
            </div>
            <div>
              <h3
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.26em;text-transform:uppercase;font-weight:500;color:var(--accent,#C93A1A);margin-bottom:14px",
                )}
              >
                The analyst
              </h3>
              <p
                style={s(
                  "font-size:14px;line-height:1.75;color:rgba(var(--ink),.66);font-weight:300",
                )}
              >
                Trained in data science — drift detection, KPI dashboards and SQL are home turf. I
                instrument what I build, so every feature ships with the numbers to prove it worked.
              </p>
            </div>
          </div>
        </div>
      </div>
      {animeOn && (
        <div data-reveal style={s("margin-top:clamp(60px,9vh,96px)")}>
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
              PLACEHOLDER QUOTES — CLICK A CARD TO CYCLE ↻
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
      )}
      <div
        style={s(
          "position:absolute;right:30px;bottom:48px;writing-mode:vertical-rl;font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:500;font-size:58px;color:rgba(var(--ink),.14);pointer-events:none",
        )}
      >
        Curious.
      </div>
    </section>
  );
}
