# BridgingFX Website v2 — Coding Rules

AI agents working in this repo must follow these. Owner standing rules
apply on top.

## Stack (locked)

- Next.js 14 (App Router) + TypeScript + Tailwind CSS 3 + Framer Motion.
- Static export only: `npm run build` must finish with zero errors and
  "Compiled successfully".
- **No backend.** If the `/portal` backend ever lands, the owner's stack
  rule is **MySQL + PHP only** (cPanel) — the current
  `PORTAL_BACKEND_NOTES.md` sketches Supabase + Stripe, which conflicts
  with that rule. **Do not implement a backend without an owner decision
  reconciling the two.** (`portal-store.ts` is the single swap boundary.)
- Content edits go in `src/data/*.ts` — never hardcode copy in components.

## Conventions (from README / CONTENT_GUIDE)

- Logo: official `public/logo.png` (157×51) via `components/Logo.tsx`;
  dark theme shows it raw; light theme seats it in a dark rounded
  container (`logo-dark.jpg`). Never replace without owner approval.
- Every image in a data file needs descriptive `imageAlt`/`coverAlt`.
- Keep filenames when replacing images — no code changes needed.
- Blog covers: 1200×675 `.webp` in `public/images/blog/`.
- One H1 per page; logical H1→H2→H3; meta titles ≤60 chars; canonicals;
  sitemap/robots/JSON-LD via the code in `src/app/`.

## Content honesty (enforced)

- Never add client counts, awards, ratings, or percentages about
  BridgingFX; never name clients. Anonymous role labels OK.
- Testimonials: anonymous only (`src/data/testimonials.ts`).
- Blog posts without owner sign-off stay flagged `sample: true`.
- No newsletter signup or brochure download until real ones exist.

## Must do

- `git fetch origin` + pull latest `main` before starting any work.
- After editing: `npm run build` (zero errors), `git diff --check`;
  report whether safe to deploy. Never claim success before verifying.
- Preserve working functionality; never reset/destroy work without
  explicit approval.
- Update `docs/TASKS.md` and `docs/MEMORY.md` as work completes.

## Must NOT do

- Never force-push; never `git reset --hard` without explicit approval.
- Never commit other people's uncommitted changes; only `git add` what
  the task owns.
- Never invent stats, testimonials, prizes, or contact details.
- Never put secrets in commits.
- Never present `CONTACT_TODO.md` placeholders as real contact details.
