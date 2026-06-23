import IconArrow from "../../../../assets/icons/IconArrow";

function ContentRowButton(
  {
    direction,
    onClick,
  }: { direction: "left" | "right"; onClick: () => void } = {
    direction: "left",
    onClick: () => {},
  },
) {
  const positionDirection = direction === "left" ? "left-0" : "right-0";
  const isLeft = direction === "left" ? "r" : "l";

  return (
    <div
      className={`group absolute bg-linear-to-${isLeft} from-black/70 h-full w-14 flex items-center justify-center top-0 ${positionDirection} hover:bg-black/30 transition-colors duration-150 ease-in-out cursor-pointer`}
      onClick={onClick}
    >
      <div className="w-10 group-hover:w-12 transition-all duration-150 ease-in-out">
        <IconArrow direction={direction} />
      </div>
    </div>
  );
}

export default ContentRowButton;
