interface IconArrowProps {
  direction?: "left" | "right";
}

function IconArrow({ direction }: IconArrowProps = { direction: "left" }) {
  const arrowDirection = direction === "left" ? "rotate(180)" : "none";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="none"
      className={`size-full text-white ${
        direction === "left" ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path
        d="M178 101L333 256L178 411"
        stroke="currentColor"
        strokeWidth="43"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export default IconArrow;
