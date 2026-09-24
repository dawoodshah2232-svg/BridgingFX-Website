import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";
import { mailtoFor } from "@/data/site";

export const metadata: Metadata = {
  title: "Company Formation — Launch Your Forex Brokerage in 4 Steps",
  description:
    "Forex company registration, modern website development, PSP integration, and BridgingFX software — the complete 4-step journey from idea to live brokerage.",
  openGraph: {
    title: "Company Formation — 4 Steps to Your Brokerage | BridgingFX",
    description:
      "Registration, website, PSP integration, and platform software — the complete company-creation journey.",
  },
};

const STEPS = [
  {
    n: "One",
    title: "Forex company registration",
    d: "In the best jurisdiction for your model — structured for banking, PSP approvals, and credibility from day one. We handle the paperwork, the structuring, and the timeline so you don't learn it the expensive way.",
    points: ["Jurisdiction strategy & comparison", "Incorporation & corporate structuring", "Banking introduction support", "Licensing pathway planning"],
  },
  {
    n: "Two",
    title: "Modern website development",
    d: "A cinematic, mobile-first website with financial-services design, motion, and conversion engineering — the digital front door your brand deserves.",
    points: ["Custom broker website design", "Live quotes & market widgets", "Signup + CRM integration", "SEO architecture built in"],
  },
  {
    n: "Three",
    title: "PSP integration",
    d: "Withdraw and deposit by Visa/Mastercard — plus local methods for your target geos — on favorable terms, with the compliance presentation acquirers require.",
    points: ["Card acquiring setup support", "Multi-PSP orchestration", "Local payment methods", "Reconciliation & reporting"],
  },
  {
    n: "Four",
    title: "BridgingFX software",
    d: "We provide one of the best Forex platforms, trader's rooms, and CRM systems — configured, integrated, and launched as one coherent operation.",
    points: ["White-label platform (your brand)", "Trader's room / client cabinet", "BridgeX CRM configured", "24/7 support from day one"],
  },
];

export default function CompanyFormationPage() {
  return (
    <>
      <PageHero
        eyebrow="Create your company"
        title={<>From founder to brokerage <span className="gradient-text">in four steps.</span></>}
        description="Using the experience of our clients, we guide you through the entire forex company-creation journey. Our professional team assists at every step — you bring the ambition."
        cta={{ label: "Start step one", href: "/contact" }}
        image={{ src: "/images/pages/company-formation.webp", alt: "Dubai marina skyline skyscrapers at dusk" }}
      />

      <section className="section-pad !pt-4">
        <div className="container-x">
          <div className="relative space-y-5 sm:space-y-6">
            {/* vertical connector — desktop */}
            <div className="absolute bottom-10 left-[52px] top-10 hidden w-px bg-gradient-to-b from-fx-orange/50 via-fx-orange/20 to-transparent lg:block" aria-hidden="true" />
            {STEPS.map((s, i) => (
              <FadeIn key={s.n}>
                <article className="glass relative overflow-hidden rounded-[26px] p-7 sm:rounded-[32px] sm:p-10 lg:ml-0">
                  <div className="grid gap-6 lg:grid-cols-[110px_1fr_1fr] lg:gap-10">
                    <div className="flex lg:flex-col items-center gap-4 lg:items-start">
                      <span className="glass flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-3xl lg:h-[104px] lg:w-[104px]">
                        <span className="gradient-text display text-2xl lg:text-4xl">{i + 1}</span>
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.24em] text-fx-orange lg:mt-1">
                        Step {s.n}
                      </span>
                    </div>
                    <div>
                      <h2 className="display text-2xl sm:text-3xl">{s.title}</h2>
                      <p className="mt-3 leading-relaxed text-slate-400">{s.d}</p>
                    </div>
                    <ul className="space-y-3 lg:border-l lg:border-white/10 lg:pl-10">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-[15px] text-slate-300">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fx-orange/15 text-xs font-bold text-fx-orange" aria-hidden="true">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad hairline bg-ink-900/40">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why founders choose us"
            title={<>You bring the vision. <span className="gradient-text">We bring the machine.</span></>}
          />
          <Stagger className="mx-auto mt-10 grid max-w-5xl gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
            {[
              { t: "One accountable partner", d: "Registration, tech, payments, and launch under one roof — no vendor ping-pong when something needs fixing." },
              { t: "Weeks, not quarters", d: "Parallel workstreams mean your company, website, PSPs, and platform all move at once toward a single go-live date." },
              { t: "Built to scale", d: "Everything is architected for growth — when volume comes, your stack upgrades instead of breaking." },
            ].map((c) => (
              <StaggerItem key={c.t}>
                <div className="glass card-hover h-full rounded-[22px] p-6 sm:p-7">
                  <h3 className="display text-lg">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn className="mt-10 text-center">
            <a href={mailtoFor("Company formation enquiry")} className="btn-primary !px-8 !py-4">
              Begin your company journey <span aria-hidden="true">→</span>
            </a>
          </FadeIn>
        </div>
      </section>

      <CTABand
        eyebrow="Company formation"
        title="Your brokerage starts with one conversation."
        description="Tell us where you want to go — we'll map the jurisdiction, the stack, and the timeline in writing."
        primaryLabel="Start step one"
      />
    </>
  );
}
