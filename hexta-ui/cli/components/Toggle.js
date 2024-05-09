import React from "react";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args) => {
  return twMerge(clsx(args));
};

export const ToggleSwitch = ({
  enabled,
  onChange,
  enabledColor = "bg-green-500",
  disabledColor = "bg-red-500",
  className,
}) => {
  const handleToggle = () => {
    onChange(!enabled);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={cn(
          `relative inline-block w-[60px] h-[32px] rounded-full cursor-pointer transition-colors ease-in-out duration-100 ${
            enabled ? enabledColor : disabledColor
          }`,
          className
        )}
        onClick={handleToggle}
      >
        <span
          className={`absolute left-[3px] top-[50%] translate-y-[-50%] bg-white w-[25px] h-[25px] rounded-full transition ease-in-out duration-100 ${
            enabled ? "translate-x-[29px]" : "translate-x-0"
          }`}
        ></span>
      </div>
    </div>
  );
};
