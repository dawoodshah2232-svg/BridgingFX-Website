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
  title: "Forex CRM Solution — BridgeX CRM",
  description:
    "BridgeX CRM: a fully customized Forex CRM — cloud or self-hosted — with lead, fund & account management, IB/affiliate system, and documents & compliance.",
  openGraph: {
    title: "Forex CRM Solution — BridgeX CRM | BridgingFX",
    description:
      "Fully customized Forex CRM, cloud or self-hosted. Lead, fund & account management, IB/affiliate system, compliance.",
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
    a: "A standard deployment with your branding, platforms, and PSPs connects in 2–3 weeks. Heavily customized enterprise builds are scoped individually.",
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
        title={<>One command center. <span className="gradient-text">Your entire brokerage.</span></>}
        description="BridgeX CRM — fully customized to your operation, cloud-hosted or self-hosted. Leads, funds, accounts, IBs, and compliance, finally in one place."
        cta={{ label: "Request a live demo", href: "/contact" }}
      />

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
                <div className="glass h-full rounded-[24px] p-7 sm:p-8">
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
        title="See your brokerage run from one screen."
        description="A personalized demo on your use case — your platforms, your workflows, your questions answered live."
        primaryLabel="Request a demo"
      />
    </>
  );
}
