"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Globe, Phone } from "lucide-react";
import Link from "next/link";

export function ProfileCard() {
  return (
    <div>
      <div className="flex flex-col items-center mb-3">
        <Avatar className="h-24 w-24 mb-2">
          <AvatarImage src="/avatar.jpg" alt="Mickaël WARIN" />
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <MapPin className="size-3.5 text-slate-500" />
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Paris, France
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Mail className="size-3.5 text-slate-500" />
          <span className="text-sm text-slate-600 dark:text-slate-400">
            mickael.warin@example.com
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Phone className="size-3.5 text-slate-500" />
          <span className="text-sm text-slate-600 dark:text-slate-400">
            +33 6 12 34 56 78
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Globe className="size-3.5 text-slate-500" />
          <span className="text-sm text-slate-600 dark:text-slate-400">
            carrotpixel.fr
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 mt-3">
        <Link href="https://github.com/carrotpixel" target="_blank">
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7 rounded-full bg-white dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-700"
          >
            <Github className="size-3.5 text-slate-700 dark:text-slate-300" />
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/carrotpixel" target="_blank">
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7 rounded-full bg-white dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-700"
          >
            <Linkedin className="size-3.5 text-slate-700 dark:text-slate-300" />
          </Button>
        </Link>
        <Link href="mailto:mickael.warin@example.com">
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7 rounded-full bg-white dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-700"
          >
            <Mail className="size-3.5 text-slate-700 dark:text-slate-300" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
