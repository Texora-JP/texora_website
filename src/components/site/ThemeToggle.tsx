"use client";

import { useSyncExternalStore } from "react";
import { IconMoon, IconSun } from "@/components/ui/Icons";
import { clsx } from "@/lib/clsx";
import {
  applyTheme,
  getServerTheme,
  getTheme,
  subscribeToTheme,
  type Theme,
} from "@/lib/theme";

type ThemeToggleProps = {
  label: string;
  className?: string;
};

const options: Array<{ value: Theme; Icon: typeof IconSun; name: string }> = [
  { value: "light", Icon: IconSun, name: "Light" },
  { value: "dark", Icon: IconMoon, name: "Dark" },
];

export function ThemeToggle({ label, className }: ThemeToggleProps) {
  // Reads <html class="dark"> directly, which the pre-paint script has already
  // set, so there is no second copy of the theme to keep in sync.
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);

  return (
    <div
      role="group"
      aria-label={label}
      className={clsx(
        "inline-flex shrink-0 items-center gap-0.5 rounded-full border border-line bg-surface/70 p-0.5 backdrop-blur-sm",
        className,
      )}
    >
      {options.map(({ value, Icon, name }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => applyTheme(value)}
            aria-pressed={active}
            title={name}
            className={clsx(
              "grid h-8 w-8 place-items-center rounded-full transition-colors duration-300 ease-japanese",
              active ? "bg-primary text-primary-fg" : "text-subtle hover:text-ink",
            )}
          >
            <Icon className="h-[0.95rem] w-[0.95rem]" />
            <span className="sr-only">{name}</span>
          </button>
        );
      })}
    </div>
  );
}
