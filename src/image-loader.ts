import type { ImageLoaderProps } from "next/image";

/**
 * Custom image loader.
 *
 * Why this exists: next/image skips its default loader — including the
 * basePath prefix — for unoptimized images. On the GitHub Pages preview
 * (basePath "/BridgingFX-Website") that made the logo <img> request
 * "/logo.png" instead of "/BridgingFX-Website/logo.png", so the image
 * 404'd and the white logo pill rendered as a giant blank blob with
 * invisible alt text.
 *
 * This loader prepends the deploy base path (set via NEXT_PUBLIC_BASE_PATH
 * at build time; empty on Vercel production) so the logo resolves in
 * every environment. With `output: "export"` a custom loader also
 * satisfies Next's static-export requirement.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function imageLoader({ src }: ImageLoaderProps): string {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${basePath}${src}`;
}
