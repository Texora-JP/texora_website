import { notFound } from "next/navigation";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Materials } from "@/components/sections/Materials";
import { Partnership } from "@/components/sections/Partnership";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { TechStack } from "@/components/sections/TechStack";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <About dict={dict} />
      <Services dict={dict} />
      <Projects dict={dict} />
      <TechStack dict={dict} />
      <Team dict={dict} />
      <Process dict={dict} />
      <Partnership dict={dict} />
      <Materials dict={dict} />
    </>
  );
}
