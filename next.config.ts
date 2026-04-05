import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/letters",
        destination: "https://letters-self.vercel.app/letters",
      },
      {
        source: "/letters/:path*",
        destination: "https://letters-self.vercel.app/letters/:path*",
      },
    ];
  },
};

export default nextConfig;
