import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { Stagger, StaggerItem } from "@/components/Reveal";
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
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <StaggerItem key={p.slug} className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="glass card-hover group flex h-full flex-col overflow-hidden rounded-[24px]"
                >
                  {/* article cover */}
                  <div className="relative h-44 overflow-hidden sm:h-48">
                    <Image
                      src={p.cover}
                      alt={p.coverAlt}
                      width={800}
                      height={450}
                      sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="rounded-full bg-fx-orange/10 px-3 py-1 font-semibold text-fx-orange">
                        {p.category}
                      </span>
                      {p.sample && (
                        <span className="rounded-full bg-white/5 px-3 py-1 font-semibold text-slate-400">
                          Sample article
                        </span>
                      )}
                      <span className="text-slate-500">{p.readTime}</span>
                    </div>
                    <h2 className="display mt-3 text-xl leading-snug transition-colors group-hover:text-white">
                      {p.title}
                    </h2>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-400">{p.excerpt}</p>
                    <span className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-fx-orange">
                      Read article <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
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
