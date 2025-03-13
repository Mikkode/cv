"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TerminalLoader } from "@/components/cv/terminal-loader";
import { ResumeContent } from "@/components/cv/resume-content";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(true);

  const handleTerminalLoadingComplete = () => {
    setIsAnimating(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900 p-4 overflow-auto">
      <div className="flex w-full h-full flex-col lg:flex-row justify-center items-start gap-4">
        {/* Terminal - normal en mobile, sticky en desktop */}
        <div className="w-full lg:w-auto lg:flex-shrink lg:min-w-[250px] lg:h-fit">
          <TerminalLoader onLoadingComplete={handleTerminalLoadingComplete} />
        </div>

        {/* CV - prioritaire avec taille minimale et maximale */}
        <motion.div
          initial={{ height: 0, opacity: 0, overflow: "hidden" }}
          animate={
            isAnimating
              ? { height: "auto", opacity: 1, overflow: "visible" }
              : {}
          }
          transition={{
            height: { duration: 2, ease: "easeOut" },
            opacity: { duration: 1.8, ease: "easeIn" },
            overflow: { delay: 2 },
          }}
          className="w-full lg:min-w-3xl lg:max-w-4xl"
        >
          <ResumeContent />
        </motion.div>
      </div>
    </div>
  );
}
