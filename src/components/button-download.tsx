"use client";

import { Download } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function ButtonDownload({ className }: { className?: string }) {
  const { locale } = useLanguage();

  return (
    <a
      href={`/download?locale=${locale}`}
      className={`bg-emerald-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-emerald-600 transition ${className}`}
      aria-label={locale === "fr" ? "Télécharger le CV" : "Download CV"}
    >
      <Download className="h-[1.2rem] w-[1.2rem]" />
    </a>
  );
}
