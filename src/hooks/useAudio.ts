import { useEffect, useRef, useState } from "react";
import type { Song } from "../data/misc";

/** Lazy single-track player: first play creates the <audio>; switching tracks keeps play/pause state. */
export function useAudio(songs: readonly Song[]) {
  const [on, setOn] = useState(false);
  const [idx, setIdx] = useState(0);
  const el = useRef<HTMLAudioElement | null>(null);

  const load = (i: number) => {
    const old = el.current;
    if (old) {
      old.pause();
      old.removeAttribute("src");
      old.load();
    }
    const a = new Audio(songs[i].src);
    a.volume = 0.4;
    a.loop = true;
    el.current = a;
    return a;
  };

  const toggle = () => {
    const a = el.current ?? load(idx);
    if (on) {
      a.pause();
      setOn(false);
    } else {
      setOn(true);
      a.play().catch((err: unknown) => {
        // AbortError = we paused/switched while play() was pending; anything else = blocked or missing file
        if ((err as Error)?.name !== "AbortError" && el.current === a) setOn(false);
      });
    }
  };

  const select = (i: number) => {
    setIdx(i);
    const a = load(i);
    if (on) {
      a.play().catch((err: unknown) => {
        if ((err as Error)?.name !== "AbortError" && el.current === a) setOn(false);
      });
    }
  };

  const step = (dir: number) => select((idx + dir + songs.length) % songs.length);

  useEffect(
    () => () => {
      el.current?.pause();
      el.current = null;
    },
    [],
  );

  return { on, idx, toggle, select, step };
}
