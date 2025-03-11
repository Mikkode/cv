"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ExperienceCard() {
  return (
    <Card className="overflow-hidden border-0 shadow-md bg-white dark:bg-zinc-900">
      <CardHeader className="pb-2 border-b border-slate-100 dark:border-zinc-800">
        <CardTitle className="text-lg flex items-center text-slate-900 dark:text-white">
          <Briefcase className="mr-2 size-5 text-slate-500" />
          Expérience professionnelle
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Développeur Full-Stack | Freelance
              </h3>
              <span className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-zinc-800 rounded-full text-slate-700 dark:text-slate-300">
                Oct. 2024 - Présent
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              Développeur Full-Stack Freelance spécialisé en NestJS, NextJS et
              bases de données scalables. J'aide les entreprises à concevoir des
              applications web performantes, sécurisées et adaptées à leurs
              besoins, en garantissant une expérience utilisateur fluide et
              responsive.
            </p>
            <ul className="list-disc pl-5 mb-3 text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Développement Front & Back (NextJS, NestJS)</li>
              <li>Interfaces modernes, fluides et entièrement responsives</li>
              <li>
                Architecture solide et évolutive pour des performances optimales
              </li>
              <li>
                Gestion et optimisation des bases de données (PostgreSQL, MySQL,
                MongoDB)
              </li>
              <li>
                Tests, qualité du code et sécurité pour une application fiable
                et maintenable
              </li>
            </ul>
            <div className="flex flex-wrap gap-1">
              <Badge
                variant="secondary"
                className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0"
              >
                Next.js
              </Badge>
              <Badge
                variant="secondary"
                className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0"
              >
                NestJS
              </Badge>
              <Badge
                variant="secondary"
                className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0"
              >
                PostgreSQL
              </Badge>
              <Badge
                variant="secondary"
                className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0"
              >
                TypeScript
              </Badge>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Ingénieur Logiciel | Thales
              </h3>
              <span className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-zinc-800 rounded-full text-slate-700 dark:text-slate-300">
                Jan. 2015 - Oct. 2024
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              Pendant 9 ans chez Thales, j'ai conçu et développé des
              applications logicielles critiques dans des environnements
              exigeants, en utilisant C, C++, Python, ainsi que des frameworks
              internes.
            </p>
            <ul className="list-disc pl-5 mb-3 text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>
                Développement d'applications sur mesure pour des besoins
                stratégiques
              </li>
              <li>
                Optimisation des performances et gestion de la mémoire pour des
                systèmes embarqués et applicatifs
              </li>
              <li>
                Tests et validation pour garantir la fiabilité et la sécurité
                des solutions
              </li>
              <li>
                Travail en environnement contraint avec des exigences élevées en
                performance et architecture
              </li>
              <li>
                Collaboration avec des équipes pluridisciplinaires sur des
                projets de grande envergure
              </li>
            </ul>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              Cette expérience m'a apporté une rigueur technique, une capacité
              d'adaptation à des environnements complexes et une approche
              orientée performance et qualité.
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge
                variant="secondary"
                className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0"
              >
                C/C++
              </Badge>
              <Badge
                variant="secondary"
                className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0"
              >
                Python
              </Badge>
              <Badge
                variant="secondary"
                className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0"
              >
                Qt
              </Badge>
              <Badge
                variant="secondary"
                className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-0"
              >
                SCPI
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
