"use client";

import { useLanguage } from "@/contexts/language-context";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex space-x-0.5">
      <button
        onClick={() => setLocale("fr")}
        className={`px-2 py-1 rounded-l-md cursor-pointer transition-colors ${
          locale === "fr"
            ? "bg-emerald-500 hover:bg-emerald-600 text-white"
            : "bg-slate-200 hover:bg-slate-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-slate-700 dark:text-slate-300"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-2 py-1 rounded-r-md cursor-pointer transition-colors ${
          locale === "en"
            ? "bg-emerald-500 hover:bg-emerald-600 text-white"
            : "bg-slate-200 hover:bg-slate-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-slate-700 dark:text-slate-300"
        }`}
      >
        EN
      </button>
    </div>
  );
}
