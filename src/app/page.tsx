"use client";

import { useState } from "react";
import { TerminalLoader } from "@/components/cv/terminal-loader";
import { ResumeContent } from "@/components/cv/resume-content";

export default function Home() {
  const handleTerminalLoadingComplete = () => {
    console.log("Terminal loading complete");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900 p-4 overflow-auto">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-4">
        {/* Terminal - se réduit si nécessaire */}
        <div className="w-full lg:sticky lg:top-4 lg:w-auto lg:flex-shrink lg:min-w-[250px]">
          <TerminalLoader onLoadingComplete={handleTerminalLoadingComplete} />
        </div>

        {/* CV - prioritaire avec taille minimale et maximale */}
        <div className="w-full lg:min-w-[768px] lg:max-w-4xl">
          <ResumeContent />
        </div>
      </div>
    </div>
  );
}
