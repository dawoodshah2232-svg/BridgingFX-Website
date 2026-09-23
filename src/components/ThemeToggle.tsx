"use client";

import { useEffect, useState } from "react";

export type Theme = "dark" | "light";
const STORAGE_KEY = "bfx-theme";

function readTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function applyTheme(next: Theme) {
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* storage unavailable — theme still applies for this visit */
  }
  // Keep the mobile browser chrome in sync with the page theme.
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", next === "light" ? "#ffffff" : "#04070c");
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3L19 19M19 5l-1.7 1.7M6.7 17.3L5 19" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.4 14.2A8.5 8.5 0 0 1 9.8 3.6a8.5 8.5 0 1 0 10.6 10.6z" />
    </svg>
  );
}

/**
 * Dark/light theme toggle. Icon-only by default; pass `label` for a
 * labeled pill (used inside the open mobile menu).
 */
export default function ThemeToggle({ label = false }: { label?: boolean }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(readTheme());
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  };

  // Render the dark-state icon pre-hydration to avoid a flash of the
  // wrong glyph; the no-FOUC script in layout sets data-theme first.
  const isDark = mounted ? theme === "dark" : true;

  if (label) {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-slate-300 transition-colors hover:border-fx-orange/50 hover:text-white"
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
        {isDark ? "Light mode" : "Dark mode"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur transition-colors hover:border-fx-orange/50 hover:text-fx-orange"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
