import { type PointerEvent, useRef, useState } from "react";
import { LBLS, RANKS, SKILLS, STATS, TREE_KANJI, TREE_NAMES } from "../data/skills";
import { s } from "../lib/css";

const mono = "font-family:'DM Mono',ui-monospace,monospace;";
const serif = "font-family:'Cormorant Garamond',Georgia,serif;";
const ORANGE = "#F4874B";
const rankColor = (w: number) => (w === 4 ? ORANGE : w === 3 ? "#F5F4F0" : "rgba(245,244,240,.5)");

/** The stat sheet: a tilting class card, a skill-tree picker and one tile per skill with its rank. */
export default function Skills() {
  const [tree, setTree] = useState(2);
  const [hi, setHi] = useState<{ name: string; w: number } | null>(null);
  const card = useRef<HTMLDivElement>(null);
  // Read once: the card's tilt is skipped for visitors who asked for reduced motion.
  const [motionOk] = useState(() => !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const pickTree = (gi: number) => {
    setTree(gi);
    setHi(null); // the hovered tile is about to disappear without a mouseleave
  };

  const tilt = (e: PointerEvent<HTMLDivElement>) => {
    const el = card.current;
    if (!el || !motionOk || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const untilt = () => {
    if (card.current) card.current.style.transform = "perspective(900px)";
  };

  const skills = SKILLS.filter((sk) => sk[1] === tree).sort((a, b) => b[2] - a[2]);

  return (
    <section
      id="skills"
      data-screen-label={"03 Skills"}
      style={s(
        "position:relative;background:#0A0A0A;color:#F5F4F0;padding:clamp(96px,13vh,140px) clamp(24px,6vw,84px);scroll-margin-top:62px;overflow:hidden",
      )}
    >
      <div
        style={s(
          "position:absolute;inset:0;pointer-events:none;opacity:.05;background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
        )}
      ></div>
      <div
        style={s(
          `position:absolute;left:clamp(16px,3vw,44px);bottom:36px;${serif}font-weight:700;font-size:clamp(90px,11vw,150px);line-height:.8;color:rgba(245,244,240,.05);pointer-events:none`,
        )}
      >
        03
      </div>
      <div
        data-reveal
        style={s(
          "display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap",
        )}
      >
        <div>
          <div
            style={s(
              `${mono}font-size:11px;letter-spacing:.34em;text-transform:uppercase;color:var(--accent,#C93A1A)`,
            )}
          >
            The stat sheet — 03 ·{" "}
            <span lang="ja" style={s("font-family:'Noto Serif JP',serif;letter-spacing:.14em")}>
              能力
            </span>
          </div>
          <h2
            style={s(
              `${serif}font-weight:500;font-size:clamp(40px,5vw,62px);letter-spacing:-.01em;margin-top:10px`,
            )}
          >
            Abilities, ranked<span style={s("color:var(--accent,#C93A1A)")}>.</span>
          </h2>
        </div>
        <div
          style={s(
            `${mono}font-size:10px;letter-spacing:.2em;color:rgba(245,244,240,.45);text-transform:uppercase`,
          )}
        >
          Pick a skill tree · hover to equip
        </div>
      </div>

      <div
        style={s(
          "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(28px,4.5vw,64px);margin-top:44px;align-items:start",
        )}
      >
        <div data-reveal style={s("display:flex;justify-content:center")}>
          {/* The card tilts toward the pointer; it is decorative, the controls inside are real buttons. */}
          <div
            ref={card}
            onPointerMove={tilt}
            onPointerLeave={untilt}
            style={s(
              "position:relative;width:min(100%,380px);aspect-ratio:5/7;background:linear-gradient(160deg,#1a1712 0%,#0e0d0b 55%,#1d140c 100%);border:1px solid rgba(244,135,75,.45);box-shadow:0 0 0 6px #0A0A0A,0 0 0 7px rgba(245,244,240,.14),0 50px 90px -40px rgba(201,58,26,.45);transition:transform .25s ease-out;transform:perspective(900px);will-change:transform;overflow:hidden;cursor:default",
            )}
          >
            <div
              aria-hidden="true"
              style={s(
                "position:absolute;inset:0;pointer-events:none;mix-blend-mode:screen;background:radial-gradient(55% 45% at var(--mx,50%) var(--my,30%),rgba(244,135,75,.32),transparent 62%),linear-gradient(115deg,transparent 32%,rgba(245,244,240,.08) 46%,transparent 60%)",
              )}
            ></div>
            <div
              aria-hidden="true"
              lang="ja"
              style={s(
                "position:absolute;right:14px;top:56px;font-family:'Noto Serif JP',serif;font-weight:700;font-size:64px;line-height:1;writing-mode:vertical-rl;color:rgba(245,244,240,.07);pointer-events:none",
              )}
            >
              機械学習
            </div>
            <div
              style={s(
                "position:relative;height:100%;display:flex;flex-direction:column;padding:20px 22px",
              )}
            >
              <div
                style={s("display:flex;justify-content:space-between;align-items:center;gap:10px")}
              >
                <span style={s(`${mono}font-size:9px;letter-spacing:.26em;color:${ORANGE}`)}>
                  CLASS · AI/ML ENGINEER
                </span>
                <span
                  style={s(
                    `width:34px;height:34px;border:1.5px solid ${ORANGE};color:${ORANGE};display:flex;align-items:center;justify-content:center;${serif}font-weight:700;font-size:20px;transform:rotate(-8deg)`,
                  )}
                >
                  S
                </span>
              </div>
              <div style={s("margin-top:18px")}>
                <div
                  style={s(
                    `${serif}font-weight:700;font-size:clamp(34px,4vw,44px);line-height:.92;letter-spacing:-.01em;color:#F5F4F0`,
                  )}
                >
                  Hari
                  <br />
                  Vallabha
                </div>
                <div
                  style={s(
                    `${serif}font-style:italic;font-size:16px;color:rgba(245,244,240,.6);margin-top:8px`,
                  )}
                >
                  Sub-class: full-stack engineer
                </div>
              </div>
              <div style={s("display:flex;flex-direction:column;gap:10px;margin-top:auto")}>
                {STATS.map(([label, gi, v]) => {
                  const on = tree === gi;
                  const col = on ? ORANGE : "rgba(245,244,240,.75)";
                  return (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={on}
                      className="stat-btn"
                      onClick={() => pickTree(gi)}
                      style={s(
                        "display:grid;grid-template-columns:78px minmax(0,1fr) 26px;gap:10px;align-items:center;cursor:pointer;background:none;border:0;padding:0;color:inherit;text-align:left",
                      )}
                    >
                      <span
                        style={s(
                          `${mono}font-size:8.5px;letter-spacing:.18em;color:${col};transition:color .3s`,
                        )}
                      >
                        {label}
                      </span>
                      <span
                        aria-hidden="true"
                        style={s(
                          "display:block;height:6px;background:rgba(245,244,240,.1);position:relative",
                        )}
                      >
                        <span
                          style={{
                            ...s(
                              "position:absolute;left:0;top:0;bottom:0;transition:background .3s",
                            ),
                            width: `${v}%`,
                            background: on ? ORANGE : "rgba(245,244,240,.5)",
                          }}
                        ></span>
                      </span>
                      <span style={s(`${mono}font-size:10px;color:${col};text-align:right`)}>
                        {v}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div
                style={s(
                  "margin-top:16px;padding-top:12px;border-top:1px solid rgba(245,244,240,.14);display:flex;flex-direction:column;gap:6px",
                )}
              >
                <span
                  style={s(
                    `${mono}font-size:8.5px;letter-spacing:.24em;color:rgba(245,244,240,.45)`,
                  )}
                >
                  EQUIPPED
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    ...s(
                      `${mono}font-size:11px;letter-spacing:.12em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis`,
                    ),
                    color: hi ? ORANGE : "rgba(245,244,240,.5)",
                  }}
                >
                  {hi ? `● ${hi.name.toUpperCase()} — RANK ${RANKS[hi.w]}` : "NONE — HOVER A SKILL"}
                </span>
              </div>
              <div
                style={s(
                  `margin-top:12px;display:flex;justify-content:space-between;${mono}font-size:8px;letter-spacing:.22em;color:rgba(245,244,240,.35)`,
                )}
              >
                <span>NO. 001 / 001</span>
                <span lang="ja" style={s("font-family:'Noto Serif JP',serif")}>
                  能力カード
                </span>
              </div>
            </div>
          </div>
        </div>

        <div data-reveal style={s("display:flex;flex-direction:column;gap:22px")}>
          <div style={s("display:flex;flex-wrap:wrap;gap:8px")}>
            {LBLS.map((label, gi) => {
              const on = tree === gi;
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={on}
                  onClick={() => pickTree(gi)}
                  style={{
                    ...s(
                      `display:flex;align-items:center;gap:8px;padding:9px 14px;cursor:pointer;${mono}font-size:9.5px;letter-spacing:.2em;transition:background .25s,color .25s,border-color .25s`,
                    ),
                    background: on ? ORANGE : "transparent",
                    color: on ? "#0A0A0A" : "rgba(245,244,240,.7)",
                    border: `1px solid ${on ? ORANGE : "rgba(245,244,240,.25)"}`,
                  }}
                >
                  {label}
                  <span style={s("opacity:.6")}>
                    {String(SKILLS.filter((sk) => sk[1] === gi).length).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
          <div
            style={s(
              "display:flex;align-items:baseline;justify-content:space-between;gap:16px;border-bottom:1px solid rgba(245,244,240,.14);padding-bottom:14px",
            )}
          >
            <div
              style={s(
                `${serif}font-style:italic;font-weight:500;font-size:clamp(30px,3.4vw,42px);line-height:1;color:#F5F4F0`,
              )}
            >
              {TREE_NAMES[tree]}
              <span
                lang="ja"
                style={s(
                  `font-family:'Noto Serif JP',serif;font-style:normal;font-size:.6em;color:${ORANGE};margin-left:6px`,
                )}
              >
                {TREE_KANJI[tree]}
              </span>
            </div>
            <span
              style={s(`${mono}font-size:9px;letter-spacing:.22em;color:rgba(245,244,240,.45)`)}
            >
              SKILL TREE
            </span>
          </div>
          <ul
            className="skills-grid"
            style={s(
              "display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,190px),1fr));gap:10px;list-style:none;margin:0;padding:0",
            )}
          >
            {skills.map(([name, , w]) => (
              <li
                key={name}
                className="skill-tile"
                onMouseEnter={() => setHi({ name, w })}
                onMouseLeave={() => setHi(null)}
                style={s(
                  "position:relative;border:1px solid rgba(245,244,240,.16);background:#111010;padding:14px 14px 12px;display:flex;flex-direction:column;gap:12px;cursor:default;transition:border-color .25s,transform .3s cubic-bezier(.22,.61,.36,1),background .25s",
                )}
              >
                <div
                  style={s(
                    "display:flex;justify-content:space-between;align-items:flex-start;gap:10px",
                  )}
                >
                  <span
                    style={s(
                      `${serif}font-weight:600;font-size:21px;line-height:1.1;color:#F5F4F0;overflow-wrap:break-word`,
                    )}
                    className="skill-name"
                  >
                    {name}
                  </span>
                  <span
                    role="img"
                    className="skill-rank"
                    aria-label={`Rank ${RANKS[w]}`}
                    style={{
                      ...s(
                        `width:26px;height:26px;flex:none;display:flex;align-items:center;justify-content:center;${serif}font-weight:700;font-size:15px;transform:rotate(-6deg)`,
                      ),
                      border: `1.5px solid ${rankColor(w)}`,
                      color: rankColor(w),
                    }}
                  >
                    {RANKS[w]}
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  style={s("display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px")}
                >
                  {[1, 2, 3, 4].map((k) => (
                    <div
                      key={k}
                      style={{
                        height: 5,
                        background:
                          k <= w ? (w === 4 ? ORANGE : "#F5F4F0") : "rgba(245,244,240,.12)",
                      }}
                    ></div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div
            style={s(
              `border-top:1px solid rgba(245,244,240,.12);padding-top:14px;${mono}font-size:9.5px;letter-spacing:.2em;color:rgba(245,244,240,.4)`,
            )}
          >
            RANK S → C · SELF-ASSESSED, HARSHLY · S = USED WEEKLY IN PRODUCTION
          </div>
        </div>
      </div>
    </section>
  );
}
