import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "fail"
    | "ghost"
    | "link";
  disabled?: boolean;
  outline?: boolean;
  animated?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  children,
  className,
  variant = "primary",
  disabled = false,
  outline = false,
  animated = false,
  ...rest
}: ButtonProps) => {
  const baseClasses = twMerge(
    "px-[20px] py-[8px] rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
  );

  const variantClasses = clsx({
    "bg-white border border-zinc-900 text-black": variant === "primary",
    "bg-zinc-950 border border-zinc-900 text-white": variant === "secondary",
    "bg-blue-400 border border-blue-900 text-black": variant === "info",
    "bg-green-400 border border-green-900 text-black": variant === "success",
    "bg-red-700 border border-red-900 text-white": variant === "fail",
    "text-white hover:bg-zinc-950": variant === "ghost",
    "text-white hover:underline underline-offset-1": variant === "link",
  });

  const disabledClasses = disabled
    ? twMerge("opacity-50 cursor-not-allowed")
    : "";
  const outlineClasses = outline
    ? twMerge("bg-transparent border border-white border-opacity-20 text-white")
    : "";
  const animatedClasses = animated
    ? twMerge("transition-all duration-[0.2s] hover:scale-105")
    : "";

  const classes = twMerge(
    baseClasses,
    variantClasses,
    disabledClasses,
    outlineClasses,
    animatedClasses,
    className
  );

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
