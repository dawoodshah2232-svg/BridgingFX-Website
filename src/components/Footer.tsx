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
              {
                label: "X",
                href: SITE.socials.x,
                icon: (
                  <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.25 6.93 6.06-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41z" />
                ),
              },
              {
                label: "LinkedIn",
                href: SITE.socials.linkedin,
                icon: (
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
                ),
              },
              {
                label: "Instagram",
                href: SITE.socials.instagram,
                icon: (
                  <>
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.4" cy="6.6" r="1.4" />
                  </>
                ),
              },
              {
                label: "Facebook",
                href: SITE.socials.facebook,
                icon: (
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07z" />
                ),
              },
              {
                label: "YouTube",
                href: SITE.socials.youtube,
                icon: (
                  <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
                ),
              },
            ]
              // Hide placeholder socials ("#") until the owner confirms real URLs —
              // a dead icon is worse than no icon.
              .filter((s) => s.href && s.href !== "#")
              .map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`BridgingFX on ${s.label}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-fx-orange/60 hover:text-fx-orange hover:shadow-glow"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
                  {s.icon}
                </svg>
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
                  className="group inline-flex min-h-[40px] items-center text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <span className="max-w-0 overflow-hidden text-fx-orange transition-all duration-300 group-hover:max-w-5" aria-hidden="true">→&nbsp;</span>
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
                  className="group inline-flex min-h-[40px] items-center text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <span className="max-w-0 overflow-hidden text-fx-orange transition-all duration-300 group-hover:max-w-5" aria-hidden="true">→&nbsp;</span>
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
