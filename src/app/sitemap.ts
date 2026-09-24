import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { PRODUCTS } from "@/data/products";
import { POSTS } from "@/data/posts";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/leads",
    "/products",
    "/platforms",
    "/crm",
    "/prop-firms",
    "/packages",
    "/company-formation",
    "/about",
    "/blog",
    "/faq",
    "/contact",
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE.url}${r}`,
      lastModified: new Date("2026-09-23"),
      changeFrequency: "weekly" as const,
      priority: r === "" ? 1 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/services/${s.slug}`,
      lastModified: new Date("2026-09-23"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...PRODUCTS.map((p) => ({
      url: `${SITE.url}/products/${p.slug}`,
      lastModified: new Date("2026-09-23"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...POSTS.map((p) => ({
      url: `${SITE.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
