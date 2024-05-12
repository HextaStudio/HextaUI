import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface InputProps {
  className?: string;
  type?: string;
  disabled?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input = ({
  className,
  type = "text",
  disabled = false,
  value,
  onChange,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cn(
        "flex px-4 py-3 my-4 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50",
        className
      )}
      {...props}
    />
  );
};

Input.displayName = "Input";
