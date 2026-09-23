import type { Config } from "tailwindcss";

/**
 * Theme-aware palette.
 *
 * The site supports dark + light themes via `[data-theme]` on <html>.
 * Neutrals (white / ink / slate) resolve to CSS variables defined in
 * globals.css, so every `text-white`, `bg-ink-950`, `border-white/10`,
 * `bg-white/5` etc. flips automatically — including opacity modifiers,
 * thanks to the <alpha-value> placeholder.
 *
 * `paper` (#FFFFFF) deliberately NEVER flips: it is the logo pill seat
 * and the text color on brand-orange buttons in both themes.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "rgb(var(--c-white) / <alpha-value>)",
        paper: "#FFFFFF",
        ink: {
          950: "rgb(var(--c-ink-950) / <alpha-value>)", // page background
          900: "rgb(var(--c-ink-900) / <alpha-value>)", // alt section
          800: "rgb(var(--c-ink-800) / <alpha-value>)", // card
          700: "rgb(var(--c-ink-700) / <alpha-value>)", // deep accent
        },
        // Only the shades the site actually uses are remapped; the rest
        // of the slate scale falls through to Tailwind defaults.
        slate: {
          200: "rgb(var(--c-slate-200) / <alpha-value>)",
          300: "rgb(var(--c-slate-300) / <alpha-value>)",
          400: "rgb(var(--c-slate-400) / <alpha-value>)",
          500: "rgb(var(--c-slate-500) / <alpha-value>)",
        },
        fx: {
          // BridgingFX brand: orange wordmark → signature FX orange accent
          orange: "#F97316",
          ember: "#EA580C",
          gold: "#D8B45A",
        },
        mint: "#34D399",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: { tightest: "-0.045em" },
      boxShadow: {
        glow: "0 0 60px -12px rgba(249, 115, 22, 0.45)",
        card: "0 20px 60px -20px var(--shadow-strong)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "ticker-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "ticker-scroll": "ticker-scroll 28s linear infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
