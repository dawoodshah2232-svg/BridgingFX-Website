import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import Stat from "@/components/Stat";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About — The Team Behind Ambitious Brokerages",
  description:
    "BridgingFX has empowered forex brokers, prop firms, and financial institutions since 2020 with white-label platforms, Forex CRM, and launch-to-scale services.",
  openGraph: {
    title: "About BridgingFX",
    description:
      "Empowering forex brokers, prop firms, and financial institutions since 2020.",
  },
};

const VALUES = [
  {
    t: "Revenue-first thinking",
    d: "Every recommendation is judged by the same order you judge it: revenue potential, user value, reliability — then everything else. Technology that doesn't move your P&L is decoration.",
  },
  {
    t: "Honesty over hype",
    d: "We'll tell you when you don't need a license yet, when paid media won't work in your geo, and when our product isn't the right fit. Short-term candor builds decade-long partnerships.",
  },
  {
    t: "One accountable partner",
    d: "Platforms, CRM, liquidity, marketing, support — designed as one system under one roof. When something needs fixing at 3am, there's exactly one number to call.",
  },
  {
    t: "Built to be outgrown",
    d: "We architect every engagement so your team can eventually run it without us — with documentation, training, and knowledge transfer as standard, not extras.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BridgingFX"
        title={<>The team behind <span className="gradient-text">ambitious brokerages.</span></>}
        description="Since 2020, we've helped forex brokers, prop firms, and financial institutions launch, operate, and scale — with technology and services designed as one system."
      />

      <section className="hairline bg-ink-900/40">
        <div className="container-x grid grid-cols-2 gap-8 py-12 sm:py-14 lg:grid-cols-4">
          <Stat value={2020} label="Founded" sub="Six years in brokerage technology" />
          <Stat value={30} suffix="+" label="Services" sub="The full brokerage stack, one partner" />
          <Stat value={5} label="White-label platforms" sub="cTrader, MT5, Wintrado, Hybrid, TM9" />
          <Stat value={24} suffix="/7" label="Support" sub="Financial specialists, always on" />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <span className="eyebrow">Our story</span>
              <h2 className="display mt-4 text-3xl leading-[1.08] sm:text-4xl">
                Born in brokerage. <span className="gradient-text">Built for its future.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="prose-dark">
                <p>
                  BridgingFX was founded in 2020 on a simple observation: brokerages
                  were buying technology from one vendor, liquidity from another,
                  marketing from a third — and spending their best years integrating
                  the pieces instead of growing the business.
                </p>
                <p>
                  We built the alternative: a single technology partner covering
                  the entire brokerage lifecycle. Company formation and licensing
                  guidance. White-label platforms. A Forex CRM customized around
                  each client. Liquidity, risk, compliance, payments, marketing,
                  and 24/7 support — designed to work as one system from day one.
                </p>
                <p>
                  Today, that system powers brokers, prop firms, and financial
                  institutions launching and scaling across global markets. Our
                  mission hasn&apos;t changed: give ambitious founders
                  institutional-grade capability without institutional complexity —
                  and be the partner they can rely on at 3am as well as at launch.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-pad hairline bg-ink-900/40">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we believe"
            title={<>Principles we <span className="gradient-text">actually operate by.</span></>}
          />
          <Stagger className="mt-12 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2">
            {VALUES.map((v) => (
              <StaggerItem key={v.t}>
                <div className="glass card-hover h-full rounded-[22px] p-7 sm:p-8">
                  <h3 className="display text-xl">{v.t}</h3>
                  <p className="mt-3 leading-relaxed text-slate-400">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Testimonials"
            title={<>Partnerships that <span className="gradient-text">last.</span></>}
          />
          <div className="mt-12 sm:mt-14">
            <Testimonials />
          </div>
          <FadeIn className="mt-10 text-center">
            <Link href="/contact" className="btn-primary !px-8 !py-4">
              Work with us <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTABand
        eyebrow="About us"
        title="Let's build what's next — together."
        description="Whether you're launching your first brokerage or scaling your fifth, we'd be honored to be part of the story."
      />
    </>
  );
}
