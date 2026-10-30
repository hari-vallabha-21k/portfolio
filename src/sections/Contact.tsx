import { s } from "../lib/css";

export default function Contact() {
  const contactCmd = 'echo "plus ultra — let’s ship something"';

  return (
    <section
      id={"contact"}
      data-screen-label={"08 Contact"}
      style={s(
        "position:relative;background:#0A0A0A;color:#F5F4F0;padding:clamp(110px,16vh,180px) clamp(24px,6vw,84px) 56px;scroll-margin-top:62px;overflow:hidden",
      )}
    >
      <div
        style={s(
          "position:absolute;inset:0;background:radial-gradient(70% 55% at 80% 15%, rgba(244,135,75,.1), transparent 60%)",
        )}
      ></div>
      <div style={s("position:relative;z-index:2")}>
        <div
          data-reveal
          style={s(
            "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.34em;text-transform:uppercase;color:var(--accent,#C93A1A)",
          )}
        >
          Final section — 08 ·{" "}
          <span style={s("font-family:'Noto Serif JP',serif;letter-spacing:.14em")}>最終章</span>
        </div>
        <h2
          data-reveal
          style={s(
            "font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:clamp(56px,9vw,132px);line-height:.95;letter-spacing:-.015em;margin-top:24px",
          )}
        >
          Let's build
          <br />
          something<span style={s("color:var(--accent,#C93A1A)")}>.</span>
        </h2>
        <p
          data-reveal
          style={s(
            "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:clamp(19px,2vw,23px);color:rgba(245,244,240,.7);max-width:520px;margin-top:26px",
          )}
        >
          Open to full-time roles and freelance work from June 2026 — say hi and I'll reply fast.
        </p>
        <div
          data-reveal
          style={s(
            "display:flex;flex-wrap:wrap;gap:clamp(28px,5vw,64px);align-items:center;margin-top:52px",
          )}
        >
          <a
            href={"mailto:harivallabhak@gmail.com"}
            data-magnetic
            style={s(
              "width:168px;height:168px;border:1px solid rgba(245,244,240,.4);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.26em;text-transform:uppercase;color:#F5F4F0;transition:background .3s,border-color .3s;flex:none",
            )}
            className="hv24"
          >
            Say hi →
          </a>
          <a
            href={"mailto:harivallabhak@gmail.com"}
            style={s(
              "font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:clamp(24px,3.4vw,44px);color:#F5F4F0;border-bottom:1px solid rgba(245,244,240,.35);padding-bottom:6px",
            )}
          >
            harivallabhak@gmail.com
          </a>
        </div>
        <div data-reveal style={s("display:flex;flex-wrap:wrap;gap:30px;margin-top:64px")}>
          <a
            // biome-ignore lint/a11y/useValidAnchor: placeholder until the real GitHub URL is supplied
            href="#"
            title="Drop your GitHub URL here"
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:rgba(245,244,240,.6)",
            )}
          >
            GitHub ↗
          </a>
          <a
            // biome-ignore lint/a11y/useValidAnchor: placeholder until the real LinkedIn URL is supplied
            href="#"
            title="Drop your LinkedIn URL here"
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:rgba(245,244,240,.6)",
            )}
          >
            LinkedIn ↗
          </a>
          <a
            href="/resume.pdf"
            download="Hari-Vallabha-Resume.pdf"
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:rgba(245,244,240,.6)",
            )}
          >
            Résumé ↓
          </a>
          <span
            style={s(
              "font-family:'DM Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:rgba(245,244,240,.4)",
            )}
          >
            +91 94946 16990
          </span>
        </div>
        <div
          style={s(
            "margin-top:72px;font-family:'DM Mono',ui-monospace,monospace;font-size:12.5px;color:rgba(245,244,240,.5)",
          )}
        >
          <span style={s("color:var(--accent,#C93A1A)")}>$</span> {contactCmd}{" "}
          <span
            style={s(
              "display:inline-block;width:8px;height:14px;background:rgba(245,244,240,.5);vertical-align:-2px;animation:blink 1.1s step-end infinite",
            )}
          ></span>
        </div>
        <div
          style={s(
            "margin-top:88px;padding-top:26px;border-top:1px solid rgba(245,244,240,.12);display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-family:'DM Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.22em;text-transform:uppercase;color:rgba(245,244,240,.4)",
          )}
        >
          <span>© 2026 K. Hari Vallabha</span>
          <span>Secunderabad, IN</span>
          <span>Design × code × data — three.js &amp; coffee</span>
        </div>
      </div>
    </section>
  );
}
