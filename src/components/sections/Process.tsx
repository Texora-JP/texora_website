import { JaText } from "@/components/ui/JaText";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionGrid } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/lib/i18n";

type ProcessProps = {
  dict: Dictionary;
};

export function Process({ dict }: ProcessProps) {
  const { process } = dict;

  return (
    <Section id="process">
      <SectionGrid>
        <Reveal>
          <SectionLabel
            index={process.index}
            labelJa={process.labelJa}
            labelEn={process.labelEn}
          />
        </Reveal>

        <div>
          <Reveal>
            <h3 className="max-w-[36rem] font-serif text-[1.35rem] leading-[1.6] font-medium text-ink sm:text-[1.6rem]" lang="ja">
              <JaText text={process.headingJa} />
            </h3>
            <p className="mt-3 max-w-[38rem] font-serif text-[0.98rem] leading-[1.9] text-muted">
              {process.headingEn}
            </p>
          </Reveal>

          <ol className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 xl:grid-cols-5">
            {process.steps.map((step, index) => (
              <Reveal as="li" key={step.step} delay={index * 60} className="h-full">
                <div className="flex h-full flex-col bg-surface p-5">
                  <span className="font-sans text-[0.72rem] tracking-[0.18em] text-link tabular-nums">
                    {step.step}
                  </span>
                  <h4 className="mt-3 font-serif text-[1.05rem] leading-snug text-ink">
                    {step.title}
                  </h4>
                  <p className="mt-2 font-serif text-[0.86rem] leading-[1.8] text-muted">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200}>
            <ul className="mt-6 flex flex-wrap gap-2">
              {process.facts.map((fact) => (
                <li
                  key={fact}
                  className="flex items-center gap-2 rounded-full border border-line bg-bg-alt px-3.5 py-1.5 font-serif text-[0.82rem] text-muted"
                >
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-coral" />
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionGrid>
    </Section>
  );
}
