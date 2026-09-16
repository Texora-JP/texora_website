import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { IconArrowRight } from "@/components/ui/Icons";
import { clsx } from "@/lib/clsx";

type Variant = "primary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-fg border border-transparent hover:bg-primary-hover shadow-[0_6px_18px_-8px_rgba(19,69,139,0.7)]",
  outline:
    "border border-line-strong bg-surface/70 text-ink backdrop-blur-sm hover:border-primary hover:text-primary",
  ghost: "border border-transparent text-primary hover:text-primary-hover",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  children: ReactNode;
  /** Renders the trailing arrow that nudges right on hover. */
  arrow?: boolean;
};

export function ButtonLink({
  variant = "primary",
  arrow = true,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        // min-h-12 keeps every CTA above the 44px touch-target floor on phones.
        "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3",
        "font-serif text-[0.95rem] leading-none whitespace-nowrap",
        "transition-[background-color,border-color,color,transform] duration-300 ease-japanese",
        "active:scale-[0.98]",
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      {arrow && (
        <IconArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 ease-japanese group-hover:translate-x-1" />
      )}
    </Link>
  );
}
