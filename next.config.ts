import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",

      },
      {
        protocol: "https",
        hostname: "r2imghtlak.mmtcdn.com",
        
      },
      {
        protocol: "https",
        hostname: "r2imghtlak.ibcdn.com",
        
      },
      {
        protocol: "https",
        hostname: "highlandhotel.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
