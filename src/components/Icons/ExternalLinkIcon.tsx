import IconInterface from "./IconInterface";
import { h } from "preact";

const ExternalLinkIcon = ({
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
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
};

export default ExternalLinkIcon;
