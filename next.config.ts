import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "random.imagecdn.app",
      },
      {
        hostname: 'img.youtube.com',
      }
    ],
  },
};

export default nextConfig;
