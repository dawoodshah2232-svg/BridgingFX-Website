/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Real BridgingFX logo (157x51 PNG, light background) — seated in a white pill.
    // Max display width ~160px to stay crisp (never beyond ~2x natural size).
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
