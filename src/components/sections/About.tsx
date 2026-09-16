import { statIcons } from "@/components/ui/Icons";
import { JaText } from "@/components/ui/JaText";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionGrid } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/lib/i18n";

type AboutProps = {
  dict: Dictionary;
};

export function About({ dict }: AboutProps) {
  const { about } = dict;

  return (
    <Section id="about">
      <div aria-hidden className="motif-seigaiha pointer-events-none absolute inset-x-0 top-0 h-24" />

      <SectionGrid className="relative">
        <Reveal>
          <SectionLabel
            index={about.index}
            labelJa={about.labelJa}
            labelEn={about.labelEn}
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
          <Reveal delay={80}>
            <h3 className="font-serif text-[1.35rem] leading-[1.6] font-medium text-ink sm:text-[1.6rem]" lang="ja">
              <JaText text={about.headingJa} />
            </h3>
            <p className="mt-4 font-serif text-[0.98rem] leading-[2] text-muted" lang="ja">
              <JaText text={about.headingJaSub} />
            </p>

            <div className="mt-7 border-t border-line pt-6">
              {about.body.map((line) => (
                <p key={line} className="font-serif text-[0.98rem] leading-[1.95] text-muted">
                  {line}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={160}
            className="grid grid-cols-3 gap-4 border-t border-line pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
          >
            {about.stats.map((stat) => {
              const Icon = statIcons[stat.icon] ?? statIcons.globe;
              return (
                <div key={stat.label} className="flex flex-col items-center gap-2 text-center lg:px-2">
                  <Icon className="h-5 w-5 text-link" />
                  <span className="mt-1 font-serif text-[1.15rem] leading-none text-ink">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[0.68rem] tracking-[0.1em] text-subtle">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </Reveal>
        </div>
      </SectionGrid>
    </Section>
  );
}
