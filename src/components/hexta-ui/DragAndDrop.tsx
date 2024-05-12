import React, { useState, useRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface DragAndDropProps {
  items: { label: string }[];
  onDrop: (item: { label: string }) => void;
  className?: string;
}

export const DragAndDrop = ({ items, onDrop, className }: DragAndDropProps) => {
  const dropZoneRef = useRef(null);
  const [draggedItem, setDraggedItem] = useState<{ label: string } | null>(
    null
  );

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    item: { label: string }
  ) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", "");
  };

  const handleDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleDrop = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (draggedItem) {
      onDrop(draggedItem);
    }
    setDraggedItem(null);
  };

  return (
    <div
      ref={dropZoneRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={cn(
        "border-2 border-dashed border-gray-300 p-4 rounded-lg",
        className
      )}
    >
      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            className="px-4 py-2 m-2 border border-white rounded-md cursor-move bg-neutral-950 border-opacity-10"
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
