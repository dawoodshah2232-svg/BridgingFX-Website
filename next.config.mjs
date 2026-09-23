/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Real BridgingFX logo (157x51 PNG, light background) — seated in a white pill on dark UI.
    // Max display width ~160px to stay crisp (never beyond ~2x natural size).
    remotePatterns: [],
  },
};

export default nextConfig;
