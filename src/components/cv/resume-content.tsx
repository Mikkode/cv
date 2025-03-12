"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { ProfileCard } from "@/components/cv/profile-card";
import { SkillsCard } from "@/components/cv/skills-card";
import { ExperienceCard } from "@/components/cv/experience-card";
import { EducationCard } from "@/components/cv/education-card";
import { LanguagesCard } from "@/components/cv/languages-card";

export function ResumeContent() {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-800">
      <BorderBeam
        className="print-hidden"
        size={800}
        duration={20}
        delay={0.5}
        colorFrom="emerald"
      />

      {/* En-tête du CV */}
      <div className="p-3 border-b border-slate-200 dark:border-zinc-800 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Mickaël WARIN
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Développeur Full Stack
        </p>
      </div>

      {/* Corps du CV */}
      <div className="flex flex-col md:flex-row">
        {/* Colonne de gauche */}
        <div className="md:w-1/4 p-3 border-r border-slate-200 dark:border-zinc-800">
          <div className="space-y-4">
            <ProfileCard />
            <div className="border-t border-slate-200 dark:border-zinc-800 pt-4">
              <LanguagesCard />
            </div>
          </div>
        </div>

        {/* Colonne de droite */}
        <div className="md:w-3/4 p-3">
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
