/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Official BridgingFX logo: public/logo-dark.jpg (157x51 JPEG, black
    // background) — shown directly on dark theme (no pill), seated in a
    // dark rounded container on light theme. public/logo.png (light bg)
    // kept as fallback. Max display width ~160px to stay crisp.
    //
    // Custom loader: next/image drops the basePath prefix for unoptimized
    // images, which broke the logo on the GitHub Pages preview
    // ("/logo.png" 404'd → giant blank white blob). The loader in
    // src/image-loader.ts prepends NEXT_PUBLIC_BASE_PATH (empty on Vercel).
    // It also satisfies `output: "export"` without `unoptimized: true`.
    loader: "custom",
    loaderFile: "./src/image-loader.ts",
    remotePatterns: [],
  },
};

export default nextConfig;
