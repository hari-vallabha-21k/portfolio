import { Fragment, useState } from "react";
import { GDOT, LBLS, RANKS, RCOL, SKILLS, TOPS } from "../data/skills";
import { s } from "../lib/css";

export default function Skills() {
  const [hi, setHi] = useState({ gi: -1, name: "", w: 0 });
  const hover = (next: { gi: number; name: string; w: number }) =>
    setHi((p) => (p.gi === next.gi && p.name === next.name ? p : next));
  const clear = () => hover({ gi: -1, name: "", w: 0 });
  const ax = (i: number) => {
    const hot = hi.gi === i;
    return {
      col: hot ? "#F4874B" : "rgba(245,244,240,.6)",
      col2: hot ? "rgba(244,135,75,.85)" : "rgba(245,244,240,.32)",
      dotR: hot ? 6.5 : 4,
      dotFill: hot ? "#F4874B" : GDOT[i],
    };
  };
  const [axFE, axBE, axDA, axOP, axTL] = [0, 1, 2, 3, 4].map(ax);
  const hudCol = hi.name ? "#F4874B" : "rgba(245,244,240,.5)";
  const radarHud = hi.name
    ? `● ${hi.name.toUpperCase()} — ${LBLS[hi.gi]} · RANK ${RANKS[hi.w]}`
    : "HOVER A SKILL — THE CHART ANSWERS";
  const rankGroups = LBLS.map((label, gi) => ({
    label,
    gi,
    top: TOPS[gi],
    rows: SKILLS.filter((sk) => sk[1] === gi)
      .sort((a, b) => b[2] - a[2])
      .map((sk) => ({ n: sk[0], w: sk[2], r: RANKS[sk[2]], col: RCOL[RANKS[sk[2]]] })),
  }));
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
          "position:absolute;left:clamp(16px,3vw,44px);bottom:36px;font-family:'Cormorant Garamond',Georgia,serif;font-weight:700;font-size:clamp(90px,11vw,150px);line-height:.8;color:rgba(245,244,240,.05);pointer-events:none",
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
              "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.34em;text-transform:uppercase;color:var(--accent,#C93A1A)",
            )}
          >
            The stat sheet — 03 ·{" "}
            <span style={s("font-family:'Noto Serif JP',serif;letter-spacing:.14em")}>能力</span>
          </div>
          <h2
            style={s(
              "font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(40px,5vw,62px);letter-spacing:-.01em;margin-top:10px",
            )}
          >
            Abilities, ranked<span style={s("color:var(--accent,#C93A1A)")}>.</span>
          </h2>
        </div>
        <div
          style={s(
            "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.2em;color:rgba(245,244,240,.45);text-transform:uppercase",
          )}
        >
          Hover a skill — the chart answers
        </div>
      </div>
      <div
        style={s(
          "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));gap:clamp(28px,4.5vw,60px);margin-top:44px;align-items:stretch",
        )}
      >
        <div
          data-reveal
          style={s(
            "position:relative;min-height:clamp(430px,54vh,580px);max-height:580px;align-self:start;border:1px solid rgba(245,244,240,.14);background:radial-gradient(70% 58% at 50% 46%, rgba(244,135,75,.07), transparent 64%), #0d0c0b;overflow:hidden",
          )}
        >
          <svg
            aria-hidden="true"
            viewBox={"0 0 580 540"}
            preserveAspectRatio="xMidYMid meet"
            style={s("position:absolute;inset:0;width:100%;height:100%")}
          >
            <polygon
              points={"290,226.5 333.3,257.9 316.7,308.8 263.3,308.8 246.7,257.9"}
              fill="none"
              stroke={"rgba(245,244,240,.09)"}
              strokeWidth="1"
            ></polygon>
            <polygon
              points={"290,181 376.6,243.9 343.5,345.6 236.5,345.6 203.4,243.9"}
              fill="none"
              stroke={"rgba(245,244,240,.09)"}
              strokeWidth="1"
            ></polygon>
            <polygon
              points={"290,135.5 419.8,229.8 370.2,382.4 209.8,382.4 160.2,229.8"}
              fill="none"
              stroke={"rgba(245,244,240,.09)"}
              strokeWidth="1"
            ></polygon>
            <polygon
              points={"290,90 463.1,215.8 397,419.2 183,419.2 116.9,215.8"}
              fill="none"
              stroke={"rgba(245,244,240,.16)"}
              strokeWidth="1"
            ></polygon>
            <line
              x1={"290"}
              y1="272"
              x2={"290"}
              y2={"90"}
              stroke={"rgba(245,244,240,.12)"}
              strokeWidth="1"
            ></line>
            <line
              x1={"290"}
              y1="272"
              x2="463.1"
              y2={"215.8"}
              stroke={"rgba(245,244,240,.12)"}
              strokeWidth="1"
            ></line>
            <line
              x1={"290"}
              y1="272"
              x2="397"
              y2="419.2"
              stroke={"rgba(245,244,240,.12)"}
              strokeWidth="1"
            ></line>
            <line
              x1={"290"}
              y1="272"
              x2="183"
              y2="419.2"
              stroke={"rgba(245,244,240,.12)"}
              strokeWidth="1"
            ></line>
            <line
              x1={"290"}
              y1="272"
              x2="116.9"
              y2={"215.8"}
              stroke={"rgba(245,244,240,.12)"}
              strokeWidth="1"
            ></line>
            <polygon
              data-fade
              points={"290,135.5 432.8,225.6 367.9,379.2 213,378 192.6,240.4"}
              fill={"rgba(244,135,75,.13)"}
            ></polygon>
            <polygon
              data-draw
              pathLength="1"
              points={"290,135.5 432.8,225.6 367.9,379.2 213,378 192.6,240.4"}
              fill="none"
              stroke="#F4874B"
              strokeWidth="1.6"
            ></polygon>
            <circle cx={"290"} cy={"135.5"} r={axFE.dotR} fill={axFE.dotFill}></circle>
            <circle cx="432.8" cy={"225.6"} r={axBE.dotR} fill={axBE.dotFill}></circle>
            <circle cx="367.9" cy="379.2" r={axDA.dotR} fill={axDA.dotFill}></circle>
            <circle cx="213" cy="378" r={axOP.dotR} fill={axOP.dotFill}></circle>
            <circle cx="192.6" cy={"240.4"} r={axTL.dotR} fill={axTL.dotFill}></circle>
            <circle cx={"290"} cy="272" r="3" fill={"#F5F4F0"} opacity=".7"></circle>
            <text
              x={"290"}
              y={"52"}
              textAnchor="middle"
              fill={axFE.col}
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.22em",
              )}
            >
              FRONTEND
            </text>
            <text
              x={"290"}
              y="67"
              textAnchor="middle"
              fill={axFE.col2}
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.18em",
              )}
            >
              2 × S
            </text>
            <text
              x="496"
              y={"202"}
              textAnchor="start"
              fill={axBE.col}
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.22em",
              )}
            >
              BACKEND
            </text>
            <text
              x="496"
              y="217"
              textAnchor="start"
              fill={axBE.col2}
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.18em",
              )}
            >
              1 × S
            </text>
            <text
              x="419"
              y="448"
              textAnchor="start"
              fill={axDA.col}
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.22em",
              )}
            >
              DATA &amp; ML
            </text>
            <text
              x="419"
              y="463"
              textAnchor="start"
              fill={axDA.col2}
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.18em",
              )}
            >
              1 × S
            </text>
            <text
              x="161"
              y="448"
              textAnchor="end"
              fill={axOP.col}
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.22em",
              )}
            >
              DEVOPS
            </text>
            <text
              x="161"
              y="463"
              textAnchor="end"
              fill={axOP.col2}
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.18em",
              )}
            >
              2 × A
            </text>
            <text
              x="83"
              y={"202"}
              textAnchor="end"
              fill={axTL.col}
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.22em",
              )}
            >
              TOOLS
            </text>
            <text
              x="83"
              y="217"
              textAnchor="end"
              fill={axTL.col2}
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.18em",
              )}
            >
              1 × B
            </text>
          </svg>
          <div
            style={s(
              "position:absolute;top:12px;left:14px;font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.26em;color:rgba(245,244,240,.35);pointer-events:none",
            )}
          >
            CLASS ASSESSMENT — 05 AXES · SELF-RANKED
          </div>
          <div
            style={s(
              "position:absolute;top:12px;right:14px;display:flex;align-items:center;gap:8px;font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.26em;color:rgba(245,244,240,.35);pointer-events:none",
            )}
          >
            <span
              style={s(
                "width:6px;height:6px;border-radius:50%;background:var(--accent,#C93A1A);animation:pulseDot 1.4s ease-in-out infinite",
              )}
            ></span>
            LIVE
          </div>
          <div
            style={s(
              `position:absolute;left:14px;bottom:12px;font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.2em;color:${hudCol};pointer-events:none;max-width:calc(100% - 28px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap`,
            )}
          >
            {radarHud}
          </div>
        </div>
        <div data-reveal style={s("display:flex;flex-direction:column")}>
          <div style={s("columns:15rem;column-gap:clamp(28px,3.5vw,52px);flex:1")}>
            {rankGroups.map((g) => (
              <Fragment key={g.label}>
                <div style={s("break-inside:avoid;padding-bottom:24px")}>
                  <div
                    style={s(
                      "display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid rgba(245,244,240,.14);padding:10px 2px 6px",
                    )}
                  >
                    <span
                      style={s(
                        "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.24em;color:var(--accent,#C93A1A)",
                      )}
                    >
                      {g.label}
                    </span>
                    <span
                      style={s(
                        "font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.2em;color:rgba(245,244,240,.35)",
                      )}
                    >
                      TOP {g.top}
                    </span>
                  </div>
                  {g.rows.map((it) => (
                    <Fragment key={it.n}>
                      {/* biome-ignore lint/a11y/noStaticElementInteractions: hover highlights a radar axis; the same information is in the visible text */}
                      <div
                        onMouseEnter={() => hover({ gi: g.gi, name: it.n, w: it.w })}
                        onMouseLeave={clear}
                        style={s(
                          "display:flex;align-items:baseline;gap:12px;padding:5px 2px;cursor:default;transition:background .25s",
                        )}
                        className="hv12"
                      >
                        <span
                          style={s(
                            "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:500;font-size:19px;line-height:1.3;color:rgba(245,244,240,.8);white-space:nowrap",
                          )}
                        >
                          {it.n}
                        </span>
                        <span
                          style={s(
                            "flex:1;border-bottom:1px dotted rgba(245,244,240,.18);transform:translateY(-4px)",
                          )}
                        ></span>
                        <span
                          style={s(
                            `font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:21px;line-height:1;color:${it.col};min-width:18px;text-align:right`,
                          )}
                        >
                          {it.r}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </Fragment>
            ))}
          </div>
          <div
            style={s(
              "border-top:1px solid rgba(245,244,240,.12);padding-top:14px;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.2em;color:rgba(245,244,240,.35)",
            )}
          >
            28 TOOLS · RANKED S → C — SELF-ASSESSED, HARSHLY. S = SHIPS WEEKLY.
          </div>
        </div>
      </div>
    </section>
  );
}
