import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable static optimization
  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
