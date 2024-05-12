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
    <div className={cn("w-[95%] bg-gray-200 rounded-full h-3", className)}>
      <div
        className="h-3 bg-green-500 rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
