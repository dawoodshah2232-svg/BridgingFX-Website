"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getSession, login } from "@/lib/portal-store";
import { Field, inputCls, PortalCard } from "./ui";

export default function PortalLogin() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (getSession()) router.replace("/portal/dashboard");
  }, [router]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) return setError("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return setError("Please enter a valid email address.");
    setError("");
    login(name, email, company);
    router.push("/portal/dashboard");
  }

  return (
    <div className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="orb left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 bg-fx-orange/20" aria-hidden="true" />
      <div className="container-x relative">
        <div className="mx-auto grid max-w-4xl items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Client portal</span>
            <h1 className="display mt-4 text-4xl leading-[1.06] sm:text-5xl">
              Your services, documents & progress — <span className="gradient-text">in one place.</span>
            </h1>
            <p className="mt-4 leading-relaxed text-slate-400">
              Upload KYC documents, choose services, pay securely, and track every
              order from request to delivery — without a single email thread.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-300">
              {["Upload & manage compliance documents", "Order any service or package in minutes", "Pay by card, crypto, or bank transfer", "Live progress timeline on every order"].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-mint" aria-hidden="true">✓</span> {t}
                </li>
              ))}
            </ul>
            <div className="relative mt-8 hidden overflow-hidden rounded-[24px] lg:block">
              <Image
                src="/images/pages/crm.webp"
                alt="BridgingFX client portal illustration"
                width={800}
                height={450}
                className="h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" aria-hidden="true" />
            </div>
          </div>

          <PortalCard>
            <h2 className="display text-xl">Log in to your portal</h2>
            <p className="mt-1.5 text-sm text-slate-400">
              Demo mode — any name and email creates your local demo session. No password needed yet.
            </p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <Field label="Full name">
                <input
                  className={inputCls}
                  placeholder="Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </Field>
              <Field label="Email address">
                <input
                  className={inputCls}
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  inputMode="email"
                />
              </Field>
              <Field label="Company (optional)">
                <input
                  className={inputCls}
                  placeholder="Morgan FX Ltd"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  autoComplete="organization"
                />
              </Field>
              {error && (
                <p role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2.5 text-sm text-red-300">
                  {error}
                </p>
              )}
              <button type="submit" className="btn-primary w-full !py-4">
                Enter portal <span aria-hidden="true">→</span>
              </button>
              <p className="text-center text-xs leading-relaxed text-slate-500">
                Your demo data stays in this browser only. Real accounts with secure
                login arrive with the production backend.
              </p>
            </form>
          </PortalCard>
        </div>
      </div>
    </div>
  );
}
