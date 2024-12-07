import React, { useState, ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface AccordionProviderProps {
  children: ReactNode;
  className?: string;
  defaultIndex?: number;
  allowMultiple?: boolean;
  onChange?: (index: number) => void;
}

interface AccordionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  index?: number;
  className?: string;
  isOpen?: boolean;
  toggleAccordion?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  variant?: "default" | "bordered" | "ghost";
}

const AccordionProvider: React.FC<AccordionProviderProps> = ({
  children,
  className,
  defaultIndex,
  allowMultiple = false,
  onChange,
}) => {
  const [openAccordionIndices, setOpenAccordionIndices] = useState<number[]>(
    defaultIndex !== undefined ? [defaultIndex] : []
  );

  const toggleAccordion = (index: number) => {
    if (allowMultiple) {
      setOpenAccordionIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenAccordionIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
    onChange?.(index);
  };

  const childrenArray = React.Children.map(children, (child, index) => {
    if (React.isValidElement<AccordionProps>(child)) {
      return React.cloneElement(child, {
        index,
        isOpen: openAccordionIndices.includes(index),
        toggleAccordion: () => toggleAccordion(index),
      });
    }
    return child;
  });

  return <div className={className}>{childrenArray}</div>;
};

const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  isOpen,
  toggleAccordion,
  disabled = false,
  icon,
  variant = "default",
  ...rest
}) => {
  const childrenArray = React.Children.toArray(children);

  const getVariantClasses = () => {
    switch (variant) {
      case "bordered":
        return "border border-zinc-800 rounded-lg";
      case "ghost":
        return "bg-transparent hover:bg-white/5";
      default:
        return "bg-white/[3%] rounded-lg";
    }
  };

  return (
    <div
      {...rest}
      className={cn(
        "max-w-[30rem] w-[95%] mx-auto my-2 transition-all duration-200",
        getVariantClasses(),
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <button
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 cursor-pointer",
          "hover:bg-white/5 transition-colors duration-200",
          disabled && "cursor-not-allowed"
        )}
        onClick={!disabled ? toggleAccordion : undefined}
        disabled={disabled}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="opacity-70">{icon}</span>}
          <div className="text-left">{childrenArray[0]}</div>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-[14px] opacity-80">
              {childrenArray[1]}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  className?: string;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={cn(className)} {...rest}>
    {children}
  </div>
);

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className,
}) => <div className={cn(className)}>{children}</div>;

export { AccordionProvider, Accordion, AccordionHeader, AccordionContent };
