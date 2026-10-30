import { s } from "../lib/css";

export default function About() {
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
                "position:absolute;right:-14px;top:34px;z-index:2;background:var(--paper);border:1px solid rgba(var(--ink),.15);padding:14px 18px;box-shadow:0 24px 50px -24px rgba(10,10,10,.5);animation:floaty 4.5s ease-in-out infinite;max-width:230px",
              )}
            >
              <div
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:8.5px;letter-spacing:.26em;color:var(--accent,#C93A1A);margin-bottom:6px",
                )}
              >
                CURRENTLY
              </div>
              <div style={s("font-size:12.5px;line-height:1.55;color:rgba(var(--ink),.75)")}>
                Open to full-time roles — B.Tech, Data Science &amp; Engineering, VBIT '26
              </div>
            </div>
          </div>
          <div
            style={s(
              "display:flex;justify-content:space-between;margin-top:16px;font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:rgba(var(--ink),.55)",
            )}
          >
            <span>K. Hari Vallabha</span>
            <span>Portfolio — 2026</span>
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
            Analyst by training, AI/ML engineer by trade — I read the numbers, then build what they
            ask for.
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
                The analyst
              </h3>
              <p
                style={s(
                  "font-size:14px;line-height:1.75;color:rgba(var(--ink),.66);font-weight:300",
                )}
              >
                Data science by training and by instinct: SQL and Python for the digging, Pandas for
                the cleaning, drift tests and KPI dashboards for the watching. I care less about the
                chart than about the decision it changes — so every analysis ends in a
                recommendation, not a deck.
              </p>
            </div>
            <div>
              <h3
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.26em;text-transform:uppercase;font-weight:500;color:var(--accent,#C93A1A);margin-bottom:14px",
                )}
              >
                The engineer edge
              </h3>
              <p
                style={s(
                  "font-size:14px;line-height:1.75;color:rgba(var(--ink),.66);font-weight:300",
                )}
              >
                Most analysts hand off a spreadsheet; I can ship the thing. React, Node and Python
                mean my dashboards go live, my pipelines get deployed, and nothing waits on a dev
                queue to become useful.
              </p>
            </div>
          </div>
        </div>
      </div>
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
