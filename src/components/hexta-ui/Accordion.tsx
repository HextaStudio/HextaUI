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
    <div className="rounded shadow-sm min-w-[30rem] max-w-[30rem] my-2">
      <div
        className="flex items-center justify-between px-4 py-2 overflow-hidden cursor-pointer hover:underline"
        onClick={toggleAccordion}
      >
        <p>{childrenArray[0]}</p>
        <span>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="rotate-180"
            >
              <path
                fill="currentColor"
                d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
              />
            </svg>
          )}
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
