import type { ReactNode } from "react";
import { clsx } from "@/lib/clsx";

type SectionProps = {
  id?: string;
  children: ReactNode;
  /** Uses the alternate band surface, for rhythm between sections. */
  alt?: boolean;
  /** Tightens the vertical padding — used for the technology strip. */
  tight?: boolean;
  className?: string;
};

export function Section({ id, children, alt = false, tight = false, className }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative scroll-mt-20 border-t border-line",
        alt ? "bg-bg-alt" : "bg-bg",
        className,
      )}
    >
      <div className={clsx("shell", tight ? "py-8 sm:py-10" : "py-14 sm:py-18 lg:py-24")}>
        {children}
      </div>
    </section>
  );
}

/**
 * The two-column reading grid used across the page: a narrow bilingual label
 * rail on the left, content on the right. Collapses to one column on phones.
 */
export function SectionGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "grid gap-x-10 gap-y-9 lg:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] xl:gap-x-14",
        className,
      )}
    >
      {children}
    </div>
  );
}
