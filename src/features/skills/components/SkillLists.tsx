// Components
import SkillCard from "./SkillCard";

// Data
import { skillsData } from "../data/skillData";

function SkillLists() {
  return (
    <div className="flex flex-col gap-8 mt-10 pb-10">
      {skillsData.map((category) => (
        <div key={category.id}>
          <h3 className="text-xl font-semibold text-white mb-2">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            {category.skillList.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillLists;
