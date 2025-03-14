"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { TerminalLoader } from "@/components/cv/terminal-loader";
import { ResumeContent } from "@/components/cv/resume-content";
import ButtonTheme from "@/components/button-theme";
import ButtonDownload from "@/components/button-download";
import LanguageSwitcher from "@/components/language-switcher";
// import { useReactToPrint } from "react-to-print";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  // const resumeRef = useRef<HTMLDivElement>(null);
  // const reactToPrintFn = useReactToPrint({ contentRef: resumeRef });

  const handleTerminalLoadingComplete = () => {
    setIsAnimating(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900 p-4 overflow-auto">
      <div className="flex w-full h-full flex-col lg:flex-row justify-center items-start gap-4">
        {/* Terminal - normal en mobile, sticky en desktop */}
        <div className="w-full lg:w-auto lg:flex-shrink lg:min-w-[250px] lg:h-fit flex flex-col items-center gap-2">
          <TerminalLoader onLoadingComplete={handleTerminalLoadingComplete} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={isAnimating ? { opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeIn" }}
            className="flex space-x-4 mt-2"
          >
            <ButtonTheme />
            <ButtonDownload />
            <LanguageSwitcher />
            {/* <button onClick={() => reactToPrintFn()}>Print</button> */}
          </motion.div>
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
          {/* <div ref={resumeRef}> */}
          <ResumeContent />
          {/* </div> */}
        </motion.div>
      </div>
    </div>
  );
}
