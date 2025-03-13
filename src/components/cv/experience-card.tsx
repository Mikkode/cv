"use client";

import { Briefcase, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function ExperienceCard() {
  const { dictionary } = useLanguage();

  return (
    <div>
      <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center bg-slate-100 dark:bg-zinc-800 p-2 rounded-md">
        <Briefcase className="mr-1.5 size-4 text-emerald-600 dark:text-emerald-400" />
        {dictionary.experience.title}
      </h2>

      <div className="space-y-4">
        {dictionary.experience.items.map((experience, index) => (
          <div
            key={index}
            className={
              index > 0
                ? "border-t border-slate-200 dark:border-zinc-800 pt-3"
                : ""
            }
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-base text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-2 py-0.5">
                {experience.position}
              </h3>
              <span className="text-xs font-medium px-1.5 py-0.5 bg-slate-100 dark:bg-zinc-800 rounded-full text-slate-700 dark:text-slate-300">
                {experience.period}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 print:text-xs">
              {experience.description}
            </p>
            <div className="space-y-1.5 print:space-y-0.5">
              {experience.achievements.map((achievement, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-400 print:text-xs">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
            {experience.conclusion && (
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 print:text-xs">
                {experience.conclusion}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
