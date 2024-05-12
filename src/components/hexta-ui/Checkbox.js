import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args) => {
  return clsx(twMerge(...args));
};

export const Checkbox = React.forwardRef(
  (
    { className, checked, disabled = false, onChange, label, ...props },
    ref
  ) => {
    return (
      <div className="flex items-center">
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className={cn(
            "form-checkbox h-5 w-5 text-zinc-900 rounded focus:outline-none",
            "accent-white",
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={props.id}
            className="ml-2 text-sm font-medium text-zinc-200 opacity-80"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
