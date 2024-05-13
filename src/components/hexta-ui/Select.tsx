import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export interface Option {
  value: string | number;
  label: string;
  icon?: JSX.Element;
}

interface SelectProps {
  options: Option[] | { [key: string]: Option[] };
  label: string;
  value?: Option | null;
  onChange?: (option: Option | null) => void;
  variant?: "default";
  isMulti?: boolean;
  isSearchable?: boolean;
  isGrouped?: boolean;
  isAnimated?: boolean;
  isIconSelect?: boolean;
}

const cn = (...args: Array<string>) => {
  return twMerge(clsx(args));
};

export const Select: React.FC<SelectProps> = ({
  options,
  label,
  value,
  onChange,
  variant = "default",
  isMulti = false,
  isSearchable = false,
  isGrouped = false,
  isAnimated = false,
  isIconSelect = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: Option) => {
    if (isMulti) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((o) => o !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      if (onChange) {
        onChange(option);
      }
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true);
    setSearchTerm(e.target.value);
  };

  const handleClearSelection = () => {
    setSelectedOptions([]);
  };

  const filteredOptions = isSearchable
    ? (options as Option[]).filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : (options as Option[]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderSelectValue = () => {
    if (isMulti) {
      return Array.isArray(selectedOptions) && selectedOptions.length > 0
        ? selectedOptions.map((option) => option.label).join(", ")
        : label;
    } else {
      return value ? value.label : label;
    }
  };

  const renderOptions = () => {
    if (isGrouped) {
      return Object.keys(options as { [key: string]: Option[] }).map(
        (group) => (
          <div key={group} className="">
            <p className="px-4 py-2 text-sm font-semibold text-gray-100 uppercase">
              {group}
            </p>
            {(options as { [key: string]: Option[] })[group].map((option) => (
              <button
                key={option.value}
                className="flex items-center w-full px-4 py-2 text-xs text-gray-100 text-opacity-90 hover:bg-zinc-900"
                onClick={() => handleOptionSelect(option)}
              >
                {isIconSelect && option.icon && (
                  <span className="mr-2 text-gray-100 opacity-90">
                    {option.icon}
                  </span>
                )}
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        )
      );
    } else {
      return filteredOptions.length > 0 ? (
        filteredOptions.map((option) => (
          <button
            key={option.value}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-100 text-opacity-90 hover:bg-zinc-900"
            onClick={() => handleOptionSelect(option)}
          >
            {isIconSelect && option.icon && (
              <span className="mr-2 text-gray-100 opacity-90">
                {option.icon}
              </span>
            )}
            <span>{option.label}</span>
            {isMulti && selectedOptions.includes(option) && (
              <svg
                className="w-4 h-4 ml-auto text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        ))
      ) : (
        <div className="px-4 py-2 text-sm text-gray-100 text-opacity-90">
          No options found
        </div>
      );
    }
  };

  const renderSearchInput = () => {
    return (
      <div className="relative">
        <input
          type="text"
          className="block w-full px-4 py-2 text-sm text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700 min-w-[10rem]"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          onClick={handleDropdownToggle}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-100"
          onClick={handleDropdownToggle}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    );
  };
  return (
    <div className="relative" ref={dropdownRef}>
      {isSearchable ? (
        renderSearchInput()
      ) : (
        <button
          type="button"
          className={cn(
            "flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700  min-w-[10rem]",
            isAnimated ? "transition-all duration-300" : ""
          )}
          onClick={handleDropdownToggle}
        >
          {isIconSelect && value && value.icon ? (
            <div className="flex items-center">
              <span className="mr-2 text-gray-100 opacity-90">
                {value.icon}
              </span>
              <span>{renderSelectValue()}</span>
            </div>
          ) : (
            renderSelectValue()
          )}
          <svg
            className={cn(
              "w-5 h-5 ml-2 -mr-1",
              isAnimated ? "transition-transform duration-300" : ""
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      {isOpen && (
        <div
          className={cn(
            "absolute z-10 flex flex-col w-full mt-2 border rounded-md shadow-lg bg-zinc-950 border-zinc-900",
            isAnimated
              ? "transition-all duration-300 origin-top transform scale-y-100 opacity-100"
              : ""
          )}
        >
          <div className="">{renderOptions()}</div>
          {isMulti && selectedOptions.length > 0 && (
            <div className="px-4 py-2">
              <button
                type="button"
                className="text-sm text-gray-100 hover:underline"
                onClick={handleClearSelection}
              >
                Clear selection
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
