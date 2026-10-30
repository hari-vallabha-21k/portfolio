import { s } from "../lib/css";

export default function Journey() {
  return (
    <section
      id="journey"
      data-screen-label={"04 Journey"}
      style={s(
        "position:relative;background:var(--paper);padding:clamp(96px,13vh,140px) clamp(24px,6vw,84px);scroll-margin-top:62px;overflow:hidden",
      )}
    >
      <div
        style={s(
          "position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(115deg, rgba(var(--ink),.028) 0 2px, transparent 2px 30px)",
        )}
      ></div>
      <div
        style={s(
          "position:absolute;right:clamp(16px,4vw,60px);top:40px;font-family:'Noto Serif JP','Cormorant Garamond',serif;font-weight:600;font-size:clamp(80px,10vw,140px);line-height:1;color:rgba(var(--ink),.05);pointer-events:none",
        )}
      >
        道
      </div>
      <div style={s("position:relative;z-index:1")}>
        <div
          data-reveal
          style={s(
            "display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap",
          )}
        >
          <div>
            <div
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.34em;text-transform:uppercase;color:rgba(var(--ink),.5)",
              )}
            >
              The road so far ·{" "}
              <span style={s("font-family:'Noto Serif JP',serif;letter-spacing:.14em")}>
                道のり
              </span>
            </div>
            <h2
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(40px,5vw,62px);letter-spacing:-.01em;margin-top:10px",
              )}
            >
              Four arcs, still airing<span style={s("color:var(--accent,#C93A1A)")}>.</span>
            </h2>
          </div>
          <div
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.2em;color:rgba(var(--ink),.45);text-transform:uppercase",
            )}
          >
            Series progress — arc 04 / 04
          </div>
        </div>
        <div
          style={s("height:2px;background:rgba(var(--ink),.1);margin:44px 0 0;position:relative")}
        >
          <div
            data-line
            style={s(
              "position:absolute;inset:0;background:var(--accent,#C93A1A);transform:scaleX(0);transform-origin:left;transition:transform 1.5s cubic-bezier(.22,.61,.36,1) .2s",
            )}
          ></div>
        </div>
        <div
          data-reveal
          style={s(
            "display:flex;flex-wrap:wrap;align-items:baseline;column-gap:clamp(24px,4vw,60px);row-gap:10px;padding:clamp(26px,4vh,38px) 8px;border-bottom:1px solid rgba(var(--ink),.12);transition:background .3s",
          )}
          className="hv13"
        >
          <div style={s("flex:0 0 200px;min-width:170px")}>
            <div
              style={s(
                "display:flex;align-items:center;gap:10px;font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.26em;color:var(--accent,#C93A1A)",
              )}
            >
              ARC 01{" "}
              <span
                style={s(
                  "font-family:'Noto Serif JP',serif;font-size:15px;letter-spacing:.1em;color:rgba(var(--ink),.45)",
                )}
              >
                基礎
              </span>
            </div>
            <div
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:clamp(40px,3.6vw,54px);line-height:1.1",
              )}
            >
              2022
            </div>
          </div>
          <div style={s("flex:1 1 300px;max-width:600px")}>
            <div
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:500;font-size:clamp(21px,2vw,25px);margin-bottom:8px",
              )}
            >
              The foundation arc.
            </div>
            <p
              style={s(
                "font-size:13.5px;line-height:1.7;color:rgba(var(--ink),.62);font-weight:300;max-width:56ch",
              )}
            >
              Started B.Tech in Data Science &amp; Engineering at VBIT, Hyderabad — statistics, ML
              and systems under one roof.
            </p>
          </div>
          <div
            style={s(
              "flex:0 0 auto;margin-left:auto;border:1px solid rgba(var(--ink),.25);padding:8px 13px;font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.22em;color:rgba(var(--ink),.55)",
            )}
          >
            STATUS — COMPLETE
          </div>
        </div>
        <div
          data-reveal
          style={s(
            "display:flex;flex-wrap:wrap;align-items:baseline;column-gap:clamp(24px,4vw,60px);row-gap:10px;padding:clamp(26px,4vh,38px) 8px;border-bottom:1px solid rgba(var(--ink),.12);transition:background .3s",
          )}
          className="hv14"
        >
          <div style={s("flex:0 0 200px;min-width:170px")}>
            <div
              style={s(
                "display:flex;align-items:center;gap:10px;font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.26em;color:var(--accent,#C93A1A)",
              )}
            >
              ARC 02{" "}
              <span
                style={s(
                  "font-family:'Noto Serif JP',serif;font-size:15px;letter-spacing:.1em;color:rgba(var(--ink),.45)",
                )}
              >
                独立
              </span>
            </div>
            <div
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:clamp(40px,3.6vw,54px);line-height:1.1",
              )}
            >
              2025
            </div>
          </div>
          <div style={s("flex:1 1 300px;max-width:600px")}>
            <div
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:500;font-size:clamp(21px,2vw,25px);margin-bottom:8px",
              )}
            >
              Going independent.
            </div>
            <p
              style={s(
                "font-size:13.5px;line-height:1.7;color:rgba(var(--ink),.62);font-weight:300;max-width:56ch",
              )}
            >
              Freelance full-stack work: shipped a premium Shopify storefront for a streetwear brand
              — concept to production, direct with stakeholders.
            </p>
          </div>
          <div
            style={s(
              "flex:0 0 auto;margin-left:auto;border:1px solid rgba(var(--ink),.25);padding:8px 13px;font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.22em;color:rgba(var(--ink),.55)",
            )}
          >
            STATUS — COMPLETE
          </div>
        </div>
        <div
          data-reveal
          style={s(
            "display:flex;flex-wrap:wrap;align-items:baseline;column-gap:clamp(24px,4vw,60px);row-gap:10px;padding:clamp(26px,4vh,38px) 8px;border-bottom:1px solid rgba(var(--ink),.12);transition:background .3s",
          )}
          className="hv15"
        >
          <div style={s("flex:0 0 200px;min-width:170px")}>
            <div
              style={s(
                "display:flex;align-items:center;gap:10px;font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.26em;color:var(--accent,#C93A1A)",
              )}
            >
              ARC 03{" "}
              <span
                style={s(
                  "font-family:'Noto Serif JP',serif;font-size:15px;letter-spacing:.1em;color:rgba(var(--ink),.45)",
                )}
              >
                制作
              </span>
            </div>
            <div
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:clamp(40px,3.6vw,54px);line-height:1.1",
              )}
            >
              2025
            </div>
          </div>
          <div style={s("flex:1 1 300px;max-width:600px")}>
            <div
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:500;font-size:clamp(21px,2vw,25px);margin-bottom:8px",
              )}
            >
              Products, not projects.
            </div>
            <p
              style={s(
                "font-size:13.5px;line-height:1.7;color:rgba(var(--ink),.62);font-weight:300;max-width:56ch",
              )}
            >
              Built Progress Tracker, a SaaS productivity platform on React, Next.js, Supabase and
              PostgreSQL — plus four more product-grade builds.
            </p>
          </div>
          <div
            style={s(
              "flex:0 0 auto;margin-left:auto;border:1px solid rgba(var(--ink),.25);padding:8px 13px;font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.22em;color:rgba(var(--ink),.55)",
            )}
          >
            STATUS — COMPLETE
          </div>
        </div>
        <div
          data-reveal
          style={s(
            "display:flex;flex-wrap:wrap;align-items:baseline;column-gap:clamp(24px,4vw,60px);row-gap:10px;padding:clamp(26px,4vh,38px) 8px;border-bottom:1px solid rgba(var(--ink),.12);transition:background .3s",
          )}
          className="hv16"
        >
          <div style={s("flex:0 0 200px;min-width:170px")}>
            <div
              style={s(
                "display:flex;align-items:center;gap:10px;font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.26em;color:var(--accent,#C93A1A)",
              )}
            >
              ARC 04{" "}
              <span
                style={s(
                  "font-family:'Noto Serif JP',serif;font-size:15px;letter-spacing:.1em;color:rgba(var(--ink),.45)",
                )}
              >
                卒業
              </span>
            </div>
            <div
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:clamp(40px,3.6vw,54px);line-height:1.1",
              )}
            >
              2026
            </div>
          </div>
          <div style={s("flex:1 1 300px;max-width:600px")}>
            <div
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:500;font-size:clamp(21px,2vw,25px);margin-bottom:8px",
              )}
            >
              The graduation arc.
            </div>
            <p
              style={s(
                "font-size:13.5px;line-height:1.7;color:rgba(var(--ink),.62);font-weight:300;max-width:56ch",
              )}
            >
              Graduated with B.Tech in Data Science &amp; Engineering from VBIT — thesis and
              foundational engineering arc complete.
            </p>
          </div>
          <div
            style={s(
              "flex:0 0 auto;margin-left:auto;border:1px solid rgba(var(--ink),.25);padding:8px 13px;font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.22em;color:rgba(var(--ink),.55)",
            )}
          >
            STATUS — COMPLETE
          </div>
        </div>
        <div
          data-reveal
          style={s(
            "display:flex;flex-wrap:wrap;align-items:baseline;column-gap:clamp(24px,4vw,60px);row-gap:10px;padding:clamp(26px,4vh,38px) 8px;border-bottom:1px solid rgba(var(--ink),.12);transition:background .3s",
          )}
          className="hv17"
        >
          <div style={s("flex:0 0 200px;min-width:170px")}>
            <div
              style={s(
                "display:flex;align-items:center;gap:10px;font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.26em;color:var(--accent,#C93A1A)",
              )}
            >
              ARC 05{" "}
              <span
                style={s(
                  "font-family:'Noto Serif JP',serif;font-size:15px;letter-spacing:.1em;color:rgba(var(--ink),.45)",
                )}
              >
                新章
              </span>
            </div>
            <div
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:clamp(40px,3.6vw,54px);line-height:1.1",
              )}
            >
              2026+
            </div>
          </div>
          <div style={s("flex:1 1 300px;max-width:600px")}>
            <div
              style={s(
                "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:500;font-size:clamp(21px,2vw,25px);margin-bottom:8px",
              )}
            >
              The next chapter.
            </div>
            <p
              style={s(
                "font-size:13.5px;line-height:1.7;color:rgba(var(--ink),.62);font-weight:300;max-width:56ch",
              )}
            >
              Full-time engineering &amp; data career underway — shipping production software and
              real-time systems at scale.
            </p>
          </div>
          <div
            style={s(
              "flex:0 0 auto;margin-left:auto;display:flex;align-items:center;gap:8px;border:1px solid var(--accent,#C93A1A);padding:8px 13px;font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.22em;color:var(--accent,#C93A1A)",
            )}
          >
            <span
              style={s(
                "width:6px;height:6px;border-radius:50%;background:var(--accent,#C93A1A);animation:pulseDot 1.2s ease-in-out infinite",
              )}
            ></span>
            NOW AIRING
          </div>
        </div>
        <div
          data-reveal
          style={s(
            "display:flex;justify-content:space-between;align-items:baseline;gap:18px;flex-wrap:wrap;padding-top:24px",
          )}
        >
          <span
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.24em;color:rgba(var(--ink),.45)",
            )}
          >
            NEXT EPISODE — BUILDING SCALABLE SYSTEMS · PREMIERES ONGOING
          </span>
          <span
            style={s(
              "font-family:'Noto Serif JP','Cormorant Garamond',serif;font-weight:600;font-size:clamp(24px,2.6vw,32px);color:rgba(var(--ink),.4)",
            )}
          >
            つづく<span style={s("color:var(--accent,#C93A1A)")}>…</span>
          </span>
        </div>
      </div>
    </section>
  );
}
