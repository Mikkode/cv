"use client";

import { Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";

// Définir un type pour les IDs de catégories
type CategoryId = "frontend" | "backend" | "devops" | "other";

type SkillCategory = {
  id: CategoryId; // Utiliser le type spécifique au lieu de string
  colorClass: string;
  skills: string[];
};

const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    colorClass:
      "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300",
    skills: [
      "React",
      "Next.js 15+",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    id: "backend",
    colorClass:
      "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300",
    skills: [
      "Node.js",
      "REST API",
      "NestJS",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "MongoDB",
      "Django",
      "Prisma",
      "Firebase",
    ],
  },
  {
    id: "devops",
    colorClass:
      "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300",
    skills: ["Git", "GitHub", "Bitbucket", "Docker", "Vercel", "CI/CD"],
  },
  {
    id: "other",
    colorClass:
      "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300",
    skills: [
      "C/C++",
      "Python",
      "PyQt",
      "LabWindows/CVI",
      "Linux",
      "SCPI",
      "Microwave measurement",
    ],
  },
];

const SkillBadge = ({
  skill,
  colorClass,
}: {
  skill: string;
  colorClass: string;
}) => (
  <Badge className={`text-xs h-5 px-1.5 ${colorClass} border-0`}>{skill}</Badge>
);

const SkillSection = ({
  category,
  title,
}: {
  category: SkillCategory;
  title: string;
}) => (
  <div>
    <h3 className="font-medium text-slate-900 dark:text-white text-sm mb-1.5 border-b-2 border-emerald-500/30 dark:border-emerald-500/30 pb-1">
      {title}
    </h3>
    <div className="flex flex-wrap gap-1">
      {category.skills.map((skill) => (
        <SkillBadge
          key={skill}
          skill={skill}
          colorClass={category.colorClass}
        />
      ))}
    </div>
  </div>
);

export function SkillsCard() {
  const { dictionary } = useLanguage();

  return (
    <div>
      <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center bg-slate-100 dark:bg-zinc-800 p-2 rounded-md">
        <Code2 className="mr-1.5 size-4 text-emerald-600 dark:text-emerald-400" />
        {dictionary.skills.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {skillsData.map((category) => (
          <SkillSection
            key={category.id}
            category={category}
            title={dictionary.skills.categories[category.id as CategoryId]}
          />
        ))}
      </div>
    </div>
  );
}
