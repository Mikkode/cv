"use client";

import { useState } from "react";
import { TerminalLoader } from "@/components/cv/terminal-loader";
import { FloatingButtons } from "@/components/cv/floating-buttons";
import { ResumeContent } from "@/components/cv/resume-content";

export default function Home() {
  const [loadingHeight, setLoadingHeight] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleTerminalLoadingComplete = () => {
    console.log("Terminal loading complete");
    // Animation progressive de la hauteur
    let height = 0;
    const animationDuration = 1000; // ms
    const interval = 20; // ms
    const steps = animationDuration / interval;
    const increment = 100 / steps;

    const timerB = setInterval(() => {
      height += increment;
      setLoadingHeight(Math.min(100, height));

      if (height >= 100) {
        clearInterval(timerB);
        setAnimationComplete(true);
      }
    }, interval);

    return () => clearInterval(timerB);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen w-full bg-gradient-to-br from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900 p-4 overflow-auto">
      {/* Terminal */}
      <div className="w-full lg:w-[30%] mb-4 lg:mb-0 lg:mr-2">
        <TerminalLoader onLoadingComplete={handleTerminalLoadingComplete} />
      </div>

      {/* CV */}
      <div className="w-full lg:w-[60%] lg:ml-2">
        <div className="w-full relative">
          <div
            className="w-full transition-all duration-1000 ease-out"
            style={{
              height: `${loadingHeight}%`,
              overflow: animationComplete ? "visible" : "hidden",
            }}
          >
            <FloatingButtons />
            <ResumeContent />
          </div>
        </div>
      </div>
    </div>
  );
}
