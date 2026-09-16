import { serviceIcons } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionGrid } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { clsx } from "@/lib/clsx";
import type { Dictionary } from "@/lib/i18n";

const tones: Record<string, string> = {
  indigo: "bg-primary-soft text-link",
  matcha: "bg-matcha-soft text-matcha",
  coral: "bg-coral/12 text-coral",
};

type ServicesProps = {
  dict: Dictionary;
};

export function Services({ dict }: ServicesProps) {
  const { services } = dict;

  return (
    <Section id="services" alt>
      <SectionGrid>
        <Reveal>
          <SectionLabel
            index={services.index}
            labelJa={services.labelJa}
            labelEn={services.labelEn}
            note={services.note}
          />
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.items.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? serviceIcons.code;
            return (
              <Reveal as="li" key={service.id} delay={index * 70} className="h-full">
                <article
                  className={clsx(
                    "group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 sm:p-6",
                    "shadow-card transition-[transform,box-shadow,border-color] duration-500 ease-japanese",
                    "hover:-translate-y-1 hover:border-primary/35 hover:shadow-card-hover",
                  )}
                >
                  <span
                    className={clsx(
                      "grid h-11 w-11 place-items-center rounded-xl transition-transform duration-500 ease-japanese group-hover:scale-105",
                      tones[service.tone] ?? tones.indigo,
                    )}
                  >
                    <Icon className="h-[1.3rem] w-[1.3rem]" />
                  </span>

                  <h3 className="mt-5 font-serif text-[1.16rem] leading-snug font-medium text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-serif text-[0.94rem] leading-[1.75] text-muted">
                    {service.summary}
                  </p>

                  {/* Revealed on hover from sm up; always readable on touch. */}
                  <p className="mt-2.5 font-serif text-[0.88rem] leading-[1.8] text-subtle sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:transition-[max-height,opacity,margin] sm:duration-500 sm:ease-japanese sm:group-hover:mt-2.5 sm:group-hover:max-h-40 sm:group-hover:opacity-100">
                    {service.detail}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-1.5 pt-1">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-line bg-bg-alt px-2.5 py-1 font-sans text-[0.68rem] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </SectionGrid>
    </Section>
  );
}
