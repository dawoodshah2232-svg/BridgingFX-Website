import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CTABand from "@/components/CTABand";
import JsonLd, { faqJsonLd } from "@/components/JsonLd";
import { FadeIn } from "@/components/Reveal";
import { FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ — Answers About Launching Your Brokerage",
  description:
    "Real answers about white-label timelines, platforms, licensing, BridgeX CRM, migrations, prop firms, and packages — no sales fluff.",
  openGraph: {
    title: "FAQ | BridgingFX",
    description:
      "Real answers about timelines, platforms, licensing, CRM, and packages.",
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQS)} />
      <PageHero
        eyebrow="FAQ"
        title={<>Questions? <span className="gradient-text">Answered.</span></>}
        description="Real answers about timelines, platforms, licensing, and what it actually takes to launch — written by the team that does the work."
      />
      <section className="section-pad !pt-4">
        <div className="container-x max-w-4xl">
          <FadeIn>
            <FaqAccordion faqs={FAQS} />
          </FadeIn>
          <FadeIn className="mt-10 text-center">
            <p className="text-slate-400">
              Still have questions?{" "}
              <a href="/contact" className="font-semibold text-fx-orange hover:underline">
                Talk to an expert →
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
      <CTABand
        eyebrow="FAQ"
        title="Didn't find your answer?"
        description="Ask us directly — a specialist replies, not a bot."
        primaryLabel="Ask a question"
      />
    </>
  );
}
