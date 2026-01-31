import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "teraawatt.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "teraawattdev.blob.core.windows.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
