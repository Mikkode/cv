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
      <div className="flex w-full h-full flex-col lg:flex-row justify-center items-start gap-4">
        {/* Terminal - normal en mobile, sticky en desktop */}
        <div className="w-full lg:w-auto lg:flex-shrink lg:min-w-[250px] lg:h-fit">
          <TerminalLoader onLoadingComplete={handleTerminalLoadingComplete} />
        </div>

        {/* CV - prioritaire avec taille minimale et maximale */}
        <div className="w-full lg:min-w-3xl lg:max-w-4xl">
          <ResumeContent />
        </div>
      </div>
    </div>
  );
}
