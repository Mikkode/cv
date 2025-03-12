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
    <div className="flex h-screen justify-center items-center">
      {!showCV ? (
        <TerminalLoader />
      ) : (
        <div className="w-full max-w-6xl">
          <FloatingButtons onPrint={handlePrint} />
          <ResumeContent />
        </div>
      )}
    </div>
  );
}
