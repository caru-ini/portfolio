import type { ElementType } from "react";

export type SkillLevel = 1 | 2 | 3;
export type SkillPosition = "fullstack" | "frontend" | "backend" | "infra";

export type Skill = {
  name: string;
  icon: ElementType<{ className?: string }>;
  /** このスキルが該当するポジション。空配列は「すべて」のみに表示 (ツール類など)。 */
  positions: SkillPosition[];
  level: SkillLevel;
};

export type SkillPositionItem = {
  key: "all" | SkillPosition;
  label: string;
  icon: ElementType<{ className?: string }>;
};
