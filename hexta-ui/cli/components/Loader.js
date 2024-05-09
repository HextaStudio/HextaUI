import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args) => {
  return twMerge(clsx(args));
};

export const SpinnerCircleLoader = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "w-[30px] h-[30px] border-t-2 rounded-full border-zinc animate-spin",
        className
      )}
      {...props}
    ></div>
  );
};

export const SpinnerSquareLoader = ({ className, ...props }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn("w-[30px] h-[30px] bg-zinc-100 animate-spin", className)}
        {...props}
      ></div>
    </div>
  );
};

export const PingLoader = ({ className, ...props }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={cn(
          "w-[30px] h-[30px] rounded-full bg-zinc-100 animate-ping",
          className
        )}
        {...props}
      ></div>
    </div>
  );
};

export const ColoredLoader = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "w-[30px] h-[30px] border-zinc-500 border-t-2 rounded-full border-zinc animate-spin",
        className
      )}
      {...props}
    ></div>
  );
};
