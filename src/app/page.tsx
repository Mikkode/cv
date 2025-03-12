"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Printer, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { TerminalLoader } from "@/components/cv/terminal-loader";
import { ProfileCard } from "@/components/cv/profile-card";
import { SkillsCard } from "@/components/cv/skills-card";
import { ExperienceCard } from "@/components/cv/experience-card";
import { EducationCard } from "@/components/cv/education-card";
import { LanguagesCard } from "@/components/cv/languages-card";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [showCV, setShowCV] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    // Afficher le CV après un délai pour laisser le temps au terminal de s'afficher
    const timer = setTimeout(() => {
      setShowCV(true);
    }, 4800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {!showCV ? (
        <TerminalLoader />
      ) : (
        <div className="container mx-auto py-4 px-3 relative">
          {/* Boutons d'action flottants */}
          <div className="fixed top-4 right-4 flex flex-col gap-2 print-hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border-0"
              onClick={handlePrint}
              aria-label="Imprimer le CV"
            >
              <Printer className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border-0"
              onClick={toggleTheme}
              aria-label="Changer de thème"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-900 shadow-lg rounded-lg overflow-hidden border border-slate-200 dark:border-zinc-800">
            {/* En-tête du CV */}
            <div className="p-3 border-b border-slate-200 dark:border-zinc-800 text-center">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Mickaël WARIN
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Développeur Full Stack
              </p>
            </div>

            {/* Corps du CV */}
            <div className="flex flex-col md:flex-row">
              {/* Colonne de gauche */}
              <div className="md:w-1/4 p-3 border-r border-slate-200 dark:border-zinc-800">
                <div className="space-y-4">
                  <ProfileCard showPrintButton={false} />
                  <div className="border-t border-slate-200 dark:border-zinc-800 pt-4">
                    <LanguagesCard />
                  </div>
                </div>
              </div>

              {/* Colonne de droite */}
              <div className="md:w-3/4 p-3">
                <div className="space-y-4">
                  <ExperienceCard />
                  <div className="border-t border-slate-200 dark:border-zinc-800 pt-4 mt-4">
                    <SkillsCard />
                  </div>
                  <div className="border-t border-slate-200 dark:border-zinc-800 pt-4 mt-4">
                    <EducationCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
