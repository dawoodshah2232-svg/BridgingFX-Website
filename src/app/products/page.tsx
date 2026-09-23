import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";
import { PRODUCTS, PRODUCT_CATEGORIES, productsByCategory } from "@/data/products";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Products | Forex Brokerage Technology",
  description:
    "13 brokerage technology products from BridgingFX — CRM, platforms, copy trading, risk, liquidity, payments, mobile apps, and more. Deployed, migrated, and managed for you.",
  alternates: { canonical: `${SITE.url}/products` },
  openGraph: {
    title: "Products — BridgingFX",
    description:
      "13 brokerage technology products: trading CRM, platforms, copy trading, risk, liquidity bridge, payments, mobile apps, and more.",
    url: `${SITE.url}/products`,
  },
};

export default function ProductsIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE.url },
          { name: "Products", url: `${SITE.url}/products` },
        ])}
      />
      <PageHero
        badge="One integrated stack"
        eyebrow="BridgingFX products"
        title={
          <>
            The brokerage technology <span className="gradient-text">stack.</span>
          </>
        }
        description="Every product below is technology we deploy, migrate, and manage for brokerages and prop firms — CRMs, trading platforms, risk, liquidity, payments, and the client experience around them. Each one integrates with the others, and with your launch."
        cta={{ label: "Get a quote", href: "/contact" }}
      />

      <div className="container-x">
        {PRODUCT_CATEGORIES.map((category) => {
          const items = productsByCategory(category);
          if (items.length === 0) return null;
          return (
            <section key={category} className="section-pad !pb-0" aria-label={category}>
              <FadeIn>
                <div className="flex items-end justify-between gap-4">
                  <h2 className="display text-2xl sm:text-3xl">
                    {category}
                    <span className="ml-3 align-middle text-sm font-normal text-slate-500">
                      {items.length} {items.length === 1 ? "product" : "products"}
                    </span>
                  </h2>
                </div>
              </FadeIn>
              <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {items.map((p) => (
                  <StaggerItem key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="glass card-hover group flex h-full flex-col overflow-hidden rounded-[22px]"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.imageAlt}
                          width={600}
                          height={338}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="display text-lg">{p.name}</h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.tagline}</p>
                        <span className="mt-4 inline-flex min-h-[40px] items-center text-sm font-semibold text-fx-orange">
                          Explore product <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
            </section>
          );
        })}

        {/* Services cross-link */}
        <section className="section-pad">
          <FadeIn>
            <div className="glass rounded-[24px] p-8 text-center sm:p-10">
              <h2 className="display text-2xl sm:text-3xl">
                Looking for <span className="gradient-text">services</span> instead?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-400">
                Products are the technology. Our services — launch packages, migration, marketing,
                compliance, and managed operations — are how we put that technology to work for you.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/services" className="btn-ghost w-full !py-3.5 sm:w-auto">
                  Browse all services
                </Link>
                <Link href="/packages" className="btn-primary w-full !py-3.5 sm:w-auto">
                  See launch packages <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>

      <CTABand
        title="Not sure which products you need?"
        description="Tell us where you are — new launch, migration, or scale-up — and we'll scope the exact stack. One conversation, honest timelines, clear pricing."
      />
    </>
  );
}
