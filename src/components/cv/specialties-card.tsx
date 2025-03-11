"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Boxes,
  GitBranch,
  Workflow,
} from "lucide-react";

export function SpecialtiesCard() {
  return (
    <Card className="overflow-hidden h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-slate-200 dark:border-zinc-800 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Layers className="mr-2 size-5 text-blue-500" />
          Technologies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-slate-50 dark:bg-zinc-800 border-0"
          >
            <Database className="size-3" /> PostgreSQL
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-slate-50 dark:bg-zinc-800 border-0"
          >
            <Database className="size-3" /> MongoDB
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-slate-50 dark:bg-zinc-800 border-0"
          >
            <Server className="size-3" /> Docker
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-slate-50 dark:bg-zinc-800 border-0"
          >
            <Globe className="size-3" /> Tailwind
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-slate-50 dark:bg-zinc-800 border-0"
          >
            <Code className="size-3" /> GraphQL
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-slate-50 dark:bg-zinc-800 border-0"
          >
            <Cpu className="size-3" /> Qt
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-slate-50 dark:bg-zinc-800 border-0"
          >
            <Cloud className="size-3" /> AWS
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-slate-50 dark:bg-zinc-800 border-0"
          >
            <FileCode className="size-3" /> API REST
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-slate-50 dark:bg-zinc-800 border-0"
          >
            <LayoutGrid className="size-3" /> Responsive
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-slate-50 dark:bg-zinc-800 border-0"
          >
            <Boxes className="size-3" /> Microservices
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-slate-50 dark:bg-zinc-800 border-0"
          >
            <GitBranch className="size-3" /> Git
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-slate-50 dark:bg-zinc-800 border-0"
          >
            <Workflow className="size-3" /> CI/CD
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
