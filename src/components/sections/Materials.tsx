import Link from "next/link";
import { IconArrowRight, IconArrowUpRight, IconMail, materialIcons } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionGrid } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/lib/i18n";

type MaterialsProps = {
  dict: Dictionary;
};

export function Materials({ dict }: MaterialsProps) {
  const { materials } = dict;

  return (
    <Section id="contact" alt>
      <SectionGrid>
        <Reveal>
          <SectionLabel
            index={materials.index}
            labelJa={materials.labelJa}
            labelEn={materials.labelEn}
          />
        </Reveal>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
          <ul className="grid gap-3 sm:grid-cols-2">
            {materials.items.map((item, index) => {
              const Icon = materialIcons[item.icon] ?? materialIcons.pdf;
              const external = item.href.startsWith("http");
              return (
                <Reveal as="li" key={item.id} delay={index * 60}>
                  <Link
                    href={item.href}
                    {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="group flex min-h-16 items-center gap-3.5 rounded-xl border border-line bg-surface p-4 shadow-card transition-[transform,border-color,box-shadow] duration-500 ease-japanese hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card-hover"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-bg-alt text-link">
                      <Icon className="h-[1.15rem] w-[1.15rem]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-serif text-[0.98rem] leading-snug text-ink">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block font-sans text-[0.72rem] leading-snug text-subtle">
                        {item.note}
                      </span>
                    </span>
                    <IconArrowUpRight className="h-4 w-4 shrink-0 text-subtle transition-[transform,color] duration-300 ease-japanese group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-link" />
                  </Link>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={200}>
            <a
              href={`mailto:${materials.contact.email}`}
              className="group flex h-full min-h-32 flex-col justify-between gap-6 rounded-2xl bg-primary p-6 text-primary-fg shadow-[0_18px_44px_-20px_rgba(19,69,139,0.9)] transition-[transform,background-color] duration-500 ease-japanese hover:-translate-y-1 hover:bg-primary-hover sm:p-7"
            >
              <span className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12">
                  <IconMail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-serif text-[1.3rem] leading-tight" lang="ja">
                    {materials.contact.titleJa}
                  </span>
                  <span className="mt-1.5 block font-serif text-[0.95rem] leading-[1.6] text-white/80">
                    {materials.contact.titleEn}
                  </span>
                </span>
              </span>

              <span className="flex items-center justify-between gap-4 border-t border-white/20 pt-4">
                <span className="font-sans text-[0.85rem] break-all text-white/90">
                  {materials.contact.email}
                </span>
                <IconArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 ease-japanese group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        </div>
      </SectionGrid>
    </Section>
  );
}
