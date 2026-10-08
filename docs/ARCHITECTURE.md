# BridgingFX Website v2 — Architecture

## Parts

| Part | Location | Stack |
|---|---|---|
| Marketing site | `src/app/`, `src/components/`, `src/data/` | Next.js 14 (App Router) + TypeScript + Tailwind CSS 3 + Framer Motion |
| Client portal (demo) | `src/app/portal`, `src/components/portal`, `src/lib/portal-store.ts` | localStorage-backed; one-module persistence boundary |
| Assets | `public/` | logo (`logo.png` 157×51, `logo-dark.jpg`), favicon, images/blog\|home\|pages\|services\|og |

No backend, no database. Production build is a static export
(`next.config.mjs`: `output: "export"` when `NODE_ENV=production`,
`trailingSlash: true`, custom image loader for basePath safety).

## Folders

- `src/app/` — routes: `page.tsx` (homepage), `services/`,
  `services/[slug]/` (SSG), `platforms/`, `crm/`, `prop-firms/`,
  `leads/`, `packages/`, `company-formation/`, `about/`, `blog/`,
  `blog/[slug]/`, `faq/`, `contact/`, `portal/`, `privacy/`, `terms/`,
  `sitemap.ts`, `robots.ts`, `not-found.tsx`, `layout.tsx`.
- `src/components/` — Logo, Navbar, Footer, MobileCTABar, PageHero,
  CTABand, Reveal, Stat, Marquee, FaqAccordion, PackageQuiz,
  PackageCompare, Testimonials, ThemeToggle, Preloader, BackToTop,
  ServiceIcon, JsonLd, `portal/`.
- `src/data/` — the content layer: `site.ts` (SITE constants: contacts,
  NAV_LINKS, FOOTER_SERVICES), `services.ts` (33 services), `platforms.ts`,
  `packages.ts`, `posts.ts` (blog), `faqs.ts`, `testimonials.ts`.
- `src/lib/portal-store.ts` — portal persistence boundary (sync
  localStorage now; swap note for async backend in
  `PORTAL_BACKEND_NOTES.md`).

## Data flow

```
src/data/*.ts  ──►  App Router pages/components  ──►  static HTML (out/)
   ▲ edit text here (no code changes needed)
```

Single source of truth for contacts: `SITE` in `src/data/site.ts` —
every page, footer, contact form, and the mobile CTA bar read it.
Theme: CSS variables in `globals.css` keyed off `html[data-theme]`;
Tailwind colors map to `rgb(var(--c-*) / <alpha-value>)` so every
utility flips with the theme.

## Deploy

`.github/workflows/deploy-cpanel.yml`: on push to `main`, builds
(`npm ci` + `npm run build`) and rsyncs `out/` to cPanel
(`--exclude '/brixchat/'` so it never deletes the Brix Chat app in the
same document root). Preview flow in `CONTENT_GUIDE.md` references
GitHub Pages rebuilds.

> Note: README's "Deploy (Vercel)" section is stale — actual deploy is
> cPanel. TODO: update README.
