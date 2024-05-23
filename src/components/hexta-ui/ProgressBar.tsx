import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
}

export const ProgressBar = ({ value, max, className }: ProgressBarProps) => {
  const percentage = (value / max) * 100;

  return (
    <div className={cn("w-[95%] bg-zinc-900 rounded-full h-2", className)}>
      <div
        className="h-2 bg-white rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
