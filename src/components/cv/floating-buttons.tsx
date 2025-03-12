"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun, Printer } from "lucide-react";
import { useTheme } from "next-themes";

interface FloatingButtonsProps {
  onPrint: () => void;
}

export function FloatingButtons({ onPrint }: FloatingButtonsProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-end gap-2 mb-4 print-hidden">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full shadow-md bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm border-0"
        onClick={onPrint}
        aria-label="Imprimer le CV"
      >
        <Printer className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full shadow-md bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm border-0"
        onClick={toggleTheme}
        aria-label="Changer de thème"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
}
