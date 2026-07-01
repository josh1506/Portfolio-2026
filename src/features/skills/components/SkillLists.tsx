// Components
import SkillCard from "./SkillCard";

// Data
import { skillsData } from "../data/skillData";

function SkillLists() {
  return (
    <div className="flex flex-col gap-8 mt-10 pb-10">
      {skillsData.map((category) => (
        <div key={category.id}>
          <div className="relative flex items-center justify-between">
            <h3 className="relative z-10 inline-block text-xl font-semibold text-white mb-2 bg-black pr-4">
              {category.title}
            </h3>
            <hr className="border-t-2 border-white/20 mb-4 absolute top-4 w-full" />
            <div className="pl-4 bg-black z-10">
              <span className="text-neutral-400 text-sm">
                {category.skillList.length} Skills
              </span>
            </div>
          </div>
          <div className="flex flex-wrap  gap-4">
            {category.skillList.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                detail={skill.detail}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillLists;
