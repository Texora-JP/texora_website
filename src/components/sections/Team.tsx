import { Hanko } from "@/components/ui/Hanko";
import { IconPin } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionGrid } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { clsx } from "@/lib/clsx";
import type { Dictionary } from "@/lib/i18n";

const portraitTones = [
  "from-primary/22 to-matcha/18",
  "from-matcha/22 to-primary/14",
  "from-accent/22 to-matcha/16",
  "from-primary/18 to-coral/14",
  "from-coral/16 to-primary/20",
];

/**
 * Placeholder portrait. Replace with real photographs before launch — the
 * brief is explicit that faces are what earns trust on this section.
 */
function Portrait({ index, seal }: { index: number; seal: string }) {
  return (
    <div
      className={clsx(
        "relative grid h-full w-full place-items-center overflow-hidden bg-linear-to-br",
        portraitTones[index % portraitTones.length],
      )}
    >
      <svg
        viewBox="0 0 120 150"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
        className="absolute inset-0 h-full w-full"
      >
        <g className="stroke-ink/10" strokeWidth="0.6" fill="none">
          {[30, 60, 90].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="150" />
          ))}
          {[38, 76, 114].map((y) => (
            <line key={y} x1="0" y1={y} x2="120" y2={y} />
          ))}
        </g>
        <circle cx="60" cy="58" r="24" className="fill-surface/70" />
        <path d="M18 150 a 42 42 0 0 1 84 0 Z" className="fill-surface/70" />
      </svg>
      <span className="relative font-serif text-[1.75rem] leading-none text-ink/40 sm:text-[2rem]">
        {seal}
      </span>
    </div>
  );
}

type TeamProps = {
  dict: Dictionary;
};

export function Team({ dict }: TeamProps) {
  const { team } = dict;

  return (
    <Section id="team" alt>
      <SectionGrid>
        <Reveal>
          <SectionLabel
            index={team.index}
            labelJa={team.labelJa}
            labelEn={team.labelEn}
            note={team.note}
          />
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {team.members.map((member, index) => (
            <Reveal as="article" key={member.id} delay={index * 60} className="h-full">
              {/* Phones get a compact row; from sm the card turns into a portrait tile. */}
              <div className="flex h-full flex-row overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-[transform,box-shadow,border-color] duration-500 ease-japanese hover:-translate-y-1 hover:border-primary/35 hover:shadow-card-hover sm:flex-col">
                <div className="w-24 shrink-0 self-stretch sm:aspect-[4/5] sm:w-full sm:self-auto">
                  <Portrait index={index} seal={member.seal} />
                </div>

                <div className="flex min-w-0 flex-1 flex-col p-4">
                  <h3 className="font-serif text-[1.02rem] leading-tight text-ink">{member.name}</h3>
                  <p className="mt-0.5 font-sans text-[0.68rem] text-subtle">{member.nameAlt}</p>
                  <p className="mt-2 font-serif text-[0.8rem] leading-[1.6] text-link">
                    {member.role}
                  </p>
                  <p className="mt-2.5 font-serif text-[0.82rem] leading-[1.7] text-muted">
                    {member.bio}
                  </p>

                  <ul className="mt-3.5 flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-line bg-bg-alt px-2 py-0.5 font-sans text-[0.64rem] text-muted"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-auto flex items-center gap-1.5 pt-3.5 font-sans text-[0.66rem] text-subtle">
                    <IconPin className="h-3.5 w-3.5" />
                    {member.location}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Closing note, filling the sixth cell of the grid. */}
          <Reveal
            as="aside"
            delay={360}
            className="h-full sm:col-span-2 lg:col-span-1"
          >
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-dashed border-line-strong bg-bg p-5">
              <p
                className="font-serif text-[1.05rem] leading-[1.85] whitespace-pre-line text-ink"
                lang="ja"
              >
                {team.quoteJa}
              </p>
              <div>
                <p className="font-serif text-[0.86rem] leading-[1.7] text-muted">{team.quoteEn}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
                  <span className="font-serif text-[0.95rem] tracking-[0.16em] text-ink">
                    TEXORA
                  </span>
                  <Hanko className="w-5 text-[0.72rem]" char={dict.brand.seal} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionGrid>
    </Section>
  );
}
