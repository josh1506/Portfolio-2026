// React
import { Icon } from "@iconify/react";

function SkillCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div
      key={name}
      className="flex flex-col justify-center items-center gap-2 bg-white/20 hover:bg-white/30 w-4/9 sm:w-50 h-4/9 sm:h-25 rounded duration-300 transition-all"
    >
      <Icon
        icon={icon}
        width={30}
        height={30}
        className="text-zinc-900"
        aria-hidden="true"
      />
      <span className="text-white cursor-default">{name}</span>
    </div>
  );
}

export default SkillCard;
