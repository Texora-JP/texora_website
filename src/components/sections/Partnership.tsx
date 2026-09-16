import { WorldMap } from "@/components/sections/WorldMap";
import { ButtonLink } from "@/components/ui/Button";
import { Hanko } from "@/components/ui/Hanko";
import { JaText } from "@/components/ui/JaText";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionGrid } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/lib/i18n";

type PartnershipProps = {
  dict: Dictionary;
};

export function Partnership({ dict }: PartnershipProps) {
  const { partnership } = dict;

  return (
    <Section id="partnership" className="overflow-hidden">
      <div aria-hidden className="motif-shoji pointer-events-none absolute inset-0" />

      <SectionGrid className="relative">
        <Reveal>
          <SectionLabel
            index={partnership.index}
            labelJa={partnership.labelJa}
            labelEn={partnership.labelEn}
            note={partnership.note}
          />
        </Reveal>

        <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
          <Reveal>
            <h3
              className="font-serif text-[clamp(1.45rem,4.2vw,1.95rem)] leading-[1.45] font-medium text-ink"
              lang="ja"
            >
              <JaText text={partnership.headingJa} />
            </h3>
            <p className="mt-2.5 font-serif text-[1.05rem] leading-[1.7] text-ink/80">
              {partnership.headingEn}
            </p>

            <div className="mt-6 space-y-1">
              {partnership.bodyJa.map((line) => (
                <p key={line} className="font-serif text-[0.94rem] leading-[1.95] text-muted" lang="ja">
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-4 space-y-1 border-t border-line pt-4">
              {partnership.bodyEn.map((line) => (
                <p key={line} className="font-serif text-[0.92rem] leading-[1.9] text-muted">
                  {line}
                </p>
              ))}
            </div>

            <ButtonLink href="#contact" className="mt-8">
              {partnership.cta}
            </ButtonLink>
          </Reveal>

          <Reveal delay={140} className="relative">
            <WorldMap dict={dict} className="w-full" />
          </Reveal>
        </div>
      </SectionGrid>

      {/* Vertical rail — ともに、まだ見ぬ未来へ */}
      <div className="pointer-events-none absolute top-1/2 right-4 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex">
        <p className="vertical-jp font-serif text-[0.8rem] text-ink/60" lang="ja">
          {partnership.vertical}
        </p>
        <Hanko className="w-6 text-[0.78rem]" char={dict.brand.seal} />
      </div>
    </Section>
  );
}
