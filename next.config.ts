import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Fix: when deployed inside a monorepo, Turbopack may detect the wrong
  // workspace root (the monorepo root instead of this package directory).
  // Setting turbopack.root ensures it resolves modules from the right place.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
