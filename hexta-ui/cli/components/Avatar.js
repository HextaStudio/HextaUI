import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args) => {
  return twMerge(clsx(args));
};

export const Avatar = ({ size, className, avatarUrl }) => {
  return (
    <div className="avatar">
      <img
        src={avatarUrl}
        loading="lazy"
        alt="Avatar"
        quality={100}
        width={size}
        height={size}
        objectFit="cover"
        placeholder="blur"
        blurDataURL={`https://placeholder.co/${size}`}
        className={cn("shadow-md rounded-full", className)}
        pointer-events-none
      />
    </div>
  );
};

export const AvatarWithStatus = ({ offline, className, size, avatarUrl }) => {
  return (
    <div className="relative avatar w-fit">
      <img
        src={`${avatarUrl}`}
        loading="lazy"
        alt="Avatar"
        quality={100}
        width={size}
        height={size}
        objectFit="cover"
        placeholder="blur"
        blurDataURL={`https://placeholder.co/${size}`}
        className={cn("rounded-full shadow-sm pointer-events-none", className)}
      />
      <span
        className={`absolute bottom-[4px] right-[4px] block w-4 h-4 bg-${
          offline ? "red" : "green"
        }-500 rounded-full ring ring-white`}
      ></span>
    </div>
  );
};

export const AvatarWithBadge = ({
  className,
  size,
  avatarUrl,
  badgeNumber = 2,
}) => {
  return (
    <div className="relative avatar w-fit">
      <img
        src={`${avatarUrl}`}
        loading="lazy"
        alt="Avatar"
        quality={100}
        width={size}
        height={size}
        objectFit="cover"
        placeholder="blur"
        blurDataURL={`https://placeholder.co/${size}`}
        className={cn("rounded-full shadow-sm pointer-events-none", className)}
      />
      <span className="absolute top-[-2px] right-[-2px] inline-flex items-center justify-center w-7 h-7 text-xs font-bold leading-none ring ring-white text-white bg-red-500 rounded-full">
        {badgeNumber < 99 ? badgeNumber : "99+"}
      </span>
    </div>
  );
};


