import IconArrow from "../../../../assets/icons/IconArrow";

function ContentRowButton(
  { direction }: { direction: "left" | "right" } = { direction: "left" },
) {
  const isLeft = direction === "left" ? "r" : "l";

  return (
    <div
      className={`group absolute bg-linear-to-${isLeft} from-black/70 h-full w-14 flex items-center justify-center top-0 ${direction}-0 hover:bg-black/30 transition-colors duration-150 ease-in-out cursor-pointer`}
    >
      <div className="w-10 group-hover:w-12 transition-all duration-150 ease-in-out">
        <IconArrow direction={direction} />
      </div>
    </div>
  );
}

export default ContentRowButton;
