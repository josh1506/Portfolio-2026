export const skillBorderColorClasses = {
  amber: "border-b-amber-500",
  blue: "border-b-blue-500",
  cyan: "border-b-cyan-500",
  emerald: "border-b-emerald-500",
  gray: "border-b-gray-500",
  green: "border-b-green-500",
  indigo: "border-b-indigo-500",
  lime: "border-b-lime-500",
  neutral: "border-b-neutral-500",
  orange: "border-b-orange-500",
  pink: "border-b-pink-500",
  purple: "border-b-purple-500",
  red: "border-b-red-500",
  sky: "border-b-sky-500",
  teal: "border-b-teal-500",
  violet: "border-b-violet-500",
  yellow: "border-b-yellow-500",
} as const;

export type SkillColor = keyof typeof skillBorderColorClasses;
