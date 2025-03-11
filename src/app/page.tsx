"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { TypingAnimation } from "@/components/magicui/terminal";
import { useState, useEffect } from "react";
import { TerminalLoader } from "@/components/cv/terminal-loader";
import { ProfileCard } from "@/components/cv/profile-card";
import { SkillsCard } from "@/components/cv/skills-card";
import { ExperienceCard } from "@/components/cv/experience-card";
import { ApproachCard } from "@/components/cv/approach-card";
import { SpecialtiesCard } from "@/components/cv/specialties-card";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [showCV, setShowCV] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90 relative">
      {!showCV ? (
        <TerminalLoader />
      ) : (
        <div className="container mx-auto py-8 px-4">
          {/* En-tête avec titre */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <TypingAnimation
                className="text-xl md:text-3xl font-medium text-purple-400 dark:text-purple-300"
                duration={50}
              >
                Développeur Full-Stack
              </TypingAnimation>
            </div>
          </div>

          {/* Bento Grid avec éléments de tailles différentes */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {/* Profil - 2 colonnes */}
            <div className="md:col-span-2 md:row-span-2">
              <ProfileCard />
            </div>

            {/* Expérience - 4 colonnes */}
            <div className="md:col-span-4 md:row-span-2">
              <ExperienceCard />
            </div>

            {/* Compétences - 3 colonnes */}
            <div className="md:col-span-3 md:row-span-2">
              <SkillsCard />
            </div>

            {/* Technologies - 3 colonnes */}
            <div className="md:col-span-3 md:row-span-1">
              <SpecialtiesCard />
            </div>

            {/* Approche - 3 colonnes */}
            <div className="md:col-span-3 md:row-span-1">
              <ApproachCard />
            </div>
          </div>
        </div>
      )}

      {/* Bouton de changement de thème */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 rounded-full shadow-lg cursor-pointer bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:text-primary"
        onClick={toggleTheme}
        aria-label="Changer de thème"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
}
