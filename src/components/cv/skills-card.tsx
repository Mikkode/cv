import { Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SkillsCard() {
  return (
    <div>
      <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center bg-slate-100 dark:bg-zinc-800 p-2 rounded-md">
        <Code2 className="mr-1.5 size-4 text-emerald-600 dark:text-emerald-400" />
        Compétences & Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <h3 className="font-medium text-slate-900 dark:text-white text-sm mb-1.5 border-b-2 border-emerald-500/30 dark:border-emerald-500/30 pb-1">
            Développement Front-end
          </h3>
          <div className="flex flex-wrap gap-1">
            <Badge className="text-xs h-5 px-1.5 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0">
              React
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0">
              Next.js
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0">
              TypeScript
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0">
              JavaScript
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0">
              HTML5
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0">
              CSS3
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0">
              Tailwind CSS
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0">
              Redux
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0">
              React Query
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-0">
              Responsive Design
            </Badge>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-slate-900 dark:text-white text-sm mb-1.5 border-b-2 border-emerald-500/30 dark:border-emerald-500/30 pb-1">
            Développement Back-end
          </h3>
          <div className="flex flex-wrap gap-1">
            <Badge className="text-xs h-5 px-1.5 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 border-0">
              Node.js
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 border-0">
              NestJS
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 border-0">
              Express
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 border-0">
              PostgreSQL
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 border-0">
              MongoDB
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 border-0">
              MySQL
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 border-0">
              REST API
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 border-0">
              GraphQL
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 border-0">
              Prisma
            </Badge>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-slate-900 dark:text-white text-sm mb-1.5 border-b-2 border-emerald-500/30 dark:border-emerald-500/30 pb-1">
            DevOps & Outils
          </h3>
          <div className="flex flex-wrap gap-1">
            <Badge className="text-xs h-5 px-1.5 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border-0">
              Git
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border-0">
              GitHub Actions
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border-0">
              Docker
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border-0">
              AWS
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border-0">
              Vercel
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border-0">
              CI/CD
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border-0">
              Jest
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border-0">
              Cypress
            </Badge>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-slate-900 dark:text-white text-sm mb-1.5 border-b-2 border-emerald-500/30 dark:border-emerald-500/30 pb-1">
            Autres compétences
          </h3>
          <div className="flex flex-wrap gap-1">
            <Badge className="text-xs h-5 px-1.5 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border-0">
              C/C++
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border-0">
              Python
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border-0">
              Qt
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border-0">
              Linux
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border-0">
              SCPI
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border-0">
              Hyperfréquence
            </Badge>
            <Badge className="text-xs h-5 px-1.5 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border-0">
              Microservices
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
