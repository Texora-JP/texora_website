import Link from "next/link";
import { Hanko } from "@/components/ui/Hanko";
import { clsx } from "@/lib/clsx";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

type WordmarkProps = {
  dict: Dictionary;
  locale: Locale;
  /** Hides the small tagline under the wordmark — used in tight spaces. */
  compact?: boolean;
  className?: string;
};

export function Wordmark({ dict, locale, compact = false, className }: WordmarkProps) {
  return (
    <Link
      href={`/${locale}`}
      className={clsx("group inline-flex flex-col justify-center gap-[3px] py-2", className)}
      aria-label={`${dict.brand.name} — home`}
    >
      <span className="flex items-center gap-2 sm:gap-2.5">
        <span className="font-serif text-[1.35rem] leading-none font-medium tracking-[0.18em] text-ink sm:text-[1.6rem]">
          TEXORA
        </span>
        <Hanko
          char={dict.brand.seal}
          className="w-[1.15em] text-[0.95rem] transition-transform duration-500 ease-japanese group-hover:-rotate-3 sm:text-[1.05rem]"
        />
      </span>
      {!compact && (
        <span className="hidden font-sans text-[0.44rem] leading-none tracking-[0.2em] whitespace-nowrap text-subtle uppercase sm:block sm:text-[0.5rem]">
          {dict.brand.tagline}
        </span>
      )}
    </Link>
  );
}
