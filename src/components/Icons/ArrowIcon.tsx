import IconInterface from "./iconInterface";

const ArrowIcon = ({
  size = "24",
  strokeColor = "currentColor",
  customClass = "",
}: IconInterface) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke={strokeColor}
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={customClass}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 16 16 12 12 8"></polyline>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
};

export default ArrowIcon;
