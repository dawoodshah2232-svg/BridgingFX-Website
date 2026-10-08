import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { FadeIn } from "@/components/Reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy — How We Handle Your Data",
  description:
    "The BridgingFX privacy policy: what information this website collects (and what it doesn't), how contact enquiries are handled, and your rights.",
  alternates: { canonical: `${SITE.url}/privacy` },
  openGraph: {
    title: "Privacy Policy | BridgingFX",
    description:
      "What this website collects (and what it doesn't), how enquiries are handled, and your rights.",
    url: `${SITE.url}/privacy`,
    images: [{ url: `${SITE.url}/images/og/og-default.png`, width: 1200, height: 675, alt: "Privacy Policy | BridgingFX" }],
  },
};

const APPLE =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy <span className="gradient-text">Policy.</span>
          </>
        }
        description="What we collect, what we never collect, and how your information is handled. Last updated 29 September 2026."
      />

      <section className="section-pad">
        <div className="container-x">
          <FadeIn>
            <article className="prose-dark mx-auto max-w-3xl" style={{ fontFamily: APPLE }}>
              <p>
                BridgingFX respects your privacy. This policy explains, in plain
                language, what information this website handles — and, just as
                importantly, what it does not.
              </p>

              <h2>What this website collects</h2>
              <ul>
                <li>
                  <strong>Contact enquiries.</strong> The contact form opens your
                  own email app to send a message to {SITE.email}. We receive
                  only what you choose to write: your name, email address,
                  interest, and message. There is no server-side form database —
                  your message arrives as an email and is handled like any
                  business correspondence.
                </li>
                <li>
                  <strong>Preferences on your device.</strong> Your theme choice
                  (light/dark) and any client-portal demo data are stored in
                  your browser&apos;s local storage. They never leave your
                  device and are never sent to us.
                </li>
              </ul>

              <h2>What we do not collect</h2>
              <ul>
                <li>
                  <strong>No tracking cookies.</strong> This website does not
                  set cookies and does not run analytics or advertising
                  trackers. If that changes, this policy will be updated first.
                </li>
                <li>
                  <strong>No accounts, no passwords.</strong> The client portal
                  is a demonstration experience; anything you enter there stays
                  in your browser.
                </li>
              </ul>

              <h2>How we use enquiry information</h2>
              <p>
                If you contact us, we use your details only to respond to your
                enquiry. We do not sell your information, add you to marketing
                lists, or share your details with third parties for their own
                marketing.
              </p>

              <h2>Your rights</h2>
              <p>
                You can ask us at any time what information we hold about you,
                ask for a correction, or ask us to delete it. Email{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we will
                respond promptly.
              </p>

              <h2>External links</h2>
              <p>
                This site may link to external websites (for example, platform
                providers or social profiles). We are not responsible for their
                privacy practices — please review their policies.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this policy? Reach us at{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, call{" "}
                {SITE.phone}, or write to {SITE.address}.
              </p>

              <p className="mt-10 text-sm text-slate-400">
                This page is a plain-English summary and does not constitute
                legal advice. See also our{" "}
                <Link href="/terms">Terms &amp; Conditions</Link>.
              </p>
            </article>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
