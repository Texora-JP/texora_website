import { clsx } from "@/lib/clsx";

type HankoProps = {
  /** The character carved into the seal. */
  char?: string;
  className?: string;
};

/**
 * Hanko — the small red seal that acts as TEXORA's secondary brand mark.
 * Deliberately imperfect edges keep it from reading as a plain red square.
 */
export function Hanko({ char = "拓", className }: HankoProps) {
  return (
    <span
      aria-hidden
      className={clsx(
        "inline-grid aspect-square place-items-center rounded-[3px] bg-seal font-sans leading-none text-white select-none",
        "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]",
        className,
      )}
    >
      <span className="translate-y-[0.02em]">{char}</span>
    </span>
  );
}
