"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, CheckCircle } from "lucide-react";

export function ApproachCard() {
  return (
    <Card className="overflow-hidden h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-slate-200 dark:border-zinc-800 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Rocket className="mr-2 size-5 text-blue-500" />
          Mon approche
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">
          Issu d'un Master 2 spécialisé en développement, j'ai été formé aux
          nouvelles technologies web et mobile. Après 9 ans chez Thales sur des
          applications critiques, je mets cette rigueur au service du
          développement web full-stack.
        </p>

        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <CheckCircle className="size-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              Développement d'applications web modernes et performantes
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="size-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              Architecture scalable et optimisée pour la performance
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="size-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              Interfaces utilisateur intuitives et responsives
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="size-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm">Tests, qualité du code et sécurité</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
