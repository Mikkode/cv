"use client";

import { GraduationCap } from "lucide-react";

export function EducationCard() {
  return (
    <div>
      <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
        <GraduationCap className="mr-1.5 size-4 text-slate-500" />
        Formation
      </h2>

      <div>
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium text-base text-slate-900 dark:text-white">
            Master en Développement Informatique
          </h3>
          <span className="text-xs font-medium px-1.5 py-0.5 bg-slate-100 dark:bg-zinc-800 rounded-full text-slate-700 dark:text-slate-300">
            2014 - 2017
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          ETNA, école d'alternance - Formation spécialisée en développement web
          et mobile
        </p>
      </div>
    </div>
  );
}
