"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Stat from "@/components/Stat";
import ServiceIcon from "@/components/ServiceIcon";
import FaqAccordion from "@/components/FaqAccordion";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import { PLATFORMS } from "@/data/platforms";
import { SERVICES } from "@/data/services";
import { PACKAGES, UPGRADE_PATH_NOTE } from "@/data/packages";
import { FAQS } from "@/data/faqs";
import { mailtoFor } from "@/data/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pt-32">
      {/* cinematic backdrop */}
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="orb left-1/2 top-[-10%] h-[380px] w-[380px] -translate-x-1/2 bg-fx-orange/20 sm:h-[560px] sm:w-[560px]" aria-hidden="true" />
      <div className="orb right-[-20%] top-[30%] h-64 w-64 bg-blue-600/10 sm:h-96 sm:w-96" aria-hidden="true" />
      <div className="orb bottom-[-10%] left-[-10%] h-56 w-56 bg-amber-400/10 sm:h-80 sm:w-80" aria-hidden="true" />

      <div className="container-x relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 sm:text-xs">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-fx-orange" aria-hidden="true" />
              Forex technology partner — since 2020
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            className="display mt-6 text-[2.65rem] leading-[1.04] sm:text-6xl lg:text-7xl"
          >
            The technology behind
            <br />
            the world&apos;s <span className="gradient-text">boldest brokerages.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22, ease: EASE }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg lg:text-xl"
          >
            Empowering Forex Brokers, PropFirms, and Financial Institutions —
            white-label platforms, Forex CRM, liquidity, and launch-to-scale
            services. Live in weeks, built to dominate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: EASE }}
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <Link href="/contact" className="btn-primary w-full !px-8 !py-4 !text-base sm:w-auto">
              Start your brokerage
            </Link>
            <Link href="/platforms" className="btn-ghost w-full !px-8 !py-4 !text-base sm:w-auto">
              Explore platforms
            </Link>
          </motion.div>

          {/* platform ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-10 w-full sm:mt-12"
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              White-label platforms, ready to brand
            </p>
            <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
              <div className="flex w-max animate-ticker-scroll gap-3">
                {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
                  <span
                    key={i}
                    className="glass whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold text-slate-200"
                    aria-hidden={i >= PLATFORMS.length}
                  >
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#pillars"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="block h-8 w-[2px] rounded bg-gradient-to-b from-fx-orange to-transparent"
        />
      </motion.a>
    </section>
  );
}

/* ---------------- STATS STRIP ---------------- */
function StatsStrip() {
  return (
    <section className="hairline bg-ink-900/40">
      <div className="container-x grid grid-cols-2 gap-8 py-12 sm:py-14 lg:grid-cols-4">
        <Stat value={2020} label="Founded" sub="Building brokerage technology since 2020" />
        <Stat value={24} suffix="/7" label="Support & monitoring" sub="Real financial specialists, always on" />
        <Stat value={2} suffix="-wk" label="White-label launch" sub="From agreement to live trading" />
        <Stat value={30} suffix="+" label="Services" sub="One partner for the entire brokerage stack" />
      </div>
    </section>
  );
}

/* ---------------- PILLARS ---------------- */
const PILLARS = [
  {
    title: "Company Formation",
    text: "Build your regulated brokerage entity with expert guidance — jurisdiction strategy, registration, and licensing pathways handled end to end.",
    href: "/company-formation",
    cta: "Start your company",
    icon: "filecheck" as const,
  },
  {
    title: "Advanced Technology",
    text: "Power your trading operations with cutting-edge solutions — platforms, CRM, liquidity, and infrastructure engineered for FX.",
    href: "/platforms",
    cta: "See the technology",
    icon: "code" as const,
  },
  {
    title: "Brokerage Solutions",
    text: "Full-suite tools and integrations for modern financial brokers — from risk and compliance to marketing and 24/7 support.",
    href: "/services",
    cta: "View solutions",
    icon: "puzzle" as const,
  },
];

function Pillars() {
  return (
    <section id="pillars" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title={<>Three pillars. One unfair advantage.</>}
          description="Everything a brokerage needs to launch, operate, and scale — designed as one system, not a patchwork of vendors."
        />
        <Stagger className="mt-12 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <StaggerItem key={p.title}>
              <Link
                href={p.href}
                className="glass card-hover group flex h-full flex-col rounded-[24px] p-7 sm:p-8"
              >
                <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-fx-orange/10 p-3.5 text-fx-orange">
                  <ServiceIcon name={p.icon} className="h-7 w-7" />
                </span>
                <h3 className="display text-xl sm:text-2xl">{p.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-400">{p.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fx-orange">
                  {p.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- PLATFORMS SHOWCASE ---------------- */
function PlatformsShowcase() {
  return (
    <section className="section-pad hairline bg-ink-900/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="White-label platforms"
          title={<>Enter the world&apos;s most liquid market <span className="gradient-text">in two weeks.</span></>}
          description="Five proven platform solutions — fully branded, liquidity-connected, and CRM-integrated, delivered by a team that launches brokerages for a living."
        />
        <Stagger className="mt-12 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS.map((p) => (
            <StaggerItem key={p.slug} className={p.slug === "hybrid" ? "md:col-span-2 lg:col-span-1" : ""}>
              <div className="glass card-hover relative flex h-full flex-col overflow-hidden rounded-[24px] p-7 sm:p-8">
                {p.badge && (
                  <span className="absolute right-5 top-5 rounded-full bg-fx-orange/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-fx-orange">
                    {p.badge}
                  </span>
                )}
                <div className="orb -right-12 -top-12 h-40 w-40 bg-fx-orange/10" aria-hidden="true" />
                <h3 className="display relative text-2xl">{p.name}</h3>
                <p className="relative mt-2 text-[15px] font-medium text-slate-300">{p.tagline}</p>
                <div className="relative mt-5 flex flex-1 flex-col gap-4">
                  <ul className="space-y-2.5">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <span className="mt-0.5 text-mint" aria-hidden="true">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Launch: {p.launchTime}
                    </span>
                    <Link
                      href="/platforms"
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-fx-orange"
                      aria-label={`Learn more about ${p.name}`}
                    >
                      Details <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}

          {/* CTA card */}
          <StaggerItem>
            <Link
              href="/platforms"
              className="group flex h-full min-h-[220px] flex-col items-start justify-center rounded-[24px] border border-fx-orange/30 bg-gradient-to-br from-fx-orange/15 to-transparent p-7 transition-all duration-500 hover:border-fx-orange/60 sm:p-8"
            >
              <h3 className="display text-2xl">Not sure which platform fits?</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                Compare all five side by side — and get our honest recommendation for your model.
              </p>
              <span className="btn-primary mt-6 !py-3">
                Compare platforms
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- CRM ---------------- */
const CRM_POINTS = [
  "Lead management — capture, score, and route every prospect",
  "Fund management — deposits, withdrawals & transfers",
  "Account management — live, demo & multi-account control",
  "IB / affiliate system — commissions, sub-IBs & payouts",
  "Documents & compliance — KYC workflows and audit trails",
  "Cloud-hosted or self-hosted — your infrastructure, your rules",
];

function CrmSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="orb left-[-10%] top-[20%] h-72 w-72 bg-fx-orange/10 sm:h-96 sm:w-96" aria-hidden="true" />
      <div className="container-x relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <span className="eyebrow">Forex CRM solution</span>
            <h2 className="display mt-4 text-3xl leading-[1.08] sm:text-4xl lg:text-5xl">
              A CRM <span className="gradient-text">customized around you</span> — not the other way around.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
              BridgeX CRM is one of the most deeply customizable Forex CRMs in the
              industry — built to run your most important functions from a single,
              beautiful command center.
            </p>
            <ul className="mt-7 space-y-3.5">
              {CRM_POINTS.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[15px] text-slate-300 sm:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint/15 text-xs font-bold text-mint" aria-hidden="true">✓</span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/crm" className="btn-primary w-full !py-4 sm:w-auto">
                Explore BridgeX CRM
              </Link>
              <a href={mailtoFor("BridgeX CRM demo request")} className="btn-ghost w-full !py-4 sm:w-auto">
                Request a demo
              </a>
            </div>
          </FadeIn>

          {/* stylized CRM dashboard mock — pure CSS, mobile-safe */}
          <FadeIn delay={0.15}>
            <div className="glass relative overflow-hidden rounded-[24px] p-5 shadow-card sm:rounded-[28px] sm:p-6">
              <div className="orb -right-16 -top-16 h-48 w-48 bg-fx-orange/15" aria-hidden="true" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">BridgeX CRM</p>
                    <p className="display mt-1 text-lg">Operations overview</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-mint/10 px-3 py-1.5 text-xs font-semibold text-mint">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" /> Live
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { k: "Active clients", v: "12,480" },
                    { k: "FTDs today", v: "86" },
                    { k: "Volume (lots)", v: "48.2K" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                      <p className="display text-base sm:text-xl">{s.v}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">{s.k}</p>
                    </div>
                  ))}
                </div>
                {/* bar chart */}
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="mb-3 text-xs uppercase tracking-wider text-slate-500">Deposits — last 12 weeks</p>
                  <div className="flex h-24 items-end gap-1.5 sm:h-28" aria-hidden="true">
                    {[35, 52, 44, 68, 58, 76, 62, 84, 72, 92, 80, 98].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
                        className={`flex-1 rounded-t-md ${i === 11 ? "bg-gradient-to-t from-fx-ember to-amber-400" : "bg-white/10"}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {["IB commissions", "KYC queue"].map((k) => (
                    <div key={k} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                      <span className="text-xs font-medium text-slate-300 sm:text-sm">{k}</span>
                      <span className="text-fx-orange" aria-hidden="true">→</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES PREVIEW ---------------- */
function ServicesPreview() {
  const preview = SERVICES.slice(0, 12);
  return (
    <section className="section-pad hairline bg-ink-900/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our services"
          title={<>Every capability a brokerage needs. <span className="gradient-text">Under one roof.</span></>}
          description="From company formation to 24/7 support — 30+ services designed as one integrated system for brokers, prop firms, and financial institutions."
        />
        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {preview.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="glass card-hover group flex h-full flex-col rounded-[22px] p-6 sm:p-7"
              >
                <span className="mb-5 inline-flex w-fit items-center justify-center rounded-xl bg-white/5 p-3 text-slate-300 transition-colors duration-300 group-hover:bg-fx-orange/15 group-hover:text-fx-orange">
                  <ServiceIcon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="display text-lg">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{s.tagline}</p>
                <span className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-fx-orange">
                  Learn more <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-10 text-center">
          <Link href="/services" className="btn-ghost !px-8 !py-4">
            View all {SERVICES.length} services
            <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------- COMPANY FORMATION STEPS ---------------- */
const STEPS = [
  {
    n: "01",
    title: "Forex company registration",
    text: "In the right jurisdiction for your model — structured for banking, PSPs, and growth from day one.",
  },
  {
    n: "02",
    title: "Modern website development",
    text: "A cinematic, mobile-first website with financial-services design and motion that converts visitors into signups.",
  },
  {
    n: "03",
    title: "PSP integration",
    text: "Visa/Mastercard and local payment methods on favorable terms — deposits that succeed, withdrawals clients trust.",
  },
  {
    n: "04",
    title: "BridgingFX software",
    text: "One of the best Forex platforms, trader's rooms, and CRM systems — configured, integrated, and launched.",
  },
];

function CompanySteps() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Create your company"
          title={<>From idea to live brokerage <span className="gradient-text">in four steps.</span></>}
          description="We've guided founders through this exact journey. Our team runs the entire company-creation process with you — you focus on the vision."
        />
        <div className="relative mt-12 sm:mt-16">
          {/* connector line — desktop only */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-fx-orange/40 to-transparent lg:block" aria-hidden="true" />
          <Stagger className="grid gap-8 sm:gap-6 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <StaggerItem key={s.n}>
                <div className="relative flex flex-col items-start gap-4">
                  <span className="glass relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl">
                    <span className="gradient-text display text-lg">{s.n}</span>
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-fx-orange">
                      Step {i + 1}
                    </p>
                    <h3 className="display mt-1.5 text-lg sm:text-xl">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <FadeIn className="mt-12 text-center">
          <Link href="/company-formation" className="btn-primary !px-8 !py-4">
            Start step one today <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------- WHY ---------------- */
const WHY_POINTS = [
  {
    label: "Client success & growth",
    text: "Dedicated onboarding, training, and 24/7 support — plus the marketing and IB tooling you need to grow volume.",
  },
  {
    label: "Technology reliability",
    text: "Battle-tested infrastructure with proactive monitoring and a support team that responds around the clock.",
  },
  {
    label: "Innovation & customization",
    text: "Every deployment tailored to your brand, workflows, and market — nothing off-the-shelf feeling.",
  },
];

function WhyUs() {
  return (
    <section className="section-pad hairline relative overflow-hidden bg-ink-900/40">
      <div className="orb right-[-10%] top-[10%] h-72 w-72 bg-fx-orange/10 sm:h-96 sm:w-96" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Why BridgingFX"
          title={<>The partner you can <span className="gradient-text">rely on.</span></>}
          description="We combine innovation, technology, and hard-won brokerage expertise to help firms scale faster, smarter, and more efficiently."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5">
          {WHY_POINTS.map((b, i) => (
            <FadeIn key={b.label} delay={i * 0.08}>
              <div className="glass h-full rounded-[20px] p-6 text-left">
                <div className="h-1 w-10 rounded-full bg-gradient-to-r from-fx-ember via-fx-orange to-amber-400" />
                <h3 className="display mt-4 text-base sm:text-lg">{b.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{b.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mx-auto mt-12 grid max-w-4xl gap-4 text-center sm:grid-cols-3 sm:gap-5">
          {[
            { t: "Low startup cost", d: "Turnkey solutions get you to market in weeks — we handle the entire technological heavy lifting." },
            { t: "Real-time oversight", d: "Direct-access management: client activity, volume, and P&L monitored live, all in one place." },
            { t: "Your brand, amplified", d: "Fully customizable front ends and 24/7 customized support with training that ensures a smooth launch." },
          ].map((c) => (
            <div key={c.t} className="glass rounded-[20px] p-6">
              <h3 className="display text-base">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.d}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------- PACKAGES ---------------- */
function Packages() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our packages"
          title={<>Launch packages <span className="gradient-text">for every growth stage.</span></>}
          description="Start lean, scale without rebuilding. Your technology and liquidity grow seamlessly with your client base."
        />
        <Stagger className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-[26px] p-7 sm:p-8 ${
                  p.recommended
                    ? "border border-fx-orange/45 bg-gradient-to-b from-fx-orange/10 to-transparent shadow-glow"
                    : "glass"
                }`}
              >
                {p.recommended && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-fx-orange px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-paper shadow-glow">
                    Recommended
                  </span>
                )}
                <h3 className="display text-xl sm:text-2xl">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold text-fx-orange">{p.tier}</p>
                <p className="mt-1 text-sm text-slate-500">{p.audience}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-400">{p.description}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="mt-0.5 text-mint" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/packages"
                  className={`mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                    p.recommended ? "btn-primary" : "btn-ghost"
                  }`}
                >
                  Choose {p.name}
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-slate-500">
            <span className="font-semibold text-slate-300">Upgrade path: </span>
            {UPGRADE_PATH_NOTE}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------- FAQ TEASER ---------------- */
function FaqTeaser() {
  return (
    <section className="section-pad hairline bg-ink-900/40">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <FadeIn>
            <span className="eyebrow">FAQ</span>
            <h2 className="display mt-4 text-3xl leading-[1.08] sm:text-4xl">
              Questions? <span className="gradient-text">Answered.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Real answers about timelines, platforms, licensing, and what it
              actually takes to launch — no sales fluff.
            </p>
            <Link href="/faq" className="btn-ghost mt-6 !py-3.5">
              View all FAQs <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FaqAccordion faqs={FAQS.slice(0, 5)} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS SECTION ---------------- */
function TestimonialsSection() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What our clients <span className="gradient-text">say about us.</span></>}
        />
        <div className="mt-12 sm:mt-14">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAGE ---------------- */
export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Pillars />
      <PlatformsShowcase />
      <CrmSection />
      <ServicesPreview />
      <CompanySteps />
      <WhyUs />
      <Packages />
      <TestimonialsSection />
      <FaqTeaser />
      <CTABand />
    </>
  );
}
