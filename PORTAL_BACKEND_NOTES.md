# Client Portal — Backend Notes (for when the owner is ready)

The portal at `/portal` currently runs in **demo mode**: auth is a local
name+email session, documents store metadata in the browser, and payments are
recorded but not processed. Everything lives behind one clean interface —
`src/lib/portal-store.ts` — so going production is a **one-file swap**: reimplement
that module's functions against Supabase (+ Stripe) and nothing else changes.

## What the backend needs

### 1. Auth — Supabase Auth
- Enable Email/Password (and optionally Google OAuth) in the Supabase project.
- Replace `login()` with `supabase.auth.signUp/signInWithPassword`; replace
  `getSession()/logout()` with `supabase.auth.getSession()/signOut()`.
- Keep the `PortalUser` shape; add a `profiles` table keyed by `auth.users.id`
  for `name`, `company`, `createdAt`.

### 2. Tables (Postgres)
```sql
-- profiles: id uuid PK (references auth.users), name text, company text, created_at
-- documents: id uuid PK, user_id uuid FK, name text, size int, mime text,
--            category text, status text ('uploaded'|'review'|'verified'),
--            storage_path text, uploaded_at
-- orders: id uuid PK, ref text UNIQUE (e.g. BFX-2026-482913), user_id uuid FK,
--         kind text ('service'|'package'), item_slug text, item_name text,
--         status text ('received'|'progress'|'review'|'delivered'),
--         payment_status text ('unpaid'|'pending'|'paid'),
--         payment_method text nullable, created_at, updated_at
-- order_events: id uuid PK, order_id uuid FK, status text, note text, at timestamptz
-- payments: id uuid PK, order_id uuid FK, provider text ('stripe'|'crypto'|'bank'),
--           provider_ref text, amount_cents int, currency text, status text, created_at
```
- RLS: users can only read/write their own rows (`auth.uid() = user_id`).
  Staff updates (document verification, order status) via a `service_role` key
  in a small admin API route — never expose it client-side.

### 3. File storage — Supabase Storage
- Private bucket `portal-docs`, path `<user_id>/<doc_id>/<filename>`.
- `addDocument()` uploads the real file, stores `storage_path`, and the UI
  downloads via signed URLs (1-hour expiry) instead of `URL.createObjectURL`.
- 10 MB per-file limit, virus-scan on upload (e.g. Supabase + a scan hook) before
  status can move to `verified`.

### 4. Payments — Stripe (+ crypto/bank rails)
- **Card:** Stripe Checkout or Payment Elements. `recordPayment()` creates a
  PaymentIntent server-side, returns `client_secret`; webhook
  `payment_intent.succeeded` → `orders.payment_status = 'paid'`, insert into
  `payments`, append `order_events` entry.
- **Crypto:** generate a deposit address per order (e.g. via a provider like
  NOWPayments or self-hosted xpub derivation); webhook on confirmations →
  mark paid. Show the address + QR in the checkout step.
- **Bank:** show wire instructions; staff marks paid after receipt upload /
  reconciliation in the admin view.
- Never trust client-side payment state — the webhook is the source of truth.

### 5. Status workflow (staff side)
- Document review queue → `documents.status`: uploaded → review → verified.
- Order pipeline → `orders.status` + `order_events` rows: received → progress
  → review → delivered. A tiny internal admin page (or Supabase dashboard)
  is enough to start.
- Email notifications on each transition (Supabase Auth hooks or a queue).

## Swap checklist
1. `npm i @supabase/supabase-js @supabase/ssr` (+ `stripe` for the webhook route).
2. Add `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` env vars.
3. Rewrite `src/lib/portal-store.ts` functions 1:1 against Supabase (keep all
   exported types identical — the UI components don't change).
4. Add `/api/stripe/webhook` route for payment confirmation.
5. Remove the "Demo mode" notices in `PortalLogin` and `PortalCheckout`.
6. Flip portal `robots` metadata from `noindex` to indexed (optional).

Estimated effort: 1–2 days for a developer familiar with Supabase + Stripe.
