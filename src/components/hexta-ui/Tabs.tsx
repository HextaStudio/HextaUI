import React, { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface TabsProps {
  tabs: any[];
  className: string;
}

export const Tabs = ({ tabs, className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={cn("w-[95%]", className)}>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={cn(
              "py-2 px-4 font-medium text-sm rounded-t-lg focus:outline-none transition-all ease-linear duration-100",
              activeTab === index
                ? "bg-neutral-100 text-neutral-700"
                : "text-neutral-500 hover:bg-neutral-800 hover:text-zinc-500"
            )}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
};
