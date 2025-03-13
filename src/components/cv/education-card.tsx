"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function EducationCard() {
  const { dictionary } = useLanguage();

  return (
    <div>
      <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center bg-slate-100 dark:bg-zinc-800 p-2 rounded-md">
        <GraduationCap className="mr-1.5 size-4 text-emerald-600 dark:text-emerald-400" />
        {dictionary.education.title}
      </h2>

      <div>
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium text-base text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-2 py-0.5">
            {dictionary.education.degree}
          </h3>
          <span className="text-xs font-medium px-1.5 py-0.5 bg-slate-100 dark:bg-zinc-800 rounded-full text-slate-700 dark:text-slate-300">
            {dictionary.education.period}
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {dictionary.education.description}
        </p>
      </div>
    </div>
  );
}
