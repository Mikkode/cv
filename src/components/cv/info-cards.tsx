"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ArrowRight, Rocket, Zap, Brain } from "lucide-react";

export function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Approche */}
      <Card className="relative overflow-hidden">
        {/* <ShineBorder
          borderWidth={1}
          duration={12}
          shineColor={["#6366f1", "#8b5cf6"]}
        /> */}
        <CardHeader>
          <CardTitle className="text-lg">Mon approche</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Issu d'un Master 2 spécialisé en développement, j'ai été formé aux
            nouvelles technologies web et mobile. Après 9 ans chez Thales sur
            des applications critiques, je mets cette rigueur au service du
            développement web full-stack.
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
              <ArrowRight className="size-3 text-purple-400" /> Développement
              Front & Back (NextJS, NestJS)
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="size-3 text-purple-400" />
              Architecture scalable et optimisée
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="size-3 text-purple-400" /> Bases de données
              & performance
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
          <CardTitle className="text-lg">Contactez-moi</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">
            Vous avez un projet web qui nécessite expertise technique et vision
            stratégique ? Je serais ravi d'en discuter avec vous.
          </p>
          <Button variant="outline" className="w-full">
            Collaborer sur un projet ? <ArrowRight className="ml-2 size-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
