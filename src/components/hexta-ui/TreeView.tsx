import React, { useState, createContext, useContext } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

type TreeNodeContextType = {
  expandedNodes: Set<string>;
  toggleNode: (id: string) => void;
};

const TreeNodeContext = createContext<TreeNodeContextType | undefined>(
  undefined,
);

type TreeHeaderProps = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export const TreeHeader: React.FC<TreeHeaderProps> = ({
  id,
  title,
  icon,
  className,
  children,
}) => {
  const { expandedNodes, toggleNode } = useContext(TreeNodeContext) || {};

  return (
    <div>
      <div
        className={clsx(
          "flex items-center  cursor-pointer text-md py-1 px-3 hover:bg-white rounded hover:bg-opacity-5 transition-all text-[15px] my-1 gap-1",
          className,
        )}
        onClick={() => toggleNode && toggleNode(id)}
      >
        {expandedNodes?.has(id) ? (
          <span className="text-[9px] flex items-center opacity-90 rotate-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
              />
            </svg>
          </span>
        ) : (
          <span className="text-[9px] flex items-center opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
              />
            </svg>
          </span>
        )}{" "}
        {icon}
        {title}
      </div>
      <AnimatePresence>
        {expandedNodes?.has(id) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-7"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type TreeChildProps = {
  className?: string;
  children?: React.ReactNode;
};

export const TreeChild: React.FC<TreeChildProps> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx(" opacity-90 text-[14px] pl-4", className)}>
      {children}
    </div>
  );
};

type TreeViewProps = {
  className?: string;
  children?: React.ReactNode;
};

export const TreeView: React.FC<TreeViewProps> = ({ className, children }) => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleNode = (id: string) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <TreeNodeContext.Provider value={{ expandedNodes, toggleNode }}>
      <div className={clsx("treeview min-w-[10rem]", className)}>
        {children}
      </div>
    </TreeNodeContext.Provider>
  );
};

export default TreeView;
