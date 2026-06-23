// React
import { useEffect, useRef, useState } from "react";

// Components
import ContentRowButton from "./ContentRowButton";
import ContentRowCard from "./ContentRowCard";

// Types
import type {
  ContentRowProps,
  ScrollDirection,
} from "../../types/content-row.types";

function ContentRow({ title, data }: ContentRowProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const contentListRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: ScrollDirection) => {
    const contentList = contentListRef.current;

    if (!contentList) return;

    const scrollAmount = contentList.clientWidth;
    const newScrollPosition =
      direction === "left"
        ? contentList.scrollLeft - scrollAmount
        : contentList.scrollLeft + scrollAmount;

    contentList.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  const updateScrollButtons = () => {
    const contentList = contentListRef.current;

    if (!contentList) return;

    const { scrollLeft, scrollWidth, clientWidth } = contentList;
    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollButtons();
  }, []);

  return (
    <section className="relative z-10 py-8 text-white hover:z-40">
      <h2 className="text-2xl font-bold px-14">{title}</h2>
      <div className="relative">
        {canScrollLeft && (
          <ContentRowButton
            direction="left"
            onClick={() => handleScroll("left")}
          />
        )}

        <div
          ref={contentListRef}
          onScroll={updateScrollButtons}
          className="mt-4 flex gap-3 overflow-x-auto px-14 scroll-px-14 snap-x snap-mandatory scroll-smooth scrollbar-none"
        >
          <ContentRowCard data={data} />
        </div>

        {canScrollRight && (
          <ContentRowButton
            direction="right"
            onClick={() => handleScroll("right")}
          />
        )}
      </div>
    </section>
  );
}

export default ContentRow;
