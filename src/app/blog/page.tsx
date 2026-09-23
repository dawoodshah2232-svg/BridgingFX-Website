import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import BlogFilter from "./BlogFilter";
import { POSTS } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog — Brokerage Insights & Industry Analysis",
  description:
    "Editorial insights from the BridgingFX team: launching brokerages, choosing white-label platforms, prop firm technology, and FX industry analysis.",
  openGraph: {
    title: "Blog — Brokerage Insights | BridgingFX",
    description:
      "Launching brokerages, white-label platforms, prop firm tech — editorial insights from BridgingFX.",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Insights from the <span className="gradient-text">front lines.</span></>}
        description="How brokerages actually launch, scale, and win — written by the team that builds the technology."
      />

      <section className="section-pad !pt-4">
        <div className="container-x">
          <BlogFilter posts={POSTS} />
        </div>
      </section>

      <CTABand
        eyebrow="Blog"
        title="Want analysis on your specific model?"
        description="Our strategists write — and advise — on the topics that move brokerage P&L."
        primaryLabel="Talk to a strategist"
      />
    </>
  );
}
