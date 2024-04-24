import { DEFAULT_URL_LOCALE, URL_LOCALE_LIST } from "../config/locales.mjs";

const VISIBLE_URL_LOCALES = URL_LOCALE_LIST.filter(
  (locale) => locale !== DEFAULT_URL_LOCALE
);

export const generateDefaultLocaleRewrites = () => {
  const baseSource = `/:segment((?!${VISIBLE_URL_LOCALES.join("|")}).*)`;
  const baseDestination = `/${DEFAULT_URL_LOCALE}/:segment`;

  return [
    {
      source: `${baseSource}:params*`,
      destination: `${baseDestination}:params*`,
    },
    {
      source: `${baseSource}/:path*`,
      destination: `${baseDestination}/:path*`,
    },
  ];
};
