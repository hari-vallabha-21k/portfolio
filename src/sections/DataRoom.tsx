import CountUp from "../components/CountUp";
import TypedSql from "../components/TypedSql";
import { PSI_DRIFT } from "../data/misc";
import { PROJECTS } from "../data/projects";
import { s } from "../lib/css";

export default function DataRoom() {
  return (
    <section
      id="data"
      data-screen-label={"06 Data room"}
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
          "position:absolute;right:clamp(16px,4vw,60px);bottom:30px;font-family:'Cormorant Garamond',Georgia,serif;font-weight:700;font-size:clamp(90px,11vw,150px);line-height:.8;color:rgba(245,244,240,.05);pointer-events:none",
        )}
      >
        06
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
            The data room ·{" "}
            <span style={s("font-family:'Noto Serif JP',serif;letter-spacing:.14em")}>分析</span>
          </div>
          <h2
            style={s(
              "font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(40px,5vw,62px);letter-spacing:-.01em;margin-top:10px",
            )}
          >
            Numbers, or it didn't happen<span style={s("color:var(--accent,#C93A1A)")}>.</span>
          </h2>
        </div>
        <div
          style={s(
            "font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.22em;color:rgba(245,244,240,.4);text-transform:uppercase",
          )}
        >
          Headline numbers from shipped work — charts below illustrative
        </div>
      </div>
      <div data-reveal style={s("display:flex;flex-wrap:wrap;gap:18px;margin:52px 0 18px")}>
        <div
          style={s(
            "flex:1 1 220px;background:#131311;border:1px solid rgba(245,244,240,.12);padding:26px 28px",
          )}
        >
          <div
            style={s(
              "font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:54px;line-height:1;color:#F4874B",
            )}
          >
            <CountUp to={62} prefix="−" suffix="%" />
          </div>
          <div
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:rgba(245,244,240,.5);margin-top:14px",
            )}
          >
            Avg. support resolution — SimplHome
          </div>
        </div>
        <div
          style={s(
            "flex:1 1 220px;background:#131311;border:1px solid rgba(245,244,240,.12);padding:26px 28px",
          )}
        >
          <div
            style={s(
              "font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:54px;line-height:1",
            )}
          >
            <CountUp to={3} />
          </div>
          <div
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:rgba(245,244,240,.5);margin-top:14px",
            )}
          >
            Languages served, realtime STT
          </div>
        </div>
        <div
          style={s(
            "flex:1 1 220px;background:#131311;border:1px solid rgba(245,244,240,.12);padding:26px 28px",
          )}
        >
          <div
            style={s(
              "font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:54px;line-height:1",
            )}
          >
            <CountUp to={PSI_DRIFT} decimals={2} />
          </div>
          <div
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:rgba(245,244,240,.5);margin-top:14px",
            )}
          >
            Live PSI drift — within threshold
          </div>
        </div>
        <div
          style={s(
            "flex:1 1 220px;background:#131311;border:1px solid rgba(245,244,240,.12);padding:26px 28px",
          )}
        >
          <div
            style={s(
              "font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:54px;line-height:1",
            )}
          >
            <CountUp to={PROJECTS.length} />
          </div>
          <div
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:rgba(245,244,240,.5);margin-top:14px",
            )}
          >
            Products shipped end-to-end
          </div>
        </div>
      </div>
      <div
        style={s(
          "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr));gap:18px",
        )}
      >
        <div
          data-reveal
          style={s("background:#131311;border:1px solid rgba(245,244,240,.12);padding:26px 28px")}
        >
          <div
            style={s(
              "display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:22px",
            )}
          >
            <span
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.24em;color:rgba(245,244,240,.55)",
              )}
            >
              MODEL DRIFT — PSI · 12 WEEKS
            </span>
            <span
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.18em;color:var(--accent,#C93A1A)",
              )}
            >
              — — threshold .10
            </span>
          </div>
          <svg
            role="img"
            aria-label="Line chart: model metric over 12 weeks, spike at week 9 triggers a retrain flag"
            viewBox={"0 0 640 250"}
            style={s("width:100%;height:auto;display:block")}
          >
            <line x1={"20"} y1={"60"} x2={"620"} y2={"60"} stroke={"rgba(245,244,240,.07)"}></line>
            <line x1={"20"} y1="112" x2={"620"} y2="112" stroke={"rgba(245,244,240,.07)"}></line>
            <line x1={"20"} y1="164" x2={"620"} y2="164" stroke={"rgba(245,244,240,.07)"}></line>
            <line x1={"20"} y1="214" x2={"620"} y2="214" stroke={"rgba(245,244,240,.14)"}></line>
            <line
              x1={"20"}
              y1="124"
              x2={"620"}
              y2="124"
              stroke={"var(--accent,#C93A1A)"}
              strokeDasharray={"5 7"}
              opacity=".6"
            ></line>
            <path
              data-fade
              d={
                "M20,169 L75,165 L129,171 L184,160 L238,162 L293,155 L347,158 L402,151 L456,88 L511,133 L565,147 L620,142 L620,214 L20,214 Z"
              }
              fill={"rgba(244,135,75,.08)"}
              stroke="none"
            ></path>
            <path
              data-draw
              pathLength="1"
              d={
                "M20,169 L75,165 L129,171 L184,160 L238,162 L293,155 L347,158 L402,151 L456,88 L511,133 L565,147 L620,142"
              }
              fill="none"
              stroke="#F4874B"
              strokeWidth={"2.5"}
              strokeLinejoin="round"
            ></path>
            <circle cx={"456"} cy="88" r={"4.5"} fill={"var(--accent,#C93A1A)"}></circle>
            <circle
              cx={"456"}
              cy="88"
              r="9"
              fill="none"
              stroke={"var(--accent,#C93A1A)"}
              opacity={".5"}
            >
              <animate
                attributeName="r"
                values="6;13;6"
                dur="2.4s"
                repeatCount="indefinite"
              ></animate>
              <animate
                attributeName={"opacity"}
                values={".6;0;.6"}
                dur="2.4s"
                repeatCount="indefinite"
              ></animate>
            </circle>
            <text
              x="448"
              y="72"
              textAnchor="end"
              fill={"rgba(245,244,240,.65)"}
              style={s("font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.08em")}
            >
              wk 9 — retrain flagged
            </text>
            <text
              x={"20"}
              y={"240"}
              fill={"rgba(245,244,240,.35)"}
              style={s("font-family:'DM Mono',monospace;font-size:10px")}
            >
              W1
            </text>
            <text
              x="238"
              y={"240"}
              fill={"rgba(245,244,240,.35)"}
              style={s("font-family:'DM Mono',monospace;font-size:10px")}
            >
              W5
            </text>
            <text
              x={"456"}
              y={"240"}
              fill={"rgba(245,244,240,.35)"}
              style={s("font-family:'DM Mono',monospace;font-size:10px")}
            >
              W9
            </text>
            <text
              x={"620"}
              y={"240"}
              textAnchor="end"
              fill={"rgba(245,244,240,.35)"}
              style={s("font-family:'DM Mono',monospace;font-size:10px")}
            >
              W12
            </text>
          </svg>
        </div>
        <div
          data-reveal
          style={s("background:#131311;border:1px solid rgba(245,244,240,.12);padding:26px 28px")}
        >
          <div style={s("display:flex;align-items:center;gap:8px;margin-bottom:22px")}>
            <span
              style={s("width:9px;height:9px;border-radius:50%;background:var(--accent,#C93A1A)")}
            ></span>
            <span
              style={s("width:9px;height:9px;border-radius:50%;background:rgba(245,244,240,.25)")}
            ></span>
            <span
              style={s("width:9px;height:9px;border-radius:50%;background:rgba(245,244,240,.25)")}
            ></span>
            <span
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.24em;color:rgba(245,244,240,.55);margin-left:10px",
              )}
            >
              AD-HOC — psql
            </span>
          </div>
          <TypedSql
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:12.5px;line-height:1.75;color:rgba(245,244,240,.85);white-space:pre-wrap;min-height:250px;margin:0",
            )}
          />
        </div>
      </div>
    </section>
  );
}
