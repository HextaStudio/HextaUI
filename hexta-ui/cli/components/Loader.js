import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args) => {
  return twMerge(clsx(args));
};
export const Loader = ({
  variant = "circleLoader",
  color = "zinc",
  size = 30,
  className,
  ...props
}) => {
  const variantStyles = {
    circleLoader: `animate-spin border-t-2 rounded-full border-${color}-500`,
    squareLoader: `animate-spin bg-${color}-100`,
    pingLoader: ` rounded-full bg-${color}-100 animate-pulse`,
    coloredLoader: `border-${color}-500 border-t-2 rounded-full border-${color}`,
  };

  const loaderClasses = clsx(variantStyles[variant], className);

  const renderLoader = () => {
    switch (variant) {
      case "circleLoader":
        return (
          <div
            className={loaderClasses}
            style={{ width: size, height: size }}
            {...props}
          />
        );
      case "squareLoader":
        return (
          <div className="flex items-center justify-center">
            <div
              className={loaderClasses}
              style={{ width: size, height: size }}
              {...props}
            />
          </div>
        );
      case "pingLoader":
        return (
          <div className="flex items-center justify-center h-screen">
            <div
              className={loaderClasses}
              style={{ width: size, height: size }}
              {...props}
            />
          </div>
        );
      case "coloredLoader":
        return (
          <div
            className={`${loaderClasses} animate-spin`}
            style={{ width: size, height: size }}
            {...props}
          />
        );
      default:
        return null;
    }
  };

  return renderLoader();
};
