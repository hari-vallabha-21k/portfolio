import { s } from "../lib/css";

export default function Stack() {
  return (
    <section
      id={"stack"}
      data-screen-label={"07 Stack"}
      style={s("position:relative;background:var(--paper2);scroll-margin-top:62px;overflow:hidden")}
    >
      <div
        style={s(
          "overflow:hidden;border-bottom:1px solid rgba(var(--ink),.12);padding:15px 0;background:#0A0A0A",
        )}
      >
        <div
          style={s("display:flex;width:max-content;animation:marquee 30s linear infinite")}
          className="hv20"
        >
          <span
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:rgba(245,244,240,.6);white-space:nowrap;padding-right:48px",
            )}
          >
            React · Next.js · TypeScript · Node.js · Flask · FastAPI · PostgreSQL · Supabase ·
            MongoDB · Docker · AWS · Vercel · Python · C++ · Plotly · Tailwind —&nbsp;
          </span>
          <span
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:rgba(245,244,240,.6);white-space:nowrap;padding-right:48px",
            )}
          >
            React · Next.js · TypeScript · Node.js · Flask · FastAPI · PostgreSQL · Supabase ·
            MongoDB · Docker · AWS · Vercel · Python · C++ · Plotly · Tailwind —&nbsp;
          </span>
        </div>
      </div>
      <div style={s("padding:clamp(80px,11vh,120px) clamp(24px,6vw,84px)")}>
        <div
          style={s(
            "position:absolute;right:clamp(16px,4vw,60px);top:110px;font-family:'Cormorant Garamond',Georgia,serif;font-weight:700;font-size:clamp(90px,11vw,150px);line-height:.8;color:rgba(var(--ink),.06);pointer-events:none",
          )}
        >
          07
        </div>
        <div data-reveal>
          <div
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.34em;text-transform:uppercase;color:rgba(var(--ink),.5)",
            )}
          >
            How I equip ·{" "}
            <span style={s("font-family:'Noto Serif JP',serif;letter-spacing:.14em")}>編成</span>
          </div>
          <h2
            style={s(
              "font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(40px,5vw,62px);letter-spacing:-.01em;margin:10px 0 44px",
            )}
          >
            Battle formations<span style={s("color:var(--accent,#C93A1A)")}>.</span>
          </h2>
        </div>
        <div
          data-reveal
          style={s(
            "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:14px",
          )}
        >
          <div
            style={s(
              "border:1px solid rgba(var(--ink),.2);background:var(--card);padding:24px 24px 20px;display:flex;flex-direction:column;transition:transform .4s cubic-bezier(.22,.61,.36,1),border-color .3s",
            )}
            className="hv21"
          >
            <div
              style={s(
                "display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:14px",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.24em;color:var(--accent,#C93A1A)",
                )}
              >
                FORMATION A · <span style={s("font-family:'Noto Serif JP',serif")}>編成</span>
              </span>
              <span
                style={s(
                  "border:1px solid rgba(var(--ink),.25);padding:5px 9px;font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.2em;color:rgba(var(--ink),.55)",
                )}
              >
                SAAS PRODUCT
              </span>
            </div>
            <div
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:500;font-size:24px;margin-bottom:14px",
              )}
            >
              The product build.
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                UI
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                React
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                FE-01
              </span>
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                FRAMEWORK
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                Next.js
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                FE-02
              </span>
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                AUTH+DATA
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                Supabase
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                DB-04
              </span>
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                DATABASE
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                PostgreSQL
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                DB-01
              </span>
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                DEPLOY
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                Vercel
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                OP-03
              </span>
            </div>
            <div
              style={s(
                "margin-top:auto;padding-top:14px;border-top:1px solid rgba(var(--ink),.14);display:flex;justify-content:space-between;align-items:baseline;gap:10px",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.22em;color:rgba(var(--ink),.45)",
                )}
              >
                PROVEN IN
              </span>
              <a
                href="#work"
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.18em;color:var(--accent,#C93A1A)",
                )}
              >
                PROJECTPULSE ↗
              </a>
            </div>
          </div>
          <div
            style={s(
              "border:1px solid rgba(var(--ink),.2);background:var(--card);padding:24px 24px 20px;display:flex;flex-direction:column;transition:transform .4s cubic-bezier(.22,.61,.36,1),border-color .3s",
            )}
            className="hv22"
          >
            <div
              style={s(
                "display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:14px",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.24em;color:var(--accent,#C93A1A)",
                )}
              >
                FORMATION B · <span style={s("font-family:'Noto Serif JP',serif")}>編成</span>
              </span>
              <span
                style={s(
                  "border:1px solid rgba(var(--ink),.25);padding:5px 9px;font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.2em;color:rgba(var(--ink),.55)",
                )}
              >
                DATA / ML
              </span>
            </div>
            <div
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:500;font-size:24px;margin-bottom:14px",
              )}
            >
              The evidence engine.
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                ANALYSIS
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                Python
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                LG-01
              </span>
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                SERVING
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                Flask · FastAPI
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                BE-03
              </span>
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                STORE
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                PostgreSQL
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                DB-01
              </span>
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                VIZ
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                Plotly
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                DA-04
              </span>
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                RUNTIME
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                Docker · AWS
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                OP-01
              </span>
            </div>
            <div
              style={s(
                "margin-top:auto;padding-top:14px;border-top:1px solid rgba(var(--ink),.14);display:flex;justify-content:space-between;align-items:baseline;gap:10px",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.22em;color:rgba(var(--ink),.45)",
                )}
              >
                PROVEN IN
              </span>
              <a
                href="#data"
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.18em;color:var(--accent,#C93A1A)",
                )}
              >
                SIMPLHOME DRIFT MONITOR ↗
              </a>
            </div>
          </div>
          <div
            style={s(
              "border:1px solid rgba(var(--ink),.2);background:var(--card);padding:24px 24px 20px;display:flex;flex-direction:column;transition:transform .4s cubic-bezier(.22,.61,.36,1),border-color .3s",
            )}
            className="hv23"
          >
            <div
              style={s(
                "display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:14px",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.24em;color:var(--accent,#C93A1A)",
                )}
              >
                FORMATION C · <span style={s("font-family:'Noto Serif JP',serif")}>編成</span>
              </span>
              <span
                style={s(
                  "border:1px solid rgba(var(--ink),.25);padding:5px 9px;font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.2em;color:rgba(var(--ink),.55)",
                )}
              >
                CLIENT E-COM
              </span>
            </div>
            <div
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:500;font-size:24px;margin-bottom:14px",
              )}
            >
              The storefront sprint.
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                PLATFORM
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                Shopify
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                EC-01
              </span>
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                TEMPLATE
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                Liquid
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                EC-02
              </span>
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                CUSTOM UX
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                JavaScript
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                LG-02
              </span>
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                CI / SHIP
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                GitHub Actions
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                OP-05
              </span>
            </div>
            <div
              style={s(
                "display:flex;align-items:baseline;gap:12px;padding:9px 0;border-top:1px dotted rgba(var(--ink),.22)",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:rgba(var(--ink),.4);width:58px;flex:none",
                )}
              >
                CLIENT
              </span>
              <span style={s("font-family:'DM Mono',ui-monospace,monospace;font-size:13px")}>
                Direct — stakeholders
              </span>
              <span style={s("flex:1")}></span>
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.16em;color:var(--accent,#C93A1A)",
                )}
              >
                ★
              </span>
            </div>
            <div
              style={s(
                "margin-top:auto;padding-top:14px;border-top:1px solid rgba(var(--ink),.14);display:flex;justify-content:space-between;align-items:baseline;gap:10px",
              )}
            >
              <span
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.22em;color:rgba(var(--ink),.45)",
                )}
              >
                PROVEN IN
              </span>
              <a
                href="#work"
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.18em;color:var(--accent,#C93A1A)",
                )}
              >
                APPAREL STOREFRONT ↗
              </a>
            </div>
          </div>
        </div>
        <div
          data-reveal
          style={s(
            "display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;border-top:1px solid rgba(var(--ink),.14);margin-top:22px;padding-top:14px;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.2em;color:rgba(var(--ink),.4)",
          )}
        >
          <span>03 FORMATIONS · SWAPPED MID-FIGHT AS THE MISSION DEMANDS</span>
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
