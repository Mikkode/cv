"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationCard() {
  return (
    <Card className="overflow-hidden border-0 shadow-md bg-white dark:bg-zinc-900">
      <CardHeader className="pb-2 border-b border-slate-100 dark:border-zinc-800">
        <CardTitle className="text-lg flex items-center text-slate-900 dark:text-white">
          <GraduationCap className="mr-2 size-5 text-slate-500" />
          Formation
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Master en Développement Informatique
            </h3>
            <span className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-zinc-800 rounded-full text-slate-700 dark:text-slate-300">
              2014 - 2017
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            ETNA, école d'alternance - Formation spécialisée en développement
            web et mobile
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
