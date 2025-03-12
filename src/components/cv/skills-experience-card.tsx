"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Code2, Layers, Briefcase, GraduationCap } from "lucide-react";

export function SkillsExperienceCard() {
  return (
    <Card className="md:col-span-2 relative overflow-hidden">
      <BorderBeam
        size={80}
        duration={8}
        colorFrom="#6366f1"
        colorTo="#d946ef"
      />
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Compétences */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Code2 className="mr-2 size-5 text-purple-400" />
              Compétences
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Next.js</span>
                  <span className="text-sm text-muted-foreground">95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">NestJS</span>
                  <span className="text-sm text-muted-foreground">90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">TypeScript</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Node.js</span>
                  <span className="text-sm text-muted-foreground">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Python</span>
                  <span className="text-sm text-muted-foreground">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </div>

            <h3 className="text-lg font-bold mt-6 mb-3 flex items-center">
              <Layers className="mr-2 size-5 text-purple-400" />
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">MongoDB</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">GraphQL</Badge>
              <Badge variant="secondary">Qt</Badge>
              <Badge variant="secondary">AWS</Badge>
            </div>
          </div>

          {/* Expérience */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Briefcase className="mr-2 size-5 text-purple-400" />
              Expérience
            </h3>

            <div className="space-y-4">
              <div className="border-l-2 border-purple-400 pl-4">
                <h4 className="font-bold">
                  Développeur Full-Stack | Freelance
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  Oct. 2024 - Présent
                </p>
                <p className="text-sm">
                  Développement d&apos;applications web avec Next.js, NestJS et
                  bases de données scalables
                </p>
              </div>

              <div className="border-l-2 border-purple-400 pl-4">
                <h4 className="font-bold">Ingénieur Logiciel | Thales</h4>
                <p className="text-sm text-muted-foreground mb-1">
                  Jan. 2015 - Oct. 2024
                </p>
                <p className="text-sm">
                  Développement de logiciels critiques en C, C++, Python et
                  frameworks internes
                </p>
              </div>
            </div>

            <h3 className="text-lg font-bold mt-6 mb-4 flex items-center">
              <GraduationCap className="mr-2 size-5 text-purple-400" />
              Formation
            </h3>

            <div className="border-l-2 border-purple-400 pl-4">
              <h4 className="font-bold">
                ETNA, école d&apos;alternance en informatique
              </h4>
              <p className="text-sm text-muted-foreground mb-1">2014 - 2017</p>
              <p className="text-sm">
                Programmation / développeur informatique
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
