import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface TabContextType {
  activeTab: string | null;
  setActiveTab: (id: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

interface TabProviderProps {
  children: ReactNode;
  defaultActiveTab?: string;
}

export const TabProvider: React.FC<TabProviderProps> = ({
  children,
  defaultActiveTab,
}) => {
  const [activeTab, setActiveTab] = useState<string | null>(
    defaultActiveTab || null
  );

  useEffect(() => {
    if (defaultActiveTab) {
      setActiveTab(defaultActiveTab);
    }
  }, [defaultActiveTab]);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = (): TabContextType => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};

interface TabProps {
  children: React.ReactNode;
  className?: string;
}

export const Tab: React.FC<TabProps> = ({ children, className }) => {
  return <div className={cn("tab", className)}>{children}</div>;
};

interface TabHeaderProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const TabHeader: React.FC<TabHeaderProps> = ({
  id,
  children,
  className,
}) => {
  const { activeTab, setActiveTab } = useTabContext();

  return (
    <button
      onClick={() => setActiveTab(id)}
      className={cn("px-4 grow py-1 focus:outline-none focus:border-none text-[14px] rounded-md shadow-md",
        activeTab === id
          ? "font-bold bg-zinc-900 "
          : "font-normal text-white text-opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
};

interface TabContentProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const TabContent: React.FC<TabContentProps> = ({
  id,
  children,
  className,
}) => {
  const { activeTab } = useTabContext();

  return activeTab === id ? (
    <div
      className={cn(
        "p-4  border border-white border-opacity-10 rounded-md shadow-md",
        className
      )}
    >
      {children}
    </div>
  ) : null;
};
