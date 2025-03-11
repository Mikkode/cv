"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Moon,
  Sun,
  Mail,
  Github,
  Linkedin,
  Globe,
  MapPin,
  Code2,
  Database,
  Server,
  Layers,
  Cpu,
  Briefcase,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShineBorder } from "@/components/magicui/shine-border";
import {
  Terminal,
  AnimatedSpan,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { useState, useEffect } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [showCV, setShowCV] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    // Afficher le CV après un délai pour laisser le temps au terminal de s'afficher
    const timer = setTimeout(() => {
      setShowCV(true);
    }, 4700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90 relative">
      {!showCV ? (
        <div className="container mx-auto py-20 flex justify-center items-center min-h-screen">
          <Terminal className="w-full max-w-2xl">
            <AnimatedSpan delay={100}>
              <span className="text-green-500">carrot@pixel:~$</span> npm create
              next-app curriculum-vitae
            </AnimatedSpan>

            <AnimatedSpan delay={800}>
              <span className="text-muted-foreground">
                Creating a new Next.js app in ./curriculum-vitae...
              </span>
            </AnimatedSpan>

            <AnimatedSpan delay={1500}>
              <span className="text-green-500">carrot@pixel:~$</span> cd
              curriculum-vitae
            </AnimatedSpan>

            <AnimatedSpan delay={2000}>
              <span className="text-green-500">
                carrot@pixel:~/cv-portfolio$
              </span>{" "}
              npm run dev
            </AnimatedSpan>

            <AnimatedSpan delay={2500}>
              <span className="text-muted-foreground">
                - ready started server on 0.0.0.0:3000, url:
                http://localhost:3000
              </span>
            </AnimatedSpan>

            <AnimatedSpan delay={3000}>
              <span className="text-muted-foreground">
                - waiting for pages to compile...
              </span>
            </AnimatedSpan>

            <AnimatedSpan delay={3500}>
              <span className="text-muted-foreground">
                <span className="text-green-500">✓</span> Compiled successfully!
              </span>
            </AnimatedSpan>

            <TypingAnimation delay={3800} duration={30}>
              Loading CV...
            </TypingAnimation>
          </Terminal>
        </div>
      ) : (
        <div className="container mx-auto py-8 px-4">
          {/* En-tête avec nom et titre */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              CARROT PIXEL
            </h1>
            <div className="relative inline-block">
              <TypingAnimation
                className="text-xl md:text-3xl font-medium text-purple-400 dark:text-purple-300"
                duration={50}
              >
                Développeur Next.js basé au Japon
              </TypingAnimation>
            </div>
          </div>

          {/* Grille principale */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Carte de profil */}
            <Card className="md:col-span-1 relative overflow-hidden">
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <CardContent className="p-6 flex flex-col items-center">
                <Avatar className="size-24 mb-4 border-2 border-primary/20">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Photo de profil"
                  />
                  <AvatarFallback>CP</AvatarFallback>
                </Avatar>

                <h2 className="text-xl font-bold mb-2">Mickaël</h2>
                <p className="text-muted-foreground text-sm mb-4 text-center">
                  Développeur Full Stack passionné par l'innovation et les
                  solutions web modernes
                </p>

                <div className="flex flex-col gap-2 w-full mb-4">
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 justify-center"
                  >
                    <MapPin className="size-3" /> Tokyo, Japon
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
                    <Globe className="size-3" /> carrotpixel.dev
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

            {/* Carte principale avec compétences et expérience */}
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
                          <span className="text-sm text-muted-foreground">
                            95%
                          </span>
                        </div>
                        <Progress value={95} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">React</span>
                          <span className="text-sm text-muted-foreground">
                            90%
                          </span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            TypeScript
                          </span>
                          <span className="text-sm text-muted-foreground">
                            85%
                          </span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Node.js</span>
                          <span className="text-sm text-muted-foreground">
                            80%
                          </span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Python</span>
                          <span className="text-sm text-muted-foreground">
                            75%
                          </span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mt-6 mb-3 flex items-center">
                      <Layers className="mr-2 size-5 text-purple-400" />
                      Technologies
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">Prisma</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">GraphQL</Badge>
                      <Badge variant="secondary">Docker</Badge>
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
                        <h4 className="font-bold">Ingénieur Logiciel Senior</h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          2016 - Présent
                        </p>
                        <p className="text-sm">
                          Développement de logiciels pour l'automatisation et
                          les instruments de mesure
                        </p>
                      </div>

                      <div className="border-l-2 border-purple-400 pl-4">
                        <h4 className="font-bold">Freelance Développeur Web</h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          2018 - Présent
                        </p>
                        <p className="text-sm">
                          Projets personnels avec Next.js et technologies
                          modernes
                        </p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mt-6 mb-4 flex items-center">
                      <GraduationCap className="mr-2 size-5 text-purple-400" />
                      Formation
                    </h3>

                    <div className="border-l-2 border-purple-400 pl-4">
                      <h4 className="font-bold">Master en Informatique</h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        2012 - 2014
                      </p>
                      <p className="text-sm">Université de Paris</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cartes d'approche et spécialités */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Approche */}
            <Card className="relative overflow-hidden">
              <ShineBorder
                borderWidth={1}
                duration={12}
                shineColor={["#6366f1", "#8b5cf6"]}
              />
              <CardHeader>
                <CardTitle className="text-lg">Mon approche</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Passionné par l'innovation et le développement de solutions
                  web modernes. Je m'adapte aux fuseaux horaires pour collaborer
                  avec des clients internationaux.
                </p>
              </CardContent>
            </Card>

            {/* Spécialités */}
            <Card className="relative overflow-hidden">
              <BorderBeam
                size={60}
                duration={10}
                colorFrom="#8b5cf6"
                colorTo="#6366f1"
                reverse={true}
              />
              <CardHeader>
                <CardTitle className="text-lg">Spécialités</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="size-3 text-purple-400" />{" "}
                    Applications web performantes
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="size-3 text-purple-400" /> Interfaces
                    utilisateur modernes
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="size-3 text-purple-400" />{" "}
                    Optimisation pour les moteurs de recherche
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Intérêts actuels */}
            <Card className="relative overflow-hidden">
              <ShineBorder
                borderWidth={1}
                duration={9}
                shineColor={["#d946ef", "#8b5cf6"]}
              />
              <CardHeader>
                <CardTitle className="text-lg">Intérêts actuels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  Actuellement, je me plonge dans le monde de la technologie IA,
                  affinant mes compétences et explorant de nouvelles
                  possibilités.
                </p>
                <Button variant="outline" className="w-full">
                  Collaborer sur un projet ?{" "}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Bouton de changement de thème */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 rounded-full shadow-lg cursor-pointer bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:text-primary"
        onClick={toggleTheme}
        aria-label="Changer de thème"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
}
