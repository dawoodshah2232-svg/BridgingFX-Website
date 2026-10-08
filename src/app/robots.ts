import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Client portal is a demo with page-level noindex — keep crawlers out too.
        disallow: "/portal/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
