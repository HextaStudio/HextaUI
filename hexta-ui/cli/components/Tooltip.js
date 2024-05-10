import { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args) => {
  return twMerge(clsx(args));
};

export const TooltipComponent = ({
  text,
  direction = "top",
  children,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const directionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const tooltipClasses = `absolute z-10  px-3 py-2 text-xs font-medium text-black bg-white rounded-md whitespace-nowrap ${
    directionClasses[direction]
  } border-zinc-800 border transform transition-all duration-[0.2s] flex ${
    isVisible ? "flex" : "hidden"
  }`;

  return (
    <div className="relative flex">
      <div onMouseEnter={toggleVisibility} onMouseLeave={toggleVisibility}>
        {children}
      </div>
      <div className={cn(tooltipClasses, className)}>{text}</div>
    </div>
  );
};
