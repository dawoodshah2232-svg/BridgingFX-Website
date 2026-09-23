"use client";

import type { ReactNode } from "react";
import type { DocStatus, OrderStatus, PaymentStatus } from "@/lib/portal-store";
import { DOC_STATUS_LABEL, PAYMENT_STATUS_LABEL, ORDER_STEPS } from "@/lib/portal-store";

const CHIP: Record<string, string> = {
  uploaded: "border-white/15 bg-white/5 text-slate-300",
  review: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  verified: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  received: "border-white/15 bg-white/5 text-slate-300",
  progress: "border-fx-orange/40 bg-fx-orange/10 text-fx-orange",
  delivered: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  unpaid: "border-red-400/30 bg-red-400/10 text-red-300",
  pending: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  paid: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
};

export function StatusChip({ status, label }: { status: string; label?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide ${CHIP[status] ?? CHIP.uploaded}`}
    >
      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {label ?? status}
    </span>
  );
}

export function DocChip({ status }: { status: DocStatus }) {
  return <StatusChip status={status} label={DOC_STATUS_LABEL[status]} />;
}

export function OrderChip({ status }: { status: OrderStatus }) {
  const label = ORDER_STEPS.find((s) => s.key === status)?.label ?? status;
  return <StatusChip status={status} label={label} />;
}

export function PaymentChip({ status }: { status: PaymentStatus }) {
  return <StatusChip status={status} label={PAYMENT_STATUS_LABEL[status]} />;
}

export function PortalCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`glass rounded-[22px] p-6 sm:p-7 ${className}`}>{children}</div>;
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </span>
      {children}
    </label>
  );
}

export const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-slate-500 outline-none transition-colors focus:border-fx-orange/60 focus:bg-white/[0.07]";
