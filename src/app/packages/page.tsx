import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FaqAccordion from "@/components/FaqAccordion";
import PackageQuiz from "@/components/PackageQuiz";
import PackageCompare from "@/components/PackageCompare";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";
import { PACKAGES, UPGRADE_PATH_NOTE } from "@/data/packages";

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const metadata: Metadata = {
  title: "Packages — Launch Your Brokerage at Every Stage",
  description:
    "Three launch packages: Start-Up Accelerator (Entry), Growth Catalyst (Professional, recommended), and Enterprise Institution (Elite). Scale without rebuilding.",
  alternates: { canonical: "https://bridgingfx.net/packages" },
  openGraph: {
    title: "Packages — Launch Your Brokerage | BridgingFX",
    description:
      "Start-Up Accelerator, Growth Catalyst (recommended), Enterprise Institution. Packages for every growth stage.",
    url: "https://bridgingfx.net/packages",
    images: [
      {
        url: "/images/og/og-packages.png",
        width: 2240,
        height: 1120,
        alt: "BridgingFX launch packages for every growth stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packages — Launch Your Brokerage | BridgingFX",
    description:
      "Start-Up Accelerator, Growth Catalyst (recommended), Enterprise Institution. Packages for every growth stage.",
    images: ["/images/og/og-packages.png"],
  },
};

const PKG_FAQS = [
  {
    q: "Can we upgrade from one package to a higher tier later?",
    a: "Yes — that's the design. Start with the Start-Up Accelerator and scale to Growth Catalyst or Enterprise Institution as your brokerage expands. Your technology and liquidity grow seamlessly with your client base; nothing is rebuilt from scratch.",
  },
  {
    q: "What's actually included in the setup?",
    a: "Platform white label, liquidity connectivity, BridgeX CRM access, hosting, client cabinet, and launch assistance — the exact mix depends on the tier. Every package is scoped in writing before you commit.",
  },
  {
    q: "Are there ongoing monthly costs?",
    a: "Yes — platform, liquidity, hosting, and support carry recurring costs that scale with your volumes. We present the full first-year economics transparently in the proposal, so there are no surprises.",
  },
  {
    q: "Do you offer custom packages?",
    a: "Absolutely. The three tiers are starting points; most established brokers end up with a tailored mix. Tell us your model and we'll scope it precisely.",
  },
];

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our packages"
        title={<>Launch packages <span className="gradient-text">for every growth stage.</span></>}
        description="Honest tiers with everything scoped in writing. Start lean, scale without rebuilding — your technology grows with your client base."
        cta={{ label: "Get a tailored quote", href: "/contact" }}
        image={{ src: "/images/pages/packages.webp", alt: "Business team reviewing pricing documents at a table" }}
      />

      {/* Find your fit — interactive quiz */}
      <section className="section-pad !pt-4">
        <div className="container-x">
          <FadeIn className="mx-auto mb-10 max-w-2xl text-center">
            <span className="eyebrow justify-center">Find your fit</span>
            <h2 className="display mt-4 text-3xl leading-[1.08] sm:text-4xl">
              Five questions. <span className="gradient-text">One recommendation.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Tell us where your brokerage stands — we&apos;ll point you at the tier that fits.
            </p>
          </FadeIn>
          <div className="mx-auto max-w-3xl">
            <PackageQuiz />
          </div>
        </div>
      </section>

      <section className="hairline bg-ink-900/40 py-20 sm:py-28">
        <div className="container-x">
          <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow justify-center">The packages</span>
            <h2 className="display mt-4 text-3xl leading-[1.08] sm:text-4xl">
              Honest tiers, <span className="gradient-text">scoped in writing.</span>
            </h2>
          </FadeIn>
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-[28px] p-8 sm:p-9 ${
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
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-fx-orange">{p.tier}</p>
                  <h2 className="display mt-2 text-2xl sm:text-[1.7rem]">{p.name}</h2>
                  <p className="mt-1.5 text-sm text-slate-500">{p.audience}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-400">{p.description}</p>
                  <ul className="mt-7 flex-1 space-y-3.5 border-t border-white/10 pt-7">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[15px] text-slate-300">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint/10 text-xs font-bold text-mint" aria-hidden="true">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?package=${slugify(p.name)}`}
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

          <FadeIn className="mx-auto mt-10 max-w-3xl">
            <div className="glass rounded-[22px] p-6 text-center sm:p-8">
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                <span className="font-semibold text-white">Upgrade path: </span>
                {UPGRADE_PATH_NOTE}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Side-by-side comparison */}
      <section className="section-pad">
        <div className="container-x">
          <FadeIn className="mx-auto mb-10 max-w-2xl text-center">
            <span className="eyebrow justify-center">Side by side</span>
            <h2 className="display mt-4 text-3xl leading-[1.08] sm:text-4xl">
              Compare <span className="gradient-text">every tier.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Platform, liquidity, CRM, onboarding, support — all three packages, one view.
            </p>
          </FadeIn>
          <PackageCompare />
        </div>
      </section>

      <section className="section-pad hairline bg-ink-900/40">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
            <FadeIn>
              <span className="eyebrow">Package FAQ</span>
              <h2 className="display mt-4 text-3xl leading-[1.08] sm:text-4xl">
                Straight <span className="gradient-text">answers.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Pricing, upgrades, and what&apos;s really included.
              </p>
              <Link href="/faq" className="btn-ghost mt-6 !py-3.5">
                All FAQs <span aria-hidden="true">→</span>
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <FaqAccordion faqs={PKG_FAQS} />
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Packages"
        title="Which tier fits your ambition?"
        description="A 30-minute call is all it takes — we'll map your model to the right package and put honest numbers in writing."
        primaryLabel="Talk to us"
      />
    </>
  );
}
