import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Portal's own pages only — /letters/* is proxied and the letters app sets its own headers
  async headers() {
    return [
      {
        source: "/((?!letters).*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
        ],
      },
    ];
  },
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
