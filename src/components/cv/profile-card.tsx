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
      <CardContent className="p-4">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="size-16 border-2 border-slate-100 dark:border-zinc-800 shadow-sm">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Photo de profil"
            />
            <AvatarFallback>MW</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Mickaël WARIN
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Développeur Full Stack
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
            <MapPin className="size-3 text-slate-500" />
            <span className="text-xs">Paris, France</span>
          </div>

          <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
            <Mail className="size-3 text-slate-500" />
            <span className="text-xs">contact@exemple.com</span>
          </div>

          <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
            <Phone className="size-3 text-slate-500" />
            <span className="text-xs">+33 6 12 34 56 78</span>
          </div>

          <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
            <Globe className="size-3 text-slate-500" />
            <span className="text-xs">portfolio.dev</span>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 rounded-full"
          >
            <Github className="size-3.5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 rounded-full"
          >
            <Linkedin className="size-3.5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 rounded-full"
          >
            <Mail className="size-3.5" />
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1 gap-1 text-xs bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            <Download className="size-3.5" /> CV
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
