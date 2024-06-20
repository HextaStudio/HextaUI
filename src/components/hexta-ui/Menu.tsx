import React, {
  useEffect,
  useRef,
  Children,
  cloneElement,
  isValidElement,
} from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface MenuProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Menu = ({
  children,
  onOpen,
  onClose,
  isOpen,
  className,
  ...rest
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
    <div className="relative" ref={node} {...rest}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            exit={{ opacity: 0, scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "anticipate" }}
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
              {Children.map(children, (child, index) => {
                if (isValidElement(child) && child.type === MenuItem) {
                  return cloneElement(child, { key: index });
                } else if (
                  isValidElement(child) &&
                  child.type === MenuDivider
                ) {
                  return cloneElement(child, { key: index });
                }
                return null;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface MenuItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  className?: string;
}

export const MenuItem = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<MenuItemProps>) => {
  return (
    <div
      {...rest}
      className={cn(
        "px-4 py-2 mx-2 text-[14px] font-medium transition-all rounded hover:bg-zinc-800 flex items-center gap-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MenuDivider = () => {
  return <hr className="opacity-30" />;
};
