"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Globe,
  Download,
  Phone,
  Printer,
} from "lucide-react";
import Link from "next/link";

export function ProfileCard() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div className="flex flex-col items-center mb-3">
        <Avatar className="size-20 border-2 border-slate-100 dark:border-zinc-800 shadow-sm mb-2">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Photo de profil"
          />
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
      </div>

      <div className="space-y-1.5 mb-3">
        <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
          <MapPin className="size-3.5 text-slate-500 flex-shrink-0" />
          <span className="text-sm">Guyancourt, France</span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
          <Mail className="size-3.5 text-slate-500 flex-shrink-0" />
          <span className="text-sm">mic.warin@gmail.com</span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
          <Phone className="size-3.5 text-slate-500 flex-shrink-0" />
          <span className="text-sm">+33 6 12 34 56 78</span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
          <Globe className="size-3.5 text-slate-500 flex-shrink-0" />
          <span className="text-sm">carrotpixel.fr</span>
        </div>
      </div>

      <div className="flex gap-1.5 mb-3">
        <Link
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7 rounded-full bg-white dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-700"
          >
            <Github className="size-3.5 text-slate-700 dark:text-slate-300" />
          </Button>
        </Link>
        <Link
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7 rounded-full bg-white dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-700"
          >
            <Linkedin className="size-3.5 text-slate-700 dark:text-slate-300" />
          </Button>
        </Link>
        <Link href="mailto:mic.warin@gmail.com">
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7 rounded-full bg-white dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-700"
          >
            <Mail className="size-3.5 text-slate-700 dark:text-slate-300" />
          </Button>
        </Link>
        <Button
          variant="default"
          size="sm"
          className="flex-1 gap-1 text-xs h-7 bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white"
          onClick={handlePrint}
        >
          <Printer className="size-3.5" /> Imprimer CV
        </Button>
      </div>
    </div>
  );
}
