"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SITE } from "@/data/site";
import { PACKAGES } from "@/data/packages";

/**
 * Contact form → client-side mailto (no backend).
 * Mobile-first: single column, 52px+ inputs, labels above fields,
 * everything reachable one-handed.
 *
 * NOTE: phone/email/address/WhatsApp are PLACEHOLDERS — see CONTACT_TODO.md.
 */

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const INTERESTS = [
  "New brokerage launch",
  "White-label platform",
  "Forex CRM (BridgeX)",
  "Prop firm technology",
  "Migration",
  "Marketing & growth",
  "24/7 support",
  "Something else",
  ...PACKAGES.map((p) => `Package: ${p.name}`),
];

export default function ContactForm() {
  // Preselect when arriving from /packages?package=<slug>
  const searchParams = useSearchParams();
  const matchedPkg = PACKAGES.find((p) => slugify(p.name) === searchParams.get("package")) ?? null;

  const [form, setForm] = useState(() => ({
    name: "",
    email: "",
    interest: matchedPkg ? `Package: ${matchedPkg.name}` : INTERESTS[0],
    message: matchedPkg
      ? `I'm interested in the ${matchedPkg.name} package. Please send me the full scope, setup timeline, and first-year pricing.`
      : "",
  }));

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Website enquiry — ${form.interest} — ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nInterested in: ${form.interest}\n\n${form.message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputCls =
    "w-full min-h-[52px] rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-base text-white placeholder:text-slate-500 outline-none transition-colors focus:border-fx-orange/60 focus:bg-white/[0.06]";

  return (
    <>
      {matchedPkg && (
        <div className="mb-5 rounded-2xl border border-fx-orange/30 bg-fx-orange/10 px-5 py-4" role="status">
          <p className="text-sm leading-relaxed text-slate-200">
            <span className="font-semibold text-white">You&apos;re enquiring about the {matchedPkg.name}</span>
            <span className="text-slate-400"> ({matchedPkg.tier}). </span>
            The interest and message fields below are prefilled — adjust them before sending.
          </p>
        </div>
      )}
    <form onSubmit={submit} className="glass rounded-[24px] p-6 sm:rounded-[28px] sm:p-9">
      <div className="space-y-5">
        <div>
          <label htmlFor="cf-name" className="mb-2 block text-sm font-semibold text-slate-200">
            Your name
          </label>
          <input
            id="cf-name" required autoComplete="name" placeholder="Jane Cooper"
            value={form.name} onChange={set("name")} className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-2 block text-sm font-semibold text-slate-200">
            Work email
          </label>
          <input
            id="cf-email" required type="email" autoComplete="email" placeholder="jane@company.com"
            value={form.email} onChange={set("email")} className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="cf-interest" className="mb-2 block text-sm font-semibold text-slate-200">
            I&apos;m interested in
          </label>
          <select id="cf-interest" value={form.interest} onChange={set("interest")} className={`${inputCls} appearance-none`}>
            {INTERESTS.map((i) => (
              <option key={i} value={i} className="bg-ink-800">{i}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-message" className="mb-2 block text-sm font-semibold text-slate-200">
            Tell us about your project
          </label>
          <textarea
            id="cf-message" required rows={5}
            placeholder="Where are you headed — new launch, migration, or scale-up? Timelines, target markets, anything that matters."
            value={form.message} onChange={set("message")}
            className={`${inputCls} min-h-[140px] resize-y`}
          />
        </div>
        <button type="submit" className="btn-primary w-full !py-4 !text-base">
          Send enquiry <span aria-hidden="true">→</span>
        </button>
        <p className="text-center text-xs leading-relaxed text-slate-500">
          This opens your email app addressed to {SITE.email}. No data is stored on this site.
        </p>
      </div>
    </form>
    </>
  );
}
