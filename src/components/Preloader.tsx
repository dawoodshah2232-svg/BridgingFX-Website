"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Branded preloader: favicon mark, live % counter and a gradient
 * progress bar. Slides up once the page is ready (window load), with a
 * minimum display time and a hard fallback so it can never trap the page.
 * Respects prefers-reduced-motion: dismisses instantly.
 */
export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      return;
    }

    if (window.sessionStorage.getItem("bfx-preloader-seen") === "1") {
      setGone(true);
      return;
    }

    document.body.style.overflow = "hidden";
    const startedAt = Date.now();

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      window.sessionStorage.setItem("bfx-preloader-seen", "1");
      // Keep the brand moment brief so navigation never feels blocked.
      const wait = Math.max(0, 350 - (Date.now() - startedAt));
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setLeaving(true);
          setTimeout(() => {
            setGone(true);
            document.body.style.overflow = "";
          }, 450);
        }, 120);
      }, wait);
    };

    // Creeping progress while assets load.
    const tick = window.setInterval(() => {
      setProgress((p) => Math.min(92, p + 3 + Math.random() * 7));
    }, 130);

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    // Hard fallback: never trap the page.
    const fallback = window.setTimeout(finish, 1600);

    return () => {
      window.clearInterval(tick);
      window.clearTimeout(fallback);
      window.removeEventListener("load", finish);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`preloader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        leaving ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="orb left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 bg-fx-orange/15" />
      <div className="relative flex flex-col items-center px-6">
        <Image
          src="/favicon.png"
          alt=""
          width={104}
          height={104}
          className="h-[104px] w-[104px]"
          priority
        />
        <div className="display mt-8 text-5xl font-bold tabular-nums text-white">
          {Math.round(progress)}
          <span className="text-2xl text-slate-500">%</span>
        </div>
        <div className="mt-4 h-[3px] w-52 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-fx-orange to-amber-300 transition-[width] duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
          BridgingFX
        </p>
      </div>
    </div>
  );
}
