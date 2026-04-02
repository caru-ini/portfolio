import type { ElementType } from "react";

export type SkillLevel = 1 | 2 | 3;
export type SkillCategory = "frontend" | "backend" | "database-infra" | "tools-ai";

export type Skill = {
  name: string;
  icon: ElementType<{ className?: string }>;
  category: SkillCategory;
  level: SkillLevel;
};

export type SkillCategoryItem = {
  key: SkillCategory;
  label: string;
};
