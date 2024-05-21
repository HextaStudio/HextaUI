import { useState, createContext, useContext } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};
interface TooltipContextProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

const TooltipContext = createContext<TooltipContextProps | undefined>(
  undefined,
);

interface TooltipProviderProps {
  children: React.ReactNode;
}

export const TooltipProvider = ({ children }: TooltipProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <TooltipContext.Provider value={{ isVisible, toggleVisibility }}>
      {children}
    </TooltipContext.Provider>
  );
};

interface TooltipTriggerProps {
  children: React.ReactNode;
}

export const TooltipTrigger = ({ children }: TooltipTriggerProps) => {
  const tooltipContext = useContext(TooltipContext);
  const { toggleVisibility } = tooltipContext || {};
  return (
    <div onMouseEnter={toggleVisibility} onMouseLeave={toggleVisibility}>
      {children}
    </div>
  );
};

interface TooltipContentProps {
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
  children: React.ReactNode;
  props?: any;
}

export const TooltipContent: React.FC<TooltipContentProps> = ({
  direction = "top",
  className,
  children,
  props,
}) => {
  const tooltipContext = useContext(TooltipContext);
  const { isVisible } = tooltipContext || {};
  const directionClasses: { [key: string]: string } = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className={cn(
        `absolute z-10 px-3 py-2 text-xs font-medium text-black bg-white rounded-md whitespace-nowrap border-zinc-800 border transform transition-all duration-[0.2s] flex   ${
          directionClasses[direction]
        } ${isVisible ? "opacity-100" : "opacity-0"} ${
          isVisible ? "scale-[1]" : "scale-[0.95]"
        }`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface TooltipProps {
  children: React.ReactNode;
  className?: string;
}

export const Tooltip = ({ children, className }: TooltipProps) => {
  return <div className={cn("relative flex", className)}>{children}</div>;
};
