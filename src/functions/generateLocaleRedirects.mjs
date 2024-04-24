import { DEFAULT_URL_LOCALE } from "../config/locales.mjs";

const formatPath = (locale) =>
  locale === DEFAULT_URL_LOCALE ? `/` : `/${locale}`;

export const generateLocaleRedirects = (fromLocale, targetLocale) => {
  const source = formatPath(fromLocale);
  const destination = formatPath(targetLocale);

  return [
    {
      source,
      destination,
      permanent: false,
      has: [
        {
          type: "cookie",
          key: "locale-preference",
          value: targetLocale,
        },
      ],
    },
    {
      source,
      destination,
      permanent: false,
      missing: [
        {
          type: "cookie",
          key: "locale-preference",
        },
      ],
      has: [
        {
          type: "header",
          key: "accept-language",
          value: `(?<lang>${targetLocale})`,
        },
      ],
    },
    {
      source,
      destination,
      permanent: false,
      missing: [
        {
          type: "cookie",
          key: "locale-preference",
        },
      ],
      has: [
        {
          type: "header",
          key: "accept-language",
          value: `(?<lang>${targetLocale})-(?<country>.*)`,
        },
      ],
    },
  ];
};
