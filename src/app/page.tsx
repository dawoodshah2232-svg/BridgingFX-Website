import type { Metadata } from "next";
import HomePage from "./HomePage";
import { pageMeta, OG_DEFAULT, absUrl } from "@/lib/seo";

/**
 * Homepage — server wrapper so the page can export SEO metadata.
 * All interactive content lives in the client component HomePage.
 */
const base = pageMeta({
  title: "Forex Brokerage Technology",
  description:
    "BridgingFX builds the technology behind ambitious brokerages: white-label trading platforms, Forex CRM, liquidity, prop-firm tech, and launch-to-scale services.",
  path: "/",
  image: OG_DEFAULT,
});

export const metadata: Metadata = {
  ...base,
  // Render the brand-first homepage title (absolute: no template suffix).
  title: { absolute: "BridgingFX — Forex Brokerage Technology" },
  openGraph: {
    ...base.openGraph,
    title: "BridgingFX — Forex Brokerage Technology",
  },
};

export default function Home() {
  return <HomePage />;
}
