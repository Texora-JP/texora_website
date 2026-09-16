"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { clsx } from "@/lib/clsx";

type RevealProps = {
  children: ReactNode;
  /** Stagger, in milliseconds, applied to the transition. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Fades content up as it enters the viewport, once.
 * `prefers-reduced-motion` is handled in CSS, so this stays a no-op there.
 */
export function Reveal({ children, delay = 0, as, className }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // No observer support: show the content straight away by touching the
      // DOM, rather than kicking off another render pass.
      node.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible || undefined}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={clsx("reveal", className)}
    >
      {children}
    </Tag>
  );
}
