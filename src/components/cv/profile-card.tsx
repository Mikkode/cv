import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ProfileCard() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center mb-3">
        <div className="h-24 w-24 mb-2 rounded-full overflow-hidden relative">
          <Image
            src="/picture.png"
            alt="Mickaël WARIN"
            width={96}
            height={96}
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-1.5">
          <MapPin className="size-4 text-slate-500 flex-shrink-0 mt-0.5" />
          <span className="text-sm text-slate-600 dark:text-slate-400 break-words">
            Paris, France
          </span>
        </div>
        <div className="flex items-start gap-1.5">
          <Mail className="size-4 text-slate-500 flex-shrink-0 mt-0.5" />
          <span className="text-sm text-slate-600 dark:text-slate-400 break-all">
            <a href="mailto:mic.warin@gmail.com">mic.warin@gmail.com</a>
          </span>
        </div>
        <div className="flex items-start gap-1.5">
          <Globe className="size-4 text-slate-500 flex-shrink-0 mt-0.5" />
          <span className="text-sm text-slate-600 dark:text-slate-400 break-words">
            <Link href="https://carrotpixel.fr" target="_blank">
              carrotpixel.fr
            </Link>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        <Link href="https://github.com/mikkode" target="_blank">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 cursor-pointer rounded-full bg-white dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-700"
          >
            <Github className="size-4 text-slate-700 dark:text-slate-300" />
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/micka%C3%ABl-warin-4b0275a4/"
          target="_blank"
        >
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 cursor-pointer rounded-full bg-white dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-700"
          >
            <Linkedin className="size-4 text-slate-700 dark:text-slate-300" />
          </Button>
        </Link>
        <Link href="mailto:mic.warin@gmail.com">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 cursor-pointer rounded-full bg-white dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-700"
          >
            <Mail className="size-4 text-slate-700 dark:text-slate-300" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
