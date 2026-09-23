export type Platform = {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  idealFor: string;
  launchTime: string;
  features: string[];
  badge?: string;
};

export const PLATFORMS: Platform[] = [
  {
    slug: "ctrader",
    name: "cTrader",
    tagline: "The trader's favorite. Institutional-grade UX, out of the box.",
    description: [
      "cTrader is the platform sophisticated traders ask for by name — depth of market, advanced charting, cAlgo automation, and an interface that feels a decade ahead. Our cTrader white label delivers it fully branded, with your liquidity, your CRM, and your client cabinet behind it.",
      "For brokers targeting experienced, high-value traders, cTrader is the fastest way to look — and be — premium from day one.",
    ],
    idealFor: "Brokers targeting experienced retail and professional traders",
    launchTime: "2 weeks",
    features: [
      "Fully branded cTrader web, desktop & mobile",
      "cAlgo / cBot automation support",
      "Depth of market & advanced order types",
      "Integrated copy-trading ecosystem",
      "CRM, cabinet & PSP integration",
      "Liquidity bridge configuration",
    ],
    badge: "Most popular",
  },
  {
    slug: "wintrado",
    name: "Wintrado",
    tagline: "A modern proprietary platform, tuned for conversion.",
    description: [
      "Wintrado gives you a distinctive, modern trading platform that doesn't look like everyone else's MT4 — a genuine differentiator in crowded acquisition markets. We deploy it white-labeled with your branding, instruments, and commercial terms.",
      "Ideal for brokers who want platform uniqueness as part of their positioning, with full back-office and CRM integration handled by our team.",
    ],
    idealFor: "Brokers wanting a distinctive, modern platform identity",
    launchTime: "2 weeks",
    features: [
      "Fully branded proprietary platform",
      "Web & mobile trading terminals",
      "Custom symbol & spread configuration",
      "Back-office & manager tools",
      "CRM & payment integration",
      "Ongoing platform updates",
    ],
  },
  {
    slug: "hybrid",
    name: "Hybrid Solution",
    tagline: "cTrader + Wintrado. Two platforms, one brokerage.",
    description: [
      "Why choose? The Hybrid Solution pairs cTrader's institutional credibility with Wintrado's distinctive modern experience under one brokerage roof — one CRM, one client cabinet, one back office, two world-class front ends.",
      "Segment your audience by sophistication, A/B test acquisition messaging per platform, and never lose a signup because a trader 'only trades on' the other one.",
    ],
    idealFor: "Growth-stage brokers maximizing acquisition across trader segments",
    launchTime: "2–3 weeks",
    features: [
      "Both cTrader & Wintrado fully branded",
      "Unified CRM & client cabinet",
      "Single back-office & reporting layer",
      "Shared liquidity & risk management",
      "Cross-platform account management",
      "Segmented marketing per platform",
    ],
    badge: "Best value",
  },
  {
    slug: "tm9",
    name: "TM9",
    tagline: "The institutional-grade build for serious volume.",
    description: [
      "TM9 is our ultimate solution for high-volume and institutional operations — engineered for low latency, deep liquidity connectivity, and the operational tooling professional desks demand.",
      "When your flow outgrows retail rails, TM9 gives you institutional execution quality with your brand on the front.",
    ],
    idealFor: "High-volume brokers & institutional firms",
    launchTime: "3–4 weeks",
    features: [
      "Institutional-grade execution infrastructure",
      "Multi-asset direct connectivity",
      "Advanced risk & flow management tools",
      "FIX API & institutional integrations",
      "Dedicated infrastructure & support",
      "Custom development options",
    ],
    badge: "Institutional",
  },
  {
    slug: "mt4-mt5",
    name: "MT4 / MT5",
    tagline: "The global standard. Your brand on the world's most-traded terminals.",
    description: [
      "MetaTrader is the default language of retail trading — millions of traders already know it, and thousands of EAs run on it. Our MT4/MT5 white label puts your brand on the world's most recognized platforms with your symbols, spreads, CRM, and liquidity.",
      "Full server setup, bridge configuration, manager terminals, and ongoing administration — the proven path to market, handled end to end.",
    ],
    idealFor: "Brokers wanting maximum trader familiarity & EA ecosystem",
    launchTime: "2–4 weeks",
    features: [
      "Branded MT4/MT5 desktop, web & mobile",
      "Server setup & administration",
      "Bridge & liquidity connectivity",
      "EA & algo trading fully supported",
      "Manager & admin configuration",
      "CRM, cabinet & PSP integration",
    ],
  },
];

export const getPlatform = (slug: string) =>
  PLATFORMS.find((p) => p.slug === slug);
