import { clsx } from "@/lib/clsx";

type SectionLabelProps = {
  index: string;
  labelJa: string;
  labelEn: string;
  /** Optional vertical-rhythm note printed under the rule, e.g. 技術で、可能性を広げる */
  note?: string;
  className?: string;
};

/**
 * The numbered bilingual rail that opens every section:
 *   01
 *   私たちについて
 *   ABOUT
 *   ────
 */
export function SectionLabel({ index, labelJa, labelEn, note, className }: SectionLabelProps) {
  return (
    <div className={clsx("flex flex-col", className)}>
      <span className="font-sans text-[0.7rem] leading-none tracking-[0.18em] text-link tabular-nums">
        {index}
      </span>
      <h2 className="mt-2.5 font-serif text-[1.35rem] leading-tight font-medium text-ink sm:text-[1.55rem]" lang="ja">
        {labelJa}
      </h2>
      <span className="mt-1.5 font-sans text-[0.62rem] leading-none tracking-[0.26em] text-subtle uppercase">
        {labelEn}
      </span>
      <span aria-hidden className="mt-5 h-px w-9 bg-line-strong" />
      {note && (
        <p
          className="mt-5 hidden font-serif text-[0.86rem] leading-[1.9] whitespace-pre-line text-muted lg:block"
          lang="ja"
        >
          {note}
        </p>
      )}
    </div>
  );
}
