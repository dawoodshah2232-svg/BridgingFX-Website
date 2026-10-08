import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { FadeIn } from "@/components/Reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions — Using This Website",
  description:
    "The BridgingFX terms of use: what this website is for, how its content may be used, and the limits that apply. Last updated September 2026.",
  alternates: { canonical: `${SITE.url}/terms` },
  openGraph: {
    title: "Terms & Conditions | BridgingFX",
    description:
      "What this website is for, how its content may be used, and the limits that apply.",
    url: `${SITE.url}/terms`,
    images: [{ url: `${SITE.url}/images/og/og-default.png`, width: 1200, height: 675, alt: "Terms & Conditions | BridgingFX" }],
  },
};

const APPLE =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Terms &amp; <span className="gradient-text">Conditions.</span>
          </>
        }
        description="The ground rules for using this website. Last updated 29 September 2026."
      />

      <section className="section-pad">
        <div className="container-x">
          <FadeIn>
            <article className="prose-dark mx-auto max-w-3xl" style={{ fontFamily: APPLE }}>
              <p>
                By using this website you agree to these terms. If you do not
                agree, please do not use the site.
              </p>

              <h2>What this website is</h2>
              <p>
                This is the informational website of BridgingFX, describing
                brokerage technology and launch services for forex brokers, prop
                firms, and financial institutions. Content on this site —
                including articles, pricing ranges, and timelines — is general
                information to help you evaluate our services, not a binding
                offer.
              </p>

              <h2>Not financial advice</h2>
              <p>
                Nothing on this site is investment, trading, or legal advice.
                Forex and CFD trading carry substantial risk. Any decision you
                make about licences, jurisdictions, or business models should be
                taken with qualified independent advisers.
              </p>

              <h2>Intellectual property</h2>
              <p>
                All text, graphics, logos, and imagery on this site belong to
                BridgingFX or its content providers. You may read, share links
                to, and quote this content with attribution, but you may not
                reproduce substantial portions or present it as your own without
                written permission.
              </p>

              <h2>Acceptable use</h2>
              <ul>
                <li>Do not attempt to disrupt, probe, or misuse the website.</li>
                <li>
                  Do not submit unlawful, abusive, or misleading content through
                  the contact form.
                </li>
                <li>
                  Do not scrape or mass-copy site content for commercial
                  redistribution.
                </li>
              </ul>

              <h2>Enquiries and proposals</h2>
              <p>
                Contacting us through the site creates no contractual
                relationship. Proposals, pricing, and timelines we discuss are
                confirmed only in a signed agreement.
              </p>

              <h2>Limitation of liability</h2>
              <p>
                The site is provided &ldquo;as is&rdquo;. To the fullest extent
                permitted by law, BridgingFX is not liable for losses arising
                from your use of, or inability to use, this website or from
                reliance on its content.
              </p>

              <h2>Changes</h2>
              <p>
                We may update these terms at any time; the version on this page
                is the current one. Material changes will be reflected in the
                &ldquo;Last updated&rdquo; date above.
              </p>

              <h2>Contact</h2>
              <p>
                BridgingFX — {SITE.address}. Email{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, phone{" "}
                {SITE.phone}.
              </p>

              <p className="mt-10 text-sm text-slate-400">
                This page is a plain-English summary and does not constitute
                legal advice. See also our{" "}
                <Link href="/privacy">Privacy Policy</Link>.
              </p>
            </article>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
