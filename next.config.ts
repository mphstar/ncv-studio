import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "random.imagecdn.app",
      },
    ],
  },
};

export default nextConfig;
