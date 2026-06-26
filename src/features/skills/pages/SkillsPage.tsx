// Data
import SkillLists from "../components/SkillLists";

function SkillsPage() {
  return (
    <div className="flex justify-center pt-20 px-4 bg-black">
      <div className="w-full lg:w-3/4 xl:w-2/3">
        <h1 className="text-3xl font-bold text-center text-white">
          Skills Overview
        </h1>
        <SkillLists />
      </div>
    </div>
  );
}

export default SkillsPage;
