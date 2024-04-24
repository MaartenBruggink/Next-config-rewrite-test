import { generateDefaultLocaleRewrites } from "./src/functions/generateDefaultLocaleRewrites.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return generateDefaultLocaleRewrites();
  },
};

export default nextConfig;
