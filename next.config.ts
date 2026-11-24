import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the root so Turbopack always resolves the `next` package from this project.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
