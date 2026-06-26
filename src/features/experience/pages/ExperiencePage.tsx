// Components
import { StarIcon } from "@heroicons/react/16/solid";
import TimelineItem from "../components/TimelineItem";

// Data
import { experienceData } from "../data/experienceData";

function ExperiencePage() {
  return (
    <main className="flex justify-center pt-20 px-4 bg-black min-h-screen">
      <div className="flex flex-col items-center w-full max-w-7xl">
        <div
          className="hidden lg:block bg-neutral-200 h-8 w-1"
          aria-hidden="true"
        />
        <ol aria-label="Work experience timeline" className="w-full">
          {experienceData.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              align={index % 2 === 0 ? "left" : "right"}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </ol>

        {/* Mobile / Tablet end marker — aligned with left rail */}
        <div
          className="flex lg:hidden flex-row gap-4 w-full"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center w-10 shrink-0">
            <div className="bg-white w-0.5 h-6" />
            <div className="w-10 h-10 border-white border-4 rounded-full bg-green-500 text-white flex items-center justify-center">
              <StarIcon className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Desktop end marker — centered on the timeline */}
        <div
          className="hidden lg:flex flex-col justify-center items-center"
          aria-hidden="true"
        >
          <div className="bg-white h-14 w-1" />
          <div className="w-24 h-24 border-white border-4 rounded-full bg-green-500 text-white flex items-center justify-center">
            <div className="w-12 h-12">
              <StarIcon />
            </div>
          </div>
          <div className="bg-white h-6 w-1" />
        </div>
      </div>
    </main>
  );
}

export default ExperiencePage;
