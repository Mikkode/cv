"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { SkillsCard } from "@/components/cv/skills-card";
import { ExperienceCard } from "@/components/cv/experience-card";
import { EducationCard } from "@/components/cv/education-card";
import { InfoCard } from "./info-card";
import { ProfileCard } from "./profile-card";
import { useLanguage } from "@/contexts/language-context";

export function ResumeContent() {
  const { dictionary } = useLanguage();

  return (
    <div className="relative w-full bg-white dark:bg-zinc-900 shadow-lg rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-800 resume-content">
      <BorderBeam
        className="print-hidden"
        size={700}
        duration={20}
        delay={0.5}
        colorFrom="#059669"
      />

      <BorderBeam
        className="print-hidden"
        size={700}
        duration={20}
        delay={10}
        colorFrom="#059669"
      />

      {/* En-tête du CV */}
      <div className="p-3 border-b border-slate-200 dark:border-zinc-800 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {dictionary.profile.name}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {dictionary.profile.title}
        </p>
      </div>

      {/* Corps du CV */}
      <div className="flex flex-col md:flex-row print:!flex-row print:!w-[21cm]">
        {/* Colonne de gauche */}
        <div className="md:w-1/4 p-3 border-r border-slate-200 dark:border-zinc-800 print:!w-[5cm] print:!flex-none">
          <div className="space-y-4">
            <InfoCard />
            <div className="border-t border-slate-200 dark:border-zinc-800 pt-4">
              <ProfileCard />
            </div>
          </div>
        </div>

        {/* Colonne de droite */}
        <div className="md:w-3/4 p-3 print:!flex-1">
          <div className="space-y-4">
            <ExperienceCard />
            <div className="border-t border-slate-200 dark:border-zinc-800 pt-4 mt-4">
              <SkillsCard />
            </div>
            <div className="border-t border-slate-200 dark:border-zinc-800 pt-4 mt-4">
              <EducationCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
