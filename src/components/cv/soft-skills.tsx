import {
  Users,
  MessageSquare,
  Lightbulb,
  Puzzle,
  Zap,
  ClipboardCheck,
} from "lucide-react";

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
  const skills: SkillProps[] = [
    { name: "Travail d'équipe", icon: <Users className="size-3.5" /> },
    { name: "Communication", icon: <MessageSquare className="size-3.5" /> },
    { name: "Résolution", icon: <Puzzle className="size-3.5" /> },
    { name: "Adaptabilité", icon: <Lightbulb className="size-3.5" /> },
    { name: "Autonomie", icon: <Zap className="size-3.5" /> },
    { name: "Rigueur", icon: <ClipboardCheck className="size-3.5" /> },
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-base font-medium border-b-2 border-emerald-100 dark:border-emerald-950 pb-1">
        Soft Skills
      </h3>
      <div className="grid grid-cols-1 gap-x-1 gap-y-2 w-full">
        {skills.map((skill, index) => (
          <div key={index}>
            <SkillItem name={skill.name} icon={skill.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
