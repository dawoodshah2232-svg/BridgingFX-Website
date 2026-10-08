# BridgingFX Website v2 — Memory (progress log)

Updated: 2026-10-08.

## Done

- 2026-10-08: **20-point SEO sweep applied + verified** (baseline audit
  first: 62 of 94 pages had issues — long/duplicate titles, missing
  canonicals, incomplete OG). Fixes: `src/lib/seo.ts` metadata helper;
  all titles unique & ≤60 chars (20 blog `seoTitle`s, shorter service/
  product title pattern, homepage split into server wrapper +
  `HomePage.tsx` client); descriptions ≤160 (blog excerpts truncated at
  word boundary); canonicals on every public page; OG/Twitter complete
  with absolute images; breadcrumb JSON-LD on services/blog indexes +
  all detail pages; `/privacy` + `/terms` restored (lost from tree) with
  footer legal links + sitemap entries; `robots.ts` disallows `/portal/`
  (demo, page-level noindex kept); sitemap 87 URLs, lastModified
  2026-10-08; `public/.htaccess` restored (HTTPS force, canonical
  non-www host, asset caching); GSC verification meta placeholder added
  (real token = owner TODO, T10); contact page split so it can export
  metadata (form → `ContactForm.tsx`). Verified on production build:
  0 issues, 0 duplicate titles, 0 broken links, all images resolve.
  No fake reviews/ratings, no keyword stuffing, no invented stats.

- 2026-09: Apple-style Next.js 14 rebuild of bridgingfx.net launched
  (33 services, platforms, CRM, prop firms, packages, company
  formation, about, blog, FAQ, contact, portal demo).
- Content data layer: all copy in `src/data/*.ts` (`CONTENT_GUIDE.md`).
- Honest-content pass: removed unverified claims, anonymous-only
  testimonials, `sample: true` blog flag (`b70a714`).
- SEO/GEO infra: sitemap.ts, robots.ts, canonicals, JSON-LD, FAQ schema,
  OG tags (`8ba189b`).
- cPanel auto-deploy on push to `main` via `deploy-cpanel.yml`
  (`db1ce18`); excludes `/brixchat/` so Brix Chat is never wiped
  (`a9e935b`/`4784f00`, merged `a2bd634`).
- QA compliance: privacy/terms pages, HTTPS htaccess, meta titles,
  footer legal links, contrast fixes (`d68b59d`).
- Blog pipeline: 16 + 4 articles (UAE forex regulation, broker pricing,
  broker risk, lead generation) (`8c386d5`, `330b035`).
- Expo-grade polish: preloader, back-to-top, marquee, portal login
  glow-up, package quiz/comparison, product catalog (`d196e23`,
  `947d61f`).
- Image overhaul: 50 dark-fintech visuals + Leads category (`6cd6506`).
- AI context files added (`docs/PRD/ARCHITECTURE/RULES/DESIGN/TASKS/
  MEMORY.md`, 2026-10-08).

## In progress

- Contact details: phone/WhatsApp/address marked confirmed in
  `site.ts` (2026-09-23) but `CONTACT_TODO.md` still shows placeholders;
  email + socials unverified. Awaiting owner reconciliation (T1).

## Next

- Portal backend decision (Supabase+Stripe notes vs PHP+MySQL rule).
- Typography decision (Inter vs Apple stack). README deploy-section
  fix. Blog real-content confirmation. Newsletter/brochure decisions.
- 20-point SEO sweep baseline audit (owner 2026-10-08).
- (Full list: `docs/TASKS.md`.)

## Standing notes

- Same logo/services/details as bridgingfx.net; "same to same".
- Deploys to cPanel (static export `out/`); not Vercel.
- `PORTAL_BACKEND_NOTES.md` is a plan, not a decision — never start
  backend work without owner sign-off.
