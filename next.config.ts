import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder art ships as first-party SVGs; raster patient photos can be
    // dropped in later. SVGs here are our own static assets (not user input).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
