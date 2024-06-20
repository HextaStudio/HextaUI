import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface AvatarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  variant?: "default" | "withStatus" | "withBadge";
  size?: number;
  className?: string;
  avatarUrl: string;
  offline?: boolean;
  badgeNumber?: number;
}

export const Avatar = ({
  variant = "default",
  size = 40,
  className,
  avatarUrl,
  offline = false,
  badgeNumber,
  ...rest
}: AvatarProps) => {
  const renderAvatar = () => {
    return (
      <img
        {...rest}
        src={avatarUrl}
        loading="lazy"
        alt="Avatar"
        width={size}
        height={size}
        className={cn(
          "rounded-full shadow-sm pointer-events-none object-cover",
          className
        )}
      />
    );
  };

  const renderStatus = () => {
    return (
      <span
        className={cn(
          "absolute bottom-[4px] right-[4px] block w-4 h-4 rounded-full ring ring-white",
          offline ? "bg-red-500" : "bg-green-500"
        )}
      />
    );
  };

  const renderBadge = () => {
    return (
      <span className="absolute top-[-2px] right-[-2px] inline-flex items-center justify-center w-7 h-7 text-xs font-bold leading-none ring ring-white text-white bg-red-500 rounded-full">
        {badgeNumber ?? 0 < 99 ? badgeNumber ?? 0 : "99+"}
      </span>
    );
  };

  return (
    <div className="relative avatar w-fit">
      {renderAvatar()}
      {variant === "withStatus" && renderStatus()}
      {variant === "withBadge" && renderBadge()}
    </div>
  );
};
