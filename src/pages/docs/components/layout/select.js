import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import { NextSeo } from "next-seo";

import { FaApple, FaAndroid, FaWindows } from "react-icons/fa";

import React, { useState, useRef, useEffect } from "react";
export const Select = ({ options, label, value, onChange }) => {
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
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:border-zinc-700 min-w-[10rem]"
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

export const SearchableSelect = ({ options, label, value, onChange }) => {
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

export const GroupedSelect = ({ options, label, value, onChange }) => {
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
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700  min-w-[10rem]"
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

export const AnimatedSelect = ({ options, label, value, onChange }) => {
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
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 transition-all duration-300 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700  min-w-[10rem]"
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

export const IconSelect = ({ options, label, value, onChange }) => {
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
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700  min-w-[10rem]"
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

export const MultiSelect = ({ options, label, value, onChange }) => {
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
      <div className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700  min-w-[10rem]">
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

const select = () => {
  const options = [
    { value: "panda", label: "Panda" },
    { value: "cat", label: "Cat" },
    { value: "dog", label: "Dog" },
  ];

  const GroupedOptions = {
    Mobile: [
      { value: "apple", label: "Apple" },
      { value: "android", label: "Android" },
    ],
    Computer: [
      { value: "apple", label: "Apple" },
      { value: "windows", label: "Android" },
      { value: "linux", label: "Linux" },
    ],
  };

  const IconsOptions = [
    { value: "Apple", label: "Apple", icon: <FaApple /> },
    { value: "Android", label: "Android", icon: <FaAndroid /> },
    { value: "Windows", label: "Windows", icon: <FaWindows /> },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <NextSeo
        title="Select - HextaUI ✨"
        description="Used for collecting user provided information from a list of options."
        canonical="https://ui.hextastudio.in/docs/components/layout/select"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/select",
          title: "Select - HextaUI ✨",
          description:
            "Used for collecting user provided information from a list of options.",
          images: [
            {
              url: "https://i.imgur.com/6lS5lCy.png",
              width: 1920,
              height: 1080,
              alt: "Select - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Select - HextaUI ✨",
        }}
      />

      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Select</h1>
            <p className="text-sm opacity-80">
              Used for collecting user provided information from a list of
              options.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Basic Select</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] p-[1rem]">
                  <div className="flex flex-col gap-4 text-center">
                    <Select
                      options={options}
                      label="Select an option"
                      value={selectedOption}
                      onChange={handleOptionChange}
                    />
                    <p className="text-xs text-zinc-300">
                      Selected: {selectedOption ? selectedOption.label : "None"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React, { useState, useRef, useEffect } from "react";
                
export const Select = ({ options, label, value, onChange }) => {
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
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:border-zinc-700 min-w-[10rem]"
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
};`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React, { useState } from 'react';
import { Select } from '@/components/Select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Select
        options={options}
        label="Select an option"
        value={selectedOption}
        onChange={handleOptionChange}
      />
    </div>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Select with Search</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] p-[1rem]">
                  <div className="flex flex-col gap-4 text-center">
                    <SearchableSelect
                      options={options}
                      label="Select an option"
                      value={selectedOption}
                      onChange={handleOptionChange}
                    />
                    <p className="text-xs text-zinc-300">
                      Selected: {selectedOption ? selectedOption.label : "None"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React, { useState, useRef, useEffect } from "react";
                
export const SearchableSelect = ({ options, label, value, onChange }) => {
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
};`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React, { useState } from 'react';
import { SearchableSelect } from '@/components/Select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  // Add more options as needed
];

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <SearchableSelect
        options={options}
        label="Select an option"
        value={selectedOption}
        onChange={handleOptionChange}
      />
    </div>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Select with Groups</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[40rem] p-[1rem]">
                  <div className="flex flex-col gap-4 text-center">
                    <GroupedSelect
                      options={GroupedOptions}
                      label="Select an option"
                      value={selectedOption}
                      onChange={handleOptionChange}
                    />
                    <p className="text-xs text-zinc-300">
                      Selected: {selectedOption ? selectedOption.label : "None"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React, { useState, useRef, useEffect } from "react";
                
export const GroupedSelect = ({ options, label, value, onChange }) => {
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
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700  min-w-[10rem]"
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
};`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React, { useState } from 'react';
import { GroupedSelect } from '@/components/Select';

const groupedOptions = {
  Group1: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
  Group2: [
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
  ],
};

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <GroupedSelect
        options={groupedOptions}
        label="Select an option"
        value={selectedOption}
        onChange={handleOptionChange}
      />
    </div>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Animated Select</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] p-[1rem]">
                  <div className="flex flex-col gap-4 text-center">
                    <AnimatedSelect
                      options={options}
                      label="Select an option"
                      value={selectedOption}
                      onChange={handleOptionChange}
                    />
                    <p className="text-xs text-zinc-300">
                      Selected: {selectedOption ? selectedOption.label : "None"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React, { useState, useRef, useEffect } from "react";
export const AnimatedSelect = ({ options, label, value, onChange }) => {
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
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 transition-all duration-300 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700  min-w-[10rem]"
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
};`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React, { useState } from 'react';
import { AnimatedSelect } from '@/components/Select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <AnimatedSelect
        options={options}
        label="Select an option"
        value={selectedOption}
        onChange={handleOptionChange}
      />
    </div>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Select with Icons</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] p-[1rem]">
                  <div className="flex flex-col gap-4 text-center">
                    <IconSelect
                      options={IconsOptions}
                      label="Select an option"
                      value={selectedOption}
                      onChange={handleOptionChange}
                    />
                    <p className="text-xs text-zinc-300">
                      Selected: {selectedOption ? selectedOption.label : "None"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React, { useState, useRef, useEffect } from "react";
import { FaApple, FaAndroid, FaWindows } from "react-icons/fa";

export const IconSelect = ({ options, label, value, onChange }) => {
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
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700  min-w-[10rem]"
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
};`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React, { useState } from 'react';
import { IconSelect } from '@/components/Select';
import { FaApple, FaAndroid, FaWindows } from 'react-icons/fa';

const iconOptions = [
  { value: 'apple', label: 'Apple', icon: <FaApple /> },
  { value: 'android', label: 'Android', icon: <FaAndroid /> },
  { value: 'windows', label: 'Windows', icon: <FaWindows /> },
];

const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <IconSelect
        options={iconOptions}
        label="Select an option"
        value={selectedOption}
        onChange={handleOptionChange}
      />
    </div>
  );
};`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Multi Select</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] p-[1rem]">
                  <div className="flex flex-col gap-4 text-center">
                    <MultiSelect
                      options={options}
                      label="Select an option"
                      value={selectedOption}
                      onChange={handleOptionChange}
                    />
                    <p className="text-xs text-zinc-300">
                      Selected: {selectedOption ? selectedOption.label : "None"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React, { useState, useRef, useEffect } from "react";
                
export const MultiSelect = ({ options, label, value, onChange }) => {
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
      <div className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 border rounded-md border-zinc-900 bg-zinc-950 focus:outline-none focus:border-zinc-700  min-w-[10rem]">
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
`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import React, { useState } from 'react';
import { MultiSelect } from '@/components/Select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const MyComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionsChange = (option) => {
    setSelectedOptions(option);
  };

  return (
    <div>
      <MultiSelect
        options={options}
        label="Select options"
        value={selectedOptions}
        onChange={handleOptionsChange}
      />
    </div>
  );
};`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default select;
