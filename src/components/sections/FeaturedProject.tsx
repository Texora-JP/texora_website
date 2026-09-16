import Image from "next/image";
import { ProjectArt } from "@/components/sections/ProjectArt";
import { IconArrowUpRight, IconLock } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import type { CaseStudy } from "@/content/types";
import { clsx } from "@/lib/clsx";
import type { Dictionary } from "@/lib/i18n";

type FeaturedProjectProps = {
  study: CaseStudy;
  labels: Pick<
    Dictionary["projects"],
    "problemLabel" | "solutionLabel" | "resultLabel" | "clientLabel"
  >;
};

/**
 * A lead case study: the long-form treatment the cards below cannot carry.
 * Problem and solution first, then measured outcomes where they exist, then
 * the system broken out by layer. Naming the layers — and dating the numbers —
 * is what separates a credible engineering portfolio from "we built an AI SaaS".
 */
export function FeaturedProject({ study, labels }: FeaturedProjectProps) {
  const hasMetrics = study.metrics.length > 0;
  // Confidential engagements have nothing public to link to.
  const hasLinks = Boolean(study.liveHref || study.caseStudyHref);

  return (
    <Reveal
      as="article"
      className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card"
    >
      <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        {/* The panel colour lives here so the diagram can letterbox inside it
            without the drawing being cropped. */}
        <div
          className={clsx(
            "relative overflow-hidden bg-primary/8 lg:aspect-auto lg:min-h-[24rem]",
            // Screenshots are wide; a squarer panel would crop their sides badly.
            study.image ? "aspect-[16/10]" : "aspect-[4/3] sm:aspect-[16/9]",
          )}
        >
          {study.image ? (
            <Image
              src={study.image}
              alt={study.imageAlt ?? ""}
              fill
              // The panel is never wider than half the 78rem shell.
              sizes="(min-width: 1024px) 45vw, 100vw"
              // Anchored top so the header and hero survive the crop.
              className="object-cover object-top"
              priority={false}
            />
          ) : (
            <ProjectArt variant={study.id} fit="meet" className="p-2 sm:p-4" />
          )}
          {/* The overlay text is always white, so this scrim stays dark in both
              themes — `ink` inverts and would fade to white behind it. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <p className="font-sans text-[0.6rem] tracking-[0.22em] text-white/75 uppercase">
              {study.year ? `${study.category} · ${study.year}` : study.category}
            </p>
            <h3 className="mt-2 font-serif text-[2rem] leading-none text-white sm:text-[2.4rem]">
              {study.name}
            </h3>
            <p className="mt-2.5 font-serif text-[0.9rem] leading-[1.6] text-white/85" lang="ja">
              {study.kicker}
            </p>
          </div>
        </div>

        <div className="flex flex-col p-5 sm:p-7 lg:p-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-sans text-[0.62rem] tracking-[0.26em] text-link uppercase">
              {study.eyebrow}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-matcha/40 bg-matcha-soft px-2.5 py-1 font-sans text-[0.66rem] text-matcha">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-matcha" />
              {study.status}
            </span>
          </div>

          <p className="mt-2.5 font-sans text-[0.72rem] text-subtle">
            {labels.clientLabel} — {study.client}
          </p>

          <p className="mt-3.5 font-serif text-[1.15rem] leading-[1.65] text-ink sm:text-[1.3rem]">
            {study.summary}
          </p>

          <dl className="mt-5 space-y-3 border-t border-line pt-5 text-[0.9rem] leading-[1.8]">
            <div className="grid gap-1 sm:grid-cols-[5rem_1fr] sm:gap-3">
              <dt className="font-sans text-[0.68rem] tracking-[0.08em] text-coral">
                {labels.problemLabel}
              </dt>
              <dd className="font-serif text-muted">{study.problem}</dd>
            </div>
            <div className="grid gap-1 sm:grid-cols-[5rem_1fr] sm:gap-3">
              <dt className="font-sans text-[0.68rem] tracking-[0.08em] text-matcha">
                {labels.solutionLabel}
              </dt>
              <dd className="font-serif text-muted">{study.solution}</dd>
            </div>
          </dl>

          {hasLinks && (
            <div className="mt-6 flex flex-wrap gap-2.5">
              {study.liveHref && (
                <a
                  href={study.liveHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 font-serif text-[0.9rem] text-primary-fg transition-colors duration-300 ease-japanese hover:bg-primary-hover"
                >
                  {study.liveLabel}
                  <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-japanese group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
              {study.caseStudyHref && (
                <a
                  href={study.caseStudyHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-5 font-serif text-[0.9rem] text-ink transition-colors duration-300 ease-japanese hover:border-primary hover:text-link"
                >
                  {study.caseStudyLabel}
                  <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-japanese group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          )}

          {/* Explains the missing links rather than leaving a gap. */}
          {study.access && (
            <p className="mt-6 flex items-start gap-2 rounded-lg border border-dashed border-line-strong px-3.5 py-2.5 font-sans text-[0.72rem] leading-[1.6] text-subtle">
              <IconLock className="mt-[0.15em] h-3.5 w-3.5 shrink-0" />
              {study.access}
            </p>
          )}
        </div>
      </div>

      {/* Measured outcomes. Only rendered when the project actually has them,
          and always carrying the note that says when they were measured. */}
      {hasMetrics && (
        <div className="border-t border-line bg-primary/4 px-5 py-6 sm:px-7">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 xl:grid-cols-6">
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="sr-only">{metric.label}</dt>
                <dd>
                  <span className="block font-serif text-[1.65rem] leading-none text-ink tabular-nums sm:text-[1.9rem]">
                    {metric.value}
                  </span>
                  <span className="mt-2 block font-sans text-[0.68rem] leading-snug text-subtle">
                    {metric.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 font-sans text-[0.68rem] text-subtle">{study.metricsNote}</p>
        </div>
      )}

      {/* The system, layer by layer */}
      <div className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {study.specs.map((spec) => (
          <div key={spec.label} className="bg-surface p-5">
            <h4 className="font-sans text-[0.62rem] tracking-[0.2em] text-subtle uppercase">
              {spec.label}
            </h4>
            <ul className="mt-3 space-y-1.5">
              {spec.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 font-serif text-[0.84rem] leading-[1.6] text-muted"
                >
                  <span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-link" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="border-t border-line bg-bg-alt p-5 font-serif text-[0.92rem] leading-[1.75] text-ink/85 sm:px-7">
        <span className="font-sans text-[0.68rem] tracking-[0.08em] text-subtle">
          {labels.resultLabel} —{" "}
        </span>
        {study.result}
      </p>
    </Reveal>
  );
}
