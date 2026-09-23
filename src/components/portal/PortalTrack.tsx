"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  listOrders,
  formatDate,
  ORDER_STEPS,
  type PortalOrder,
} from "@/lib/portal-store";
import { OrderChip, PaymentChip, PortalCard } from "./ui";

function Timeline({ order }: { order: PortalOrder }) {
  const currentIdx = ORDER_STEPS.findIndex((s) => s.key === order.status);
  return (
    <ol className="relative ml-2 space-y-0 border-l-2 border-white/10 pl-0">
      {ORDER_STEPS.map((step, i) => {
        const done = i < currentIdx;
        const current = i === currentIdx;
        const entry = order.timeline.find((t) => t.status === step.key);
        return (
          <li key={step.key} className="relative pb-8 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute -left-[9px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                done
                  ? "border-emerald-400 bg-emerald-400"
                  : current
                    ? "border-fx-orange bg-fx-orange shadow-glow"
                    : "border-white/20 bg-ink-900"
              }`}
            >
              {done && (
                <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 fill-ink-950" aria-hidden="true">
                  <path d="M4.2 7.4 1.6 4.8l1-1 1.6 1.6 3.2-3.2 1 1z" />
                </svg>
              )}
            </span>
            <p className={`display text-[15px] ${current ? "text-white" : done ? "text-slate-200" : "text-slate-500"}`}>
              {step.label}
              {current && (
                <span className="ml-2 rounded-full bg-fx-orange/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-fx-orange">
                  Current
                </span>
              )}
            </p>
            <p className="mt-0.5 text-sm text-slate-400">
              {entry ? entry.note : step.blurb}
            </p>
            {entry && (
              <p className="mt-1 text-xs text-slate-500">{formatDate(entry.at)}</p>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default function PortalTrack() {
  const [orders, setOrders] = useState<PortalOrder[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const list = listOrders();
    setOrders(list);
    if (list.length > 0) setSelected(list[0].ref);
  }, []);

  const order = orders.find((o) => o.ref === selected) ?? null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="display text-lg">Track your orders</h2>
        <p className="mt-1 text-sm text-slate-400">
          Every service and package moves through the same four stages — watch it happen live.
        </p>
      </div>

      {orders.length === 0 ? (
        <PortalCard>
          <p className="text-sm text-slate-400">
            No orders yet.{" "}
            <Link href="/portal/services" className="font-semibold text-fx-orange">
              Choose a service →
            </Link>
          </p>
        </PortalCard>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Order list */}
          <div className="space-y-3">
            {orders.map((o) => {
              const active = o.ref === selected;
              return (
                <button
                  key={o.ref}
                  onClick={() => setSelected(o.ref)}
                  aria-pressed={active}
                  className={`glass w-full rounded-[18px] p-5 text-left transition-all ${
                    active ? "border-fx-orange/60 shadow-glow" : "border-transparent hover:border-white/15"
                  }`}
                  style={active ? { borderWidth: 1, borderStyle: "solid" } : undefined}
                >
                  <p className="display text-[15px]">{o.itemName}</p>
                  <p className="mt-0.5 font-mono text-xs text-slate-500">{o.ref}</p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    <OrderChip status={o.status} />
                    <PaymentChip status={o.paymentStatus} />
                  </div>
                  {o.paymentStatus === "unpaid" && (
                    <Link
                      href={`/portal/checkout?order=${encodeURIComponent(o.ref)}`}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-3 inline-block text-sm font-semibold text-fx-orange"
                    >
                      Pay now →
                    </Link>
                  )}
                </button>
              );
            })}
          </div>

          {/* Timeline detail */}
          {order && (
            <PortalCard>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="display text-lg">{order.itemName}</h3>
                  <p className="mt-0.5 font-mono text-xs text-slate-500">
                    {order.ref} · ordered {formatDate(order.createdAt)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <OrderChip status={order.status} />
                  <PaymentChip status={order.paymentStatus} />
                </div>
              </div>
              <div className="mt-8">
                <Timeline order={order} />
              </div>
              <p className="mt-6 rounded-xl bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-slate-500">
                Questions about this order? Reply anytime — your dedicated manager sees the same timeline you do.
              </p>
            </PortalCard>
          )}
        </div>
      )}
    </div>
  );
}
