import React, { useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AccordionProps {
  children: ReactNode;
  id?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, id }) => {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const isOpen = openAccordionId === id;

  const toggleAccordion = () => {
    setOpenAccordionId(isOpen ? null : id!);
  };

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className="rounded shadow-sm min-w-full sm:min-w-[20rem] md:min-w-[30rem] max-w-full sm:max-w-[20rem] md:max-w-[30rem] my-2">
      <div
        className="flex items-center justify-between px-4 py-2 overflow-hidden cursor-pointer hover:underline"
        onClick={toggleAccordion}
      >
        <p>{childrenArray[0]}</p>
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
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
}) => <>{children}</>;

interface AccordionContentProps {
  children: ReactNode;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
}) => <>{children}</>;
