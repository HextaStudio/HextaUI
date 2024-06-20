import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface InputProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  type?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
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
      ...rest
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
          " flex px-4 py-2 bg-zinc-950 text-sm rounded-lg focus:outline-none border border-white border-opacity-10 focus:ring-white focus:ring-1 disabled:opacity-80 disabled:cursor-not-allowed ",
          className
        )}
        ref={ref}
        {...rest}
      />
    );
  }
);
