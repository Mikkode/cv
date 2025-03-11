"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SkillsCard() {
  return (
    <Card className="overflow-hidden border-0 shadow-md bg-white dark:bg-zinc-900">
      <CardHeader className="pb-2 border-b border-slate-100 dark:border-zinc-800">
        <CardTitle className="text-lg flex items-center text-slate-900 dark:text-white">
          <Code2 className="mr-2 size-5 text-slate-500" />
          Compétences & Technologies
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
              Développement Front-end
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0 px-3 py-1">
                React
              </Badge>
              <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0 px-3 py-1">
                Next.js
              </Badge>
              <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0 px-3 py-1">
                TypeScript
              </Badge>
              <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0 px-3 py-1">
                JavaScript
              </Badge>
              <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0 px-3 py-1">
                HTML/CSS
              </Badge>
              <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0 px-3 py-1">
                Tailwind CSS
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
              Développement Back-end
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 border-0 px-3 py-1">
                Node.js
              </Badge>
              <Badge className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 border-0 px-3 py-1">
                NestJS
              </Badge>
              <Badge className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 border-0 px-3 py-1">
                Express
              </Badge>
              <Badge className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 border-0 px-3 py-1">
                REST API
              </Badge>
              <Badge className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 border-0 px-3 py-1">
                Python
              </Badge>
              <Badge className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 border-0 px-3 py-1">
                C
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
              Base de données & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border-0 px-3 py-1">
                PostgreSQL
              </Badge>
              <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border-0 px-3 py-1">
                MongoDB
              </Badge>
              <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border-0 px-3 py-1">
                Docker
              </Badge>
              <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border-0 px-3 py-1">
                Git
              </Badge>
              <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border-0 px-3 py-1">
                CI/CD
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
              Spécialités techniques
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border-0 px-3 py-1">
                C/C++
              </Badge>
              <Badge className="bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border-0 px-3 py-1">
                Qt
              </Badge>
              <Badge className="bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border-0 px-3 py-1">
                Linux
              </Badge>
              <Badge className="bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border-0 px-3 py-1">
                SCPI
              </Badge>
              <Badge className="bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border-0 px-3 py-1">
                Hyperfréquence
              </Badge>
              <Badge className="bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border-0 px-3 py-1">
                Microservices
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
