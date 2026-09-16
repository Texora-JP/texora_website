import type { Metadata } from "next";
import { EB_Garamond, Geist } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ThemeScript } from "@/components/site/ThemeScript";
import { getDictionary, htmlLang, isLocale, locales, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import "../globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((code) => [htmlLang[code], `/${code}`])),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
      siteName: "TEXORA",
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1a26" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typed: Locale = locale;
  const dict = getDictionary(typed);

  return (
    <html
      lang={htmlLang[typed]}
      className={`${ebGaramond.variable} ${geist.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        {/* Japanese faces come from Google's CDN: it slices CJK into unicode-range
            chunks, so a phone downloads only the glyphs the page actually uses. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font --
            App Router layout, so this loads once for the whole site; next/font
            would self-host the full CJK families instead of the CDN's
            unicode-range chunks, which is far heavier on mobile. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;500;600&display=swap"
        />
      </head>
      <body className="min-h-full antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:font-sans focus:text-sm focus:text-primary-fg"
        >
          {dict.nav.skipToContent}
        </a>

        <Header dict={dict} locale={typed} />
        <main>{children}</main>
        <Footer dict={dict} locale={typed} />
      </body>
    </html>
  );
}
