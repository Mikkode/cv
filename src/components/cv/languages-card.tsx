"use client";

import { Globe, Brain } from "lucide-react";
import Image from "next/image";
import { SoftSkills } from "@/components/cv/soft-skills";

export function LanguagesCard() {
  return (
    <div>
      <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center bg-slate-100 dark:bg-zinc-800 p-2 rounded-md">
        <Globe className="mr-1.5 size-4 text-emerald-600 dark:text-emerald-400" />
        Langues & Soft Skills
      </h2>

      <div className="space-y-7">
        <div className="space-y-3">
          <h3 className="text-base font-medium border-b-2 border-emerald-100 dark:border-emerald-950 pb-1">
            Langues
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Français</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-2 rounded-full bg-emerald-500"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Anglais</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full ${
                      i < 4 ? "bg-emerald-500" : "bg-slate-200 dark:bg-zinc-700"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Japonais</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full ${
                      i < 2 ? "bg-emerald-500" : "bg-slate-200 dark:bg-zinc-700"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SoftSkills />

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
