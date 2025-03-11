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
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
              Langues
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  Français
                </span>
                <Badge className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
                  Natif
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  Anglais
                </span>
                <Badge className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0">
                  Courant
                </Badge>
              </div>
              <div className="flex justify-between">
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
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
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
                Résolution de problèmes
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
      </CardContent>
    </Card>
  );
}
