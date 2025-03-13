import { UserCircle } from "lucide-react";
import { SoftSkills } from "@/components/cv/soft-skills";

export function ProfileCard() {
  return (
    <div>
      <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center justify-center bg-slate-100 dark:bg-zinc-800 p-2 rounded-md">
        <UserCircle className="mr-1.5 size-4 text-emerald-600 dark:text-emerald-400" />
        Profil
      </h2>

      <div className="space-y-7">
        <div className="space-y-3">
          <h3 className="text-base font-medium border-b-2 border-emerald-100 dark:border-emerald-950 pb-1">
            Langues
          </h3>
          <div className="space-y-2 ">
            <div className="flex justify-between items-center">
              <span className="text-sm">Français</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-2 rounded-full bg-emerald-500"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Anglais</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full ${
                      i < 4 ? "bg-emerald-500" : "bg-slate-200 dark:bg-zinc-700"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Japonais</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full ${
                      i < 2 ? "bg-emerald-500" : "bg-slate-200 dark:bg-zinc-700"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SoftSkills />
        <div className="space-y-3">
          <h3 className="text-base font-medium border-b-2 border-emerald-100 dark:border-emerald-950 pb-1">
            À propos
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Passionné par le développement, j'aime créer des applications
            performantes et bien pensées. J'accorde une grande importance à la
            qualité du code, à la sécurité et à l'expérience utilisateur.
          </p>
        </div>
      </div>
    </div>
  );
}
