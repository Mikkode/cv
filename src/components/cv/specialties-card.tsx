"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import {
  Layers,
  Database,
  Globe,
  Server,
  Code,
  Cpu,
  Cloud,
  LayoutGrid,
  FileCode,
} from "lucide-react";

export function SpecialtiesCard() {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 h-full">
      <BorderBeam
        size={60}
        duration={10}
        colorFrom="#8b5cf6"
        colorTo="#6366f1"
        // reverse={true}
      />
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Layers className="mr-2 size-5 text-purple-400" />
          Technologies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Database className="size-3" /> PostgreSQL
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Database className="size-3" /> MongoDB
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Server className="size-3" /> Docker
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Globe className="size-3" /> Tailwind
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Code className="size-3" /> GraphQL
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Cpu className="size-3" /> Qt
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Cloud className="size-3" /> AWS
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <FileCode className="size-3" /> API
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <LayoutGrid className="size-3" /> Architecture
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
