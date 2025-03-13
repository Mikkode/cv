import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function InfoCard() {
  return (
    <div className="w-full">
      <div className="flex justify-center mb-3">
        <div className="h-24 w-24 mb-2 rounded-full overflow-hidden ring-1 ring-emerald-500/30 print:ring-emerald-600/30">
          <Image
            src="/picture.png"
            alt="Mickaël WARIN"
            width={96}
            height={96}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      <div className="space-y-2 max-w-fit mx-auto">
        <div className="flex items-center gap-2">
          <MapPin className="size-3.5 text-emerald-600 dark:text-emerald-500 print:text-emerald-600" />
          <span className="text-sm text-slate-900 dark:text-slate-300 print:text-slate-900">
            Paris, France
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="size-3.5 text-emerald-600 dark:text-emerald-500 print:text-emerald-600" />
          <a
            href="mailto:mic.warin@gmail.com"
            className="text-sm text-slate-900 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors print:text-slate-900"
          >
            mic.warin@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="size-3.5 text-emerald-600 dark:text-emerald-500 print:text-emerald-600" />
          <Link
            href="https://carrotpixel.fr"
            target="_blank"
            className="text-sm text-slate-900 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors print:text-slate-900"
          >
            carrotpixel.fr
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-3 print:hidden">
        <Link href="https://github.com/mikkode" target="_blank">
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7 rounded-full hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <Github className="size-3.5" />
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/mickaël-warin-4b0275a4/"
          target="_blank"
        >
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7 rounded-full hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="size-3.5" />
          </Button>
        </Link>
        <Link href="mailto:mic.warin@gmail.com">
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7 rounded-full hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <Mail className="size-3.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
