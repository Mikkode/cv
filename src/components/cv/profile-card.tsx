"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="overflow-hidden border-0 shadow-md bg-white dark:bg-zinc-900">
      <CardContent className="p-6 flex flex-col items-center">
        <Avatar className="size-28 mb-5 border-4 border-slate-100 dark:border-zinc-800 shadow-md">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Photo de profil"
          />
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>

        <div className="w-full space-y-3 mb-5">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <MapPin className="size-4 text-slate-500" />
            <span className="text-sm">Paris, France</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Mail className="size-4 text-slate-500" />
            <span className="text-sm">contact@exemple.com</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Phone className="size-4 text-slate-500" />
            <span className="text-sm">+33 6 12 34 56 78</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Globe className="size-4 text-slate-500" />
            <span className="text-sm">portfolio.dev</span>
          </div>
        </div>

        <div className="flex gap-3 justify-center mb-5">
          <Button size="icon" variant="outline" className="rounded-full">
            <Github className="size-4" />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full">
            <Linkedin className="size-4" />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full">
            <Mail className="size-4" />
          </Button>
        </div>

        <Button
          variant="default"
          className="w-full gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
        >
          <Download className="size-4" /> Télécharger CV
        </Button>
      </CardContent>
    </Card>
  );
}
