import { Fragment, useEffect, useRef } from "react";
import { PROJECTS } from "../data/projects";
import { s } from "../lib/css";

interface Props {
  index: number | null;
  onChange: (i: number) => void;
  onClose: () => void;
}

/** Native <dialog> case-study popup: focus trap and Esc come from showModal(). */
export default function ProjectDialog({ index, onChange, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const downOn = useRef<EventTarget | null>(null);
  const cur = index ?? 0;
  const cp = PROJECTS[cur];
  const nIdx = (cur + 1) % PROJECTS.length;
  const pIdx = (cur + PROJECTS.length - 1) % PROJECTS.length;
  const nextTitle = PROJECTS[nIdx].title;
  const prevTitle = PROJECTS[pIdx].title;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (index !== null) {
      if (!d.open) d.showModal();
      d.scrollTop = 0;
    } else if (d.open) d.close();
  }, [index]);

  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-label={cp.title}
      onClose={onClose}
      onMouseDown={(e) => {
        downOn.current = e.target;
      }}
      onClick={(e) => {
        // close only for a real backdrop click, not a text-selection drag that ends there
        if (e.target === e.currentTarget && downOn.current === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
        if (e.key === "ArrowRight") onChange(nIdx);
        if (e.key === "ArrowLeft") onChange(pIdx);
      }}
      style={s(
        "position:fixed;inset:0;z-index:80;background:rgba(10,10,10,.62);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);animation:overlayIn .3s ease both;overflow-y:auto;padding:clamp(12px,4vh,48px) clamp(12px,4vw,48px);width:100%;height:100%;max-width:none;max-height:none;margin:0;border:0;color:inherit",
      )}
    >
      <div
        style={s(
          "max-width:1060px;margin:0 auto;background:var(--paper);color:rgba(var(--ink),1);border-radius:3px;animation:cardIn .5s cubic-bezier(.22,.61,.36,1) .05s both;padding:clamp(28px,5vw,72px);position:relative",
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          style={s(
            "position:absolute;top:22px;right:22px;width:44px;height:44px;border-radius:50%;border:1px solid rgba(var(--ink),.3);background:transparent;font-size:16px;cursor:pointer;transition:background .25s,color .25s;color:rgba(var(--ink),1);font-family:'DM Sans',sans-serif",
          )}
          className="hv101"
        >
          ✕
        </button>
        <div
          style={s(
            "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.26em;color:var(--accent,#C93A1A);text-transform:uppercase",
          )}
        >
          {cp.code} — {cp.year} · {cp.kind}
        </div>
        <h2
          style={s(
            "font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:clamp(40px,6vw,76px);line-height:.98;letter-spacing:-.015em;margin:16px 0 12px;max-width:14ch",
          )}
        >
          {cp.title}
        </h2>
        <p
          style={s(
            "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:21px;line-height:1.45;color:rgba(var(--ink),.6);max-width:56ch",
          )}
        >
          {cp.tag}
        </p>
        <div
          style={s(
            `position:relative;height:${cp.image ? "clamp(220px,34vw,380px)" : "130px"};border-radius:2px;overflow:hidden;margin:32px 0;background:${cp.artBg}`,
          )}
        >
          {cp.image && (
            <img
              src={cp.image}
              alt={cp.imageAlt ?? `${cp.title} screenshot`}
              loading="lazy"
              decoding="async"
              style={s(
                "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center",
              )}
            />
          )}
          {!cp.image && (
            <svg
              aria-hidden="true"
              viewBox={"0 0 120 40"}
              style={s("position:absolute;left:26px;bottom:20px;width:200px;overflow:visible")}
            >
              <path
                d={cp.spark}
                fill="none"
                stroke="#F4874B"
                strokeWidth={"2.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          )}
          <div
            style={s(
              "position:absolute;right:22px;bottom:20px;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.18em;color:rgba(245,244,240,.85);background:rgba(245,244,240,.1);border:1px solid rgba(245,244,240,.18);padding:7px 11px",
            )}
          >
            {cp.chip}
          </div>
          <div
            style={s(
              "position:absolute;left:26px;top:18px;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.26em;color:rgba(245,244,240,.55)",
            )}
          >
            {cp.sys}
          </div>
        </div>
        <div
          style={s(
            "display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:28px;border-top:1px solid rgba(var(--ink),.14);padding-top:28px",
          )}
        >
          <div>
            <div
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.28em;color:rgba(var(--ink),.45);margin-bottom:10px",
              )}
            >
              ROLE
            </div>
            <div style={s("font-size:14px;color:rgba(var(--ink),.75)")}>{cp.role}</div>
          </div>
          <div>
            <div
              style={s(
                "font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.28em;color:rgba(var(--ink),.45);margin-bottom:10px",
              )}
            >
              STACK
            </div>
            <div style={s("display:flex;flex-wrap:wrap;gap:8px")}>
              {cp.stack.map((tag) => (
                <Fragment key={tag}>
                  <span
                    style={s(
                      "border:1px solid rgba(var(--ink),.25);padding:5px 10px;font-family:'DM Mono',ui-monospace,monospace;font-size:11px",
                    )}
                  >
                    {tag}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
          {cp.links.length > 0 && (
            <div>
              <div
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.28em;color:rgba(var(--ink),.45);margin-bottom:10px",
                )}
              >
                LINKS
              </div>
              <div style={s("display:flex;flex-direction:column;gap:8px")}>
                {cp.links.map((l) => (
                  <Fragment key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={s(
                        "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--accent,#C93A1A)",
                      )}
                    >
                      {l.label} ↗
                    </a>
                  </Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
        <div style={s("margin-top:34px")}>
          {cp.points.map((pt) => (
            <Fragment key={pt.i}>
              <div
                style={s(
                  "display:grid;grid-template-columns:44px 1fr;gap:14px;padding:18px 0;border-top:1px solid rgba(var(--ink),.1)",
                )}
              >
                <div
                  style={s(
                    "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;color:var(--accent,#C93A1A)",
                  )}
                >
                  {pt.i}
                </div>
                <div style={s("font-size:15px;line-height:1.75;color:rgba(var(--ink),.72)")}>
                  {pt.t}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <div
          style={s(
            "background:#0A0A0A;color:#F5F4F0;margin-top:36px;padding:30px 34px;display:flex;flex-wrap:wrap;gap:clamp(24px,4vw,52px)",
          )}
        >
          {cp.metrics.map((m) => (
            <Fragment key={m.l}>
              <div>
                <div
                  style={s(
                    "font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:32px;color:#F4874B",
                  )}
                >
                  {m.v}
                </div>
                <div
                  style={s(
                    "font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.2em;text-transform:uppercase;color:rgba(245,244,240,.5);margin-top:8px",
                  )}
                >
                  {m.l}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <div
          style={s(
            "display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-top:36px",
          )}
        >
          <button
            type="button"
            onClick={() => onChange(pIdx)}
            style={s(
              "border:1px solid rgba(var(--ink),.3);background:transparent;padding:13px 22px;font-family:'DM Mono',ui-monospace,monospace;font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;cursor:pointer;transition:background .25s,color .25s;color:rgba(var(--ink),1)",
            )}
            className="hv102"
          >
            ← {prevTitle}
          </button>
          <button
            type="button"
            onClick={() => onChange(nIdx)}
            style={s(
              "border:1px solid rgba(var(--ink),.3);background:transparent;padding:13px 22px;font-family:'DM Mono',ui-monospace,monospace;font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;cursor:pointer;transition:background .25s,color .25s;color:rgba(var(--ink),1)",
            )}
            className="hv103"
          >
            {nextTitle} →
          </button>
        </div>
      </div>
    </dialog>
  );
}
