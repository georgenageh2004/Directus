import type { NextConfig } from "next";

const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";
let directusUrlParsed: URL | null = null;
try {
  directusUrlParsed = new URL(directusUrl);
} catch (e) {
  console.error("Invalid NEXT_PUBLIC_DIRECTUS_URL:", directusUrl);
}

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: directusUrlParsed ? [
      {
        protocol: directusUrlParsed.protocol.replace(":", "") as "http" | "https",
        hostname: directusUrlParsed.hostname,
        port: directusUrlParsed.port || "",
        pathname: "/assets/**",
      }
    ] : [],
  },
};

export default nextConfig;
