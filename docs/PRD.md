# BridgingFX Website v2 — PRD

## What it is

Full Apple-style, mobile-first rebuild of [bridgingfx.net](https://bridgingfx.net)
— the flagship marketing site for **BridgingFX**, a Dubai-based forex
technology provider. Tagline: "Empowering Forex Brokers, PropFirms, and
Financial Institutions". Founded 2016 (SITE.founded).

Pure marketing site: fully static, **no backend, no database**. A client
portal at `/portal` exists in **demo mode** (name+email local session,
localStorage documents, recorded-but-not-processed payments).

## Users

- **Forex brokers / prop firms / financial institutions** evaluating
  white-label platforms, Forex CRM, liquidity, and launch services.
- **Prospective clients** reading 33 service detail pages, 3 launch-tier
  packages, platform pages, blog, FAQ, and contacting via the contact page
  / WhatsApp CTA.
- **Client portal users** (demo): document upload, order tracking — not
  production until a real backend lands (see `PORTAL_BACKEND_NOTES.md`).

## Features (as implemented)

- Cinematic homepage, 33 SSG service pages (`/services/[slug]`), grouped
  services index, platforms (cTrader / Wintrado / Hybrid / TM9 / MT4-MT5),
  BridgeX Forex CRM deep-dive, prop-firm tech, leads & growth stack,
  3 launch packages + package quiz & comparison, company-formation
  4-step journey, about, blog (sample posts flagged), FAQ, contact,
  legal (privacy/terms), 404.
- All copy lives in data files (`src/data/*.ts`) — content edits need no
  code changes (`CONTENT_GUIDE.md`).
- Dark + light themes (`data-theme`), mobile-first, Framer Motion scroll
  reveals / animated stats / accordions / carousels.
- SEO/GEO infra: `sitemap.ts`, `robots.ts`, canonicals, meta titles,
  JSON-LD (Event/Organization), FAQ schema, OG tags, alt text, WebP.

## Honesty constraints (verified in repo)

- No invented numbers about BridgingFX (clients, %, awards, ratings)
  — commit `b70a714`, `CONTENT_GUIDE.md`.
- Testimonials: anonymous role labels only, no names, no star ratings.
- Blog posts marked `sample: true` until owner confirms real content.
- Contact details: `site.ts` marks phone/WhatsApp/address as
  owner-confirmed (2026-09-23) but `CONTACT_TODO.md` still lists
  placeholders (`+000 000 0000`) — **reconcile with the owner** (TODO).
