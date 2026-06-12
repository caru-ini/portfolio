"use client";

import { SectionHeader } from "@/app/_components/section-header";
import { levelLabels, skillPositions, skills } from "@/constants/skills";
import { cn } from "@/lib/utils";
import type { Skill, SkillLevel, SkillPositionItem } from "@/types/skills";
import { useState } from "react";

function SampleSkillIcon({ className }: { className?: string }) {
  return <div className={cn("rounded-full bg-slate-500", className)} />;
}

export function SkillsSection() {
  const [activeKey, setActiveKey] = useState<SkillPositionItem["key"]>("all");

  const visibleSkills =
    activeKey === "all" ? skills : skills.filter((skill) => skill.positions.includes(activeKey));

  return (
    <section className="scroll-mt-20 py-20" id="skills">
      <div className="container mx-auto max-w-5xl px-2">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeader
            title="技術スタック"
            description="実務や個人開発で特に使う言語、フレームワーク、ツールを中心に3段階のスキルレベルで整理しました。スキルのレベルは目安です。スペースや規模の関係で記載できていない項目もあります。"
            className="mb-0"
          />

          <SkillLegend />
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {skillPositions.map((position) => {
            const isActive = position.key === activeKey;
            const Icon = position.icon;

            return (
              <button
                key={position.key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveKey(position.key)}
                className={cn(
                  "flex cursor-pointer items-center gap-2.5 rounded-full border py-1.5 pl-2 pr-4 text-sm font-medium transition-colors sm:pr-5 sm:text-base",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/70 bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full",
                    isActive ? "bg-primary-foreground/15" : "bg-muted"
                  )}
                >
                  <Icon className="size-4" />
                </span>
                {position.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3">
          {visibleSkills.map((skill) => (
            <SkillTag key={skill.name} skill={skill} />
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
              positions: [],
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
    <div className="group flex items-center justify-between gap-2.5 rounded-full border border-border/70 bg-background px-3.5 py-1.5 duration-200 hover:border-primary sm:justify-start sm:gap-3 sm:px-4 sm:py-2">
      <div className="shrink-0">
        <Icon className="size-6" />
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
              active ? "bg-primary" : "bg-primary/20"
            )}
          />
        );
      })}
    </div>
  );
}
