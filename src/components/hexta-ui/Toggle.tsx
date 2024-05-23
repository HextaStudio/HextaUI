import React from "react";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface ToggleProps {
  enabled: boolean;
  onChange: (value: boolean) => void;
  enabledColor?: string;
  disabledColor?: string;
  className?: string;
}

export const Toggle = ({
  enabled,
  onChange,
  enabledColor = "bg-white",
  disabledColor = "bg-zinc-800",
  className,
}: ToggleProps) => {
  const handleToggle = () => {
    onChange(!enabled);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={cn(
          `relative inline-block w-[55px] h-[27px] rounded-full cursor-pointer transition-colors ease-in-out duration-100 ${
            enabled ? enabledColor : disabledColor
          }`,
          className
        )}
        onClick={handleToggle}
      >
        <span
          className={`absolute left-[3px] top-[50%] translate-y-[-50%] bg-zinc-950 w-[20px] h-[20px] rounded-full transition ease-in-out duration-100 ${
            enabled ? "translate-x-[29px]" : "translate-x-0"
          }`}
        ></span>
      </div>
    </div>
  );
};
