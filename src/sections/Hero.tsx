import { Component, lazy, type ReactNode, Suspense, useState } from "react";
import { s } from "../lib/css";

// The 3D scene (three.js) is its own chunk and only loads when it is switched on.
const HeroScene = lazy(() => import("../three/HeroScene"));

/** Keeps a failed 3D chunk or WebGL error from taking the whole page down. */
class Safe3d extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/** Off by default (the live site has no 3D hero). Preview it with ?hero3d in the URL. */
function want3d(): boolean {
  if (!new URLSearchParams(window.location.search).has("hero3d")) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl2") ?? c.getContext("webgl");
    gl?.getExtension("WEBGL_lose_context")?.loseContext(); // release the probe context
    return !!gl;
  } catch {
    return false;
  }
}

export default function Hero() {
  const [show3d] = useState(want3d);
  return (
    <section
      id="hero"
      data-screen-label={"01 Hero"}
      style={s(
        "position:relative;min-height:100vh;background:var(--paper);background-image:radial-gradient(var(--dot) 1px, transparent 1px);background-size:24px 24px;color:rgba(var(--ink),1);overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:clamp(96px,13vh,136px) clamp(16px,4vw,48px) clamp(76px,10vh,110px)",
      )}
    >
      {show3d && (
        <Safe3d>
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </Safe3d>
      )}
      <div
        style={s(
          "position:absolute;inset:0;background:radial-gradient(70% 55% at 78% 16%, rgba(244,135,75,.14), transparent 60%), radial-gradient(55% 45% at 10% 92%, rgba(201,58,26,.08), transparent 55%);pointer-events:none",
        )}
      ></div>
      <div
        style={s(
          "position:absolute;top:86px;left:clamp(24px,6vw,84px);z-index:4;font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.3em;color:rgba(var(--ink),.45)",
        )}
      >
        01 — HERO
      </div>
      <div
        style={s(
          "position:absolute;right:clamp(56px,6vw,88px);top:50%;transform:translateY(-50%);z-index:3;writing-mode:vertical-rl;font-family:'Noto Serif JP','Cormorant Garamond',serif;font-weight:600;font-size:clamp(17px,1.7vw,23px);letter-spacing:.34em;color:var(--accent,#C93A1A)",
        )}
      >
        進撃の開発者
      </div>
      <div
        style={s(
          "position:absolute;right:26px;top:50%;transform:translateY(-50%) rotate(180deg);writing-mode:vertical-rl;z-index:3;font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.32em;color:rgba(var(--ink),.4);text-transform:uppercase",
        )}
      >
        K. Hari Vallabha — Portfolio 2026
      </div>
      <div style={s("position:relative;z-index:5;width:min(1040px,100%)")}>
        <div
          data-chip="18"
          style={s(
            "position:absolute;top:-26px;left:-12px;z-index:7;will-change:transform;animation:fadeUp .8s cubic-bezier(.22,.61,.36,1) both;animation-delay:calc(var(--boot,2.45s) + .7s)",
          )}
        >
          <div
            style={s(
              "animation:floaty 5s ease-in-out infinite;background:var(--card);border:1px solid rgba(var(--ink),.18);box-shadow:0 18px 40px -22px rgba(10,10,10,.35);padding:10px 14px;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.22em;color:rgba(var(--ink),.7);white-space:nowrap",
            )}
          >
            REACT · NODE · PYTHON
          </div>
        </div>
        <div
          data-chip="28"
          style={s(
            "position:absolute;top:15%;right:-14px;z-index:7;will-change:transform;animation:fadeUp .8s cubic-bezier(.22,.61,.36,1) both;animation-delay:calc(var(--boot,2.45s) + .85s)",
          )}
        ></div>

        <div
          style={s(
            "background:var(--card);border:1px solid rgba(var(--ink),.2);box-shadow:0 60px 120px -60px rgba(10,10,10,.4), 0 24px 48px -32px rgba(10,10,10,.22);animation:cardIn 1s cubic-bezier(.22,.61,.36,1) both;animation-delay:calc(var(--boot,2.45s) + .1s)",
          )}
        >
          <div
            style={s(
              "display:flex;align-items:center;gap:18px;height:46px;border-bottom:1px solid rgba(var(--ink),.14);padding:0 18px",
            )}
          >
            <div style={s("display:flex;gap:7px;flex:none")}>
              <span
                style={s(
                  "width:10px;height:10px;border-radius:50%;background:var(--accent,#C93A1A)",
                )}
              ></span>
              <span style={s("width:10px;height:10px;border-radius:50%;background:#D5D3CC")}></span>
              <span style={s("width:10px;height:10px;border-radius:50%;background:#D5D3CC")}></span>
            </div>
            <div
              style={s(
                "display:flex;align-items:center;gap:8px;border:1px solid rgba(var(--ink),.14);padding:6px 13px;font-family:'DM Mono',ui-monospace,monospace;font-size:10.5px;letter-spacing:.08em;background:var(--paper);white-space:nowrap;flex:none",
              )}
            >
              <span
                style={s("width:6px;height:6px;border-radius:50%;background:var(--accent,#C93A1A)")}
              ></span>
              hari_vallabha.tsx
            </div>
            <div
              style={s(
                "flex:1;min-width:0;overflow:hidden;white-space:nowrap;font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.22em;color:rgba(var(--ink),.4)",
              )}
            >
              FILE&nbsp;&nbsp;EDIT&nbsp;&nbsp;VIEW&nbsp;&nbsp;RUN&nbsp;&nbsp;TERMINAL
            </div>
            <div
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.18em;color:rgba(var(--ink),.5);white-space:nowrap;flex:none",
              )}
            >
              MAIN ✓
            </div>
          </div>
          <div style={s("display:grid;grid-template-columns:52px 1fr")}>
            <div
              style={s(
                "border-right:1px solid rgba(var(--ink),.12);padding:24px 0;font-family:'DM Mono',ui-monospace,monospace;font-size:10.5px;line-height:2.4;color:rgba(var(--ink),.3);text-align:center;user-select:none",
              )}
            >
              <div>01</div>
              <div>02</div>

              <div>03</div>
              <div>04</div>
              <div>05</div>
              <div>06</div>
              <div>07</div>
              <div>08</div>
              <div>09</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
            </div>
            <div
              style={s(
                "padding:clamp(28px,4.5vw,54px) clamp(20px,4.5vw,60px) clamp(32px,4.5vw,52px);min-width:0",
              )}
            >
              <div
                style={s(
                  "display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:clamp(16px,3vh,30px);animation:fadeUp .8s cubic-bezier(.22,.61,.36,1) both;animation-delay:calc(var(--boot,2.45s) + .2s)",
                )}
              >
                <span
                  style={s(
                    "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.3em;color:rgba(var(--ink),.5)",
                  )}
                >
                  PORTFOLIO — 2026 · SECUNDERABAD
                </span>
                <span
                  style={s(
                    "border:1px solid var(--accent,#C93A1A);color:var(--accent,#C93A1A);padding:5px 10px;font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.14em",
                  )}
                >
                  EP 01 · <span style={s("font-family:'Noto Serif JP',serif")}>第一話</span>
                </span>
              </div>
              <div
                style={s(
                  "position:relative;z-index:2;margin-bottom:-.3em;padding-left:.04em;animation:fadeUp .9s cubic-bezier(.22,.61,.36,1) both;animation-delay:calc(var(--boot,2.45s) + .3s)",
                )}
              >
                <span
                  style={s(
                    "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.3em;color:rgba(var(--ink),.45);margin-right:12px;vertical-align:middle",
                  )}
                >
                  (HI, I'M ·{" "}
                  <span style={s("font-family:'Noto Serif JP',serif;letter-spacing:.1em")}></span>)
                </span>{" "}
                <span
                  style={s(
                    "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:600;font-size:clamp(36px,5vw,76px);color:var(--accent,#C93A1A)",
                  )}
                >
                  Hari
                </span>
              </div>
              <h1
                aria-label="Hari Vallabha"
                style={s("margin:0;overflow:hidden;padding-top:36px;margin-top:-36px")}
              >
                <span
                  style={s(
                    "display:inline-block;animation:wordUp 1s cubic-bezier(.22,.61,.36,1) both;animation-delay:calc(var(--boot,2.45s) + .4s);font-family:'Cormorant Garamond',Georgia,serif;font-weight:700;font-size:clamp(58px,12.5vw,180px);line-height:1;letter-spacing:-.02em;white-space:nowrap",
                  )}
                >
                  <span
                    style={s(
                      "display:inline-block;transition:transform .35s cubic-bezier(.22,.61,.36,1),color .35s;cursor:default",
                    )}
                    className="hv1"
                  >
                    V
                  </span>
                  <span
                    style={s(
                      "display:inline-block;transition:transform .35s cubic-bezier(.22,.61,.36,1),color .35s;cursor:default",
                    )}
                    className="hv2"
                  >
                    a
                  </span>
                  <span
                    style={s(
                      "display:inline-block;transition:transform .35s cubic-bezier(.22,.61,.36,1),color .35s;cursor:default",
                    )}
                    className="hv3"
                  >
                    l
                  </span>
                  <span
                    style={s(
                      "display:inline-block;transition:transform .35s cubic-bezier(.22,.61,.36,1),color .35s;cursor:default",
                    )}
                    className="hv4"
                  >
                    l
                  </span>
                  <span
                    style={s(
                      "display:inline-block;transition:transform .35s cubic-bezier(.22,.61,.36,1),color .35s;cursor:default",
                    )}
                    className="hv5"
                  >
                    a
                  </span>
                  <span
                    style={s(
                      "position:relative;display:inline-block;font-style:italic;color:var(--accent,#C93A1A);margin:0 .03em;outline:1.5px dashed color-mix(in srgb, var(--accent,#C93A1A) 55%, transparent);outline-offset:.04em;transition:transform .35s cubic-bezier(.22,.61,.36,1),color .35s;cursor:default",
                    )}
                    className="hv6"
                  >
                    <span
                      style={s(
                        "position:absolute;top:-12px;left:-12px;width:8px;height:8px;background:var(--card);border:1.5px solid var(--accent,#C93A1A);pointer-events:none",
                      )}
                    ></span>
                    <span
                      style={s(
                        "position:absolute;top:-12px;right:-12px;width:8px;height:8px;background:var(--card);border:1.5px solid var(--accent,#C93A1A);pointer-events:none",
                      )}
                    ></span>
                    <span
                      style={s(
                        "position:absolute;bottom:-8px;left:-12px;width:8px;height:8px;background:var(--card);border:1.5px solid var(--accent,#C93A1A);pointer-events:none",
                      )}
                    ></span>
                    <span
                      style={s(
                        "position:absolute;bottom:-8px;right:-12px;width:8px;height:8px;background:var(--card);border:1.5px solid var(--accent,#C93A1A);pointer-events:none",
                      )}
                    ></span>
                    <span
                      style={s(
                        "position:absolute;top:-32px;right:-16px;font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.18em;color:var(--accent,#C93A1A);font-style:normal;white-space:nowrap;pointer-events:none",
                      )}
                    >
                      ITAL — 700
                    </span>
                    b
                  </span>
                  <span
                    style={s(
                      "display:inline-block;transition:transform .35s cubic-bezier(.22,.61,.36,1),color .35s;cursor:default",
                    )}
                    className="hv7"
                  >
                    h
                  </span>
                  <span
                    style={s(
                      "display:inline-block;transition:transform .35s cubic-bezier(.22,.61,.36,1),color .35s;cursor:default",
                    )}
                    className="hv8"
                  >
                    a
                  </span>
                  <span
                    style={s(
                      "display:inline-block;width:.055em;height:.62em;background:var(--accent,#C93A1A);margin-left:.08em;animation:blink 1.1s step-end infinite;vertical-align:.03em",
                    )}
                  ></span>
                </span>
              </h1>
              <div
                style={s(
                  "display:flex;align-items:center;gap:18px;flex-wrap:wrap;margin-top:clamp(16px,2.6vh,26px);animation:fadeUp .9s cubic-bezier(.22,.61,.36,1) both;animation-delay:calc(var(--boot,2.45s) + .6s)",
                )}
              >
                <span
                  style={s(
                    "font-family:'DM Mono',ui-monospace,monospace;font-size:clamp(10px,1.1vw,12px);letter-spacing:.3em;color:rgba(var(--ink),.75)",
                  )}
                >
                  AI/ML ENGINEER
                </span>
                <span
                  style={s(
                    "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:18px;color:var(--accent,#C93A1A)",
                  )}
                >
                  ×
                </span>
                <span
                  style={s(
                    "font-family:'DM Mono',ui-monospace,monospace;font-size:clamp(10px,1.1vw,12px);letter-spacing:.3em;color:rgba(var(--ink),.75)",
                  )}
                >
                  FULL-STACK DEVELOPER
                </span>
                <span
                  style={s("flex:1;min-width:40px;height:1px;background:rgba(10,10,10,.15)")}
                ></span>
                <span
                  style={s(
                    "font-family:'DM Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.2em;color:rgba(var(--ink),.4)",
                  )}
                >
                  EST. 2022 — HYD
                </span>
                <span
                  style={s(
                    "width:36px;height:36px;background:var(--accent,#C93A1A);color:#F5F4F0;display:inline-flex;align-items:center;justify-content:center;writing-mode:vertical-rl;font-family:'Noto Serif JP',serif;font-weight:600;font-size:14px;letter-spacing:.08em;transform:rotate(-4deg);flex:none;box-shadow:0 6px 14px -6px rgba(10,10,10,.35)",
                  )}
                  title="Full power"
                >
                  全力
                </span>
              </div>
              <p
                style={s(
                  "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:clamp(17px,1.8vw,22px);line-height:1.5;color:rgba(var(--ink),.62);max-width:58ch;margin-top:16px;animation:fadeUp .9s cubic-bezier(.22,.61,.36,1) both;animation-delay:calc(var(--boot,2.45s) + .7s)",
                )}
              >
                Building products where code meets evidence — from React storefronts to model-drift
                dashboards.
              </p>
            </div>
          </div>
          <div
            style={s(
              "display:flex;align-items:center;justify-content:space-between;gap:16px;height:40px;border-top:1px solid rgba(var(--ink),.14);padding:0 18px;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.18em;color:rgba(var(--ink),.5);overflow:hidden",
            )}
          >
            <span style={s("white-space:nowrap")}>MAIN ✓ · UTF-8</span>
            <span style={s("white-space:nowrap")}>LN 42, COL 7</span>
            <span style={s("display:flex;align-items:center;gap:8px;white-space:nowrap")}>
              <span
                style={s(
                  "width:7px;height:7px;border-radius:50%;background:var(--accent,#C93A1A);animation:pulseDot 1.4s ease-in-out infinite",
                )}
              ></span>
              60 FPS · <span style={s("font-family:'Noto Serif JP',serif")}>全力</span> MODE ✓
            </span>
          </div>
        </div>
        <div
          style={s(
            "display:flex;gap:16px;flex-wrap:wrap;justify-content:center;margin-top:44px;animation:fadeUp .9s cubic-bezier(.22,.61,.36,1) both;animation-delay:calc(var(--boot,2.45s) + .8s)",
          )}
        >
          <a
            href="#work"
            data-magnetic
            style={s(
              "background:var(--accent,#C93A1A);color:#F5F4F0;padding:16px 30px;font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.26em;text-transform:uppercase;white-space:nowrap;transition:background .3s,color .3s",
            )}
            className="hv9"
          >
            View the work
          </a>
          <a
            href={"#contact"}
            data-magnetic
            style={s(
              "border:1px solid rgba(var(--ink),.35);color:rgba(var(--ink),1);padding:15px 30px;font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.26em;text-transform:uppercase;white-space:nowrap;transition:border-color .3s,background .3s",
            )}
            className="hv10"
          >
            Get in touch
          </a>
        </div>
      </div>
      <div
        style={s(
          "position:absolute;right:clamp(24px,5vw,72px);bottom:44px;z-index:6;display:flex;flex-direction:column;align-items:center;gap:12px",
        )}
      >
        <span
          style={s(
            "font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.32em;color:rgba(var(--ink),.5)",
          )}
        >
          SCROLL
        </span>
        <span
          style={s(
            "width:1px;height:52px;background:var(--accent,#C93A1A);animation:scrollLine 2.2s cubic-bezier(.22,.61,.36,1) infinite",
          )}
        ></span>
      </div>
    </section>
  );
}
