// Types
import { BriefcaseIcon } from "@heroicons/react/16/solid";
import type { ExperienceItem } from "../types/experience.types";

type TimelineItemProps = {
  item: ExperienceItem;
  isLast: boolean;
  align: "left" | "right";
};

function TimelineItem({ item, isLast, align }: TimelineItemProps) {
  const isLeft = align === "left";

  // Shared card body used in both layouts
  const cardBody = (
    <>
      <p className="text-xs font-medium text-blue-100 uppercase tracking-wider mb-1">
        {item.period}
      </p>
      <h3 className="text-xl font-semibold text-white">
        {item.title} — {item.company}
      </h3>
      <div className="flex flex-wrap gap-2 mt-2 mb-3">
        {item.stack.map((tech) => (
          <span
            key={tech}
            className="bg-blue-400/40 text-white text-xs px-2 py-0.5 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <ul className="list-disc list-inside space-y-1">
        {item.highlights.map((point) => (
          <li key={point} className="text-blue-50 text-sm">
            {point}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <li className="relative w-full">
      {/* ── Mobile / Tablet layout (< lg) ── */}
      <div className="flex lg:hidden flex-row gap-4">
        {/* Left rail: icon + connector */}
        <div className="flex flex-col items-center pt-1">
          <div className="bg-blue-500 border-4 border-white h-10 w-10 rounded-full flex items-center justify-center shrink-0 z-10">
            <BriefcaseIcon className="h-5 w-5 text-white" />
          </div>
          <div className="bg-white w-0.5 flex-1 mt-1" aria-hidden="true" />
        </div>

        {/* Card — always on the right */}
        <div className="relative bg-blue-500 flex-1 p-6 rounded-lg shadow-lg mb-6">
          <div
            className="absolute -left-2 top-3 inline-block h-0 w-0 border-y-8 border-r-8 border-y-transparent border-r-blue-500"
            aria-hidden="true"
          />
          {cardBody}
        </div>
      </div>

      {/* ── Desktop layout (lg+) ── */}
      <div className="hidden lg:flex flex-col items-center relative">
        {/* Center icon bubble */}
        <div className="absolute bg-blue-500 border-4 border-white h-18 w-18 rounded-full flex items-center justify-center z-10">
          <BriefcaseIcon className="h-8 w-8 text-white" />
        </div>

        {/* Vertical connector line */}
        <div
          className="absolute bg-white w-1 h-full top-0"
          aria-hidden="true"
        />

        {/* Content row: alternates card left / right */}
        <div className="w-full flex flex-row justify-center gap-34 z-10">
          {/* Left slot */}
          {isLeft ? (
            <div className="relative bg-blue-500 w-3/6 p-10 rounded-lg shadow-lg">
              <div
                className="absolute -right-3 top-6 inline-block h-0 w-0 border-y-12 border-l-12 border-y-transparent border-l-blue-500"
                aria-hidden="true"
              />
              {cardBody}
            </div>
          ) : (
            <div className="text-white w-3/6 py-6 text-right">
              <p className="text-neutral-400 text-sm font-medium">
                {item.period}
              </p>
            </div>
          )}

          {/* Right slot */}
          {isLeft ? (
            <div className="text-white w-3/6 py-6 text-left">
              <p className="text-neutral-400 text-sm font-medium">
                {item.period}
              </p>
            </div>
          ) : (
            <div className="relative bg-blue-500 w-3/6 p-10 rounded-lg shadow-lg">
              <div
                className="absolute -left-3 top-6 inline-block h-0 w-0 border-y-12 border-r-12 border-y-transparent border-r-blue-500"
                aria-hidden="true"
              />
              {cardBody}
            </div>
          )}
        </div>

        {/* Spacing connector below (omit on last item) */}
        {!isLast && <div className="bg-white h-10 w-1" aria-hidden="true" />}
      </div>
    </li>
  );
}

export default TimelineItem;
