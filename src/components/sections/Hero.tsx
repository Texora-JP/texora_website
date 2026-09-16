import { HeroVisual } from "@/components/sections/HeroVisual";
import { ButtonLink } from "@/components/ui/Button";
import { Hanko } from "@/components/ui/Hanko";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n";

type HeroProps = {
  dict: Dictionary;
};

export function Hero({ dict }: HeroProps) {
  const { hero } = dict;

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="motif-shoji pointer-events-none absolute inset-0 -z-10" />

      <div className="shell relative z-10">
        <div className="pt-24 pb-10 sm:pt-28 lg:w-[56%] lg:pt-44 lg:pb-36">
          <Reveal className="flex items-center gap-4">
            <p className="font-sans text-[0.72rem] tracking-[0.2em] text-accent sm:text-[0.78rem]" lang="ja">
              {hero.eyebrow}
            </p>
            <span aria-hidden className="h-px w-10 bg-line-strong sm:w-14" />
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-serif leading-[1.1] font-medium text-ink">
              {/* Sized so the phrase holds on one line from 320px upward. */}
              <span
                className="block text-[clamp(2.15rem,5.6vw,4rem)] tracking-[-0.01em] text-nowrap"
                lang="ja"
              >
                {hero.titleJa}
              </span>
              <span className="mt-2 block text-[clamp(1.45rem,5.2vw,2.5rem)] font-normal text-ink/85">
                {hero.titleEn}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-[34rem] font-serif text-[1.02rem] leading-[1.85] text-muted sm:text-[1.1rem]">
              {hero.lead}
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <ButtonLink href="#projects">{hero.primaryCta}</ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              {hero.secondaryCta}
            </ButtonLink>
          </Reveal>

          <Reveal delay={320} className="mt-10 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-line-strong" />
            <p className="font-serif text-[0.68rem] tracking-[0.22em] text-subtle uppercase sm:text-[0.75rem]">
              {hero.strap}
            </p>
          </Reveal>
        </div>
      </div>

      {/* The illustration: stacked under the copy on phones, bleeding off the
          right edge from lg upward, the way the approved mockup does. */}
      <div className="relative h-[68vw] max-h-[26rem] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:max-h-none lg:w-[58%] xl:w-[56%]">
        <HeroVisual dict={dict} />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-bg to-transparent lg:hidden"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 hidden w-2/5 bg-linear-to-r from-bg via-bg/55 to-transparent lg:block"
        />
      </div>

      {/* Vertical rail — 良い技術で、より良い社会を */}
      <div className="pointer-events-none absolute top-32 right-5 z-20 hidden flex-col items-center gap-5 xl:flex">
        <p className="vertical-jp font-serif text-[0.8rem] text-ink/70" lang="ja">
          {hero.vertical}
        </p>
        <Hanko className="w-7 text-[0.85rem]" char={dict.brand.seal} />
      </div>
    </section>
  );
}
