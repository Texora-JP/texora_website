"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "@/lib/clsx";
import { localeNames, locales, localizePath, type Locale } from "@/lib/i18n";

type LocaleToggleProps = {
  current: Locale;
  label: string;
  className?: string;
};

export function LocaleToggle({ current, label, className }: LocaleToggleProps) {
  const pathname = usePathname() ?? `/${current}`;

  return (
    <nav aria-label={label} className={clsx("flex shrink-0 items-center gap-0.5 font-sans text-[0.7rem] sm:gap-1 sm:text-xs", className)}>
      {locales.map((locale, index) => {
        const active = locale === current;
        return (
          <span key={locale} className="flex items-center gap-1">
            {index > 0 && (
              <span aria-hidden className="text-subtle/60">
                /
              </span>
            )}
            <Link
              href={localizePath(pathname, locale)}
              hrefLang={locale}
              aria-current={active ? "true" : undefined}
              className={clsx(
                "flex min-h-11 items-center rounded px-1.5 transition-colors duration-300 ease-japanese sm:min-h-0 sm:py-1",
                active
                  ? "text-ink underline decoration-link decoration-2 underline-offset-[5px]"
                  : "text-subtle hover:text-ink",
              )}
            >
              {localeNames[locale]}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
