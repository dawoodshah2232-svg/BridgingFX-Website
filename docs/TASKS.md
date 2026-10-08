# BridgingFX Website v2 — Tasks

Sequenced from repo state (git log + files). Small, checkable steps.

## Sequenced

- [ ] **T1.** Reconcile contact details with the owner: `src/data/site.ts`
  says phone/WhatsApp/address confirmed 2026-09-23 (`+971 58 543 1107`,
  Al Moosa Business Centre, Dubai) but `CONTACT_TODO.md` still lists
  placeholders; email + all socials are `#`/TODO. — needs owner
- [ ] **T2.** Decide `/portal` backend: `PORTAL_BACKEND_NOTES.md`
  sketches Supabase + Stripe; owner stack rule is MySQL + PHP only.
  Get an owner decision before any backend work; keep the
  `portal-store.ts` swap boundary intact. — needs owner
- [ ] **T3.** Reconcile typography: site uses Inter via `next/font`;
  owner standing rule is the Apple font stack as primary. — needs owner
- [ ] **T4.** Update README: "Deploy (Vercel)" section is stale —
  actual deploy is cPanel (`deploy-cpanel.yml`). — TODO
- [ ] **T5.** Blog: posts are substantive but flagged `sample: true`;
  confirm publishing cadence/topics or replace with real posts. — needs owner
- [ ] **T6.** Newsletter: old site had signup; v2 omits it until an
  email provider is chosen (no fake signup). — needs owner
- [ ] **T7.** Brochure: old site offered a PDF; add the real PDF to
  `public/` and link it when available. — needs owner
- [x] **T8.** Run the 20-point SEO sweep (owner 2026-10-08) as a baseline
  audit on the live site; fix, verify, commit, push. — DONE 2026-10-08
  (commit `seo: apply 20-fix sweep`): all 94 pages verified — unique
  titles ≤60, descriptions ≤160, canonicals, OG complete, 1 H1/page,
  breadcrumbs schema added, /privacy + /terms restored, robots
  disallows /portal, sitemap 87 URLs.
- [ ] **T10.** Google Search Console: replace the placeholder
  `google-site-verification` meta value in `src/app/layout.tsx` with the
  real token from search.google.com/search-console, then request
  indexing + submit `https://bridgingfx.net/sitemap.xml`. — needs owner
  (UI action, cannot be done repo-side)
- [ ] **T11.** Backlink strategy (earn via content only — never buy or
  spam links): publish the 20 in-depth blog articles as linkable assets;
  pitch guest posts to FX-industry publications; list BridgingFX in
  reputable fintech/broker-tech directories; PR around expo presence
  (Trading Expo India/Africa, ProFX events). No link schemes, no paid
  links, no comment spam. — ongoing
- [ ] **T9.** Verify `/portal` robots metadata and demo-mode notices
  stay correct while portal is a demo. — TODO

## Completed (from git history)

- cPanel deploy workflow; `brixchat/` excluded from rsync `--delete`
  (`db1ce18`, `a9e935b`/`4784f00`)
- QA compliance pass: privacy/terms pages, HTTPS htaccess, meta titles,
  footer legal links, contrast fixes (`d68b59d`)
- Honest-content pass: removed unverified marketing claims (`b70a714`);
  softened overstrong claims in Leads copy (`728ea28`)
- Blog: 16 articles + 3 more (UAE forex regulation, broker pricing
  mechanics, broker risk management) (`330b035`, `8c386d5`)
- Image overhaul: 50 premium dark-fintech visuals; Leads category
  imagery (`6cd6506`)
- Expo-grade polish: branded preloader, back-to-top, capabilities
  marquee, portal login glow-up (`d196e23`)
- Package quiz + product-catalog/product pages (`947d61f`)
- Package comparison, package quiz, SEO/GEO infra, UI polish, content
  guide (`8ba189b`)
- Logo sizing/placement iterations; founded-2016 correction across site
  (`ffd5fee`, `83b38ee`, `fd5fe8f`)
- AI context files added (`docs/PRD/ARCHITECTURE/RULES/DESIGN/TASKS/
  MEMORY.md`, 2026-10-08)
