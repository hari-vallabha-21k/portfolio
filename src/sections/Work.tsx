import { useEffect, useRef, useState } from "react";
import ProjectDialog from "../components/ProjectDialog";
import { PROJECTS, type Project } from "../data/projects";
import { s } from "../lib/css";

const KANJI = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
const WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const COUNT = WORDS[PROJECTS.length];
const mono = "font-family:'DM Mono',ui-monospace,monospace;";
const serif = "font-family:'Cormorant Garamond',Georgia,serif;";
const roller = "position:absolute;z-index:3;top:-16px;bottom:-16px;width:30px;pointer-events:none";
const cap =
  "position:absolute;left:-5px;right:-5px;height:14px;border-radius:7px;background:linear-gradient(90deg,#1c120a,#5a3820 45%,#24160c)";
const arrowBtn = `${mono}width:44px;height:44px;border-radius:50%;border:1px solid rgba(var(--ink),.3);background:transparent;color:rgba(var(--ink),.85);cursor:pointer;font-size:14px;transition:background .25s,color .25s,border-color .25s`;

/** Card footer action: live demo if there is one, else the repo; "Code" is added next to a live demo. */
function CardLinks({ p, dragged }: { p: Project; dragged: { current: boolean } }) {
  const live = p.links.find((l) => /live/i.test(l.label));
  const repo = p.links.find((l) => /github/i.test(l.label));
  const open = live ?? repo;
  const linkStyle = s(`${mono}font-size:10px;letter-spacing:.2em;color:#A8301A;white-space:nowrap`);
  if (!open) {
    return (
      <span aria-hidden="true" style={linkStyle}>
        CASE STUDY →
      </span>
    );
  }
  const link = (l: { label: string; href: string }, text: string) => (
    <a
      href={l.href}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      aria-label={`${p.title}: ${l.label} (opens in a new tab)`}
      onClick={(e) => {
        if (dragged.current) e.preventDefault();
      }}
      style={linkStyle}
    >
      {text}
    </a>
  );
  return (
    <span style={s("position:relative;z-index:1;display:flex;gap:14px;align-items:center")}>
      {live && repo && link(repo, "CODE ↗")}
      {link(open, "OPEN ↗")}
    </span>
  );
}

export default function Work() {
  const [open, setOpen] = useState<number | null>(null);
  const [unrolled, setUnrolled] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const dragged = useRef(false);

  // Unroll the scroll the first time it is 30% visible.
  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setUnrolled(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setUnrolled(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Mouse drag to scroll, and vertical wheel -> horizontal scroll while the track can still move.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let down = false;
    let startX = 0;
    let startLeft = 0;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      down = true;
      dragged.current = false;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      el.style.scrollSnapType = "none";
      el.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 6) dragged.current = true;
      el.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      el.style.scrollSnapType = "x mandatory";
      el.style.cursor = "grab";
      setTimeout(() => {
        dragged.current = false;
      }, 0);
    };
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      const max = el.scrollWidth - el.clientWidth;
      if ((e.deltaY > 0 && el.scrollLeft < max - 2) || (e.deltaY < 0 && el.scrollLeft > 2)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  const scrollBy = (dir: number) => {
    const t = track.current;
    if (t) t.scrollBy({ left: dir * Math.min(440, t.clientWidth * 0.82), behavior: "smooth" });
  };

  return (
    <section
      id="work"
      data-screen-label="05 Work"
      style={s(
        "position:relative;background:var(--paper);padding:clamp(96px,13vh,140px) clamp(24px,6vw,84px) clamp(60px,8vh,90px);scroll-margin-top:62px;border-top:1px solid rgba(var(--ink),.12)",
      )}
    >
      <div
        data-reveal
        style={s(
          "display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;margin-bottom:26px",
        )}
      >
        <div>
          <div
            style={s(
              `${mono}font-size:11px;letter-spacing:.34em;text-transform:uppercase;color:rgba(var(--ink),.5)`,
            )}
          >
            Selected work — 05 ·{" "}
            <span lang="ja" style={s("font-family:'Noto Serif JP',serif;letter-spacing:.14em")}>
              作品
            </span>
          </div>
          <h2
            style={s(
              `${serif}font-weight:500;font-size:clamp(40px,5vw,62px);letter-spacing:-.01em;margin-top:10px`,
            )}
          >
            {COUNT} builds, measured<span style={s("color:var(--accent,#C93A1A)")}>.</span>
          </h2>
        </div>
        <div
          style={s(
            `${mono}font-size:10.5px;letter-spacing:.18em;color:rgba(var(--ink),.5);text-transform:uppercase`,
          )}
        >
          Unroll the scroll — {COUNT.toLowerCase()} missions inside
        </div>
      </div>

      <div ref={frame} style={s("position:relative;padding:0 30px;margin-top:8px")}>
        <div
          aria-hidden="true"
          style={{
            ...s(`${roller};transition:left 1.5s cubic-bezier(.65,0,.35,1)`),
            left: unrolled ? "0px" : "calc(50% - 30px)",
          }}
        >
          <div style={s(`${cap};top:0`)} />
          <div
            style={s(
              "position:absolute;left:0;right:0;top:10px;bottom:10px;border-radius:4px;background:linear-gradient(90deg,#2a1a10,#7a5032 42%,#3a2416);box-shadow:4px 0 14px -4px rgba(0,0,0,.5)",
            )}
          />
          <div style={s(`${cap};bottom:0`)} />
        </div>
        <div
          aria-hidden="true"
          style={{
            ...s(`${roller};transition:right 1.5s cubic-bezier(.65,0,.35,1)`),
            right: unrolled ? "0px" : "calc(50% - 30px)",
          }}
        >
          <div style={s(`${cap};top:0`)} />
          <div
            style={s(
              "position:absolute;left:0;right:0;top:10px;bottom:10px;border-radius:4px;background:linear-gradient(90deg,#2a1a10,#7a5032 42%,#3a2416);box-shadow:-4px 0 14px -4px rgba(0,0,0,.5)",
            )}
          />
          <div style={s(`${cap};bottom:0`)} />
        </div>
        <div
          style={{
            ...s(
              "position:relative;background:#EFE6D2;background-image:repeating-linear-gradient(0deg,rgba(30,26,20,.025) 0 1px,transparent 1px 5px);box-shadow:inset 0 10px 12px -10px rgba(30,26,20,.35),inset 0 -10px 12px -10px rgba(30,26,20,.35);transition:clip-path 1.5s cubic-bezier(.65,0,.35,1)",
            ),
            clipPath: unrolled ? "inset(0 0 0 0)" : "inset(0 50% 0 50%)",
          }}
        >
          <section
            ref={track}
            className="scroll-track"
            aria-label="Selected projects, scroll sideways"
            // biome-ignore lint/a11y/noNoninteractiveTabindex: a scrollable region must be focusable so keyboard users can scroll it
            tabIndex={0}
            style={s(
              "display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;cursor:grab;color:#1E1A14",
            )}
          >
            <div
              style={s(
                "flex:none;width:min(300px,70vw);scroll-snap-align:start;padding:42px 34px;display:flex;flex-direction:column;justify-content:space-between;gap:24px;border-right:1px dashed rgba(30,26,20,.3)",
              )}
            >
              <div
                lang="ja"
                style={s(
                  "font-family:'Noto Serif JP',serif;font-size:clamp(56px,6vw,80px);font-weight:700;writing-mode:vertical-rl;line-height:1;letter-spacing:.08em;color:#1E1A14",
                )}
              >
                作品集
              </div>
              <div>
                <div style={s(`${mono}font-size:9px;letter-spacing:.26em;color:rgba(30,26,20,.6)`)}>
                  THE SCROLL OF WORKS
                </div>
                <p
                  style={s(
                    `${serif}font-style:italic;font-size:18px;line-height:1.4;margin-top:8px;color:rgba(30,26,20,.8)`,
                  )}
                >
                  {COUNT} missions, each sealed with the number that proved it.
                </p>
                <div
                  style={s(
                    `${mono}font-size:9px;letter-spacing:.22em;color:#A8301A;margin-top:14px`,
                  )}
                >
                  DRAG TO READ →
                </div>
              </div>
            </div>
            {PROJECTS.map((p, i) => (
              <article
                key={p.code}
                className="scroll-card"
                style={s(
                  "position:relative;flex:none;width:min(440px,82vw);scroll-snap-align:start;padding:38px 34px 32px;display:grid;grid-template-columns:auto minmax(0,1fr);gap:24px;border-right:1px dashed rgba(30,26,20,.3);cursor:pointer;transition:background .35s",
                )}
              >
                <div style={s("display:flex;flex-direction:column;align-items:center;gap:14px")}>
                  <div
                    lang="ja"
                    style={s(
                      "font-family:'Noto Serif JP',serif;font-weight:700;font-size:30px;writing-mode:vertical-rl;letter-spacing:.12em;color:#1E1A14",
                    )}
                  >
                    第{KANJI[i]}話
                  </div>
                  <div style={s("width:1px;flex:1;background:rgba(30,26,20,.25)")} />
                  <div
                    style={s(
                      `${mono}font-size:9px;letter-spacing:.2em;writing-mode:vertical-rl;color:rgba(30,26,20,.55)`,
                    )}
                  >
                    {p.code} · {p.year}
                  </div>
                </div>
                <div style={s("display:flex;flex-direction:column;gap:12px;min-width:0")}>
                  <div
                    style={s(
                      `${mono}font-size:9px;letter-spacing:.24em;text-transform:uppercase;color:rgba(30,26,20,.6)`,
                    )}
                  >
                    {p.kind}
                  </div>
                  <h3
                    style={s(
                      `${serif}font-weight:700;font-size:clamp(32px,3.4vw,44px);line-height:1;letter-spacing:-.01em;color:#1E1A14`,
                    )}
                  >
                    <button
                      type="button"
                      className="card-open"
                      aria-haspopup="dialog"
                      onClick={() => {
                        if (!dragged.current) setOpen(i);
                      }}
                    >
                      {p.title}
                    </button>
                  </h3>
                  <p
                    style={s(
                      `${serif}font-style:italic;font-size:17px;line-height:1.45;color:rgba(30,26,20,.75);text-wrap:pretty`,
                    )}
                  >
                    {p.tag}
                  </p>
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.imageAlt ?? `${p.title} screenshot`}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      style={s(
                        "width:100%;height:120px;object-fit:cover;object-position:top center;border:1px solid rgba(30,26,20,.28);box-shadow:0 8px 18px -12px rgba(30,26,20,.5);margin:4px 0",
                      )}
                    />
                  ) : (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 120 40"
                      style={s("width:80%;overflow:visible;margin:4px 0")}
                    >
                      <path
                        d={p.spark}
                        fill="none"
                        stroke="#1E1A14"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity=".75"
                      />
                    </svg>
                  )}
                  <div style={s("display:flex;align-items:center;gap:14px;flex-wrap:wrap")}>
                    <div
                      style={s(
                        "display:inline-flex;flex-direction:column;align-items:center;justify-content:center;padding:9px 13px;background:#A8301A;color:#F5EDE0;transform:rotate(-4deg);box-shadow:inset 0 0 0 2px #A8301A,inset 0 0 0 3.5px rgba(245,237,224,.65)",
                      )}
                    >
                      <span style={s(`${serif}font-weight:700;font-size:24px;line-height:1`)}>
                        {p.metrics[0].v}
                      </span>
                    </div>
                    <span
                      style={s(
                        `${mono}font-size:8.5px;letter-spacing:.16em;text-transform:uppercase;color:rgba(30,26,20,.6);max-width:20ch;line-height:1.5`,
                      )}
                    >
                      {p.metrics[0].l}
                    </span>
                  </div>
                  <div
                    style={s(
                      "margin-top:auto;padding-top:12px;border-top:1px solid rgba(30,26,20,.2);display:flex;justify-content:space-between;align-items:center;gap:10px",
                    )}
                  >
                    <span
                      style={s(
                        `${mono}font-size:8.5px;letter-spacing:.16em;color:rgba(30,26,20,.6)`,
                      )}
                    >
                      {p.stackStr}
                    </span>
                    <CardLinks p={p} dragged={dragged} />
                  </div>
                </div>
              </article>
            ))}
            <div
              style={s(
                "flex:none;width:min(240px,60vw);scroll-snap-align:end;padding:42px 30px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px",
              )}
            >
              <div
                lang="ja"
                style={s(
                  "width:64px;height:64px;border:2px solid #A8301A;color:#A8301A;display:flex;align-items:center;justify-content:center;font-family:'Noto Serif JP',serif;font-weight:700;font-size:26px;transform:rotate(-6deg)",
                )}
              >
                完
              </div>
              <div
                style={s(
                  `${mono}font-size:9px;letter-spacing:.22em;color:rgba(30,26,20,.6);text-align:center`,
                )}
              >
                END OF SCROLL
                <br />
                MORE MISSIONS SOON
              </div>
            </div>
          </section>
        </div>
      </div>

      <div
        data-reveal
        style={s(
          "display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;margin-top:26px",
        )}
      >
        <span style={s(`${mono}font-size:9.5px;letter-spacing:.2em;color:rgba(var(--ink),.45)`)}>
          DRAG · SWIPE · OR USE THE ARROWS — CLICK A MISSION TO OPEN IT
        </span>
        <div style={s("display:flex;gap:8px")}>
          <button
            type="button"
            className="scroll-arrow"
            aria-label="Previous project"
            onClick={() => scrollBy(-1)}
            style={s(arrowBtn)}
          >
            ←
          </button>
          <button
            type="button"
            className="scroll-arrow"
            aria-label="Next project"
            onClick={() => scrollBy(1)}
            style={s(arrowBtn)}
          >
            →
          </button>
        </div>
      </div>
      <ProjectDialog index={open} onChange={setOpen} onClose={() => setOpen(null)} />
    </section>
  );
}
