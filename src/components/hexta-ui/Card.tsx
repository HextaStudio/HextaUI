import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "default"
    | "primary"
    | "outline"
    | "imageTop"
    | "imageBottom"
    | "hoverGrow";
  image?: string;
  buttons?: React.ReactNode;
  props?: any;
}

export const Card = ({
  children,
  className,
  variant = "default",
  image,
  buttons,
  ...props
}: CardProps) => {
  const cardStyles = {
    default:
      "bg-neutral-950 rounded-lg shadow-md p-6 border border-white border-opacity-10 hover:shadow-lg transition-shadow duration-300 max-w-[25rem] m-4",
    primary:
      "bg-neutral-950 text-white rounded-lg shadow-md p-6 hover:scale-[1.01] transition-transform duration-300 border border-white border-opacity-10 max-w-[25rem] m-4",
    outline:
      "border border-white border-opacity-10 rounded-lg p-6 hover:bg-neutral-950 transition-colors duration-300 max-w-[25rem] m-4",
    imageTop:
      "bg-neutral-950 rounded-lg shadow-md border border-white border-opacity-10 hover:shadow-lg transition-shadow duration-300 max-w-[25rem] m-4",
    imageBottom:
      "bg-neutral-950 rounded-lg shadow-md border border-white border-opacity-10 hover:shadow-lg transition-shadow duration-300 max-w-[25rem] m-4",
    hoverGrow:
      "bg-neutral-950 rounded-lg shadow-md p-6 border border-white border-opacity-10 hover:scale-105 transition-transform duration-300 max-w-[25rem] m-4",
  };

  const renderImage = () => {
    if (variant === "imageTop") {
      return (
        <div className="p-4">
          <img
            src={image}
            alt="Card Image"
            className="object-cover w-full h-48 rounded-lg"
          />
          <div className="pt-4">{children}</div>
        </div>
      );
    } else if (variant === "imageBottom") {
      return (
        <div className="p-4">
          <div className="pb-4">{children}</div>
          <img
            src={image}
            alt="Card Image"
            className="object-cover w-full h-48 rounded-lg"
          />
        </div>
      );
    }
  };

  const renderButtons = () => {
    if (buttons) {
      return <div className="flex justify-start py-4 space-x-2">{buttons}</div>;
    }
  };

  return (
    <div className={cn(cardStyles[variant], className)} {...props}>
      {image && renderImage()}
      {!image && children}
      {renderButtons()}
    </div>
  );
};
