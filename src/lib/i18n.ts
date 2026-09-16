import { en } from "@/content/en";
import { ja } from "@/content/ja";

export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  ja: "日本語",
};

/** Full BCP-47 tags used for <html lang> and hreflang. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  ja: "ja",
};

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, ja };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ja" : "en";
}

/** Swap the locale segment of a pathname, keeping everything after it. */
export function localizePath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }
  return "/" + segments.join("/");
}
