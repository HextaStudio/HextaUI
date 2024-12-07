import { forwardRef, useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface AvatarProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  variant?: "default" | "withStatus" | "withBadge" | "withBoth";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  className?: string;
  avatarUrl: string;
  fallbackUrl?: string;
  fallbackInitials?: string;
  status?: "online" | "offline" | "away" | "busy";
  badgeContent?: React.ReactNode;
  badgePosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  shape?: "circle" | "square" | "rounded";
  bordered?: boolean;
  borderColor?: string;
  onClick?: () => void;
  loading?: "eager" | "lazy";
  showFallback?: boolean;
}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  (
    {
      variant = "default",
      size = "md",
      className,
      avatarUrl,
      fallbackUrl,
      fallbackInitials,
      status,
      badgeContent,
      badgePosition = "top-right",
      shape = "circle",
      bordered = false,
      borderColor,
      onClick,
      loading = "lazy",
      showFallback = true,
      ...rest
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);

    const getSizeClass = () => {
      if (typeof size === "number") return `w-[${size}px] h-[${size}px]`;

      const sizes = {
        xs: "w-6 h-6",
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
        xl: "w-14 h-14",
      };
      return sizes[size];
    };

    const getShapeClass = () => {
      const shapes = {
        circle: "rounded-full",
        square: "rounded-none",
        rounded: "rounded-lg",
      };
      return shapes[shape];
    };

    const getBadgePositionClass = () => {
      const positions = {
        "top-right": "-top-1 -right-1",
        "top-left": "-top-1 -left-1",
        "bottom-right": "-bottom-1 -right-1",
        "bottom-left": "-bottom-1 -left-1",
      };
      return positions[badgePosition];
    };

    const getStatusColor = () => {
      const colors = {
        online: "bg-green-500",
        offline: "bg-gray-500",
        away: "bg-yellow-500",
        busy: "bg-red-500",
      };
      return colors[status || "offline"];
    };

    const renderFallback = () => {
      if (fallbackUrl) {
        return (
          <img
            src={fallbackUrl}
            alt="Avatar fallback"
            className={cn("object-cover", getSizeClass(), getShapeClass())}
          />
        );
      }

      if (fallbackInitials) {
        return (
          <div
            className={cn(
              "flex items-center justify-center bg-gray-200 text-gray-600",
              getSizeClass(),
              getShapeClass()
            )}
          >
            {fallbackInitials}
          </div>
        );
      }

      return null;
    };

    return (
      <motion.div
        className="relative inline-block"
        whileHover={{ scale: onClick ? 1.05 : 1 }}
        whileTap={{ scale: onClick ? 0.95 : 1 }}
      >
        <div
          onClick={onClick}
          className={cn("relative", onClick && "cursor-pointer")}
        >
          <AnimatePresence mode="wait">
            {!imageError || !showFallback ? (
              <motion.img
                key="main-image"
                ref={ref}
                src={avatarUrl}
                loading={loading}
                alt="Avatar"
                onError={() => setImageError(true)}
                className={cn(
                  "object-cover",
                  getSizeClass(),
                  getShapeClass(),
                  bordered && "ring-2",
                  bordered && (borderColor || "ring-white"),
                  className
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <motion.div
                key="fallback"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {renderFallback()}
              </motion.div>
            )}
          </AnimatePresence>

          {(variant === "withStatus" || variant === "withBoth") && status && (
            <motion.span
              className={cn(
                "absolute block w-3 h-3 rounded-full ring-2 ring-white",
                getStatusColor(),
                getBadgePositionClass()
              )}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
            />
          )}

          {(variant === "withBadge" || variant === "withBoth") &&
            badgeContent && (
              <motion.div
                className={cn(
                  "absolute flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold text-white bg-red-500 rounded-full ring-2 ring-white",
                  getBadgePositionClass()
                )}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                {badgeContent}
              </motion.div>
            )}
        </div>
      </motion.div>
    );
  }
);

Avatar.displayName = "Avatar";
