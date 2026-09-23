import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { Stagger, StaggerItem, FadeIn } from "@/components/Reveal";
import { SERVICES, SERVICES_BY_CATEGORY } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — 33 Forex Brokerage Solutions",
  description:
    "Explore 33 services for forex brokers, prop firms, and financial institutions: white-label platforms, Forex CRM, liquidity, risk, compliance, marketing, and 24/7 support.",
  openGraph: {
    title: "Services — 33 Forex Brokerage Solutions | BridgingFX",
    description:
      "White-label platforms, Forex CRM, liquidity, risk, compliance, marketing, and 24/7 support — every capability a brokerage needs.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Every capability a brokerage needs. <span className="gradient-text">One partner.</span></>}
        description="33 services across technology, growth, operations, compliance, and creative — designed as one integrated system so nothing falls between vendors."
        cta={{ label: "Discuss your project", href: "/contact" }}
      />

      {SERVICES_BY_CATEGORY.map((group, gi) => (
        <section key={group.category} className={`${gi % 2 === 1 ? "hairline bg-ink-900/40" : ""} py-12 sm:py-16 ${gi === 0 ? "!pt-2 sm:!pt-6" : ""}`}>
          <div className="container-x">
            <FadeIn>
              <div className="mb-8 flex items-center gap-4 sm:mb-10">
                <span className="display text-xl sm:text-2xl">{group.category}</span>
                <span className="hairline flex-1" aria-hidden="true" />
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-400">
                  {group.services.length} services
                </span>
              </div>
            </FadeIn>
            <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {group.services.map((s) => (
                <StaggerItem key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="glass card-hover group flex h-full flex-col overflow-hidden rounded-[22px]"
                  >
                    <div className="relative h-40 overflow-hidden sm:h-44">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        width={600}
                        height={338}
                        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <h3 className="display text-lg">{s.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{s.tagline}</p>
                      <span className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-fx-orange">
                        Learn more <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ))}

      <section className="section-pad !pt-0">
        <div className="container-x">
          <SectionHeading
            eyebrow="Not sure where to start"
            title={<>Tell us the outcome. <span className="gradient-text">We'll design the stack.</span></>}
            description="New launch, migration, or scale-up — one conversation is all it takes to get a scoped plan with honest timelines."
          />
          <FadeIn className="mt-8 text-center">
            <Link href="/contact" className="btn-primary !px-8 !py-4">
              Get a free consultation <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}
