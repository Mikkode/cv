"use client";

import { Globe, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function LanguagesCard() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
        <Globe className="mr-2 size-5 text-slate-500" />
        Langues & Soft Skills
      </h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-slate-900 dark:text-white text-sm mb-2 border-b border-slate-200 dark:border-zinc-800 pb-1">
            Langues
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Français
              </span>
              <Badge className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
                Natif
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Anglais
              </span>
              <Badge className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
                Courant
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Japonais
              </span>
              <Badge className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
                Débutant
              </Badge>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-slate-900 dark:text-white text-sm mb-2 border-b border-slate-200 dark:border-zinc-800 pb-1 flex items-center">
            <Brain className="mr-2 size-4 text-slate-500" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
              Travail d'équipe
            </Badge>
            <Badge className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
              Communication
            </Badge>
            <Badge className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
              Résolution
            </Badge>
            <Badge className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
              Adaptabilité
            </Badge>
            <Badge className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
              Autonomie
            </Badge>
            <Badge className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
              Rigueur
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
