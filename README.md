# BridgingFX Website v2

Flagship rebuild of [bridgingfx.net](https://bridgingfx.net) — an Apple-caliber,
mobile-first marketing site for BridgingFX: white-label trading platforms, Forex CRM,
liquidity, and launch-to-scale services for brokers, prop firms, and financial institutions.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS 3** — premium fintech design system (`tailwind.config.ts`)
  with dark + light themes (CSS variables, `data-theme`)
- **Framer Motion** — scroll reveals, animated stats, accordions, carousels
- **next/font** (Inter) — premium typography
- Fully static-exportable pages; no backend, no database

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build    # must pass with zero errors
npm start        # serve the production build locally
```

## Deploy (Vercel)

No special config needed — import the repo, Vercel auto-detects Next.js.
`SITE.url` in `src/data/site.ts` is the canonical URL used for sitemap/OG/JSON-LD.

## Project structure

```
src/
  app/
    page.tsx                 # cinematic homepage
    services/page.tsx        # all 33 services, grouped
    services/[slug]/page.tsx # per-service detail (SSG)
    platforms/page.tsx       # cTrader / Wintrado / Hybrid / TM9 / MT4-MT5
    crm/page.tsx             # BridgeX Forex CRM deep-dive
    prop-firms/page.tsx      # prop firm technology
    packages/page.tsx        # 3 launch tiers
    company-formation/page.tsx # 4-step journey
    about/page.tsx  blog/  faq/  contact/
    sitemap.ts  robots.ts  not-found.tsx
  components/                # Logo, Navbar, Footer, MobileCTABar, Reveal, Stat, …
  data/                      # services.ts (33), platforms.ts, packages.ts, posts.ts, faqs.ts, site.ts
public/
  logo.png                   # REAL BridgingFX logo (157×51, light bg) — do not overwrite
```

## Key conventions

- **Logo**: the real `public/logo.png` (light background) is seated in a white
  rounded pill (pure white in both themes — `bg-paper`) via `components/Logo.tsx`.
  Never display it wider than ~300px (≈2× natural size) to avoid pixelation.
  A dark-background logo version does not exist yet — when one arrives,
  update `Logo.tsx` only.
- **Contact details are placeholders** (`src/data/site.ts`) — phone, email,
  address, WhatsApp, social links. See `CONTACT_TODO.md` for what the owner must confirm.
- **Mobile-first is non-negotiable**: 360px baseline, ≥44px touch targets,
  sticky mobile CTA bar (`MobileCTABar`), animated hamburger menu, zero horizontal
  overflow, fluid type scale.
- **Honest stats only**: founded 2020, 24/7 support, 2-week white-label launch,
  30+ services. No invented client counts, awards, or ratings. Testimonials are
  anonymized real quotes from the old site.
- **SEO**: per-page metadata + OG/Twitter, `sitemap.ts`, `robots.ts`, JSON-LD
  (Organization, Service, FAQPage, BlogPosting, ItemList), semantic HTML.
- Contact form is client-side `mailto:` — no backend, no data storage.

## Content sources

Real company details were taken from bridgingfx.net (homepage + FX Leads,
24/7 Tech Support, Compliance & KYC service pages, fetched 2026-09-23).
All copy was rewritten in a premium modern voice; no lorem ipsum anywhere.
Blog posts are marked as sample editorial content.
