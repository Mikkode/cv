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
} from "lucide-react";

export function ProfileCard() {
  return (
    <div>
      <div className="flex flex-col items-center mb-4">
        <Avatar className="size-24 border-2 border-slate-100 dark:border-zinc-800 shadow-sm mb-3">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Photo de profil"
          />
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <MapPin className="size-4 text-slate-500 flex-shrink-0" />
          <span className="text-sm">Paris, France</span>
        </div>

        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <Mail className="size-4 text-slate-500 flex-shrink-0" />
          <span className="text-sm">contact@exemple.com</span>
        </div>

        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <Phone className="size-4 text-slate-500 flex-shrink-0" />
          <span className="text-sm">+33 6 12 34 56 78</span>
        </div>

        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <Globe className="size-4 text-slate-500 flex-shrink-0" />
          <span className="text-sm">portfolio.dev</span>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <Button size="icon" variant="outline" className="h-9 w-9 rounded-full">
          <Github className="size-4" />
        </Button>
        <Button size="icon" variant="outline" className="h-9 w-9 rounded-full">
          <Linkedin className="size-4" />
        </Button>
        <Button size="icon" variant="outline" className="h-9 w-9 rounded-full">
          <Mail className="size-4" />
        </Button>
      </div>

      <Button
        variant="default"
        className="w-full gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
      >
        <Download className="size-4" /> Télécharger CV
      </Button>
    </div>
  );
}
