"use client";

import {
  Users,
  MessageSquare,
  Lightbulb,
  Puzzle,
  Zap,
  ClipboardCheck,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface SkillProps {
  name: string;
  icon: React.ReactNode;
}

const SkillItem = ({ name, icon }: SkillProps) => {
  return (
    <div className="flex items-start gap-1.5">
      <div className="flex-shrink-0 text-emerald-500 dark:text-emerald-400 mt-0.5">
        {icon}
      </div>
      <span className="text-sm text-slate-700 dark:text-slate-300 break-words">
        {name}
      </span>
    </div>
  );
};

export function SoftSkills() {
  const { dictionary } = useLanguage();

  // Fonction pour obtenir l'icône correspondante
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="size-3.5" />;
      case "MessageSquare":
        return <MessageSquare className="size-3.5" />;
      case "Puzzle":
        return <Puzzle className="size-3.5" />;
      case "Lightbulb":
        return <Lightbulb className="size-3.5" />;
      case "Zap":
        return <Zap className="size-3.5" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="size-3.5" />;
      default:
        return <Users className="size-3.5" />;
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="text-base font-medium border-b-2 border-emerald-100 dark:border-emerald-950 pb-1">
        {dictionary.softSkills.title}
      </h3>
      <div className="grid grid-cols-1 gap-x-1 gap-y-2 w-full">
        {dictionary.softSkills.items.map((skill, index) => (
          <div key={index}>
            <SkillItem name={skill.name} icon={getIcon(skill.icon)} />
          </div>
        ))}
      </div>
    </div>
  );
}
