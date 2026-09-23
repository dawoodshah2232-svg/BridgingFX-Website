"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import { PACKAGES } from "@/data/packages";
import { createOrder } from "@/lib/portal-store";
import { PortalCard } from "./ui";

export default function PortalServices() {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);

  function select(kind: "service" | "package", slug: string, name: string) {
    const key = `${kind}:${slug}`;
    setBusy(key);
    try {
      const order = createOrder(kind, slug, name);
      router.push(`/portal/checkout?order=${encodeURIComponent(order.ref)}`);
    } catch {
      setBusy(null);
    }
  }

  return (
    <div className="space-y-10">
      {/* Packages */}
      <div>
        <h2 className="display text-lg">Launch packages</h2>
        <p className="mt-1 text-sm text-slate-400">End-to-end bundles — pick one and we handle the rest.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {PACKAGES.map((p, i) => {
            const slug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            const key = `package:${slug}`;
            return (
              <PortalCard key={p.name} className="flex h-full flex-col">
                {p.recommended && (
                  <span className="mb-3 inline-flex w-fit items-center rounded-full bg-fx-orange/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-fx-orange">
                    Most popular
                  </span>
                )}
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{p.tier}</p>
                <h3 className="display mt-1 text-lg">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
                <button
                  onClick={() => select("package", slug, p.name)}
                  disabled={busy !== null}
                  className="btn-primary mt-5 w-full !py-3 !text-sm disabled:opacity-60"
                >
                  {busy === key ? "Creating order…" : "Select package"}
                </button>
              </PortalCard>
            );
          })}
        </div>
      </div>

      {/* Services */}
      <div>
        <h2 className="display text-lg">Individual services</h2>
        <p className="mt-1 text-sm text-slate-400">
          Order à la carte — each becomes a tracked order with its own timeline.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const key = `service:${s.slug}`;
            return (
              <PortalCard key={s.slug} className="flex h-full flex-col overflow-hidden !p-0">
                <div className="relative h-32 shrink-0 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    width={600}
                    height={240}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" aria-hidden="true" />
                  <span className="absolute left-4 top-3 rounded-full border border-white/15 bg-ink-950/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-300 backdrop-blur">
                    {s.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="display text-base">{s.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-400">{s.tagline}</p>
                  <button
                    onClick={() => select("service", s.slug, s.title)}
                    disabled={busy !== null}
                    className="btn-ghost mt-4 w-full !py-3 !text-sm disabled:opacity-60"
                  >
                    {busy === key ? "Creating order…" : "Select service"}
                  </button>
                </div>
              </PortalCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
