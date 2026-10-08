import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import { FadeIn } from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { SITE } from "@/data/site";
import { pageMeta } from "@/lib/seo";

/**
 * NOTE: phone/email/address/WhatsApp are PLACEHOLDERS — see CONTACT_TODO.md.
 * The interactive form lives in ContactForm.tsx so this page stays a
 * server component and can export metadata.
 */

export const metadata: Metadata = pageMeta({
  title: "Contact — Start Your Brokerage Project",
  description:
    "Talk to BridgingFX about launching, migrating, or scaling your brokerage: white-label platforms, Forex CRM, prop firm technology, and 24/7 support.",
  path: "/contact",
});

export default function ContactPage() {
  // WhatsApp placeholder — owner to confirm (CONTACT_TODO.md)
  const waNumber = SITE.whatsapp.replace(/\D/g, "");

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s talk about <span className="gradient-text">what&apos;s next.</span></>}
        description="New launch, migration, or scale-up — tell us where you're headed and we'll map the fastest honest path, in writing."
        image={{ src: "/images/pages/contact.webp", alt: "Customer support representative with headset smiling in an office" }}
      />

      <section className="section-pad !pt-4">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <FadeIn>
              <Suspense fallback={<div className="glass rounded-[24px] p-6 sm:p-9" aria-hidden="true" />}>
                <ContactForm />
              </Suspense>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="space-y-4">
                <div className="glass rounded-[24px] p-6 sm:p-7">
                  <h2 className="display text-lg">Direct channels</h2>
                  <ul className="mt-4 space-y-1 text-[15px]">
                    <li>
                      <a href={`mailto:${SITE.email}`} className="inline-flex min-h-[48px] items-center gap-3 text-slate-300 hover:text-white">
                        <span className="text-fx-orange" aria-hidden="true">✉</span> {SITE.email}
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${SITE.phone.replace(/\D/g, "")}`} className="inline-flex min-h-[48px] items-center gap-3 text-slate-300 hover:text-white">
                        <span className="text-fx-orange" aria-hidden="true">☎</span> {SITE.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`https://wa.me/${waNumber}`}
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex min-h-[48px] items-center gap-3 text-slate-300 hover:text-white"
                      >
                        <span className="text-mint" aria-hidden="true">◉</span> WhatsApp us
                      </a>
                    </li>
                    <li className="flex min-h-[48px] items-start gap-3 pt-2 text-slate-400">
                      <span className="text-fx-orange" aria-hidden="true">⌖</span> {SITE.address}
                    </li>
                  </ul>
                </div>
                <div className="rounded-[24px] border border-fx-orange/25 bg-fx-orange/10 p-6 sm:p-7">
                  <h2 className="display text-lg">What happens next</h2>
                  <ol className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                    <li><span className="font-bold text-fx-orange">1.</span> A specialist replies within one business day.</li>
                    <li><span className="font-bold text-fx-orange">2.</span> 30-minute discovery call — your goals, our honest take.</li>
                    <li><span className="font-bold text-fx-orange">3.</span> Scoped proposal with timelines and pricing, in writing.</li>
                  </ol>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
