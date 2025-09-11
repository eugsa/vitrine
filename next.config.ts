import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/vitrine",
  reactStrictMode: true,
  output: "export", // enables static exports
  images: {
    unoptimized: true, // disables server-based image optimization.
  }
}

export default nextConfig;