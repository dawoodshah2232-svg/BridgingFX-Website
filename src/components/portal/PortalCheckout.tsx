"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  getOrder,
  recordPayment,
  formatDate,
  type PaymentMethod,
  type PortalOrder,
} from "@/lib/portal-store";
import { Field, inputCls, PortalCard } from "./ui";

const METHODS: { key: PaymentMethod; t: string; d: string; icon: string }[] = [
  { key: "card", t: "Card", d: "Visa, Mastercard, Amex", icon: "▭" },
  { key: "crypto", t: "Crypto", d: "USDT, BTC, ETH", icon: "₿" },
  { key: "bank", t: "Bank transfer", d: "Wire / SEPA / local", icon: "🏦" },
];

function CheckoutInner() {
  const router = useRouter();
  const params = useSearchParams();
  const ref = params.get("order") ?? "";
  const [order, setOrder] = useState<PortalOrder | null>(null);
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (ref) setOrder(getOrder(ref));
  }, [ref]);

  if (!ref) {
    return (
      <PortalCard className="text-center">
        <p className="text-sm text-slate-400">
          No order selected.{" "}
          <Link href="/portal/services" className="font-semibold text-fx-orange">
            Choose a service first →
          </Link>
        </p>
      </PortalCard>
    );
  }

  if (!order) {
    return (
      <PortalCard>
        <p className="text-sm text-slate-400">Order <span className="font-mono">{ref}</span> not found in this browser session.</p>
        <Link href="/portal/services" className="btn-ghost mt-4 inline-block !py-3 !text-sm">
          Back to services
        </Link>
      </PortalCard>
    );
  }

  function pay() {
    setBusy(true);
    recordPayment(order!.ref, method);
    router.push("/portal/track");
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h2 className="display text-lg">Payment</h2>
        <p className="mt-1 text-sm text-slate-400">
          Order <span className="font-mono font-semibold text-white">{order.ref}</span> · {order.itemName} · created {formatDate(order.createdAt)}
        </p>
        <p className="mt-2 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
          Demo mode — no real charge is made. Payment providers plug in here later.
        </p>
      </div>

      {/* Method selection */}
      <div className="grid gap-3 sm:grid-cols-3">
        {METHODS.map((m) => {
          const active = method === m.key;
          return (
            <button
              key={m.key}
              onClick={() => setMethod(m.key)}
              aria-pressed={active}
              className={`glass rounded-[18px] p-5 text-left transition-all ${
                active ? "border-fx-orange/60 shadow-glow" : "border-transparent hover:border-white/15"
              }`}
              style={active ? { borderWidth: 1, borderStyle: "solid" } : undefined}
            >
              <span className="text-2xl" aria-hidden="true">{m.icon}</span>
              <p className="display mt-2 text-base">{m.t}</p>
              <p className="mt-0.5 text-xs text-slate-500">{m.d}</p>
            </button>
          );
        })}
      </div>

      {/* Method details (demo UI) */}
      <PortalCard>
        {method === "card" && (
          <div className="space-y-4">
            <Field label="Card number">
              <input className={inputCls} placeholder="4242 4242 4242 4242" inputMode="numeric" />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Expiry">
                <input className={inputCls} placeholder="MM / YY" />
              </Field>
              <Field label="CVC">
                <input className={inputCls} placeholder="123" inputMode="numeric" />
              </Field>
            </div>
            <p className="text-xs text-slate-500">Demo fields — nothing is sent anywhere.</p>
          </div>
        )}
        {method === "crypto" && (
          <div className="space-y-3">
            <p className="text-sm leading-relaxed text-slate-400">
              After confirming, you'll receive a deposit address for USDT (TRC-20 / ERC-20), BTC, or ETH,
              and your order moves to <strong className="text-white">payment pending</strong> until the transaction confirms.
            </p>
            <Field label="Preferred currency">
              <select className={`${inputCls} appearance-none`} defaultValue="USDT">
                {["USDT", "BTC", "ETH"].map((c) => (
                  <option key={c} className="bg-ink-900 text-white">{c}</option>
                ))}
              </select>
            </Field>
          </div>
        )}
        {method === "bank" && (
          <div className="space-y-3">
            <p className="text-sm leading-relaxed text-slate-400">
              After confirming, you'll receive our wire instructions (SWIFT / SEPA / local transfer).
              Share the transfer receipt in <Link href="/portal/documents" className="font-semibold text-fx-orange">Documents</Link> to
              speed up reconciliation.
            </p>
          </div>
        )}
        <button onClick={pay} disabled={busy} className="btn-primary mt-6 w-full !py-4 disabled:opacity-60">
          {busy ? "Recording…" : `Confirm — pay with ${METHODS.find((m) => m.key === method)?.t}`}
        </button>
        <p className="mt-3 text-center text-xs text-slate-500">
          Our team confirms every payment manually and invoices you properly. No auto-charging, ever.
        </p>
      </PortalCard>
    </div>
  );
}

export default function PortalCheckout() {
  return (
    <Suspense
      fallback={
        <PortalCard>
          <p className="animate-pulse text-sm text-slate-400">Loading checkout…</p>
        </PortalCard>
      }
    >
      <CheckoutInner />
    </Suspense>
  );
}
