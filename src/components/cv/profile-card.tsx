"use client";

import { UserCircle } from "lucide-react";
import { SoftSkills } from "@/components/cv/soft-skills";
import { useLanguage } from "@/contexts/language-context";

export function ProfileCard() {
  const { dictionary } = useLanguage();

  return (
    <div>
      <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center justify-center bg-slate-100 dark:bg-zinc-800 p-2 rounded-md">
        <UserCircle className="mr-1.5 size-4 text-emerald-600 dark:text-emerald-400" />
        {dictionary.profile.profileTitle}
      </h2>

      <div className="space-y-7">
        <div className="space-y-3">
          <h3 className="text-base font-medium border-b-2 border-emerald-100 dark:border-emerald-950 pb-1">
            {dictionary.languages.title}
          </h3>
          <div className="space-y-2 ">
            {dictionary.languages.items.map((language, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm">{language.name}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-2 rounded-full ${
                        i < language.level
                          ? "bg-emerald-500"
                          : "bg-slate-200 dark:bg-zinc-700"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <SoftSkills />
        <div className="space-y-3">
          <h3 className="text-base font-medium border-b-2 border-emerald-100 dark:border-emerald-950 pb-1">
            {dictionary.profile.aboutTitle}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {dictionary.profile.about}
          </p>
        </div>
      </div>
    </div>
  );
}
