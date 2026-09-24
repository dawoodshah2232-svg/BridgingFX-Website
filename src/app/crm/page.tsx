import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd, { serviceJsonLd, faqJsonLd } from "@/components/JsonLd";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";
import { SITE, mailtoFor } from "@/data/site";

export const metadata: Metadata = {
  title: "Forex CRM Solution — Live in 15 Minutes | BridgeX CRM",
  description:
    "BridgeX CRM: a fully customized Forex CRM — live in as little as 15 minutes if you already have a company. No developers needed, no extra fees. Lead, fund & account management, IB/affiliate system, documents & compliance.",
  openGraph: {
    title: "Forex CRM Solution — Live in 15 Minutes | BridgingFX",
    description:
      "Fully customized Forex CRM, live in 15 minutes. No developers, no extra fees. Lead, fund & account management, IB/affiliate system, compliance.",
  },
};

const MODULES = [
  {
    t: "Lead management",
    d: "Capture every prospect from every channel, score them by intent, and route them to the right salesperson automatically. No lead ever goes cold in a spreadsheet again.",
  },
  {
    t: "Fund management",
    d: "Deposits, withdrawals, transfers, and bonuses with approval workflows, PSP reconciliation, and a complete money trail your finance team will love.",
  },
  {
    t: "Account management",
    d: "Create and manage live, demo, and MAM accounts across platforms from one screen — with group-level configuration and instant provisioning.",
  },
  {
    t: "IB / affiliate system",
    d: "Multi-level partner structures, real-time commission tracking, marketing materials, and automated payouts that keep your best IBs loyal.",
  },
  {
    t: "Documents & compliance",
    d: "KYC document collection, verification workflows, risk scoring, and audit-ready records — onboarding in minutes, regulators satisfied.",
  },
  {
    t: "Reporting & analytics",
    d: "Executive dashboards and operational reports across clients, money, marketing, and partners — one source of truth for the whole business.",
  },
];

const FAQS = [
  {
    q: "Cloud-hosted or self-hosted — which should we choose?",
    a: "Cloud gets you live fastest with zero infrastructure to manage; self-hosted gives you complete data sovereignty on your own servers. BridgeX supports both, and you can migrate between them later. We'll recommend based on your license, team, and scale.",
  },
  {
    q: "Can BridgeX integrate with our trading platform and PSPs?",
    a: "Yes — native integrations with MT4/MT5, cTrader, and major platforms, plus PSP, KYC vendor, and marketing tool connectivity via our integration layer.",
  },
  {
    q: "How customized can the CRM really be?",
    a: "Deeply. Custom fields, workflows, roles, dashboards, client portal branding, and API-level extensibility. If your operation has a quirk, the CRM adapts to it — not the reverse.",
  },
  {
    q: "How long does implementation take?",
    a: "If you already have a company, the standard BridgeX deployment is live in as little as 15 minutes — our team configures your branding, platforms, and PSPs with you, no developers needed and no extra developer fees. Heavily customized enterprise builds are scoped individually.",
  },
];

export default function CrmPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          url: `${SITE.url}/crm`,
          name: "BridgeX Forex CRM Solution",
          description:
            "Fully customized Forex CRM — cloud or self-hosted — with lead, fund and account management, IB/affiliate system, and documents & compliance.",
        })}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <PageHero
        eyebrow="Forex CRM solution"
        badge="Live in 15 minutes — no developers needed"
        title={<>One command center. <span className="gradient-text">Your entire brokerage.</span></>}
        description="BridgeX CRM — fully customized to your operation, cloud-hosted or self-hosted. If you already have a company, you're up and running in as little as 15 minutes: no programmers, no developers, no extra cost — we do everything for you, in minutes."
        cta={{ label: "Get my CRM in 15 minutes", href: "/contact" }}
        image={{ src: "/images/pages/crm.webp", alt: "Person using a laptop with a CRM dashboard in an office" }}
      />

      {/* 15-minute setup */}
      <section className="section-pad !pt-4">
        <div className="container-x">
          <SectionHeading
            eyebrow="Ultra-fast setup"
            title={<>From sign-up to live in <span className="gradient-text">15 minutes.</span></>}
            description="Already have a company? Then there's nothing standing between you and a running CRM. No developers to hire, no code to touch, no extra fees — our team does the entire setup with you, in minutes."
          />
          <Stagger className="mx-auto mt-12 grid max-w-5xl gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
            {[
              {
                time: "Minutes 0–5",
                t: "Tell us about your operation",
                d: "Company details, trading platforms, and payment providers — a short guided form. Zero technical knowledge required.",
              },
              {
                time: "Minutes 5–10",
                t: "We configure everything",
                d: "Our specialists wire up your platforms, liquidity, branding, and user roles while you watch. You don't lift a finger.",
              },
              {
                time: "Minutes 10–15",
                t: "You log in and run",
                d: "A live walkthrough of your command center — leads, funds, IBs, compliance — and your team is operational the same day.",
              },
            ].map((s, i) => (
              <StaggerItem key={s.t}>
                <div className="glass card-hover relative h-full overflow-hidden rounded-[22px] p-6 sm:p-7">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fx-ember via-fx-orange to-amber-400" aria-hidden="true" />
                  <span className="inline-flex items-center rounded-full bg-fx-orange/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-fx-orange">
                    {s.time}
                  </span>
                  <h3 className="display mt-4 text-lg">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-sm leading-relaxed text-slate-400">
              Heavily customized enterprise builds are scoped individually — but the standard
              BridgeX deployment needs <strong className="text-white">no programmers, no developers, and no extra developer fees.</strong> Ever.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad !pt-4">
        <div className="container-x">
          <SectionHeading
            eyebrow="Modules"
            title={<>Everything a brokerage runs on, <span className="gradient-text">in one system.</span></>}
          />
          <Stagger className="mt-12 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m, i) => (
              <StaggerItem key={m.t}>
                <div className="glass card-hover h-full rounded-[22px] p-6 sm:p-7">
                  <span className="gradient-text display text-sm font-bold tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-3 text-lg">{m.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{m.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Hosting choice */}
      <section className="section-pad hairline bg-ink-900/40">
        <div className="container-x">
          <SectionHeading
            eyebrow="Your infrastructure, your rules"
            title={<>Cloud speed or <span className="gradient-text">self-hosted control.</span></>}
            description="Same powerful CRM, two deployment models. Choose what fits your license, team, and risk appetite — switch later if you need to."
          />
          <Stagger className="mx-auto mt-10 grid max-w-4xl gap-5 sm:mt-12 sm:grid-cols-2">
            {[
              {
                t: "Cloud-hosted",
                d: "Live in days. We manage servers, security, backups, and updates — you log in and run your brokerage.",
                points: ["Fastest go-live", "Zero infrastructure to manage", "Automatic updates & backups", "Scales with your growth"],
              },
              {
                t: "Self-hosted",
                d: "Complete data sovereignty. BridgeX runs on your infrastructure, under your security policies and your jurisdiction.",
                points: ["Full data ownership", "Your security perimeter", "Regulatory data residency", "Custom infrastructure control"],
              },
            ].map((h) => (
              <StaggerItem key={h.t}>
                <div className="glass card-hover h-full rounded-[24px] p-7 sm:p-8">
                  <h3 className="display text-xl sm:text-2xl">{h.t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{h.d}</p>
                  <ul className="mt-5 space-y-2.5">
                    {h.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <span className="mt-0.5 text-mint" aria-hidden="true">✓</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn className="mt-10 text-center">
            <a href={mailtoFor("BridgeX CRM demo request")} className="btn-primary !px-8 !py-4">
              Book a personalized demo <span aria-hidden="true">→</span>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
            <FadeIn>
              <span className="eyebrow">CRM FAQ</span>
              <h2 className="display mt-4 text-3xl leading-[1.08] sm:text-4xl">
                Before you <span className="gradient-text">ask.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                The questions every broker asks about BridgeX — answered straight.
              </p>
              <Link href="/faq" className="btn-ghost mt-6 !py-3.5">
                All FAQs <span aria-hidden="true">→</span>
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <FaqAccordion faqs={FAQS} />
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="BridgeX CRM"
        title="Your CRM, live in 15 minutes."
        description="No developers. No extra fees. Just tell us about your operation and our team handles the entire setup with you — in minutes, not weeks."
        primaryLabel="Get started now"
      />
    </>
  );
}
