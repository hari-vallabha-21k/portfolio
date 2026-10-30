import { useEffect, useRef, useState } from "react";
import { SQL_TEXT } from "../data/misc";

/** Types the SQL snippet out (2 chars / 18ms) once the block is 35% visible. */
export default function TypedSql({ style }: { style: React.CSSProperties }) {
  const ref = useRef<HTMLPreElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setN(SQL_TEXT.length);
      return;
    }
    let timer = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        let i = 0;
        const type = () => {
          i += 2;
          setN(i);
          if (i < SQL_TEXT.length) timer = window.setTimeout(type, 18);
        };
        type();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const typing = n > 0 && n < SQL_TEXT.length;
  return (
    <pre ref={ref} style={style}>
      {SQL_TEXT.slice(0, n)}
      {typing ? "▌" : ""}
    </pre>
  );
}
