import type { Metadata } from "next";
import { SITE } from "@/data/site";

/**
 * Shared SEO metadata builder.
 *
 * Keeps every public page consistent: unique title (<=47 chars so the
 * "%s | BridgingFX" template stays within 60), description, canonical,
 * Open Graph + Twitter cards with an absolute og:image URL.
 *
 * Social crawlers need absolute image URLs — metadataBase in the root
 * layout covers relative URLs, but absolute is explicit and safe.
 */
export const absUrl = (path: string) => `${SITE.url}${path}`;

export const OG_DEFAULT = "/images/og/og-default.png";

/**
 * Truncate a description to a word boundary at <= maxLen chars for use
 * as a meta description (keeps excerpts within the ~155-char display limit).
 */
export function metaDescription(text: string, maxLen = 158): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLen) return clean;
  const cut = clean.slice(0, maxLen);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[.,;:—–-]$/, "") + "…";
}
export const OG_BLOG = "/images/og/og-blog.png";
export const OG_PACKAGES = "/images/og/og-packages.png";

export function pageMeta(opts: {
  /** Page title WITHOUT the brand suffix — keep <= 47 chars. */
  title: string;
  /** Meta description — aim for 140-160 chars. */
  description: string;
  /** Canonical path, e.g. "/services". */
  path: string;
  /** OG image path (absolute URL built automatically). */
  image?: string;
  /** Override the og:title (defaults to "{title} | BridgingFX"). */
  ogTitle?: string;
}): Metadata {
  const url = absUrl(opts.path);
  const imageUrl = absUrl(opts.image ?? OG_DEFAULT);
  const ogTitle = opts.ogTitle ?? `${opts.title} | BridgingFX`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: ogTitle,
      description: opts.description,
      url,
      siteName: "BridgingFX",
      images: [{ url: imageUrl, width: 1200, height: 675, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: opts.description,
      images: [imageUrl],
    },
  };
}
