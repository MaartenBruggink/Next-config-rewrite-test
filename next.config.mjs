import { DEFAULT_URL_LOCALE } from "./src/config/locales.mjs";
import { generateDefaultLocaleRewrites } from "./src/functions/generateDefaultLocaleRewrites.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return generateDefaultLocaleRewrites();
  },
  async redirects() {
    return [
      {
        source: `/${DEFAULT_URL_LOCALE}`,
        destination: `/`,
        permanent: true,
      },
      {
        source: `/${DEFAULT_URL_LOCALE}/:match*`,
        destination: `/:match*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
