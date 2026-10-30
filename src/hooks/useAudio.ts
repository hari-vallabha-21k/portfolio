import { useEffect, useRef, useState } from "react";

/** Four-chord lo-fi loop, one chord per bar: [bass note, ...chord notes] as MIDI numbers. */
const PROGRESSION = [
  [53, 60, 64, 67],
  [48, 55, 64, 67],
  [50, 57, 65, 69],
  [46, 58, 62, 65],
];
const BAR_MS = 2600;
const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12);

/**
 * Generative lo-fi loop made with the Web Audio API (no audio files, nothing to license).
 * The AudioContext is created on the first play, which is always a user gesture.
 */
export function useAudio() {
  const [on, setOn] = useState(false);
  const ctx = useRef<AudioContext | null>(null);
  const master = useRef<GainNode | null>(null);
  const timer = useRef(0);
  const bar = useRef(0);

  const init = () => {
    try {
      const ac = new AudioContext();
      const out = ac.createGain();
      out.gain.value = 0.16;
      out.connect(ac.destination);
      // Vinyl crackle: a looped buffer of near-silence with the odd loud sample, high-passed.
      const len = ac.sampleRate * 2;
      const buf = ac.createBuffer(1, len, ac.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) {
        d[i] =
          Math.random() < 0.0012 ? (Math.random() * 2 - 1) * 0.8 : (Math.random() * 2 - 1) * 0.015;
      }
      const src = ac.createBufferSource();
      src.buffer = buf;
      src.loop = true;
      const hp = ac.createBiquadFilter();
      hp.type = "highpass";
      hp.frequency.value = 1800;
      const crackle = ac.createGain();
      crackle.gain.value = 0.5;
      src.connect(hp);
      hp.connect(crackle);
      crackle.connect(out);
      src.start();
      ctx.current = ac;
      master.current = out;
    } catch {
      ctx.current = null; // Web Audio unavailable: the button simply does nothing
    }
  };

  const playBar = () => {
    const ac = ctx.current;
    const out = master.current;
    if (!ac || !out) return;
    const t = ac.currentTime + 0.05;
    bar.current = (bar.current + 1) % PROGRESSION.length;
    const chord = PROGRESSION[bar.current];
    chord.forEach((midi, i) => {
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.type = "triangle";
      o.frequency.value = hz(midi);
      o.detune.value = (Math.random() - 0.5) * 14;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.05, t + 0.5 + i * 0.06);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 2.7);
      o.connect(g);
      g.connect(out);
      o.start(t);
      o.stop(t + 2.8);
    });
    const b = ac.createOscillator();
    const bg = ac.createGain();
    b.type = "sine";
    b.frequency.value = hz(chord[0] - 12);
    bg.gain.setValueAtTime(0, t);
    bg.gain.linearRampToValueAtTime(0.09, t + 0.12);
    bg.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
    b.connect(bg);
    bg.connect(out);
    b.start(t);
    b.stop(t + 2.5);
  };

  const toggle = () => {
    if (!ctx.current) init();
    const ac = ctx.current;
    if (!ac) return;
    if (on) {
      window.clearInterval(timer.current);
      ac.suspend().catch(() => {});
      setOn(false);
    } else {
      ac.resume().catch(() => {});
      playBar();
      timer.current = window.setInterval(playBar, BAR_MS);
      setOn(true);
    }
  };

  useEffect(
    () => () => {
      window.clearInterval(timer.current);
      ctx.current?.close().catch(() => {});
      ctx.current = null;
    },
    [],
  );

  return { on, toggle };
}
