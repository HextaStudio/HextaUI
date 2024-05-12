import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface SliderProps {
  min?: number;
  max?: number;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Slider = ({
  className,
  min = 0,
  max = 100,
  value,
  onChange,
  ...props
}: SliderProps) => {
  return (
    <input
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
};

Slider.displayName = "Slider";
