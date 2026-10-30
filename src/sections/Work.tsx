import { Fragment, useState } from "react";
import ProjectDialog from "../components/ProjectDialog";
import { PROJECTS } from "../data/projects";
import { s } from "../lib/css";

export default function Work() {
  const projects = PROJECTS;
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section
      id="work"
      data-screen-label={"05 Work"}
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
              "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.34em;text-transform:uppercase;color:rgba(var(--ink),.5)",
            )}
          >
            Selected work — 05 ·{" "}
            <span style={s("font-family:'Noto Serif JP',serif;letter-spacing:.14em")}>作品</span>
          </div>
          <h2
            style={s(
              "font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(40px,5vw,62px);letter-spacing:-.01em;margin-top:10px",
            )}
          >
            Five builds, end to end<span style={s("color:var(--accent,#C93A1A)")}>.</span>
          </h2>
        </div>
        <div
          style={s(
            "font-family:'DM Mono',ui-monospace,monospace;font-size:10.5px;letter-spacing:.18em;color:rgba(var(--ink),.5);text-transform:uppercase",
          )}
        >
          Click a row — case studies open in place
        </div>
      </div>
      {projects.map((p, pi) => (
        <Fragment key={p.code}>
          {/* biome-ignore lint/a11y/useSemanticElements: the whole row is the click target; a <button> would break the grid layout */}
          <div
            data-reveal
            role="button"
            tabIndex={0}
            aria-label={`Open case study: ${p.title}`}
            onClick={() => setOpen(pi)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(pi);
              }
            }}
            style={s(
              "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(28px,5vw,72px);align-items:center;padding:clamp(36px,6vh,60px) 0;border-top:1px solid rgba(var(--ink),.14);cursor:pointer",
            )}
          >
            <div>
              <div
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.26em;color:var(--accent,#C93A1A)",
                )}
              >
                {p.code} — {p.year}
              </div>
              <h3
                style={s(
                  "font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:clamp(38px,4.6vw,64px);line-height:1;letter-spacing:-.01em;margin:12px 0 12px;transition:color .3s",
                )}
                className="hv18"
              >
                {p.title}
              </h3>
              <p
                style={s(
                  "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:19px;line-height:1.45;color:rgba(var(--ink),.6);max-width:52ch",
                )}
              >
                {p.tag}
              </p>
              <div
                style={s(
                  "font-family:'DM Mono',ui-monospace,monospace;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;color:rgba(var(--ink),.5);margin-top:18px",
                )}
              >
                {p.stackStr}
              </div>
              <div
                style={s(
                  "display:inline-flex;align-items:center;gap:10px;font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:var(--accent,#C93A1A);margin-top:24px;border-bottom:1px solid color-mix(in srgb, var(--accent,#C93A1A) 45%, transparent);padding-bottom:5px",
                )}
              >
                Open case study <span>→</span>
              </div>
            </div>
            <div
              style={s(
                `position:relative;height:clamp(240px,32vw,360px);border-radius:2px;overflow:hidden;transition:transform .55s cubic-bezier(.22,.61,.36,1);background:${p.artBg}`,
              )}
              className="hv19"
            >
              <div
                style={s(
                  "position:absolute;right:20px;top:2px;font-family:'Cormorant Garamond',Georgia,serif;font-weight:700;font-size:130px;line-height:1;color:rgba(245,244,240,.08);pointer-events:none",
                )}
              >
                {p.i}
              </div>
              <div
                style={s(
                  "position:absolute;left:24px;top:20px;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.26em;color:rgba(245,244,240,.55)",
                )}
              >
                {p.sys}
              </div>
              <svg
                aria-hidden="true"
                viewBox={"0 0 120 40"}
                style={s("position:absolute;left:26px;bottom:28px;width:44%;overflow:visible")}
              >
                <path
                  d={p.spark}
                  fill="none"
                  stroke="#F4874B"
                  strokeWidth={"2.5"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div
                style={s(
                  "position:absolute;right:22px;bottom:22px;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.18em;color:rgba(245,244,240,.85);background:rgba(245,244,240,.1);border:1px solid rgba(245,244,240,.18);padding:7px 11px",
                )}
              >
                {p.chip}
              </div>
            </div>
          </div>
        </Fragment>
      ))}
      <ProjectDialog index={open} onChange={setOpen} onClose={() => setOpen(null)} />
    </section>
  );
}
