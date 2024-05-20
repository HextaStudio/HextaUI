import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface MenuItem {
  label: string;
  href: string;
  icon?: JSX.Element;
}

interface MenuProps {
  items: MenuItem[];
  dividedItems?: MenuItem[];
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  className?: string;
}

export const Menu = ({
  items,
  dividedItems,
  onOpen,
  onClose,
  isOpen,
  className,
}: MenuProps) => {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen === true) {
      const handleClickOutside = (e: MouseEvent) => {
        if (node.current && !node.current.contains(e.target as Node)) {
          onClose();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [onClose]);
  return (
    <div className="relative" ref={node}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "anticipate" }}
            className={cn(
              "absolute right-0 w-48 mt-2 border border-white border-opacity-10 rounded-lg shadow-lg bg-zinc-950 ring-1 ring-black ring-opacity-5",
              className
            )}
          >
            <div
              className="flex flex-col gap-2 py-2"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
                  role="menuitem"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
              {dividedItems && dividedItems.length > 0 && (
                <hr className="opacity-30" />
              )}
              {dividedItems &&
                dividedItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3"
                    role="menuitem"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
