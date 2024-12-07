import React, { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

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
  loading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      disabled = false,
      outline = false,
      animated = false,
      loading = false,
      loadingText,
      icon,
      iconPosition = "left",
      fullWidth = false,
      size = "md",
      type = "button",
      ariaLabel,
      onClick,
      ...rest
    },
    ref
  ) => {
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
      ? twMerge(
          "bg-transparent border border-white border-opacity-20 text-white"
        )
      : "";
    const animatedClasses = animated
      ? twMerge("transition-all duration-[0.2s] hover:scale-105")
      : "";
    const fullWidthClasses = fullWidth ? "w-full justify-center" : "w-auto";

    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-[20px] py-[8px] text-[14px]",
      lg: "px-6 py-3 text-lg",
    }[size];

    const classes = twMerge(
      baseClasses,
      variantClasses,
      disabledClasses,
      outlineClasses,
      animatedClasses,
      fullWidthClasses,
      sizeClasses,
      className
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading || disabled) return;
      onClick?.(e);
    };

    const renderContent = () => (
      <>
        {loading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            {loadingText || children}
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span className="mr-2">{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <span className="ml-2">{icon}</span>
            )}
          </>
        )}
      </>
    );
    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        onClick={handleClick}
        type={type}
        aria-label={
          ariaLabel ||
          (typeof children === "string" ? children.toString() : undefined)
        }
        {...rest}
      >
        {renderContent()}
      </button>
    );
  }
);

Button.displayName = "Button";
