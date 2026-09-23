# CONTACT_TODO — details the owner must confirm

The site ships with **clearly-marked placeholder** contact details because the real
ones were not verified. Everything lives in one file: `src/data/site.ts`
(exported as `SITE`). Update the values there — every page, the footer, the
contact form, and the mobile CTA bar pick them up automatically.

## Confirm / provide

| # | Field | Current placeholder | Where it's used |
|---|-------|---------------------|-----------------|
| 1 | **Phone** | `+000 000 0000` | Footer, contact page |
| 2 | **Email** | `info@bridgingfx.net` | Footer, contact page, all `mailto:` CTAs, contact form destination |
| 3 | **Office address** | `Address to be confirmed` | Footer, contact page |
| 4 | **WhatsApp number** | `+000 000 0000` | Sticky mobile CTA bar (`MobileCTABar.tsx`), contact page — opens `https://wa.me/<number>` |
| 5 | **Social links** | all `#` | Footer icons: X, LinkedIn, Instagram, Facebook, YouTube (+ Telegram field exists) |

## Also to decide later

- **Logo pill**: the real `public/logo.png` (157×51, light background)
  is seated in a white pill that stays pure white in both themes. If a dark/reversed logo version is
  ever supplied, swap it in `src/components/Logo.tsx` only — one-file change.
- **Blog**: the 3 posts are substantive but marked as sample editorial content
  (`sample: true` in `src/data/posts.ts`). Confirm publishing cadence/topics or
  replace with real posts.
- **Newsletter**: the old site had a newsletter signup; v2 intentionally omits it
  until an email provider is chosen (no fake signup that goes nowhere).
- **Brochure download**: the old site offered a PDF brochure. Add the real PDF to
  `public/` and link it when available.
