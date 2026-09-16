import { techMarks } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n";

type TechStackProps = {
  dict: Dictionary;
};

export function TechStack({ dict }: TechStackProps) {
  const { stack } = dict;
  // Duplicated once so the marquee can loop seamlessly at -50%.
  const lane = [...stack.items, ...stack.items];

  return (
    <Section alt tight className="overflow-hidden">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
        <div className="shrink-0">
          <p className="font-sans text-[0.62rem] tracking-[0.26em] text-subtle uppercase">
            {stack.labelEn}
          </p>
          <p className="mt-1 font-serif text-[0.86rem] text-muted" lang="ja">
            {stack.labelJa}
          </p>
        </div>

        <div
          className="relative min-w-0 flex-1 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
          aria-hidden
        >
          <ul className="animate-marquee flex w-max items-center gap-2.5 pr-2.5">
            {lane.map((name, index) => {
              const Mark = techMarks[name];
              return (
                <li
                  key={`${name}-${index}`}
                  className="flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5 shadow-card"
                >
                  {Mark && <Mark className="h-[1.1rem] w-[1.1rem] text-link" />}
                  <span className="font-serif text-[0.9rem] whitespace-nowrap text-ink">{name}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* The marquee is decorative; this keeps the list available to readers. */}
        <p className="sr-only">{stack.items.join(", ")}</p>
      </div>
    </Section>
  );
}
