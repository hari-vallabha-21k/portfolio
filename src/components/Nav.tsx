import { s } from "../lib/css";

const LINKS = ["about", "skills", "journey", "work", "data", "contact"] as const;
const mono = "font-family:'DM Mono',ui-monospace,monospace;";

/** Static top bar. Music, game and theme controls arrive in Phase 4. */
export default function Nav() {
  return (
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
              `${mono}font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:rgba(245,244,240,.65);padding:4px 0`,
            )}
          >
            {id}
          </a>
        ))}
      </div>
      <div
        style={s(
          `${mono}font-size:10px;letter-spacing:.22em;color:rgba(245,244,240,.5);text-transform:uppercase;white-space:nowrap`,
        )}
      >
        HYD, IN — IST
      </div>
    </nav>
  );
}
