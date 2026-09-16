import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";
import type { Dictionary, Locale } from "@/lib/i18n";

type FooterProps = {
  dict: Dictionary;
  locale: Locale;
};

export function Footer({ dict, locale }: FooterProps) {
  const links = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#projects", label: dict.nav.projects },
    { href: "#team", label: dict.nav.team },
    { href: "#partnership", label: dict.nav.partnership },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-alt">
      <div aria-hidden className="motif-seigaiha pointer-events-none absolute inset-x-0 bottom-0 h-28" />

      <div className="shell relative flex flex-col gap-10 py-12 md:py-14 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-4">
          <Wordmark dict={dict} locale={locale} />
          <p className="font-sans text-xs text-subtle">{dict.footer.location}</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center font-serif text-[0.95rem] whitespace-nowrap text-muted transition-colors duration-300 hover:text-link sm:min-h-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 lg:items-end lg:text-right">
          <p className="font-serif text-[0.95rem] text-ink" lang="ja">
            {dict.footer.taglineJa}
          </p>
          <p className="font-sans text-[0.7rem] text-subtle">
            © {new Date().getFullYear()} TEXORA. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
