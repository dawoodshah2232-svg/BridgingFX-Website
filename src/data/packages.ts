export type Package = {
  name: string;
  tier: string;
  audience: string;
  description: string;
  features: string[];
  recommended?: boolean;
};

export const PACKAGES: Package[] = [
  {
    name: "Start-Up Accelerator",
    tier: "Entry Level",
    audience: "For new entities & market testing",
    description:
      "Everything a new brokerage needs to prove the model — live in weeks, not quarters, with the lowest upfront setup in the industry.",
    features: [
      "Standard cTrader or Wintrado white label",
      "Tier 3 / mid-level FX liquidity feed",
      "BridgeX CRM access + secure hosting",
      "Branded client cabinet",
      "Basic website (up to 5 pages)",
      "Email support & launch assistance",
    ],
  },
  {
    name: "Growth Catalyst",
    tier: "Professional Tier",
    audience: "For established brokers expanding operations",
    description:
      "The complete growth stack for brokers ready to scale — dual platforms, better liquidity, and the marketing infrastructure to fill the funnel.",
    features: [
      "Premium Hybrid solution (cTrader + Wintrado)",
      "Tier 2 aggregated liquidity (FX/CFD)",
      "Custom web development (5 pages)",
      "Full KYC integration",
      "IB & affiliate portal",
      "Priority 24/7 tech support",
    ],
    recommended: true,
  },
  {
    name: "Enterprise Institution",
    tier: "Elite Tier",
    audience: "For high-volume & institutional firms",
    description:
      "Institutional-grade infrastructure for serious flow — dedicated resources, dedicated people, and execution quality without compromise.",
    features: [
      "Ultimate TM9 or full custom-build solution",
      "Tier 1 direct connectivity (multi-asset)",
      "24/7 outsourced customer support",
      "Dedicated risk manager & institutional flow management",
      "Custom integrations & development hours",
      "Optimized for high volume / low latency",
    ],
  },
];

export const UPGRADE_PATH_NOTE =
  "Start with the Start-Up Accelerator and scale to Growth Catalyst or Enterprise Institution as your brokerage expands — your technology and liquidity grow seamlessly with your client base.";
