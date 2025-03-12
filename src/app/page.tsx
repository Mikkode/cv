"use client";

import { useState, useEffect } from "react";
import { TerminalLoader } from "@/components/cv/terminal-loader";
import { FloatingButtons } from "@/components/cv/floating-buttons";
import { ResumeContent } from "@/components/cv/resume-content";

export default function Home() {
  const [showCV, setShowCV] = useState(true);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900 flex items-center justify-center py-8 px-4">
      {!showCV ? (
        <TerminalLoader />
      ) : (
        <div className="relative w-full max-w-6xl">
          <FloatingButtons onPrint={handlePrint} />
          <ResumeContent />
        </div>
      )}
    </div>
  );
}
