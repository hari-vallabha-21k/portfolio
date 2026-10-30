import { useState } from "react";
import { FORMS } from "../data/skills";
import { s } from "../lib/css";

const mono = "font-family:'DM Mono',ui-monospace,monospace;";
const serif = "font-family:'Cormorant Garamond',Georgia,serif;";
const MARQUEE =
  "React · Next.js · TypeScript · Node.js · Flask · FastAPI · PostgreSQL · Supabase · MongoDB · Docker · AWS · Vercel · Python · PyTorch · LangChain · ChromaDB · C++ · Plotly · Tailwind — ";
const marqueeStyle = s(
  `${mono}font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:rgba(245,244,240,.6);white-space:nowrap;padding-right:48px`,
);

/** "How I equip": pick a formation and read its five-slot combo chain. */
export default function Stack() {
  const [fo, setFo] = useState(0);
  const F = FORMS[fo];
  return (
    <section
      id="stack"
      data-screen-label={"07 Stack"}
      style={s("position:relative;background:var(--paper2);scroll-margin-top:62px;overflow:hidden")}
    >
      <div
        aria-hidden="true"
        style={s(
          "overflow:hidden;border-bottom:1px solid rgba(var(--ink),.12);padding:15px 0;background:#0A0A0A",
        )}
      >
        <div
          style={s("display:flex;width:max-content;animation:marquee 30s linear infinite")}
          className="hv20"
        >
          <span style={marqueeStyle}>{MARQUEE}</span>
          <span style={marqueeStyle}>{MARQUEE}</span>
        </div>
      </div>
      <div style={s("padding:clamp(80px,11vh,120px) clamp(24px,6vw,84px)")}>
        <div
          style={s(
            `position:absolute;right:clamp(16px,4vw,60px);top:110px;${serif}font-weight:700;font-size:clamp(90px,11vw,150px);line-height:.8;color:rgba(var(--ink),.06);pointer-events:none`,
          )}
        >
          07
        </div>
        <div data-reveal>
          <div
            style={s(
              `${mono}font-size:11px;letter-spacing:.34em;text-transform:uppercase;color:rgba(var(--ink),.5)`,
            )}
          >
            How I equip ·{" "}
            <span lang="ja" style={s("font-family:'Noto Serif JP',serif;letter-spacing:.14em")}>
              編成
            </span>
          </div>
          <h2
            style={s(
              `${serif}font-weight:500;font-size:clamp(40px,5vw,62px);letter-spacing:-.01em;margin:10px 0 44px`,
            )}
          >
            Battle formations<span style={s("color:var(--accent,#C93A1A)")}>.</span>
          </h2>
        </div>
        <div
          data-reveal
          style={s(
            "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:10px",
          )}
        >
          {FORMS.map((f, i) => {
            const on = fo === i;
            return (
              <button
                key={f.k}
                type="button"
                aria-pressed={on}
                onClick={() => setFo(i)}
                style={{
                  ...s(
                    "text-align:left;display:flex;align-items:center;gap:16px;padding:16px 18px;cursor:pointer;transition:background .3s,color .3s,border-color .3s",
                  ),
                  background: on ? "rgba(var(--ink),1)" : "var(--card)",
                  color: on ? "var(--paper)" : "rgba(var(--ink),.85)",
                  border: `1px solid ${on ? "rgba(var(--ink),1)" : "rgba(var(--ink),.2)"}`,
                }}
              >
                <span
                  style={{
                    ...s(`${serif}font-weight:700;font-size:44px;line-height:.8`),
                    color: on ? "#F4874B" : "rgba(var(--ink),.25)",
                  }}
                >
                  {f.k}
                </span>
                <span style={s("display:flex;flex-direction:column;gap:5px;min-width:0")}>
                  <span style={s(`${mono}font-size:8.5px;letter-spacing:.22em;opacity:.7`)}>
                    {f.mission}
                  </span>
                  <span
                    style={s(
                      `${serif}font-style:italic;font-weight:500;font-size:20px;line-height:1.1`,
                    )}
                  >
                    {f.name}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        <div
          data-reveal
          style={s(
            "margin-top:14px;background:#0A0A0A;color:#F5F4F0;border:1px solid rgba(var(--ink),.2);padding:clamp(24px,4vw,40px)",
          )}
        >
          <div
            style={s(
              "display:flex;justify-content:space-between;align-items:baseline;gap:16px;flex-wrap:wrap;margin-bottom:28px",
            )}
          >
            <div style={s(`${mono}font-size:9.5px;letter-spacing:.26em;color:#F4874B`)}>
              FORMATION {F.k} ·{" "}
              <span lang="ja" style={s("font-family:'Noto Serif JP',serif")}>
                {F.kanji}
              </span>{" "}
              — COMBO CHAIN
            </div>
            <div
              aria-live="polite"
              style={s(
                `${serif}font-style:italic;font-size:18px;color:rgba(245,244,240,.65);max-width:52ch;text-wrap:pretty`,
              )}
            >
              {F.desc}
            </div>
          </div>
          <div style={s("position:relative")}>
            <div
              aria-hidden="true"
              style={s(
                "position:absolute;left:0;right:0;top:15px;height:1px;background:rgba(245,244,240,.2)",
              )}
            ></div>
            <div
              aria-hidden="true"
              style={s(
                "position:absolute;top:12px;width:60px;height:7px;background:linear-gradient(90deg,transparent,#F4874B);animation:comboPulse 2.6s linear infinite",
              )}
            ></div>
            <ol
              style={s(
                "position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,140px),1fr));gap:18px;list-style:none;margin:0;padding:0",
              )}
            >
              {F.slots.map(([role, tool, code], i) => (
                <li key={role} style={s("display:flex;flex-direction:column;gap:12px")}>
                  <div
                    aria-hidden="true"
                    style={s(
                      `width:31px;height:31px;border-radius:50%;background:#0A0A0A;border:1.5px solid #F4874B;display:flex;align-items:center;justify-content:center;${mono}font-size:10px;color:#F4874B`,
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    className="slot-card"
                    style={s(
                      "border:1px solid rgba(245,244,240,.16);padding:14px;display:flex;flex-direction:column;gap:8px;transition:border-color .25s,transform .3s cubic-bezier(.22,.61,.36,1)",
                    )}
                  >
                    <span
                      style={s(
                        `${mono}font-size:8.5px;letter-spacing:.2em;color:rgba(245,244,240,.5)`,
                      )}
                    >
                      {role}
                    </span>
                    <span style={s(`${serif}font-weight:600;font-size:24px;line-height:1.05`)}>
                      {tool}
                    </span>
                    <span style={s(`${mono}font-size:8.5px;letter-spacing:.16em;color:#F4874B`)}>
                      {code}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div
            style={s(
              "display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;margin-top:28px;padding-top:16px;border-top:1px solid rgba(245,244,240,.14)",
            )}
          >
            <span
              style={s(`${mono}font-size:9px;letter-spacing:.22em;color:rgba(245,244,240,.45)`)}
            >
              PROVEN IN BATTLE
            </span>
            <a href={F.href} style={s(`${mono}font-size:10.5px;letter-spacing:.2em;color:#F4874B`)}>
              {F.proof} ↗
            </a>
          </div>
        </div>
        <div
          data-reveal
          style={s(
            `display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;border-top:1px solid rgba(var(--ink),.14);margin-top:22px;padding-top:14px;${mono}font-size:9.5px;letter-spacing:.2em;color:rgba(var(--ink),.4)`,
          )}
        >
          <span>PICK A FORMATION · 03 LOADOUTS, SWAPPED AS THE MISSION DEMANDS</span>
          <span>
            FULL ARSENAL —{" "}
            <a href="#skills" style={s("color:var(--accent,#C93A1A)")}>
              SEE THE STAT SHEET ↑
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
