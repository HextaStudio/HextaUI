import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};
interface DocsPreviewProps {
  children: React.ReactNode;
  className?: string;
}

export const DocsPreview = ({ children, className }: DocsPreviewProps) => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-4 py-10 preview">
          <div>
            <h3 className="text-2xl font-bold">Preview</h3>
            <div
              className={cn(
                "relative flex items-center justify-center my-3  flex-col  overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container min-h-[15rem]",
                className
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
