import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args) => {
  return clsx(twMerge(...args));
};

export const ProgressBar = ({ value, max, className }) => {
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
