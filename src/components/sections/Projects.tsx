import Link from "next/link";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { IconArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionGrid } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/lib/i18n";

type ProjectsProps = {
  dict: Dictionary;
};

export function Projects({ dict }: ProjectsProps) {
  const { projects } = dict;

  return (
    <Section id="projects">
      <SectionGrid>
        <div>
          <Reveal>
            <SectionLabel
              index={projects.index}
              labelJa={projects.labelJa}
              labelEn={projects.labelEn}
              note={projects.note}
            />
          </Reveal>
          <Reveal delay={120}>
            <Link
              href="#contact"
              className="group mt-8 inline-flex min-h-11 items-center gap-2 font-serif text-[0.95rem] text-link transition-colors duration-300 hover:text-link-hover"
            >
              {projects.viewAll}
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 ease-japanese group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5">
          {projects.featured.map((study) => (
            <FeaturedProject
              key={study.id}
              study={study}
              labels={{
                problemLabel: projects.problemLabel,
                solutionLabel: projects.solutionLabel,
                resultLabel: projects.resultLabel,
                clientLabel: projects.clientLabel,
              }}
            />
          ))}
        </div>
      </SectionGrid>
    </Section>
  );
}
