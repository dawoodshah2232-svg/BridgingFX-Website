import Link from "next/link";
import Logo from "./Logo";
import { SITE, FOOTER_SERVICES, mailtoFor } from "@/data/site";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Company Formation", href: "/company-formation" },
  { label: "Prop Firms", href: "/prop-firms" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "All Services", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="hairline bg-ink-900/60">
      <div className="container-x grid gap-10 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        {/* Brand */}
        <div className="flex flex-col items-start gap-5">
          <Link href="/" aria-label="BridgingFX home">
            <Logo width={150} />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            {SITE.tagline}. White-label platforms, Forex CRM, liquidity, and
            launch-to-scale services — since {SITE.founded}.
          </p>
          <div className="flex gap-2.5">
            {[
              { label: "X", href: SITE.socials.x, icon: "𝕏" },
              { label: "LinkedIn", href: SITE.socials.linkedin, icon: "in" },
              { label: "Instagram", href: SITE.socials.instagram, icon: "◉" },
              { label: "Facebook", href: SITE.socials.facebook, icon: "f" },
              { label: "YouTube", href: SITE.socials.youtube, icon: "▶" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={`BridgingFX on ${s.label} (link to be confirmed)`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-slate-300 transition-colors hover:border-fx-orange/50 hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <nav aria-label="Footer services">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Services
          </h3>
          <ul className="space-y-1">
            {FOOTER_SERVICES.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex min-h-[40px] items-center text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Footer company">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Company
          </h3>
          <ul className="space-y-1">
            {COMPANY_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex min-h-[40px] items-center text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact — placeholders until owner confirms (CONTACT_TODO.md) */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Talk to us
          </h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <a
                href={mailtoFor("General enquiry — BridgingFX")}
                className="inline-flex min-h-[40px] items-center transition-colors hover:text-white"
              >
                {SITE.email}
              </a>
            </li>
            <li className="inline-flex min-h-[40px] items-center">{SITE.phone}</li>
            <li className="leading-relaxed">{SITE.address}</li>
          </ul>
          <Link href="/contact" className="btn-primary mt-5 !px-6 !py-3 !text-sm">
            Start a project
          </Link>
        </div>
      </div>

      <div className="hairline">
        {/* pb leaves room for the sticky mobile CTA bar */}
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 pb-24 text-xs text-slate-500 sm:flex-row md:pb-6">
          <p>© {new Date().getFullYear()} BridgingFX. All rights reserved.</p>
          <p>Empowering Forex Brokers, PropFirms & Financial Institutions.</p>
        </div>
      </div>
    </footer>
  );
}
