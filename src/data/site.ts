/**
 * Site-wide constants.
 *
 * ⚠️ CONTACT DETAILS ARE PLACEHOLDERS — real phone/email/address are NOT verified.
 * See CONTACT_TODO.md at repo root for exactly what the owner must confirm.
 */

export const SITE = {
  name: "BridgingFX",
  tagline: "Empowering Forex Brokers, PropFirms, and Financial Institutions",
  url: "https://bridgingfx.net",
  founded: 2020,
  email: "info@bridgingfx.net", // TODO: confirm real inbox
  phone: "+000 000 0000", // TODO: confirm real phone
  whatsapp: "+000 000 0000", // TODO: confirm WhatsApp number
  address: "Address to be confirmed", // TODO: confirm office address
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
