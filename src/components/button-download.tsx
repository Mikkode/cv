import { Download } from "lucide-react";
import React from "react";

export default function ButtonDownload({ className }: { className?: string }) {
  return (
    <a
      href="/download"
      className={`bg-emerald-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-emerald-600 transition ${className}`}
      aria-label="Télécharger le CV"
    >
      <Download className="h-[1.2rem] w-[1.2rem]" />
    </a>
  );
}
