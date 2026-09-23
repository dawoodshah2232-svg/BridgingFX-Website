import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ServiceIcon from "@/components/ServiceIcon";
import FaqAccordion from "@/components/FaqAccordion";
import CTABand from "@/components/CTABand";
import JsonLd, { serviceJsonLd, faqJsonLd } from "@/components/JsonLd";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";
import { SERVICES, getService } from "@/data/services";
import { SITE, mailtoFor } from "@/data/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: `${s.title} — Forex Brokerage Services`,
    description: s.tagline + " " + s.description[0].slice(0, 120) + "…",
    openGraph: {
      title: `${s.title} | BridgingFX`,
      description: s.tagline,
    },
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = SERVICES.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  ).slice(0, 3);

  const url = `${SITE.url}/services/${service.slug}`;

  return (
    <>
      <JsonLd data={serviceJsonLd({ url, name: service.title, description: service.tagline })} />
      <JsonLd data={faqJsonLd(service.faqs)} />

      <PageHero
        eyebrow={`${service.category} services`}
        title={
          <>
            {service.title.split(":")[0]} <span className="gradient-text">{service.title.split(":")[1] ?? ""}</span>
          </>
        }
        description={service.tagline}
        cta={{ label: `Enquire about ${service.title}`, href: "/contact" }}
      />

      {/* Overview */}
      <section className="section-pad !pt-4">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
            <FadeIn>
              <span className="mb-5 inline-flex items-center justify-center rounded-2xl bg-fx-orange/10 p-4 text-fx-orange">
                <ServiceIcon name={service.icon} className="h-8 w-8" />
              </span>
              <div className="prose-dark max-w-none">
                {service.description.map((p, i) => (
                  <p key={i} className={i === 0 ? "!mt-6 text-lg !text-slate-200" : ""}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary w-full !py-4 sm:w-auto">
                  Get started <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={mailtoFor(`Enquiry — ${service.title}`)}
                  className="btn-ghost w-full !py-4 sm:w-auto"
                >
                  Email an expert
                </a>
              </div>
            </FadeIn>

            {/* What's included */}
            <FadeIn delay={0.12}>
              <div className="glass rounded-[24px] p-7 sm:p-8 lg:sticky lg:top-24">
                <h2 className="display text-xl">What&apos;s included</h2>
                <ul className="mt-5 space-y-3.5">
                  {service.features.map((f) => (
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
              <span className="eyebrow">{service.title} FAQ</span>
              <h2 className="display mt-4 text-3xl leading-[1.08] sm:text-4xl">
                Common <span className="gradient-text">questions.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <FaqAccordion faqs={service.faqs} />
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
                Related <span className="gradient-text">services</span>
              </h2>
            </FadeIn>
            <Stagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
              {related.map((r) => (
                <StaggerItem key={r.slug}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="glass card-hover group flex h-full flex-col rounded-[22px] p-6"
                  >
                    <span className="mb-4 inline-flex w-fit items-center justify-center rounded-xl bg-white/5 p-2.5 text-slate-300 transition-colors group-hover:bg-fx-orange/15 group-hover:text-fx-orange">
                      <ServiceIcon name={r.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="display text-base">{r.title}</h3>
                    <p className="mt-1.5 flex-1 text-sm text-slate-400">{r.tagline}</p>
                    <span className="mt-3 inline-flex min-h-[40px] items-center text-sm font-semibold text-fx-orange">
                      Learn more <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <CTABand
        title={`Ready to talk ${service.title.toLowerCase()}?`}
        description="One conversation. A scoped plan, honest timelines, and clear pricing — no obligation."
      />
    </>
  );
}
