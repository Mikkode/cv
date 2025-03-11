"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Rocket } from "lucide-react";
import { BorderBeam } from "../magicui/border-beam";

export function ApproachCard() {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 h-full">
      <BorderBeam
        size={100}
        duration={8}
        colorFrom="#6366f1"
        colorTo="#d946ef"
      />
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Rocket className="mr-2 size-5 text-purple-400" />
          Mon approche
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Issu d'un Master 2 spécialisé en développement, j'ai été formé aux
          nouvelles technologies web et mobile. Après 9 ans chez Thales sur des
          applications critiques, je mets cette rigueur au service du
          développement web full-stack.
        </p>
      </CardContent>
    </Card>
  );
}
