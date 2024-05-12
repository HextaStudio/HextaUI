import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args) => {
  return clsx(twMerge(...args));
};
export const Slider = React.forwardRef(
  ({ className, min = 0, max = 100, value, onChange, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full h-1 bg-neutral-950  rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Slider.displayName = "Slider";
