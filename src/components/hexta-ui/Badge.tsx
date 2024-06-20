import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface BadgeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
  outlined?: boolean;
  pill?: boolean;
  icon?: boolean;
  counter?: number;
  glowing?: boolean;
  animated?: boolean;
  segmented?: boolean;
  className?: string;
}

export const Badge = ({
  children,
  variant = "primary",
  outlined = false,
  pill = false,
  icon,
  counter,
  glowing = false,
  animated = false,
  segmented = false,
  className,
  ...rest
}: BadgeProps) => {
  const baseStyle =
    "px-3 py-1 rounded-full flex items-center font-[600] text-[12px] transition-all duration-[0.3s]";

  const variantStyles = {
    primary: outlined
      ? "border-2 border-zinc-900 text-zinc-100"
      : "bg-white border border-zinc-900 text-black",
    secondary: outlined
      ? "border-2 border-zinc-900 text-zinc-100"
      : "bg-zinc-950 border border-zinc-900 text-white",
    info: outlined
      ? "border-2 border-blue-900 text-blue-100"
      : "bg-blue-400 border border-blue-900 text-black",
    success: outlined
      ? "border-2 border-green-900 text-green-100"
      : "bg-green-400 border border-green-900 text-black",
    warning: outlined
      ? "border-2 border-yellow-900 text-yellow-100"
      : "bg-yellow-400 border border-yellow-900 text-black",
    danger: outlined
      ? "border-2 border-red-900 text-red-100"
      : "bg-red-700 border border-red-900 text-white",
  };

  const pillStyle = pill ? "rounded-full" : "";
  const iconStyle = icon ? "flex items-center" : "";
  const counterStyle = counter ? "flex items-center" : "";
  const glowingStyle = glowing
    ? variant === "primary"
      ? "hover:shadow-glow-white"
      : "hover:shadow-glow-blue"
    : "";
  const animatedStyle = animated
    ? variant === "primary"
      ? "animate-pulse hover:animate-none"
      : "animate-bounce"
    : "";
  const segmentedStyle = segmented ? "rounded-none" : "rounded-full";

  const badgeClasses = cn(
    baseStyle,
    variantStyles[variant],
    pillStyle,
    iconStyle,
    counterStyle,
    glowingStyle,
    animatedStyle,
    segmentedStyle
  );

  return (
    <span className={cn(badgeClasses, className)} {...rest}>
      {icon && (
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {children}
      {counter && (
        <small className="flex items-center justify-center w-5 h-5 ml-2 text-sm text-white bg-red-500 rounded-full">
          {counter}
        </small>
      )}
    </span>
  );
};
