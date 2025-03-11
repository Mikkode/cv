"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, ExternalLink } from "lucide-react";

export function ProjectsCard() {
  return (
    <Card className="overflow-hidden h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-slate-200 dark:border-zinc-800 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Laptop className="mr-2 size-5 text-blue-500" />
          Projets
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-zinc-800">
            <div className="aspect-video bg-slate-100 dark:bg-zinc-800 relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-zinc-500">
                Capture d'écran
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-sm mb-1">Plateforme E-commerce</h3>
              <p className="text-xs text-muted-foreground mb-2">
                Application complète avec panier, paiement et gestion des
                commandes
              </p>
              <div className="flex flex-wrap gap-1 mb-2">
                <Badge
                  variant="outline"
                  className="text-xs bg-blue-50 dark:bg-blue-900/20 border-0"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs bg-blue-50 dark:bg-blue-900/20 border-0"
                >
                  NestJS
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs bg-blue-50 dark:bg-blue-900/20 border-0"
                >
                  PostgreSQL
                </Badge>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-1 text-xs"
              >
                <ExternalLink className="size-3" /> Voir le projet
              </Button>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-zinc-800">
            <div className="aspect-video bg-slate-100 dark:bg-zinc-800 relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-zinc-500">
                Capture d'écran
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-sm mb-1">Dashboard Analytics</h3>
              <p className="text-xs text-muted-foreground mb-2">
                Interface d'analyse de données avec graphiques et filtres
                avancés
              </p>
              <div className="flex flex-wrap gap-1 mb-2">
                <Badge
                  variant="outline"
                  className="text-xs bg-blue-50 dark:bg-blue-900/20 border-0"
                >
                  React
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs bg-blue-50 dark:bg-blue-900/20 border-0"
                >
                  Express
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs bg-blue-50 dark:bg-blue-900/20 border-0"
                >
                  MongoDB
                </Badge>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-1 text-xs"
              >
                <ExternalLink className="size-3" /> Voir le projet
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
