"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LocaleToggle } from "@/components/site/LocaleToggle";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { ButtonLink } from "@/components/ui/Button";
import { IconClose, IconMenu } from "@/components/ui/Icons";
import { Wordmark } from "@/components/ui/Wordmark";
import { clsx } from "@/lib/clsx";
import type { Dictionary, Locale } from "@/lib/i18n";

type HeaderProps = {
  dict: Dictionary;
  locale: Locale;
};

export function Header({ dict, locale }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#projects", label: dict.nav.projects },
    { href: "#team", label: dict.nav.team },
    { href: "#partnership", label: dict.nav.partnership },
    { href: "#contact", label: dict.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trap the page behind the drawer and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ease-japanese",
        scrolled || open
          ? "border-b border-line bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Wordmark dict={dict} locale={locale} />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-serif text-[0.95rem] whitespace-nowrap text-muted transition-colors duration-300 ease-japanese hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:ease-japanese hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language and theme stay reachable at every width, per the brief. */}
          <LocaleToggle current={locale} label={dict.nav.languageToggle} />
          <ThemeToggle label={dict.nav.themeToggle} />
          {/* Wrapped rather than given `hidden` directly: ButtonLink sets its own
              display utility, and Tailwind resolves that conflict by source order
              in the stylesheet, not by the order in the class attribute. */}
          <span className="hidden lg:block">
            <ButtonLink href="#contact" className="px-5 text-[0.9rem]">
              {dict.nav.contactCta}
            </ButtonLink>
          </span>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.nav.close : dict.nav.menu}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-bg lg:hidden"
      >
        <div className="shell flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto py-5">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-between gap-4 border-b border-line/70 py-3 font-serif text-lg text-ink"
            >
              {link.label}
              <span className="font-sans text-[0.65rem] tracking-[0.2em] text-subtle tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}

          <div className="mt-5 flex items-center justify-between gap-4">
            <ButtonLink href="#contact" onClick={() => setOpen(false)} className="ml-auto">
              {dict.nav.contactCta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
