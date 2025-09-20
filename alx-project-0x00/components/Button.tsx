import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  styles, // must exist
}) => {
  let padding = "px-4 py-2";
  if (size === "small") padding = "px-2 py-1 text-sm";
  else if (size === "large") padding = "px-6 py-3 text-lg";

  return (
    <button
      className={`bg-blue-500 text-white ${padding} ${shape} ${styles} hover:bg-blue-600 transition`}
    >
      {title}
    </button>
  );
};

export default Button;
