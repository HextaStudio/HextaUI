import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <>
      <div
        className={cn(
          `skeleton animate-pulse bg-white bg-opacity-10  w-12 h-12 rounded-md`,
          className
        )}
      ></div>
    </>
  );
};
