import type { SkillColor } from "../constants/skillColors";

export type SkillCardProps = {
  name: string;
  icon: string;
  color: SkillColor;
  detail: string;
};

export type SkillCategory = {
  id: number;
  title: string;
  skillList: SkillCardProps[];
};
