"use client";

import { Briefcase } from "lucide-react";

export function ExperienceCard() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
        <Briefcase className="mr-2 size-5 text-slate-500" />
        Expérience professionnelle
      </h2>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-start mb-2">
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
              Tests, qualité du code et sécurité pour une application fiable et
              maintenable
            </li>
          </ul>
        </div>

        <div className="border-t border-slate-200 dark:border-zinc-800 pt-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Ingénieur Logiciel | Thales
            </h3>
            <span className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-zinc-800 rounded-full text-slate-700 dark:text-slate-300">
              Jan. 2015 - Oct. 2024
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Pendant 9 ans chez Thales, j'ai conçu et développé des applications
            logicielles critiques dans des environnements exigeants, en
            utilisant C, C++, Python, ainsi que des frameworks internes.
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
              Tests et validation pour garantir la fiabilité et la sécurité des
              solutions
            </li>
            <li>
              Travail en environnement contraint avec des exigences élevées en
              performance et architecture
            </li>
            <li>
              Collaboration avec des équipes pluridisciplinaires sur des projets
              de grande envergure
            </li>
          </ul>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Cette expérience m'a apporté une rigueur technique, une capacité
            d'adaptation à des environnements complexes et une approche orientée
            performance et qualité.
          </p>
        </div>
      </div>
    </div>
  );
}
