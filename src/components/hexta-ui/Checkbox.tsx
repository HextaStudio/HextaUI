import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => clsx(twMerge(...args));

interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  containerClassName?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  id?: string;
}

export const Checkbox = ({
  className,
  containerClassName,
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  onChange,
  label,
  id,
  ...rest
}: CheckboxProps) => {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className={cn("flex items-center", containerClassName)}>
      <input
        id={id}
        ref={ref}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        className={cn(
          "form-checkbox h-5 w-5 text-zinc-900 rounded focus:outline-none",
          "accent-white",
          className
        )}
        aria-checked={indeterminate ? "mixed" : checked}
        aria-disabled={disabled}
        {...rest}
      />
      {label && (
        <label
          htmlFor={id}
          className="ml-2 text-sm font-medium text-zinc-200 opacity-80"
        >
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.displayName = "Checkbox";
