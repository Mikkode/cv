"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Briefcase, GraduationCap, Building, Code } from "lucide-react";

export function ExperienceCard() {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 h-full">
      <BorderBeam
        size={80}
        duration={8}
        colorFrom="#6366f1"
        colorTo="#d946ef"
      />
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Briefcase className="mr-2 size-5 text-purple-400" />
          Expérience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border-l-2 border-purple-400 pl-4">
            <div className="flex items-center gap-2">
              <Code className="size-4 text-purple-400" />
              <h4 className="font-bold">Développeur Full-Stack | Freelance</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-1">
              Oct. 2024 - Présent
            </p>
            <p className="text-sm">
              Développement d'applications web avec Next.js, NestJS et bases de
              données scalables. Conception d'interfaces modernes, fluides et
              entièrement responsives. Architecture solide et évolutive pour des
              performances optimales.
            </p>
          </div>

          <div className="border-l-2 border-purple-400 pl-4">
            <div className="flex items-center gap-2">
              <Building className="size-4 text-purple-400" />
              <h4 className="font-bold">Ingénieur Logiciel | Thales</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-1">
              Jan. 2015 - Oct. 2024
            </p>
            <p className="text-sm">
              Développement de logiciels critiques en C, C++, Python et
              frameworks internes. Optimisation des performances et gestion de
              la mémoire pour des systèmes embarqués. Tests et validation pour
              garantir la fiabilité et la sécurité des solutions.
            </p>
          </div>

          <div className="border-l-2 border-purple-400 pl-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="size-4 text-purple-400" />
              <h4 className="font-bold">ETNA, école d'alternance</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-1">2014 - 2017</p>
            <p className="text-sm">Programmation / développeur informatique</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
