/**
 * Site-wide constants.
 *
 * Contact details confirmed by the owner 2026-09-23 (phone, WhatsApp, address).
 * Email + socials still pending — see CONTACT_TODO.md.
 */

export const SITE = {
  name: "BridgingFX",
  tagline: "Empowering Forex Brokers, PropFirms, and Financial Institutions",
  url: "https://bridgingfx.net",
  founded: 2020,
  email: "info@bridgingfx.net", // TODO: confirm real inbox
  phone: "+971 58 543 1107", // confirmed by owner 2026-09-23
  whatsapp: "+971 58 543 1107", // confirmed by owner 2026-09-23
  address: "Office 111, Al Moosa Business Centre, Oud Metha, Dubai, UAE", // confirmed by owner 2026-09-23
  socials: {
    x: "#", // TODO
    linkedin: "#", // TODO
    instagram: "#", // TODO
    facebook: "#", // TODO
    youtube: "#", // TODO
    telegram: "#", // TODO
  },
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Platforms", href: "/platforms" },
  { label: "Forex CRM", href: "/crm" },
  { label: "Prop Firms", href: "/prop-firms" },
  { label: "Packages", href: "/packages" },
  { label: "Company Formation", href: "/company-formation" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Client Portal", href: "/portal" },
] as const;

export const FOOTER_SERVICES = [
  { label: "White-Label Platforms", href: "/platforms" },
  { label: "Forex CRM Solution", href: "/crm" },
  { label: "PropFirm Technology", href: "/services/propfirm-tech" },
  { label: "FX Leads", href: "/services/fx-leads" },
  { label: "24/7 Tech Support", href: "/services/tech-support" },
  { label: "Compliance & KYC", href: "/services/compliance-kyc" },
  { label: "Liquidity Aggregation", href: "/services/liquidity-aggregation" },
  { label: "Risk Management", href: "/services/risk-management" },
] as const;

export function mailtoFor(subject: string, body = ""): string {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${SITE.email}?subject=${s}${b ? `&body=${b}` : ""}`;
}
