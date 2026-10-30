import { type RefObject, useEffect, useState } from "react";

const BEST_KEY = "hv-game-best";

function readBest(): number {
  try {
    return Number.parseInt(localStorage.getItem(BEST_KEY) || "0", 10) || 0;
  } catch {
    return 0;
  }
}

type Obstacle = { x: number; w: number; h: number };

/**
 * Endless-runner mini-game drawn on a canvas. Runs only while `active`; returns the saved best score.
 * Space / ArrowUp / pointer-down jump (and start / retry).
 */
export function useGameLoop(canvasRef: RefObject<HTMLCanvasElement | null>, active: boolean) {
  const [best, setBest] = useState(readBest);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!active || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    setBest(readBest());

    const W = cv.width;
    const H = cv.height;
    const G = H - 58;
    const rnd = Math.random;
    const fresh = () => ({
      t: 0,
      speed: 3.2,
      y: G,
      vy: 0,
      obs: [] as Obstacle[],
      next: 46,
      score: 0,
      dead: false,
      started: false,
    });
    let s = fresh();

    const jump = () => {
      if (s.dead) {
        s = fresh();
        return;
      }
      if (!s.started) {
        s.started = true;
        return;
      }
      if (s.y >= G - 1) s.vy = -10.6;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat || (e.target as HTMLElement | null)?.closest?.("button")) return;
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    };
    const onPointer = (e: PointerEvent) => {
      e.preventDefault();
      jump();
    };
    window.addEventListener("keydown", onKey);
    cv.addEventListener("pointerdown", onPointer);

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (s.started && !s.dead) {
        s.t++;
        s.speed += 0.0008;
        s.score = Math.floor(s.t / 5);
        if (--s.next <= 0) {
          const tall = rnd() < 0.25;
          s.obs.push({
            x: W + 30,
            w: 15 + rnd() * 20,
            h: tall ? 44 + rnd() * 12 : 20 + rnd() * 22,
          });
          s.next = Math.max(34, 70 + rnd() * 75 - s.speed * 6);
        }
        s.vy += 0.6;
        s.y = Math.min(G, s.y + s.vy);
        for (const o of s.obs) o.x -= s.speed;
        s.obs = s.obs.filter((o) => o.x + o.w > -10);
        for (const o of s.obs) {
          if (98 - 6 > o.x && 74 + 6 < o.x + o.w && s.y > G - o.h + 4) {
            s.dead = true;
            if (s.score > readBest()) {
              try {
                localStorage.setItem(BEST_KEY, String(s.score));
              } catch {
                // best score just won't persist
              }
              setBest(s.score);
            }
            break;
          }
        }
      }
      ctx.fillStyle = "#0A0A0A";
      ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(245,244,240,.06)";
      ctx.lineWidth = 2;
      for (let i = 0; i < 6; i++) {
        const x = W - ((s.t * 9 + i * 150) % (W + 240)) + 120;
        ctx.beginPath();
        ctx.moveTo(x, 20);
        ctx.lineTo(x - 46, H - 30);
        ctx.stroke();
      }
      ctx.strokeStyle = "rgba(245,244,240,.35)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, G + 1.5);
      ctx.lineTo(W, G + 1.5);
      ctx.stroke();
      ctx.fillStyle = "#F4874B";
      for (const o of s.obs) ctx.fillRect(o.x, G - o.h, o.w, o.h);
      const bob = s.y >= G && s.started && !s.dead ? Math.abs(Math.sin(s.t * 0.28)) * 3 : 0;
      const py = s.y - 32 - bob;
      ctx.fillStyle = "#C93A1A";
      ctx.fillRect(74, py, 24, 32);
      ctx.fillStyle = "#F5F4F0";
      ctx.fillRect(74, py + 5, 24, 4);
      ctx.font = "12px 'DM Mono', ui-monospace, monospace";
      ctx.textAlign = "right";
      ctx.fillStyle = "rgba(245,244,240,.8)";
      ctx.fillText(`COMMITS ${String(s.score).padStart(4, "0")}`, W - 18, 30);
      ctx.textAlign = "left";
      ctx.fillStyle = "rgba(245,244,240,.4)";
      ctx.fillText(`BEST ${String(Math.max(readBest(), s.score)).padStart(4, "0")}`, 18, 30);
      ctx.textAlign = "center";
      if (!s.started) {
        ctx.fillStyle = "#F5F4F0";
        ctx.font = "600 15px 'DM Mono', ui-monospace, monospace";
        ctx.fillText("SPACE / TAP TO START", W / 2, H / 2 - 26);
        ctx.fillStyle = "#F4874B";
        ctx.font = "600 14px 'Noto Serif JP', serif";
        ctx.fillText("全力疾走 — OUTRUN THE BUGS", W / 2, H / 2 - 2);
      }
      if (s.dead) {
        ctx.fillStyle = "#F5F4F0";
        ctx.font = "600 16px 'DM Mono', ui-monospace, monospace";
        ctx.fillText(`GAME OVER — ${s.score} COMMITS`, W / 2, H / 2 - 14);
        ctx.fillStyle = "#F4874B";
        ctx.font = "12px 'DM Mono', ui-monospace, monospace";
        ctx.fillText("TAP / SPACE TO RETRY · つづく…", W / 2, H / 2 + 10);
      }
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
      cv.removeEventListener("pointerdown", onPointer);
    };
  }, [active, canvasRef]);

  return best;
}
