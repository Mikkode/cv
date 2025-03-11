"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { TerminalLoader } from "@/components/cv/terminal-loader";
import { ProfileCard } from "@/components/cv/profile-card";
import { SkillsCard } from "@/components/cv/skills-card";
import { ExperienceCard } from "@/components/cv/experience-card";
import { EducationCard } from "@/components/cv/education-card";
import { LanguagesCard } from "@/components/cv/languages-card";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [showCV, setShowCV] = useState(true);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    // Afficher le CV après un délai pour laisser le temps au terminal de s'afficher
    const timer = setTimeout(() => {
      setShowCV(true);
    }, 4700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {!showCV ? (
        <TerminalLoader />
      ) : (
        <div className="container mx-auto py-8 px-4 relative">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">
              Mickaël WARIN
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Développeur Full Stack • Next.js • NestJS • TypeScript
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
            <div className="md:col-span-4 md:row-span-2">
              <div className="space-y-6">
                <ProfileCard />
                <LanguagesCard />
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="space-y-6">
                <ExperienceCard />
                <EducationCard />
                <SkillsCard />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bouton de changement de thème */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 rounded-full shadow-md bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border-0"
        onClick={toggleTheme}
        aria-label="Changer de thème"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
}
