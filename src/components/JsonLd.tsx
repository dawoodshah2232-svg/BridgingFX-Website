/** Render JSON-LD structured data safely. */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BridgingFX",
    url,
    slogan: "Empowering Forex Brokers, PropFirms, and Financial Institutions",
    foundingDate: "2020",
    description:
      "BridgingFX provides white-label trading platforms, Forex CRM solutions, liquidity, and launch-to-scale services for forex brokers, prop firms, and financial institutions.",
    sameAs: [] as string[],
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(opts: {
  url: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "Organization",
      name: "BridgingFX",
      url: "https://bridgingfx.net",
    },
    serviceType: "Financial technology services",
  };
}
