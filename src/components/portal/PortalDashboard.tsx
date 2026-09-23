"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  listOrders,
  listDocuments,
  formatDate,
  type PortalOrder,
  type PortalDocument,
} from "@/lib/portal-store";
import { OrderChip, PaymentChip, PortalCard } from "./ui";

const ACTIONS = [
  { t: "Upload documents", d: "KYC, company & compliance files", href: "/portal/documents", icon: "⇪" },
  { t: "Choose a service", d: "Browse services & packages", href: "/portal/services", icon: "✦" },
  { t: "Track orders", d: "Live progress timelines", href: "/portal/track", icon: "◉" },
];

export default function PortalDashboard() {
  const [orders, setOrders] = useState<PortalOrder[]>([]);
  const [docs, setDocs] = useState<PortalDocument[]>([]);

  useEffect(() => {
    setOrders(listOrders());
    setDocs(listDocuments());
  }, []);

  const active = orders.filter((o) => o.status !== "delivered");
  const awaitingPayment = orders.filter((o) => o.paymentStatus === "unpaid");

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { n: String(active.length), l: "Active orders", href: "/portal/track" },
          { n: String(docs.length), l: "Documents uploaded", href: "/portal/documents" },
          { n: String(awaitingPayment.length), l: "Awaiting payment", href: "/portal/track" },
        ].map((s) => (
          <Link key={s.l} href={s.href}>
            <PortalCard className="card-hover">
              <p className="gradient-text display text-4xl">{s.n}</p>
              <p className="mt-1 text-sm text-slate-400">{s.l}</p>
            </PortalCard>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="display text-lg">Quick actions</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {ACTIONS.map((a) => (
            <Link key={a.href} href={a.href}>
              <PortalCard className="card-hover group h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fx-orange/15 text-xl text-fx-orange" aria-hidden="true">
                  {a.icon}
                </span>
                <h3 className="display mt-4 text-base">{a.t}</h3>
                <p className="mt-1 text-sm text-slate-400">{a.d}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-fx-orange transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </PortalCard>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent orders */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="display text-lg">Recent orders</h2>
          <Link href="/portal/track" className="text-sm font-semibold text-fx-orange">
            View all →
          </Link>
        </div>
        <div className="mt-4 space-y-3">
          {orders.length === 0 && (
            <PortalCard>
              <p className="text-sm text-slate-400">
                No orders yet —{" "}
                <Link href="/portal/services" className="font-semibold text-fx-orange">
                  choose your first service
                </Link>{" "}
                to get started.
              </p>
            </PortalCard>
          )}
          {orders.slice(0, 3).map((o) => (
            <Link key={o.ref} href="/portal/track">
              <PortalCard className="card-hover flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="display text-base">{o.itemName}</p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {o.ref} · {formatDate(o.createdAt)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <OrderChip status={o.status} />
                  <PaymentChip status={o.paymentStatus} />
                </div>
              </PortalCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
