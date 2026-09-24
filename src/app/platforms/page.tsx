import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";
import { PLATFORMS } from "@/data/platforms";
import { SITE, mailtoFor } from "@/data/site";

export const metadata: Metadata = {
  title: "White-Label Trading Platforms — cTrader, MT5, Wintrado, TM9",
  description:
    "Launch your brokerage in 2 weeks with a white-label trading platform: cTrader, Wintrado, Hybrid, TM9, or MT4/MT5 — fully branded, liquidity-connected, CRM-integrated.",
  openGraph: {
    title: "White-Label Trading Platforms | BridgingFX",
    description:
      "cTrader, Wintrado, Hybrid, TM9, MT4/MT5 — fully branded white-label platforms. Launch in 2 weeks.",
  },
};

const COMPARISON = [
  { label: "Best for", ctrader: "Sophisticated traders", wintrado: "Brand differentiation", hybrid: "Maximum acquisition", tm9: "Institutional flow", mt: "Affiliate & EA scale" },
  { label: "Launch time", ctrader: "2 weeks", wintrado: "2 weeks", hybrid: "2–3 weeks", tm9: "3–4 weeks", mt: "2–4 weeks" },
  { label: "Mobile", ctrader: "✓", wintrado: "✓", hybrid: "✓", tm9: "✓", mt: "✓" },
  { label: "Algo trading", ctrader: "cAlgo", wintrado: "Built-in", hybrid: "cAlgo + built-in", tm9: "FIX API", mt: "EAs (MQL)" },
  { label: "Copy trading", ctrader: "Native ecosystem", wintrado: "Available", hybrid: "Available", tm9: "Custom", mt: "Via plugins" },
];

export default function PlatformsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "BridgingFX White-Label Trading Platforms",
          itemListElement: PLATFORMS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.name,
            description: p.tagline,
            url: `${SITE.url}/platforms`,
          })),
        }}
      />

      <PageHero
        eyebrow="White-label solution"
        title={<>Enter the most liquid market <span className="gradient-text">within 2 weeks.</span></>}
        description="Five platform solutions — designed, branded, and launched for brokers and white labels to own their identity in the online forex industry. Low startup cost, full customization, 24/7 support."
        cta={{ label: "Launch your platform", href: "/contact" }}
        image={{ src: "/images/pages/platforms.webp", alt: "Wall of financial trading screens in a dark office" }}
      />

      {/* Platform cards */}
      <section className="section-pad !pt-4">
        <div className="container-x space-y-5 sm:space-y-6">
          {PLATFORMS.map((p, i) => (
            <FadeIn key={p.slug}>
              <article
                className={`glass relative overflow-hidden rounded-[26px] p-7 sm:rounded-[32px] sm:p-10 lg:p-12 ${
                  i % 2 === 1 ? "lg:ml-12" : "lg:mr-12"
                }`}
              >
                <div className="orb -right-20 -top-20 h-56 w-56 bg-fx-orange/10" aria-hidden="true" />
                {p.badge && (
                  <span className="mb-4 inline-block rounded-full bg-fx-orange/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-fx-orange">
                    {p.badge}
                  </span>
                )}
                <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
                  <div>
                    <h2 className="display text-3xl sm:text-4xl">{p.name}</h2>
                    <p className="mt-2 text-lg font-medium text-slate-300">{p.tagline}</p>
                    {p.description.map((d, di) => (
                      <p key={di} className="mt-4 leading-relaxed text-slate-400">{d}</p>
                    ))}
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
                        Ideal for: {p.idealFor}
                      </span>
                      <span className="rounded-full bg-fx-orange/10 px-4 py-2 text-xs font-semibold text-fx-orange">
                        Launch in {p.launchTime}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                      Included
                    </h3>
                    <ul className="space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[15px] text-slate-300">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint/10 text-xs font-bold text-mint" aria-hidden="true">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={mailtoFor(`${p.name} white-label enquiry`)}
                      className="btn-primary mt-7 w-full !py-3.5 sm:w-auto"
                    >
                      Enquire about {p.name}
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Comparison table — horizontally scrollable on mobile, no page overflow */}
      <section className="section-pad hairline bg-ink-900/40">
        <div className="container-x">
          <SectionHeading
            eyebrow="Compare"
            title={<>Choose with <span className="gradient-text">confidence.</span></>}
            description="An honest side-by-side. Still unsure? We'll recommend based on your model — not our margins."
          />
          <FadeIn className="mt-10 sm:mt-12">
            <div className="overflow-x-auto rounded-[24px] border border-white/10">
              <table className="w-full min-w-[720px] border-collapse bg-white/[0.02] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 font-semibold text-slate-500 sm:p-5" scope="col"> </th>
                    {["cTrader", "Wintrado", "Hybrid", "TM9", "MT4/MT5"].map((h) => (
                      <th key={h} className="p-4 font-semibold text-white sm:p-5" scope="col">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.label} className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/[0.03]">
                      <th className="p-4 font-medium text-slate-400 sm:p-5" scope="row">{row.label}</th>
                      {[row.ctrader, row.wintrado, row.hybrid, row.tm9, row.mt].map((c, ci) => (
                        <td key={ci} className="p-4 text-slate-300 sm:p-5">{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-center text-xs text-slate-500 sm:hidden">Swipe sideways to compare →</p>
          </FadeIn>
        </div>
      </section>

      {/* Why white label with us */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why white-label with BridgingFX"
            title={<>More than a license. <span className="gradient-text">A launch partner.</span></>}
          />
          <Stagger className="mx-auto mt-10 grid max-w-5xl gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
            {[
              { t: "Low startup cost", d: "Turnkey solution gets you to market in weeks. We handle the entire technological heavy lifting of your white label." },
              { t: "Monitor your business", d: "Direct-access management to view client activity, volume, and P&L in real time — total operational visibility." },
              { t: "Enhance your brand", d: "Fully customize the look and feel of the front end. Your clients trade on your platform, with your identity." },
              { t: "Customized support", d: "All the support and training you need to run smoothly from launch — plus 24/7 customer support that never sleeps." },
            ].map((c) => (
              <StaggerItem key={c.t}>
                <div className="glass card-hover h-full rounded-[22px] p-6 sm:p-7">
                  <h3 className="display text-lg">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand
        eyebrow="White-label"
        title="Your platform. Your brand. Live in 2 weeks."
        description="Tell us your target market and we'll recommend the platform, liquidity tier, and launch plan — in writing, with honest pricing."
        primaryLabel="Start my white label"
      />
    </>
  );
}
