import { useRef, useState } from "react";
import { ACCENTS, SONGS } from "../data/misc";
import { useAudio } from "../hooks/useAudio";
import { useScrollState } from "../hooks/useScrollState";
import { useTheme } from "../hooks/useTheme";
import { s } from "../lib/css";
import GameModal from "./GameModal";

const ACCENT_NAMES: Record<string, string> = {
  "#C93A1A": "red",
  "#1A6C8C": "blue",
  "#7A8C5E": "sage",
};
const LINKS = ["about", "skills", "journey", "work", "data", "contact"] as const;
const mono = "font-family:'DM Mono',ui-monospace,monospace;";
const ctl = `${mono}background:transparent;border:1px solid rgba(245,244,240,.25);padding:7px 12px;cursor:pointer;font-size:9px;letter-spacing:.22em;color:rgba(245,244,240,.7)`;
const step = `${mono}width:20px;height:20px;border-radius:50%;flex:none;cursor:pointer;padding:0;border:1px solid rgba(245,244,240,.2);background:transparent;display:flex;align-items:center;justify-content:center;font-size:8px;color:rgba(245,244,240,.6)`;

export default function Nav() {
  const { dark, toggle, accent, setAccent } = useTheme();
  const { progress, showTop, active } = useScrollState();
  const audio = useAudio(SONGS);
  const [menu, setMenu] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <nav
        aria-label="Primary"
        style={s(
          "position:fixed;top:0;left:0;right:0;height:62px;background:#0A0A0A;color:#F5F4F0;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:0 clamp(20px,4vw,44px);z-index:60;border-bottom:1px solid rgba(245,244,240,.08)",
        )}
      >
        <a
          href="#hero"
          aria-label="Home"
          style={s(
            "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:600;font-size:27px;color:#F5F4F0",
          )}
        >
          hv<span style={s("color:var(--accent,#C93A1A)")}>.</span>
        </a>
        <div
          style={s("display:flex;gap:clamp(14px,2.8vw,36px);flex-wrap:wrap;justify-content:center")}
        >
          {LINKS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              style={s(
                `${mono}font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:${active === id ? "#F4874B" : "rgba(245,244,240,.65)"};padding:4px 0`,
              )}
            >
              {id}
            </a>
          ))}
        </div>
        <div style={s("display:flex;align-items:center;gap:16px;flex:none")}>
          {/* biome-ignore lint/a11y/noStaticElementInteractions: hover/focus only reveals the track list; every control inside is a real button */}
          <div
            ref={groupRef}
            onMouseEnter={() => setMenu(true)}
            onMouseLeave={() => setMenu(false)}
            onFocus={() => setMenu(true)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setMenu(false);
            }}
            onBlur={(e) => {
              if (!groupRef.current?.contains(e.relatedTarget as Node | null)) setMenu(false);
            }}
            style={s("position:relative;display:flex;align-items:center;flex:none")}
          >
            <button
              type="button"
              className="nav-btn"
              aria-label="Previous song"
              onClick={() => audio.step(-1)}
              style={s(`${step};margin-right:6px`)}
            >
              ⏮
            </button>
            <button
              type="button"
              className="nav-btn"
              aria-label="Play / pause lo-fi music"
              aria-pressed={audio.on}
              onClick={audio.toggle}
              style={{
                ...s(
                  "width:30px;height:30px;border-radius:50%;flex:none;cursor:pointer;padding:0;border:1px solid rgba(245,244,240,.28);background:#0e0e0e url('/images/music-disc.png') center / 122% no-repeat;image-rendering:pixelated;position:relative;overflow:hidden;animation:discSpin 2.6s linear infinite",
                ),
                animationPlayState: audio.on ? "running" : "paused",
              }}
            >
              <span
                style={s(
                  `${mono}position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:7px;color:#F5F4F0;text-shadow:0 0 3px rgba(0,0,0,.6)`,
                )}
              >
                {audio.on ? "" : "▶"}
              </span>
            </button>
            <button
              type="button"
              className="nav-btn"
              aria-label="Next song"
              onClick={() => audio.step(1)}
              style={s(`${step};margin-left:6px`)}
            >
              ⏭
            </button>
            <div
              style={s(
                `${mono}position:absolute;top:calc(100% + 16px);right:0;background:rgba(10,10,10,.95);border:1px solid rgba(245,244,240,.18);color:rgba(245,244,240,.75);padding:0;font-size:8.5px;letter-spacing:.22em;white-space:nowrap;opacity:${menu ? 1 : 0};visibility:${menu ? "visible" : "hidden"};transition:opacity .35s,visibility .35s;pointer-events:${menu ? "auto" : "none"};min-width:260px;z-index:90`,
              )}
            >
              <div
                style={s(
                  "padding:8px 12px;border-bottom:1px solid rgba(245,244,240,.1);color:rgba(245,244,240,.45);font-size:7.5px;letter-spacing:.28em",
                )}
              >
                {audio.on ? "NOW PLAYING" : "SELECT A TRACK"}
              </div>
              {SONGS.map((song, i) => (
                <button
                  type="button"
                  key={song.id}
                  className="song-row"
                  tabIndex={menu ? 0 : -1}
                  onClick={() => audio.select(i)}
                  style={s(
                    `${mono}width:100%;border:0;text-align:left;padding:7px 12px;cursor:pointer;display:flex;align-items:center;gap:8px;transition:background .2s;background:${i === audio.idx ? "rgba(244,135,75,.08)" : "transparent"};font-size:inherit;letter-spacing:inherit`,
                  )}
                >
                  <span
                    style={s(
                      `width:5px;height:5px;border-radius:50%;flex:none;background:${i === audio.idx ? (audio.on ? "#F4874B" : "var(--accent,#C93A1A)") : "rgba(245,244,240,.25)"}`,
                    )}
                  />
                  <span style={s("display:flex;flex-direction:column;gap:1px")}>
                    <span
                      style={s(
                        `color:${i === audio.idx ? "#F4874B" : "rgba(245,244,240,.75)"};font-size:8px;letter-spacing:.2em`,
                      )}
                    >
                      {song.title}
                    </span>
                    <span
                      style={s("color:rgba(245,244,240,.35);font-size:6.5px;letter-spacing:.16em")}
                    >
                      {song.artist}
                    </span>
                  </span>
                  <span style={s("flex:1")} />
                  <span
                    style={s("color:rgba(245,244,240,.3);font-size:6.5px;letter-spacing:.18em")}
                  >
                    {song.genre}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="nav-btn"
            aria-label="Play the mini-game"
            onClick={() => setGameOpen(true)}
            style={s(`${ctl};display:flex;align-items:center;gap:7px`)}
          >
            ▶ GAME
          </button>
          {/* biome-ignore lint/a11y/useSemanticElements: a fieldset would add default border/padding to the nav */}
          <div
            role="group"
            aria-label="Accent colour"
            style={s("display:flex;align-items:center;gap:6px")}
          >
            {ACCENTS.map((c) => (
              <button
                type="button"
                key={c}
                aria-label={`Accent colour: ${ACCENT_NAMES[c]}`}
                aria-pressed={accent === c}
                onClick={() => setAccent(c)}
                style={s(
                  `width:12px;height:12px;border-radius:50%;padding:0;cursor:pointer;background:${c};border:1px solid rgba(245,244,240,.4);outline:${accent === c ? "1.5px solid #F5F4F0" : "none"};outline-offset:2px`,
                )}
              />
            ))}
          </div>
          <button
            type="button"
            className="nav-btn"
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
            onClick={toggle}
            style={s(`${ctl};display:flex;align-items:center;gap:8px`)}
          >
            <span
              style={s(
                `width:10px;height:10px;border-radius:50%;border:1.5px solid #F4874B;background:${dark ? "#F4874B" : "transparent"};transition:background .3s`,
              )}
            />
            {dark ? "DARK" : "LIGHT"}
          </button>
          <div
            style={s(
              `${mono}font-size:10px;letter-spacing:.22em;color:rgba(245,244,240,.5);text-transform:uppercase;white-space:nowrap`,
            )}
          >
            HYD, IN — IST
          </div>
        </div>
        <div
          aria-hidden="true"
          style={{
            ...s(
              "position:absolute;left:0;bottom:-1px;height:2px;width:100%;background:var(--accent,#C93A1A);transform-origin:left;pointer-events:none",
            ),
            transform: `scaleX(${progress})`,
          }}
        />
      </nav>
      <button
        type="button"
        className="nav-btn"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        tabIndex={showTop ? 0 : -1}
        style={s(
          `${mono}position:fixed;right:22px;bottom:22px;z-index:70;width:46px;height:46px;border-radius:50%;border:1px solid rgba(245,244,240,.3);background:#0A0A0A;color:#F5F4F0;font-size:13px;cursor:pointer;opacity:${showTop ? 1 : 0};visibility:${showTop ? "visible" : "hidden"};pointer-events:${showTop ? "auto" : "none"};transform:translateY(${showTop ? 0 : 14}px);transition:opacity .4s,transform .4s,visibility .4s,border-color .3s`,
        )}
      >
        ↑
      </button>
      <GameModal open={gameOpen} onClose={() => setGameOpen(false)} />
    </>
  );
}
