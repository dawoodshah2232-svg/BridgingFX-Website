import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#04070C", // page background — deep navy black
          900: "#060B14",
          800: "#0A1220",
          700: "#101B30",
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
        card: "0 20px 60px -20px rgba(0, 0, 0, 0.7)",
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
