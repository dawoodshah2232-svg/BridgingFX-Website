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
  title: "Leads — FX Lead Generation, Nurturing & Sales Stack | BridgingFX",
  description:
    "The complete leads engine for brokerages: verified FX leads data, lead management CRM, sales pipeline CRM, nurturing automation, campaign manager, email & SMS marketing, and landing page builder.",
  openGraph: {
    title: "Leads — FX Lead Generation, Nurturing & Sales Stack | BridgingFX",
    description:
      "Verified FX leads, lead CRM, sales pipeline, nurturing automation, campaigns, email & SMS, landing pages — one growth stack.",
  },
};

const STACK = [
  {
    slug: "fx-leads",
    t: "FX Leads",
    d: "Premium, verified, high-intent trader and investor leads — exclusive to you, delivered straight into your CRM.",
  },
  {
    slug: "lead-management-crm",
    t: "Lead Management CRM",
    d: "Capture every prospect from every channel, score by intent, and route to the right salesperson automatically.",
  },
  {
    slug: "sales-pipeline-crm",
    t: "Sales Pipeline CRM",
    d: "A visual deal board built for brokerage sales — from first contact to first deposit, with live forecasting.",
  },
  {
    slug: "lead-nurturing",
    t: "Lead Nurturing Automation",
    d: "Behavior-triggered journeys across email, SMS, and WhatsApp — registration follow-ups, no-deposit reminders, win-back.",
  },
  {
    slug: "campaign-manager",
    t: "Campaign Manager",
    d: "Plan and launch multi-channel campaigns with audience segmentation and revenue-level attribution.",
  },
  {
    slug: "email-sms-marketing",
    t: "Email & SMS Marketing",
    d: "High-volume messaging with dedicated deliverability infrastructure and compliance guardrails built in.",
  },
  {
    slug: "landing-page-builder",
    t: "Landing Page Builder",
    d: "High-converting campaign pages in hours — broker templates, A/B testing, forms wired to your CRM.",
  },
];

const FAQS = [
  {
    q: "Do we need the whole stack, or can we start with one piece?",
    a: "Start anywhere. Many brokers begin with FX Leads data or the Lead Management CRM, then add nurturing and pipeline as volume grows. Every piece works standalone and connects when you're ready.",
  },
  {
    q: "Does the leads stack integrate with our existing CRM?",
    a: "Yes — leads, stages, and campaign data sync both ways with major forex CRMs via API, so nothing lives in a silo.",
  },
  {
    q: "Are the FX leads exclusive?",
    a: "Yes. Premium leads are sold to one client only — never shared lists, never recycled databases.",
  },
  {
    q: "Is your marketing data compliant?",
    a: "All lead sources follow GDPR and financial marketing regulations, with consent tracking, opt-outs, and source documentation available on request.",
  },
];

export default function LeadsPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          url: `${SITE.url}/leads`,
          name: "BridgingFX Leads — FX Lead Generation & Sales Stack",
          description:
            "Verified FX leads data, lead management CRM, sales pipeline CRM, nurturing automation, campaign manager, email & SMS marketing, and landing page builder for brokerages.",
        })}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <PageHero
        eyebrow="Leads & growth"
        badge="The growth engine behind funded accounts"
        title={<>Leads in. <span className="gradient-text">Funded accounts out.</span></>}
        description="The complete leads stack for brokerages: verified FX lead data, capture and routing, sales pipelines, nurturing automation, campaigns, and landing pages — every stage from first click to first deposit, in one system."
        cta={{ label: "Fill my pipeline", href: "/contact" }}
        image={{ src: "/images/pages/leads.webp", alt: "Sales team working leads together in a modern office" }}
      />

      {/* The stack */}
      <section className="section-pad !pt-4">
        <div className="container-x">
          <SectionHeading
            eyebrow="The leads engine"
            title={<>One stack, <span className="gradient-text">every stage of the funnel.</span></>}
            description="Attract prospects, capture them instantly, nurture them automatically, and close them systematically. Pick one piece or run the whole engine."
          />
          <Stagger className="mt-12 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {STACK.map((m, i) => (
              <StaggerItem key={m.slug}>
                <Link
                  href={`/services/${m.slug}`}
                  className="glass card-hover block h-full rounded-[22px] p-6 sm:p-7"
                >
                  <span className="gradient-text display text-sm font-bold tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-3 text-lg">{m.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{m.d}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-fx-orange">
                    Explore <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad hairline bg-ink-900/40">
        <div className="container-x">
          <SectionHeading
            eyebrow="How it works"
            title={<>From click to <span className="gradient-text">funded account.</span></>}
          />
          <Stagger className="mx-auto mt-12 grid max-w-5xl gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
            {[
              {
                time: "Stage 01",
                t: "Attract",
                d: "Verified FX lead data plus high-converting landing pages and multi-channel campaigns bring prospects to your door.",
              },
              {
                time: "Stage 02",
                t: "Capture & nurture",
                d: "Every lead is captured, scored, and routed instantly — then nurtured with automated follow-ups until they're ready.",
              },
              {
                time: "Stage 03",
                t: "Convert",
                d: "Your sales team works a live pipeline with full context, stall alerts, and forecasting — closing more, faster.",
              },
            ].map((s) => (
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
          <FadeIn className="mt-10 text-center">
            <a href={mailtoFor("Leads stack demo request")} className="btn-primary !px-8 !py-4">
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
              <span className="eyebrow">Leads FAQ</span>
              <h2 className="display mt-4 text-3xl leading-[1.08] sm:text-4xl">
                Before you <span className="gradient-text">ask.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Straight answers on the leads stack — data, integration, and compliance.
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
        eyebrow="BridgingFX Leads"
        title="Stop losing leads to silence."
        description="Verified data in, funded accounts out. Tell us about your operation and we'll map the right leads stack for your growth targets."
        primaryLabel="Get started now"
      />
    </>
  );
}
