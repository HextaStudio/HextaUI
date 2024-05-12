import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args) => {
  return clsx(twMerge(...args));
};

export const Input = React.forwardRef(
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
        ref={ref}
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
  }
);

Input.displayName = "Input";
