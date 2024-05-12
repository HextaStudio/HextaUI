import React, { useState, useRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { FaTrash } from "react-icons/fa";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface FileUploadProps {
  className?: string;
  multiple?: boolean;
  accept?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const FileUpload = ({
  className,
  multiple = false,
  accept,
  onChange,
  disabled = false,
  children,
}: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files as unknown as File[];
    setFiles([...files, ...(newFiles || [])]);
    if (onChange) {
      onChange(e);
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleDrop = (e: {
    preventDefault: () => void;
    dataTransfer: { files: any };
  }) => {
    e.preventDefault();
    const newFiles = e.dataTransfer.files;
    setFiles([...files, ...newFiles]);
  };

  return (
    <div className={cn("w-full", className)}>
      {files.length == 0 && (
        <>
          <input
            ref={inputRef}
            type="file"
            multiple={multiple}
            accept={accept}
            onChange={handleFileChange}
            disabled={disabled}
            className="hidden"
          />
          <div
            className={cn(
              "flex items-center justify-center w-fit mx-auto px-4 py-3 my-4 text-sm rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50",
              disabled
                ? "bg-neutral-950 text-gray-500 cursor-not-allowed"
                : "bg-neutral-950 text-zinc-200 border border-white border-opacity-10 hover:bg-neutral-900"
            )}
            onClick={handleUploadClick}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {children || "Click or drop files to upload"}
          </div>
        </>
      )}

      <div className="mt-2">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 px-4 mb-2 border border-white rounded-md bg-neutral-950 border-opacity-10  max-w-[15rem] w-full overflow-ellipsis mx-auto"
          >
            <span className="text-sm whitespace-nowrap overflow-hidden text-zinc-200 w-[13rem] text-ellipsis">
              {file.name}
            </span>
            <button
              type="button"
              className="p-2 text-red-500 rounded hover:bg-neutral-900"
              onClick={() => handleRemoveFile(index)}
            >
              <FaTrash size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
