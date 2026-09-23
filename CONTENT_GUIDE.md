# CONTENT_GUIDE.md — Updating BridgingFX website content (no code needed)

All website text lives in simple data files under `src/data/`. You never need to
touch components or page layouts — just edit the text in the right file, save,
and the site rebuilds with your changes.

> Rule: keep every claim honest. Never add client counts, awards, ratings,
> percentages about BridgingFX, or named clients. Anonymous role labels
> ("CEO, EU-based brokerage") are fine.

## Which file to edit for what

| I want to change…                        | File                  | What to edit                                  |
|------------------------------------------|-----------------------|-----------------------------------------------|
| Phone, WhatsApp, email, address, socials | `src/data/site.ts`    | The `SITE` object at the top                  |
| Main navigation links                    | `src/data/site.ts`    | `NAV_LINKS`                                   |
| Footer service links                     | `src/data/site.ts`    | `FOOTER_SERVICES`                             |
| A service page (title, text, features, FAQs) | `src/data/services.ts` | Find the block with the service's `slug`   |
| Add a NEW service page                   | `src/data/services.ts` | Copy a full `{ slug, title, … }` block, change the slug/title/text; add a cover image to `public/images/services/` and point `image` at it. The page URL becomes `/services/<your-slug>` automatically |
| Launch packages (names, tiers, features) | `src/data/packages.ts` | The `PACKAGES` array                         |
| Platform cards (cTrader, MT5…)           | `src/data/platforms.ts` | The platform entries                        |
| Blog articles                            | `src/data/posts.ts`   | One block per article: `slug`, `title`, `cover`, `excerpt`, `category`, `tags`, `readTime`, `date`, `intro`, `sections`, `takeaway` |
| Add a NEW blog article                   | `src/data/posts.ts`   | Copy a full article block, write your content, add a cover image to `public/images/blog/` (1200×675 `.webp` works best) and point `cover` at it. URL becomes `/blog/<your-slug>` automatically |
| FAQ page questions                       | `src/data/faqs.ts`    | The FAQ entries                               |
| Testimonials                             | `src/data/testimonials.ts` | Anonymous quotes only (role like "Founder, Middle East prop firm") — no names, no star ratings |

## Images

- All images live in `public/images/`: `blog/`, `home/`, `pages/`, `services/`, `og/`.
- Every image referenced in a data file also needs a descriptive `imageAlt` /
  `coverAlt` (used for accessibility and SEO) — write what the image shows.
- Keep the same filenames when replacing an image so no code changes are needed.
- The logo is `public/logo-dark.jpg` — never replace it with a different design
  without the owner's approval.

## How changes go live

1. Edit the data file and save.
2. In the repo folder, run:
   - `npm run build` — must finish with "Compiled successfully".
   - `git add -A && git commit -m "Describe what you changed" && git push origin main`
3. Rebuild the preview site (GitHub Pages) — ask your AI assistant, or follow the
   preview steps in `README.md`.

## Quick checklist before publishing text

- [ ] No invented numbers about BridgingFX (clients, %, awards, ratings).
- [ ] Phone/WhatsApp/email shown are the real confirmed ones.
- [ ] Every new image has descriptive alt text.
- [ ] Links mentioned in text (`/contact`, `/packages`, service pages) exist.
