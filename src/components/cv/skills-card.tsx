"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Code2 } from "lucide-react";
import { BorderBeam } from "../magicui/border-beam";

export function SkillsCard() {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 h-full">
      <BorderBeam
        size={200}
        duration={80}
        colorFrom="#6366f1"
        colorTo="#d946ef"
      />
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Code2 className="mr-2 size-5 text-purple-400" />
          Compétences
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Next.js</span>
              <span className="text-sm text-muted-foreground">95%</span>
            </div>
            <Progress
              value={95}
              className="h-2 bg-slate-200 dark:bg-slate-700"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">NestJS</span>
              <span className="text-sm text-muted-foreground">90%</span>
            </div>
            <Progress
              value={90}
              className="h-2 bg-slate-200 dark:bg-slate-700"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">TypeScript</span>
              <span className="text-sm text-muted-foreground">85%</span>
            </div>
            <Progress
              value={85}
              className="h-2 bg-slate-200 dark:bg-slate-700"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Node.js</span>
              <span className="text-sm text-muted-foreground">80%</span>
            </div>
            <Progress
              value={80}
              className="h-2 bg-slate-200 dark:bg-slate-700"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Python</span>
              <span className="text-sm text-muted-foreground">75%</span>
            </div>
            <Progress
              value={75}
              className="h-2 bg-slate-200 dark:bg-slate-700"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">JavaScript</span>
              <span className="text-sm text-muted-foreground">90%</span>
            </div>
            <Progress
              value={90}
              className="h-2 bg-slate-200 dark:bg-slate-700"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">HTML/CSS</span>
              <span className="text-sm text-muted-foreground">85%</span>
            </div>
            <Progress
              value={85}
              className="h-2 bg-slate-200 dark:bg-slate-700"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
