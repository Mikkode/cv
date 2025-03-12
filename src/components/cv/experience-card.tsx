"use client";

import { Briefcase, CheckCircle2 } from "lucide-react";

export function ExperienceCard() {
  return (
    <div>
      <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center bg-slate-100 dark:bg-zinc-800 p-2 rounded-md">
        <Briefcase className="mr-1.5 size-4 text-emerald-600 dark:text-emerald-400" />
        Expérience professionnelle
      </h2>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-base text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-2 py-0.5">
              Développeur Full-Stack | Freelance
            </h3>
            <span className="text-xs font-medium px-1.5 py-0.5 bg-slate-100 dark:bg-zinc-800 rounded-full text-slate-700 dark:text-slate-300">
              Oct. 2024 - Présent
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 print:text-xs">
            Développeur Full-Stack Freelance spécialisé en NestJS, NextJS et
            bases de données scalables. J&apos;aide les entreprises à concevoir
            des applications web performantes, sécurisées et adaptées à leurs
            besoins.
          </p>
          <div className="space-y-1.5 print:space-y-0.5">
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600 dark:text-slate-400 print:text-xs">
                Développement Front & Back (NextJS, NestJS)
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600 dark:text-slate-400 print:text-xs">
                Interfaces modernes, fluides et entièrement responsives
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600 dark:text-slate-400 print:text-xs">
                Architecture solide et évolutive pour des performances optimales
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600 dark:text-slate-400 print:text-xs">
                Gestion et optimisation des bases de données (PostgreSQL, MySQL,
                MongoDB)
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600 dark:text-slate-400 print:text-xs">
                Tests, qualité du code et sécurité pour une application fiable
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-zinc-800 pt-3">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-base text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-2 py-0.5">
              Ingénieur Logiciel | Thales
            </h3>
            <span className="text-xs font-medium px-1.5 py-0.5 bg-slate-100 dark:bg-zinc-800 rounded-full text-slate-700 dark:text-slate-300">
              2017 - 2024
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 print:text-xs">
            Pendant 9 ans chez Thales, j&apos;ai conçu et développé des
            applications logicielles critiques dans des environnements
            exigeants, en utilisant C, C++, Python, ainsi que des frameworks
            internes.
          </p>
          <div className="space-y-1.5 print:space-y-0.5">
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600 dark:text-slate-400 print:text-xs">
                Conception et développement de systèmes embarqués
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600 dark:text-slate-400 print:text-xs">
                Optimisation des performances pour systèmes contraints
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600 dark:text-slate-400 print:text-xs">
                Tests et validation pour garantir la fiabilité et la sécurité
                des solutions
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600 dark:text-slate-400 print:text-xs">
                Travail en environnement contraint avec des exigences élevées
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600 dark:text-slate-400 print:text-xs">
                Collaboration avec des équipes pluridisciplinaires sur des
                projets de grande envergure
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 print:text-xs">
            Cette expérience m&apos;a apporté une rigueur technique, une
            capacité d&apos;adaptation à des environnements complexes et une
            approche orientée performance et qualité.
          </p>
        </div>
      </div>
    </div>
  );
}
