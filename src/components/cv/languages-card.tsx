"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function LanguagesCard() {
  return (
    <Card className="overflow-hidden border-0 shadow-md bg-white dark:bg-zinc-900">
      <CardHeader className="pb-2 border-b border-slate-100 dark:border-zinc-800">
        <CardTitle className="text-lg flex items-center text-slate-900 dark:text-white">
          <Globe className="mr-2 size-5 text-slate-500" />
          Langues & Soft Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">
              Langues
            </h3>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-700 dark:text-slate-300">
                  Français
                </span>
                <Badge className="text-xs h-5 px-1.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
                  Natif
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-700 dark:text-slate-300">
                  Anglais
                </span>
                <Badge className="text-xs h-5 px-1.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
                  Courant
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-700 dark:text-slate-300">
                  Japonais
                </span>
                <Badge className="text-xs h-5 px-1.5 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
                  Débutant
                </Badge>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-2 flex items-center">
              <Brain className="mr-1.5 size-3.5 text-slate-500" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-1.5">
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
      </CardContent>
    </Card>
  );
}
