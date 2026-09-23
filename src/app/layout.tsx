import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import JsonLd, { organizationJsonLd } from "@/components/JsonLd";
import { SITE } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "BridgingFX — Empowering Forex Brokers, PropFirms & Financial Institutions",
    template: "%s | BridgingFX",
  },
  description:
    "BridgingFX builds the technology behind ambitious brokerages: white-label trading platforms (cTrader, MT5, Wintrado, TM9), Forex CRM, liquidity, prop-firm tech, and launch-to-scale services. Live in weeks.",
  keywords: [
    "forex white label",
    "forex CRM",
    "cTrader white label",
    "MT5 white label",
    "prop firm technology",
    "forex broker solutions",
    "liquidity provider forex",
    "forex company formation",
  ],
  authors: [{ name: "BridgingFX" }],
  openGraph: {
    type: "website",
    siteName: "BridgingFX",
    title: "BridgingFX — Empowering Forex Brokers, PropFirms & Financial Institutions",
    description:
      "White-label trading platforms, Forex CRM, liquidity, and launch-to-scale services for brokers, prop firms, and financial institutions.",
    url: SITE.url,
    images: [
      {
        url: "/images/og/og-default.png",
        width: 2240,
        height: 1120,
        alt: "BridgingFX — forex brokerage technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BridgingFX — Empowering Forex Brokers, PropFirms & Financial Institutions",
    description:
      "White-label trading platforms, Forex CRM, liquidity, and launch-to-scale services.",
    images: ["/images/og/og-default.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#04070C",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/**
 * Runs before first paint: applies the saved theme (localStorage),
 * else the OS preference, else dark. Prevents a flash of the wrong theme.
 */
const themeBootstrap = `(function(){try{var t=localStorage.getItem('bfx-theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',t==='light'?'#ffffff':'#04070c');}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="font-sans">
        <JsonLd data={organizationJsonLd(SITE.url)} />
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <MobileCTABar />
        </MotionConfig>
      </body>
    </html>
  );
}
