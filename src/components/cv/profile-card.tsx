"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { BorderBeam } from "../magicui/border-beam";

export function ProfileCard() {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 h-full">
      {/* <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} /> */}
      <BorderBeam
        size={230}
        duration={20}
        colorFrom="#6366f1"
        colorTo="#d946ef"
      />
      <CardContent className="p-6 flex flex-col items-center">
        <Avatar className="size-24 mb-4 border-2 border-primary/20">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Photo de profil"
          />
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>

        <div className="flex items-center gap-1 mb-2">
          <h2 className="text-xl font-bold">Mickaël WARIN</h2>
          <CheckCircle2 className="size-4 text-blue-500" />
        </div>

        <p className="text-muted-foreground text-sm mb-4 text-center">
          Développeur Full Stack passionné par l'innovation et les solutions web
          modernes
        </p>

        <div className="flex flex-col gap-2 w-full mb-4">
          <Badge
            variant="outline"
            className="flex items-center gap-1 justify-center"
          >
            <MapPin className="size-3" /> Paris, France
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 justify-center"
          >
            <Mail className="size-3" /> contact@exemple.com
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 justify-center"
          >
            <Globe className="size-3" /> portfolio.dev
          </Badge>
        </div>

        <div className="flex gap-2 justify-center">
          <Button size="icon" variant="outline">
            <Github className="size-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Linkedin className="size-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Mail className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
