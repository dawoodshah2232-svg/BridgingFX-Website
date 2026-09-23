import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";
import { mailtoFor } from "@/data/site";

export const metadata: Metadata = {
  title: "Prop Firm Technology — Challenges, Evaluation & Payouts",
  description:
    "Complete technology for prop firms: challenge & evaluation engines, real-time risk monitoring, trader dashboards, scaling plans, and automated payouts.",
  openGraph: {
    title: "Prop Firm Technology | BridgingFX",
    description:
      "Challenge engines, real-time risk monitoring, trader dashboards, and payout automation for modern prop firms.",
  },
};

const STACK = [
  {
    t: "Challenge & evaluation engines",
    d: "1-step, 2-step, and instant-funding models with tick-level rule enforcement — profit targets, drawdown limits, consistency rules, and minimum trading days, all bulletproof.",
  },
  {
    t: "Real-time risk monitoring",
    d: "Drawdown breaches, HFT and latency-arbitrage detection, news-trading violations, and cross-account copy patterns — flagged automatically, reviewed by humans.",
  },
  {
    t: "Trader dashboards",
    d: "Progress tracking traders actually trust: targets, drawdown buffers, payout history, and scaling plans in a dashboard worth screenshotting — your best marketing asset.",
  },
  {
    t: "Scaling & payouts",
    d: "Scaling plans, profit splits, and payout scheduling fully automated with audit trails. Payouts arrive on time, every time — the foundation of prop-firm reputation.",
  },
  {
    t: "Anti-cheat infrastructure",
    d: "Immutable audit trails for every rule breach with timestamped evidence. Disputes get resolved with data, not arguments — protecting both you and honest traders.",
  },
  {
    t: "Prop websites & funnels",
    d: "High-converting prop firm websites, challenge configurators, checkout flows, and affiliate systems — the acquisition machine around the technology.",
  },
];

export default function PropFirmsPage() {
  return (
    <>
      <PageHero
        eyebrow="Prop firms"
        title={<>The tech stack behind <span className="gradient-text">prop firms that scale.</span></>}
        description="Evaluation engines, real-time risk monitoring, trader dashboards, and payout automation — the infrastructure trust that turns challenges into a waiting list."
        cta={{ label: "Build my prop firm", href: "/contact" }}
        image={{ src: "/images/pages/prop-firms.webp", alt: "Prop firm evaluation technology illustration" }}
      />

      <section className="section-pad !pt-4">
        <div className="container-x">
          <SectionHeading
            eyebrow="The stack"
            title={<>Purpose-built for the <span className="gradient-text">prop model.</span></>}
            description="Generic brokerage tools duct-taped together is why most prop firms stall. This stack was designed for evaluations at scale."
          />
          <Stagger className="mt-12 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {STACK.map((s, i) => (
              <StaggerItem key={s.t}>
                <div className="glass card-hover h-full rounded-[22px] p-6 sm:p-7">
                  <span className="gradient-text display text-sm font-bold tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-3 text-lg">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad hairline bg-ink-900/40">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <span className="eyebrow">Why it matters</span>
              <h2 className="display mt-4 text-3xl leading-[1.08] sm:text-4xl">
                In prop, <span className="gradient-text">infrastructure is reputation.</span>
              </h2>
              <div className="prose-dark mt-2">
                <p>
                  A single miscalculated drawdown breach or one delayed payout — and
                  social media does the rest. The prop firms winning 2026 share one
                  trait: evaluation infrastructure their traders trust completely.
                </p>
                <p>
                  We also advise on the business model itself: challenge pricing,
                  scaling economics, payout policies, and risk design — because the
                  best technology in the world can&apos;t save unit economics that
                  don&apos;t work.
                </p>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/services/propfirm-tech" className="btn-primary w-full !py-4 sm:w-auto">
                  Prop tech deep-dive
                </Link>
                <a href={mailtoFor("Prop firm technology enquiry")} className="btn-ghost w-full !py-4 sm:w-auto">
                  Talk to a specialist
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="glass rounded-[24px] p-7 sm:p-8">
                <h3 className="display text-xl">What stalls most prop firms</h3>
                <ul className="mt-5 space-y-4">
                  {[
                    "Evaluation tech duct-taped from generic tools",
                    "Manual risk review that collapses under volume",
                    "Dashboards traders don't trust",
                    "Payout processes that slow exactly as the firm grows",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-3 text-[15px] text-slate-300">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-400" aria-hidden="true">✕</span>
                      {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl border border-mint/20 bg-mint/10 p-5">
                  <p className="text-sm leading-relaxed text-slate-300">
                    <span className="font-semibold text-mint">The fix is architectural:</span>{" "}
                    a purpose-built prop stack where evaluation, risk, dashboard, and
                    payouts share one data model. That&apos;s the build we do.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Prop firms"
        title="Launch the prop firm traders trust."
        description="From challenge engine to payout automation — one partner, one data model, zero duct tape."
        primaryLabel="Start my prop firm"
      />
    </>
  );
}
