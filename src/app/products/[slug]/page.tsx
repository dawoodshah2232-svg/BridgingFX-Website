import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CTABand from "@/components/CTABand";
import JsonLd, { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";
import { PRODUCTS, getProduct } from "@/data/products";
import { SITE, mailtoFor } from "@/data/site";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const p = getProduct(params.slug);
  if (!p) return {};
  const url = `${SITE.url}/products/${p.slug}`;
  return {
    title: `${p.name} | Forex Brokerage Technology`,
    description: p.tagline,
    alternates: { canonical: url },
    openGraph: {
      title: `${p.name} — BridgingFX`,
      description: p.tagline,
      url,
      images: [{ url: `${SITE.url}${p.image}`, width: 1200, height: 675, alt: p.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.name} — BridgingFX`,
      description: p.tagline,
      images: [`${SITE.url}${p.image}`],
    },
  };
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 3);

  const url = `${SITE.url}/products/${product.slug}`;

  return (
    <>
      <JsonLd data={serviceJsonLd({ url, name: product.name, description: product.tagline })} />
      <JsonLd data={faqJsonLd(product.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE.url },
          { name: "Products", url: `${SITE.url}/products` },
          { name: product.name, url },
        ])}
      />

      <PageHero
        eyebrow={`${product.category} · BridgingFX product`}
        title={
          <>
            {product.name.split(":")[0]}{" "}
            <span className="gradient-text">{product.name.split(":")[1] ?? ""}</span>
          </>
        }
        description={product.tagline}
        cta={{ label: `Enquire about ${product.name}`, href: "/contact" }}
        backLink={{ label: "All products", href: "/products" }}
      />

      {/* Product visual */}
      <section className="!pt-2">
        <div className="container-x">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[24px] shadow-card sm:rounded-[28px]">
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={1200}
                height={675}
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 90vw, 1024px"
                className="h-auto w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview */}
      <section className="section-pad !pt-4">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
            <FadeIn>
              <div className="prose-dark max-w-none">
                {product.description.map((p, i) => (
                  <p key={i} className={i === 0 ? "!mt-6 text-lg !text-slate-200" : ""}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Who it's for */}
              <h2 className="display mt-10 text-xl">Who it&apos;s for</h2>
              <ul className="mt-4 space-y-2.5">
                {product.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-[15px] text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fx-orange" aria-hidden="true" />
                    {w}
                  </li>
                ))}
              </ul>

              {/* How it fits */}
              <div className="glass mt-8 rounded-[22px] p-6 sm:p-7">
                <h2 className="display text-lg">{product.fitTitle}</h2>
                <ul className="mt-4 space-y-2.5">
                  {product.fitPoints.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px] text-slate-300">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fx-orange/15 text-xs font-bold text-fx-orange" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/portal/services" className="btn-primary w-full !py-4 sm:w-auto">
                  Order in the client portal <span aria-hidden="true">→</span>
                </Link>
                <Link href="/contact" className="btn-ghost w-full !py-4 sm:w-auto">
                  Talk to an expert
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Prefer email?{" "}
                <a className="text-fx-orange hover:underline" href={mailtoFor(`Enquiry — ${product.name}`)}>
                  Email an expert
                </a>{" "}
                about {product.name}.
              </p>
            </FadeIn>

            {/* What's included */}
            <FadeIn delay={0.12}>
              <div className="glass rounded-[24px] p-7 sm:p-8 lg:sticky lg:top-24">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-fx-ember via-fx-orange to-amber-400" aria-hidden="true" />
                <h2 className="display mt-4 text-xl">What&apos;s included</h2>
                <ul className="mt-5 space-y-3.5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px] text-slate-300">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fx-orange/15 text-xs font-bold text-fx-orange" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad hairline bg-ink-900/40 !pt-20 sm:!pt-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
            <FadeIn>
              <span className="eyebrow">{product.name} FAQ</span>
              <h2 className="display mt-4 text-3xl leading-[1.08] sm:text-4xl">
                Common <span className="gradient-text">questions.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <FaqAccordion faqs={product.faqs} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-pad">
          <div className="container-x">
            <FadeIn>
              <h2 className="display text-center text-2xl sm:text-3xl">
                Related <span className="gradient-text">products</span>
              </h2>
            </FadeIn>
            <Stagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
              {related.map((r) => (
                <StaggerItem key={r.slug}>
                  <Link
                    href={`/products/${r.slug}`}
                    className="glass card-hover group flex h-full flex-col overflow-hidden rounded-[22px]"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.imageAlt}
                        width={600}
                        height={338}
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="display text-base">{r.name}</h3>
                      <p className="mt-1.5 flex-1 text-sm text-slate-400">{r.tagline}</p>
                      <span className="mt-3 inline-flex min-h-[40px] items-center text-sm font-semibold text-fx-orange">
                        Learn more <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <CTABand
        title={`Ready to talk ${product.name.toLowerCase()}?`}
        description="One conversation. A scoped plan, honest timelines, and clear pricing — no obligation."
      />
    </>
  );
}
