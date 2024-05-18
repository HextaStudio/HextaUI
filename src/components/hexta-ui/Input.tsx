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
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      disabled = false,
      value,
      onChange,
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <input
        type={type}
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "flex px-4 py-3 my-4 text-sm rounded-lg focus:outline-none border border-white border-opacity-10 focus:border-opacity-30 focus:outline-2 ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
