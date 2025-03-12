"use client";

import { Globe, Brain } from "lucide-react";
import Image from "next/image";

export function LanguagesCard() {
  return (
    <div>
      <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center bg-slate-100 dark:bg-zinc-800 p-2 rounded-md">
        <Globe className="mr-1.5 size-4 text-emerald-600 dark:text-emerald-400" />
        Langues & Soft Skills
      </h2>

      <div className="space-y-7">
        <div>
          <h3 className="font-medium text-slate-900 dark:text-white text-sm mb-2 border-b-2 border-emerald-500/30 dark:border-emerald-500/30 pb-1">
            Langues
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Français
              </span>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Anglais
              </span>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                <div className="h-2 w-2 rounded-full bg-slate-200 dark:bg-zinc-700"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Japonais
              </span>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                <div className="h-2 w-2 rounded-full bg-slate-200 dark:bg-zinc-700"></div>
                <div className="h-2 w-2 rounded-full bg-slate-200 dark:bg-zinc-700"></div>
                <div className="h-2 w-2 rounded-full bg-slate-200 dark:bg-zinc-700"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-slate-900 dark:text-white text-sm mb-2 border-b-2 border-emerald-500/30 dark:border-emerald-500/30 pb-1 flex items-center">
            <Brain className="mr-1.5 size-3.5 text-emerald-600 dark:text-emerald-400" />
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 gap-y-2">
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Travail d'équipe
            </span>
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Communication
            </span>
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Résolution
            </span>
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Adaptabilité
            </span>
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Autonomie
            </span>
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Rigueur
            </span>
          </div>
        </div>
        {/* 
        <div className="flex flex-col items-center pt-20">
          <div className="relative w-30 h-30 bg-white p-1 rounded-md shadow-sm border border-slate-200 dark:border-zinc-700">
            <Image
              src="/qr-code.svg"
              alt="QR Code vers mon portfolio"
              width={96}
              height={96}
              className="dark:invert"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
