import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface SkeletonProps {
  width: string;
  height: string;
  className?: string;
}

export const Skeleton = ({ width, height, className }: SkeletonProps) => {
  return (
    <>
      <div
        className={cn(
          `skeleton animate-pulse bg-white bg-opacity-10 rounded`,
          className
        )}
        style={{ width, height }}
      ></div>
    </>
  );
};
