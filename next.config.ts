import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/scalorantstudio",
  assetPrefix: "/scalorantstudio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
