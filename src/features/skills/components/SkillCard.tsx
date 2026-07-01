// React
import { Icon } from "@iconify/react";
import { skillBorderColorClasses } from "../constants/skillColors";
import type { SkillCardProps } from "../types/skill.types";

function SkillCard({ name, icon, color }: SkillCardProps) {
  return (
    <div
      className={`grid grid-cols-[2.5rem_minmax(0,7rem)] items-center justify-center gap-3 bg-white/20 hover:bg-white/30 w-4/9 sm:w-50 h-4/9 sm:h-25 rounded duration-300 transition-all border-b-2 ${skillBorderColorClasses[color]}`}
    >
      <div className="flex size-10 items-center justify-center overflow-hidden">
        <Icon
          icon={icon}
          width={32}
          height={32}
          className="max-h-8 max-w-8 text-zinc-900"
          aria-hidden="true"
        />
      </div>
      <div className="flex min-w-0 flex-col text-start leading-tight">
        <span className="wrap-break-word text-white cursor-default font-semibold tracking-wide">
          {name}
        </span>
        <span className="text-white cursor-default text-sm">{color}</span>
      </div>
    </div>
  );
}

export default SkillCard;
