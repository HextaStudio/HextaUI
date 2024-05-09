import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args) => {
  return twMerge(clsx(args));
};

export const Select = ({ options, label, value, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className={cn(
          "flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:border-zinc-700 min-w-[10rem]",
          className
        )}
        onClick={handleDropdownToggle}
      >
        {value ? value.label : label}
        <svg
          className="w-5 h-5 ml-2 -mr-1"
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

      {isOpen && (
        <div className="absolute z-10 flex flex-col w-full mt-2 border rounded-md shadow-lg bg-zinc-950 border-zinc-900">
          <div className="">
            {options.map((option) => (
              <button
                key={option.value}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-100 text-opacity-90 hover:bg-zinc-900"
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const SearchableSelect = ({
  options,
  label,
  value,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onChange(option);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          className={cn(
            "block w-full px-4 py-2 text-sm text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700 min-w-[10rem]",
            className
          )}
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

      {isOpen && (
        <div className="absolute z-10 flex flex-col w-full mt-2 border rounded-md shadow-lg bg-zinc-950 border-zinc-900">
          <div className="">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-100 text-opacity-90 hover:bg-zinc-900"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.label}
                </button>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-100 text-opacity-90">
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const GroupedSelect = ({
  options,
  label,
  value,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className={cn(
          "flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700  min-w-[10rem]",
          className
        )}
        onClick={handleDropdownToggle}
      >
        {value ? value.label : label}
        <svg
          className="w-5 h-5 ml-2 -mr-1"
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

      {isOpen && (
        <div className="absolute z-10 flex flex-col w-full mt-2 border rounded-md shadow-lg bg-zinc-950 border-zinc-900">
          {Object.keys(options).map((group) => (
            <div key={group} className="">
              <p className="px-4 py-2 text-sm font-semibold text-gray-100 uppercase">
                {group}
              </p>
              {options[group].map((option) => (
                <button
                  key={option.value}
                  className="flex items-center w-full px-4 py-2 text-xs text-gray-100 text-opacity-90 hover:bg-zinc-900"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const AnimatedSelect = ({
  options,
  label,
  value,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className={cn(
          "flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 transition-all duration-300 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700  min-w-[10rem]",
          className
        )}
        onClick={handleDropdownToggle}
      >
        {value ? value.label : label}
        <svg
          className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300"
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

      {isOpen && (
        <div className="absolute z-10 flex flex-col w-full mt-2 transition-all duration-300 origin-top transform scale-y-100 border rounded-md shadow-lg opacity-100 bg-zinc-950 border-zinc-900">
          <div className="">
            {options.map((option) => (
              <button
                key={option.value}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-100 transition-colors duration-300 text-opacity-90 hover:bg-zinc-900"
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const IconSelect = ({ options, label, value, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className={cn(
          "flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700  min-w-[10rem]",
          className
        )}
        onClick={handleDropdownToggle}
      >
        {value ? (
          <div className="flex items-center">
            {value.icon && (
              <span className="mr-2 text-gray-100 opacity-90">
                {value.icon}
              </span>
            )}
            <span>{value.label}</span>
          </div>
        ) : (
          label
        )}
        <svg
          className="w-5 h-5 ml-2 -mr-1"
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

      {isOpen && (
        <div className="absolute z-10 flex flex-col w-full mt-2 border rounded-md shadow-lg bg-zinc-950 border-zinc-900">
          <div className="">
            {options.map((option) => (
              <button
                key={option.value}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-100 text-opacity-90 hover:bg-zinc-900"
                onClick={() => handleOptionSelect(option)}
              >
                {option.icon && (
                  <span className="mr-2 text-gray-100 opacity-90">
                    {option.icon}
                  </span>
                )}
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const MultiSelect = ({ options, label, value, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleClearSelection = () => {
    setSelectedOptions([]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={cn(
          "flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700  min-w-[10rem]",
          className
        )}
      >
        <div onClick={handleDropdownToggle}>
          {selectedOptions.length > 0
            ? selectedOptions.map((option) => option.label).join(", ")
            : label}
        </div>
        <button
          type="button"
          className="flex items-center text-gray-100"
          onClick={handleDropdownToggle}
        >
          <svg
            className="w-5 h-5 ml-2 -mr-1"
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

      {isOpen && (
        <div className="absolute z-10 flex flex-col w-full mt-2 border rounded-md shadow-lg bg-zinc-950 border-zinc-900">
          <div className="">
            {options.map((option) => (
              <button
                key={option.value}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-100 text-opacity-90 hover:bg-zinc-900"
                onClick={() => handleOptionSelect(option)}
              >
                <span>{option.label}</span>
                {selectedOptions.includes(option) && (
                  <svg
                    className="w-4 h-4 text-green-500"
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
            ))}
          </div>
          {selectedOptions.length > 0 && (
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
