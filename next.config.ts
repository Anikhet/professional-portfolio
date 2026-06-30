import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Spotify album-art CDN (used by the OFF DUTY "now playing" widget).
      { protocol: "https", hostname: "i.scdn.co" },
    ],
  },
};

export default nextConfig;
