"use client";

import { useEffect } from "react";
import {
  Terminal,
  AnimatedSpan,
  TypingAnimation,
} from "@/components/magicui/terminal";

interface TerminalLoaderProps {
  onLoadingComplete?: () => void;
}

export function TerminalLoader({ onLoadingComplete }: TerminalLoaderProps) {
  useEffect(() => {
    // Calculer le temps total d'animation basé sur les délais dans le composant
    const totalAnimationTime = 3800 + 30 + 500; // Dernier délai + durée de typing + marge supplémentaire

    const timer = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, totalAnimationTime);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="w-full flex justify-center items-center">
      <Terminal className="w-full max-w-2xl">
        <AnimatedSpan delay={100}>
          <span className="text-green-500">carrot@pixel:~$</span> npm create
          next-app curriculum-vitae
        </AnimatedSpan>

        <AnimatedSpan delay={800}>
          <span className="text-muted-foreground">
            Creating a new Next.js app in ./curriculum-vitae...
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={1500}>
          <span className="text-green-500">carrot@pixel:~$</span> cd
          curriculum-vitae
        </AnimatedSpan>

        <AnimatedSpan delay={2000}>
          <span className="text-green-500">
            carrot@pixel:~/curriculum-vitae$
          </span>{" "}
          npm run dev
        </AnimatedSpan>

        <AnimatedSpan delay={2500}>
          <span className="text-muted-foreground">
            - ready started server on 0.0.0.0:3000, url: http://localhost:3000
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000}>
          <span className="text-muted-foreground">
            - waiting for pages to compile...
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500}>
          <span className="text-muted-foreground">
            <span className="text-green-500">✓</span> Compiled successfully!
          </span>
        </AnimatedSpan>

        <TypingAnimation delay={3800} duration={30}>
          Loading CV...
        </TypingAnimation>
      </Terminal>
    </div>
  );
}
