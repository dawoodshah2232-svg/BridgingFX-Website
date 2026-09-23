import Link from "next/link";
import { FadeIn } from "./Reveal";
import { mailtoFor } from "@/data/site";

export default function CTABand({
  eyebrow = "Let's build",
  title = "Ready to re-enter the market looking like the future?",
  description = "Tell us where you're headed — a new launch, a migration, or a scale-up. We'll map the fastest honest path and put it in writing.",
  primaryLabel = "Get a Quote",
  primaryHref = "/contact",
  secondaryLabel = "Book a discovery call",
  secondaryHref,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const secondaryUrl = secondaryHref ?? mailtoFor("Discovery call request — BridgingFX");
  return (
    <section className="section-pad">
      <div className="container-x">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-ink-800 px-6 py-14 text-center shadow-card sm:rounded-[36px] sm:px-12 sm:py-20">
            {/* top accent hairline */}
            <div
              className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-fx-orange/70 to-transparent sm:inset-x-32"
              aria-hidden="true"
            />
            {/* glow orbs — scaled for mobile */}
            <div className="orb left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-fx-orange/25 sm:h-96 sm:w-96" aria-hidden="true" />
            <div className="orb -bottom-24 -right-16 h-56 w-56 bg-amber-400/10 sm:h-72 sm:w-72" aria-hidden="true" />
            <div className="orb -left-20 -top-16 h-48 w-48 bg-blue-600/10" aria-hidden="true" />
            <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
            {/* bottom vignette for depth */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent"
              aria-hidden="true"
            />

            <div className="relative">
              <span className="eyebrow justify-center">{eyebrow}</span>
              <h2 className="display mx-auto mt-4 max-w-2xl text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={primaryHref} className="btn-primary w-full !py-4 sm:w-auto">
                  {primaryLabel}
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={secondaryUrl}
                  className="btn-ghost w-full !py-4 sm:w-auto"
                >
                  {secondaryLabel}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
