import { levelLabels, skillCategories, skills } from "@/constants/skills";
import { cn } from "@/lib/utils";
import type { Skill, SkillLevel } from "@/types/skills";

function SampleSkillIcon({ className }: { className?: string }) {
  return <div className={cn("rounded-full bg-muted", className)} />;
}

export function SkillsSection() {
  return (
    <section className="bg-muted/20 py-20" id="skills">
      <div className="container mx-auto max-w-5xl px-2">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-4 inline-flex rounded-sm py-2 text-3xl font-bold  sm:text-4xl">
              技術スタック
            </h2>
            <p className="leading-7 text-muted-foreground">
              実務や個人開発で特に使う言語、フレームワーク、ツールを中心に3段階のスキルレベルで整理しました。スキルのレベルは目安です。スペースや規模の関係で記載できていない項目もあります。
            </p>
          </div>

          <SkillLegend />
        </div>

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.key} className="space-y-4">
              <div className="space-y-3">
                <h3 className={cn("inline-flex rounded-sm py-2 text-base font-bold sm:text-lg")}>
                  {category.label}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((skill) => skill.category === category.key)
                  .map((skill) => (
                    <SkillTag key={skill.name} skill={skill} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillLegend() {
  return (
    <div className="w-fit rounded-2xl border border-border/70 bg-background/95 p-4 backdrop-blur">
      <div className="flex flex-col gap-4">
        <div className="shrink-0">
          <SkillTag
            skill={{
              name: "サンプル",
              icon: SampleSkillIcon,
              category: "frontend",
              level: 3,
            }}
          />
        </div>

        <div className="space-y-1 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">凡例</p>
          {Object.entries(levelLabels).map(([k, v]) => (
            <p key={k}>
              レベル{k}: {v}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillTag({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <div className="group flex items-center justify-between gap-2.5 rounded-full border border-border/70 hover:border-primary duration-200 bg-background px-3.5 py-1.5 sm:justify-start sm:gap-3 sm:px-4 sm:py-2">
      <div className="shrink-0">
        <Icon className="size-5 sm:size-6" />
      </div>
      <span className="min-w-0 flex-1 text-sm font-medium leading-none text-foreground/80 sm:flex-none sm:text-base md:text-lg">
        {skill.name}
      </span>
      <LevelBars level={skill.level} label={levelLabels[skill.level]} />
    </div>
  );
}

function LevelBars({ level, label }: { level: SkillLevel; label: string }) {
  return (
    <div
      className="ml-1 flex items-center gap-1"
      aria-label={`レベル${level}: ${label}`}
      role="img"
    >
      {Array.from({ length: 3 }, (_, index) => {
        const active = index < level;

        return (
          <span
            key={index}
            aria-hidden="true"
            className={cn(
              "h-5 w-1 -skew-x-12 rounded-full sm:h-6",
              active ? "bg-sky-500" : "bg-sky-100"
            )}
          />
        );
      })}
    </div>
  );
}
