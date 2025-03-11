"use client";

import { Globe, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function LanguagesCard() {
  return (
    <div>
      <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
        <Globe className="mr-1.5 size-4 text-slate-500" />
        Langues & Soft Skills
      </h2>

      <div className="space-y-3">
        <div>
          <h3 className="font-medium text-slate-900 dark:text-white text-sm mb-1.5 border-b border-slate-200 dark:border-zinc-800 pb-0.5">
            Langues
          </h3>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Français
              </span>
              <Badge className="text-xs h-5 px-1.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
                Natif
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Anglais
              </span>
              <Badge className="text-xs h-5 px-1.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
                Courant
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Japonais
              </span>
              <Badge className="text-xs h-5 px-1.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
                Débutant
              </Badge>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-slate-900 dark:text-white text-sm mb-1.5 border-b border-slate-200 dark:border-zinc-800 pb-0.5 flex items-center">
            <Brain className="mr-1.5 size-3.5 text-slate-500" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-1">
            <Badge className="text-xs h-5 px-1.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
              Travail d'équipe
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
              Communication
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
              Résolution
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
              Adaptabilité
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
              Autonomie
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
              Rigueur
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
