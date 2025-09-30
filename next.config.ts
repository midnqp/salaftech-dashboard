import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable sourcemaps for better error debugging
  productionBrowserSourceMaps: true, // For client-side sourcemaps
  webpack: (config, { dev, isServer }) => {
    // Enable sourcemaps for server-side code
    if (!dev && isServer) {
      config.devtool = 'source-map';
    }
    return config;
  },
};

export default nextConfig;
