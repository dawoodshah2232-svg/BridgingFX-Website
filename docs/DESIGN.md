# BridgingFX Website v2 — Design System

Source: `tailwind.config.ts`, `src/app/layout.tsx`, `src/app/globals.css`,
`src/components/Logo.tsx`.

## Brand

- **Signature accent:** FX orange — `fx-orange #F97316`, `fx-ember #EA580C`,
  `fx-gold #D8B45A` (matches the orange wordmark in the official logo).
- **Secondary:** `mint #34D399`.
- **Dark surfaces:** `ink-950` (page bg), `ink-900` (alt section),
  `ink-800` (card), `ink-700` (deep accent) — theme variables, flip with
  `data-theme`.
- **paper #FFFFFF** never flips: logo-pill seat and text color on
  brand-orange buttons in both themes.
- **Signature effects:** `glow` shadow (orange 0.45 alpha), `grid-dark`
  background, `float` / `ticker-scroll` / `pulse-glow` keyframes.

## Logo

- `public/logo.png` (157×51) — official logo, used everywhere via
  `components/Logo.tsx`. Fallback `logo-dark.jpg` for the dark theme.
- **Logos used raw — never inside a card or box.** Sizes tuned per
  breakpoint (see git log: header ~150–176px).

## Typography

- Current: Inter via `next/font` (`--font-inter`), `letterSpacing.tightest
  -0.045em` for display type.
- **Owner rule (standing): use the Apple font stack as primary**
  `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text",
  "Helvetica Neue", Helvetica, Arial, sans-serif` — never
  Roboto/Titillium/Montserrat as primary.
  → TODO: reconcile Inter usage with the Apple-stack rule with the owner.

## UI conventions

- Dark + light themes via `html[data-theme]`; all palette utilities
  resolve through CSS variables (`<alpha-value>` so opacity modifiers
  flip too).
- **No emojis in UI.** Icons = inline SVG only
  (`src/components/ServiceIcon.tsx`) — Heroicons-style line icons.
- Motion: Framer Motion scroll reveals, animated stats, accordions,
  carousels; apple-design + web-animations standards apply
  (`~/workspace/skills/apple-design/`,
  `~/workspace/skills/web-animations/`).
- Faded cinematic hero backgrounds; real photography over AI-looking
  renders; mobile-first, 320–430px verified.
- Branded preloader, back-to-top, capabilities marquee, sticky mobile
  CTA bar (WhatsApp + call, reads `SITE` contacts).

## Don'ts

- No card/background boxes behind logos or product imagery.
- No invented brand colors beyond the tokens above.
- No "TBA" in UI copy; only confirmed facts for stats/tickets/contact.
