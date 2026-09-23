/**
 * BridgingFX Client Portal — data layer (DEMO MODE).
 *
 * Single-module store with a clean interface. All persistence is localStorage
 * today; swapping to Supabase later = reimplementing the functions below
 * against the Supabase client (see PORTAL_BACKEND_NOTES.md). Nothing outside
 * this file touches localStorage keys directly.
 */

export type PortalUser = {
  id: string;
  name: string;
  email: string;
  company: string;
  createdAt: string;
};

export type DocStatus = "uploaded" | "review" | "verified";

export type PortalDocument = {
  id: string;
  name: string;
  size: number;
  mime: string;
  category: string;
  status: DocStatus;
  uploadedAt: string;
};

export type OrderStatus = "received" | "progress" | "review" | "delivered";
export type PaymentMethod = "card" | "crypto" | "bank";
export type PaymentStatus = "unpaid" | "pending" | "paid";

export type PortalOrder = {
  ref: string;
  kind: "service" | "package";
  itemSlug: string;
  itemName: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: PaymentMethod | null;
  createdAt: string;
  updatedAt: string;
  timeline: { status: OrderStatus; at: string; note: string }[];
};

export const ORDER_STEPS: { key: OrderStatus; label: string; blurb: string }[] = [
  { key: "received", label: "Received", blurb: "Your request is with our team." },
  { key: "progress", label: "In progress", blurb: "We're building / configuring now." },
  { key: "review", label: "Under review", blurb: "Quality checks and your approval." },
  { key: "delivered", label: "Delivered", blurb: "Live and handed over to you." },
];

export const DOC_CATEGORIES = [
  "Company documents",
  "ID / KYC",
  "License & compliance",
  "Banking / PSP",
  "Branding assets",
  "Other",
] as const;

/* ---------------- storage helpers ---------------- */

const KEY = "bfx-portal-v1";

type Persisted = {
  users: Record<string, PortalUser>; // keyed by email
  sessionEmail: string | null;
  docs: Record<string, PortalDocument[]>; // keyed by user id
  orders: Record<string, PortalOrder[]>; // keyed by user id
};

function emptyDB(): Persisted {
  return { users: {}, sessionEmail: null, docs: {}, orders: {} };
}

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function load(): Persisted {
  if (!isBrowser()) return emptyDB();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return emptyDB();
    const parsed = JSON.parse(raw) as Partial<Persisted>;
    return { ...emptyDB(), ...parsed };
  } catch {
    return emptyDB();
  }
}

function save(db: Persisted): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(db));
  } catch {
    // storage full / private mode — demo continues in-memory only
  }
}

function uid(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

function orderRef(): string {
  const n = Math.floor(100000 + Math.random() * 900000);
  return `BFX-${new Date().getFullYear()}-${n}`;
}

const now = () => new Date().toISOString();

/* ---------------- auth (demo) ---------------- */

export function getSession(): PortalUser | null {
  const db = load();
  if (!db.sessionEmail) return null;
  return db.users[db.sessionEmail] ?? null;
}

/**
 * Demo login: any name + email creates (or resumes) a local session.
 * First login seeds two sample orders so the tracking view feels alive.
 */
export function login(name: string, email: string, company = ""): PortalUser {
  const db = load();
  const cleanEmail = email.trim().toLowerCase();
  let user = db.users[cleanEmail];
  if (!user) {
    user = {
      id: uid("u"),
      name: name.trim(),
      email: cleanEmail,
      company: company.trim(),
      createdAt: now(),
    };
    db.users[cleanEmail] = user;
    // Seed demo orders for a first-time visitor
    db.orders[user.id] = [seedOrder("Prop Firm Launch", "package", "prop-firm-launch", "progress", "paid", "card"), seedOrder("BridgeX CRM Setup", "service", "forex-crm", "received", "unpaid", null)];
    db.docs[user.id] = [];
  }
  db.sessionEmail = cleanEmail;
  save(db);
  return user;
}

function seedOrder(
  itemName: string,
  kind: "service" | "package",
  itemSlug: string,
  status: OrderStatus,
  paymentStatus: PaymentStatus,
  paymentMethod: PaymentMethod | null
): PortalOrder {
  const created = new Date(Date.now() - 2 * 86400000).toISOString();
  const idx = ORDER_STEPS.findIndex((s) => s.key === status);
  const timeline = ORDER_STEPS.slice(0, idx + 1).map((s, i) => ({
    status: s.key,
    at: new Date(new Date(created).getTime() + i * 20 * 3600000).toISOString(),
    note: i === 0 ? "Request received by our team." : ORDER_STEPS[i].blurb,
  }));
  return {
    ref: orderRef(),
    kind,
    itemSlug,
    itemName,
    status,
    paymentStatus,
    paymentMethod,
    createdAt: created,
    updatedAt: now(),
    timeline,
  };
}

export function logout(): void {
  const db = load();
  db.sessionEmail = null;
  save(db);
}

export function updateProfile(patch: Partial<Pick<PortalUser, "name" | "company">>): PortalUser | null {
  const db = load();
  if (!db.sessionEmail || !db.users[db.sessionEmail]) return null;
  const user = { ...db.users[db.sessionEmail], ...patch };
  db.users[db.sessionEmail] = user;
  save(db);
  return user;
}

/* ---------------- documents ---------------- */

function requireUser(): PortalUser {
  const user = getSession();
  if (!user) throw new Error("No portal session — please log in.");
  return user;
}

export function listDocuments(): PortalDocument[] {
  const db = load();
  const user = getSession();
  if (!user) return [];
  return (db.docs[user.id] ?? []).slice().sort((a, b) => (a.uploadedAt < b.uploadedAt ? 1 : -1));
}

export function addDocument(meta: {
  name: string;
  size: number;
  mime: string;
  category: string;
}): PortalDocument {
  const db = load();
  const user = requireUser();
  const doc: PortalDocument = {
    id: uid("d"),
    name: meta.name,
    size: meta.size,
    mime: meta.mime,
    category: meta.category,
    status: "uploaded",
    uploadedAt: now(),
  };
  db.docs[user.id] = [doc, ...(db.docs[user.id] ?? [])];
  save(db);
  return doc;
}

export function removeDocument(id: string): void {
  const db = load();
  const user = requireUser();
  db.docs[user.id] = (db.docs[user.id] ?? []).filter((d) => d.id !== id);
  save(db);
}

/* ---------------- orders ---------------- */

export function createOrder(kind: "service" | "package", itemSlug: string, itemName: string): PortalOrder {
  const db = load();
  const user = requireUser();
  const order: PortalOrder = {
    ref: orderRef(),
    kind,
    itemSlug,
    itemName,
    status: "received",
    paymentStatus: "unpaid",
    paymentMethod: null,
    createdAt: now(),
    updatedAt: now(),
    timeline: [{ status: "received", at: now(), note: "Request received by our team." }],
  };
  db.orders[user.id] = [order, ...(db.orders[user.id] ?? [])];
  save(db);
  return order;
}

export function listOrders(): PortalOrder[] {
  const db = load();
  const user = getSession();
  if (!user) return [];
  return (db.orders[user.id] ?? []).slice().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function getOrder(ref: string): PortalOrder | null {
  return listOrders().find((o) => o.ref === ref) ?? null;
}

/**
 * Demo payment: records the chosen method and marks payment as pending
 * (a real backend would confirm via Stripe webhook → "paid").
 */
export function recordPayment(ref: string, method: PaymentMethod): PortalOrder | null {
  const db = load();
  const user = requireUser();
  const orders = db.orders[user.id] ?? [];
  const order = orders.find((o) => o.ref === ref);
  if (!order) return null;
  order.paymentMethod = method;
  order.paymentStatus = "pending";
  order.updatedAt = now();
  save(db);
  return order;
}

/* ---------------- labels ---------------- */

export const DOC_STATUS_LABEL: Record<DocStatus, string> = {
  uploaded: "Uploaded",
  review: "Under review",
  verified: "Verified",
};

export const PAYMENT_STATUS_LABEL: Record<PaymentStatus, string> = {
  unpaid: "Unpaid",
  pending: "Payment pending",
  paid: "Paid",
};

export function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
