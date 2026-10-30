import { useEffect, useRef } from "react";
import { useGameLoop } from "../hooks/useGameLoop";
import { s } from "../lib/css";

/** Mini-game in a native <dialog>: focus trap, Esc, focus restore and inert background come from showModal(). */
export default function GameModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const best = useGameLoop(canvas, open);

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    else if (!open && d.open) d.close();
  }, [open]);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: Esc closes the dialog natively; the backdrop click is a pointer convenience
    <dialog
      ref={dlg}
      aria-label="Mini-game"
      data-backdrop
      onClose={onClose}
      onClick={(e) => {
        if ((e.target as HTMLElement).dataset.backdrop !== undefined) onClose();
      }}
      style={s(
        "position:fixed;inset:0;width:100%;height:100%;max-width:none;max-height:none;margin:0;border:0;padding:0;color:inherit;background:rgba(10,10,10,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);animation:overlayIn .25s ease both",
      )}
    >
      <div
        data-backdrop
        style={s(
          "display:flex;align-items:center;justify-content:center;padding:18px;min-height:100%",
        )}
      >
        <div
          style={s(
            "width:min(780px,96vw);background:#0A0A0A;border:1px solid rgba(245,244,240,.2);color:#F5F4F0;animation:cardIn .45s cubic-bezier(.22,.61,.36,1) both;box-shadow:0 60px 120px -50px rgba(0,0,0,.8)",
          )}
        >
          <div
            style={s(
              "display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px 16px;border-bottom:1px solid rgba(245,244,240,.14)",
            )}
          >
            <div
              style={s(
                "display:flex;align-items:center;gap:10px;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.26em;color:rgba(245,244,240,.6)",
              )}
            >
              <span
                style={s(
                  "width:7px;height:7px;border-radius:50%;background:var(--accent,#C93A1A);animation:pulseDot 1.2s ease-in-out infinite",
                )}
              />
              MINI-GAME — FULL SPRINT ·{" "}
              <span lang="ja" style={s("font-family:'Noto Serif JP',serif")}>
                全力疾走
              </span>
            </div>
            <button
              type="button"
              className="close-btn"
              aria-label="Close game"
              onClick={onClose}
              style={s(
                "background:transparent;border:1px solid rgba(245,244,240,.3);color:#F5F4F0;width:30px;height:30px;border-radius:50%;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;transition:background .25s,color .25s",
              )}
            >
              ✕
            </button>
          </div>
          <canvas
            ref={canvas}
            width={740}
            height={300}
            role="img"
            aria-label="Endless runner game. Press space, arrow up, or tap to jump."
            style={s(
              "display:block;width:100%;height:auto;touch-action:manipulation;cursor:pointer",
            )}
          />
          <div
            style={s(
              "display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:11px 16px;border-top:1px solid rgba(245,244,240,.14);font-family:'DM Mono',ui-monospace,monospace;font-size:9px;letter-spacing:.22em;color:rgba(245,244,240,.45)",
            )}
          >
            <span>SPACE / TAP — JUMP THE BUGS</span>
            <span>BEST — {String(best).padStart(4, "0")} COMMITS</span>
            <span>ESC — RAGE QUIT</span>
          </div>
        </div>
      </div>
    </dialog>
  );
}
