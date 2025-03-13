"use client";

import { useLanguage } from "@/contexts/language-context";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex space-x-1">
      <button
        onClick={() => setLocale("fr")}
        className={`px-2 py-1 rounded-l-md ${
          locale === "fr"
            ? "bg-emerald-500 text-white"
            : "bg-slate-200 dark:bg-zinc-700 text-slate-700 dark:text-slate-300"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-2 py-1 rounded-r-md ${
          locale === "en"
            ? "bg-emerald-500 text-white"
            : "bg-slate-200 dark:bg-zinc-700 text-slate-700 dark:text-slate-300"
        }`}
      >
        EN
      </button>
    </div>
  );
}
