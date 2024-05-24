import React, { useState, ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface AccordionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  id,
  className,
}) => {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const isOpen = openAccordionId === id;

  const toggleAccordion = () => {
    setOpenAccordionId(isOpen ? null : id!);
  };

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div
      className={cn(
        "rounded shadow-sm max-w-[30rem] w-[95%] mx-auto my-2",
        className
      )}
    >
      <div
        className="flex items-center justify-between px-4 py-2 overflow-hidden cursor-pointer hover:underline gap-4 grow"
        onClick={toggleAccordion}
      >
        <div>{childrenArray[0]}</div>
        <span className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className={`${
              isOpen ? "" : "rotate-[45deg]"
            } transition-all duration-[0.2s]`}
          >
            <path
              fill="currentColor"
              d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41z"
            />
          </svg>
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={id}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 text-[14px] pb-4 opacity-90">
              {childrenArray[1]}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <hr className="opacity-20" />
    </div>
  );
};

interface AccordionHeaderProps {
  children: ReactNode;
  className?: string;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  className,
}) => <div className={cn(className)}>{children}</div>;

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className,
}) => <div className={cn(className)}>{children}</div>;
