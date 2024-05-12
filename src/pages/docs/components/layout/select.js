import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import { NextSeo } from "next-seo";

import { Select } from "@/components/hexta-ui/Select";
import { Table } from "@/components/hexta-ui/Table";

import { FaApple, FaAndroid, FaWindows } from "react-icons/fa";

import React, { useState } from "react";
import { InstallationSteps } from "@/components/utils/InstallationSteps";

const select = () => {
  const data = [
    {
      propName: "options",
      propType: "Array",
      defaultValue: "null",
      description: "Options to be displayed in the select.",
    },
    {
      propName: "label",
      propType: "string",
      defaultValue: "null",
      description: "Label of the select.",
    },
    {
      propName: "isGrouped",
      propType: "boolean",
      defaultValue: "false",
      description: "Group options in select.",
    },
    {
      propName: "isMulti",
      propType: "boolean",
      defaultValue: "false",
      description: "Select multiple options.",
    },
    {
      propName: "isSearchable",
      propType: "boolean",
      defaultValue: "false",
      description: "Search for an option.",
    },
    {
      propName: "isAnimated",
      propType: "boolean",
      defaultValue: "false",
      description: "Animate the select.",
    },
    {
      propName: "isIconSelect",
      propType: "boolean",
      defaultValue: "false",
      description: "Select with icons.",
    },
    {
      propName: "onChange",
      propType: "function",
      defaultValue: "null",
      description: "Function to be called on change.",
    },
    {
      propName: "className",
      propType: "string",
      defaultValue: "null",
      description: "Custom class name for the select.",
    },
  ];
  const columns = [
    {
      label: "Prop Name",
      key: "propName",
    },
    {
      label: "Prop Type",
      key: "propType",
    },
    {
      label: "Default Value",
      key: "defaultValue",
    },
    {
      label: "Description",
      key: "description",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ];

  const groupedOptions = {
    "Group 1": [
      { value: 1, label: "Option 1" },
      { value: 2, label: "Option 2" },
    ],
    "Group 2": [
      { value: 3, label: "Option 3" },
      { value: 4, label: "Option 4" },
    ],
  };

  const iconOptions = [
    { value: 1, label: "Apple", icon: <FaApple /> },
    { value: 2, label: "Android", icon: <FaAndroid /> },
    { value: 3, label: "Windows", icon: <FaWindows /> },
  ];

  const handleChange = (option) => {
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
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] p-[1rem]">
                  <div className="flex flex-col gap-4 text-center">
                    <Select
                      options={options}
                      label="Select an option"
                      onChange={handleChange}
                    />
                    <p className="text-sm opacity-80">
                      {selectedOption
                        ? selectedOption.label
                        : "No option selected"}
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <InstallationSteps component="Select" />
          <div>
            <h3 className="h3">Basic Select</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] flex-col gap-2">
              <Select
                options={options}
                label="Select an option"
                onChange={handleChange}
              />
              <p className="text-sm opacity-80">
                {selectedOption ? selectedOption.label : "No option selected"}
              </p>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`import { useState } from "react";
               
export const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ];

  const handleChange = (option) => {
    setSelectedOption(option);
  };


  return (
    <>
      <Select
        options={options}
        label="Select an option"
        onChange={handleChange}
      />
      <p className="text-sm opacity-80">
        {selectedOption ? selectedOption.label : "No option selected"}
      </p>
    </>
  )
}
`}
            />
          </div>{" "}
          <div>
            <h3 className="h3">Grouped Select</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] flex-col gap-2">
              <Select
                isGrouped
                options={groupedOptions}
                label="Select from groups"
                onChange={handleChange}
              />
              <p className="text-sm opacity-80">
                {selectedOption ? selectedOption.label : "No option selected"}
              </p>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`import { useState } from "react";

const groupedOptions = {
  "Group 1": [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
  ],
  "Group 2": [
    { value: 3, label: "Option 3" },
    { value: 4, label: "Option 4" },
  ],
};

export const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Select
        isGrouped
        options={groupedOptions}
        label="Select from groups"
        onChange={handleChange}
      />
      <p className="text-sm opacity-80">
        {selectedOption ? selectedOption.label : "No option selected"}
      </p>
    </>
  )
}`}
            />
          </div>
          <div>
            <h3 className="h3">Animated Select</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] flex-col gap-2">
              <Select
                isAnimated
                options={options}
                label="Animated select"
                onChange={handleChange}
              />
              <p className="text-sm opacity-80">
                {selectedOption ? selectedOption.label : "No option selected"}
              </p>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`import { useState } from "react";
               
export const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ];

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Select
      isAnimated
      options={options}
      label="Animated select"
      onChange={handleChange}
      />
      <p className="text-sm opacity-80">
      {selectedOption ? selectedOption.label : "No option selected"}
      </p>
    </>
  )
}`}
            />
          </div>
          <div>
            <h3 className="h3">Multi-Select</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] flex-col gap-2">
              <Select
                isMulti
                options={options}
                label="Select multiple options"
                onChange={handleChange}
              />
              <p className="text-sm opacity-80">
                {Array.isArray(selectedOption)
                  ? selectedOption.map((option) => option.label).join(", ")
                  : selectedOption
                  ? selectedOption.label
                  : "No option selected"}
              </p>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`import { useState } from "react";

export const Home = () => {
  const [selectedOption, setSelectedOption] = useState([]);

  const options = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ];

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Select
        isMulti
        options={options}
        label="Select multiple options"
        onChange={handleChange}
      />
      <p className="text-sm opacity-80">
        {selectedOption
          ? selectedOption.map((option) => option.label).join(", ")
          : "No option selected"}
      </p>
    </>
  );
}`}
            />
          </div>
          <div>
            <h3 className="h3">Searchable Select</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] flex-col gap-2">
              <Select
                isSearchable
                options={options}
                label="Search for an option"
                onChange={handleChange}
              />
              <p className="text-sm opacity-80">
                {selectedOption ? selectedOption.label : "No option selected"}
              </p>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`import { useState } from "react";

export const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ];

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Select
        isSearchable
        options={options}
        label="Search for an option"
        onChange={handleChange}
      />
      <p className="text-sm opacity-80">
        {selectedOption ? selectedOption.label : "No option selected"}
      </p>
    </>
  );
}`}
            />
          </div>
          <div>
            <h3 className="h3">Icon Select</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem] flex-col gap-2">
              <Select
                isIconSelect
                options={iconOptions}
                label="Select with icons"
                onChange={handleChange}
              />
              <p className="text-sm opacity-80">
                {selectedOption ? selectedOption.label : "No option selected"}
              </p>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`import { useState } from "react";

export const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const iconOptions = [
    { value: 1, label: "Apple", icon: <FaApple /> },
    { value: 2, label: "Android", icon: <FaAndroid /> },
    { value: 3, label: "Windows", icon: <FaWindows /> },
  ];

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Select
        isIconSelect
        options={iconOptions}
        label="Select with icons"
        onChange={handleChange}
      />
      <p className="text-sm opacity-80">
        {selectedOption ? selectedOption.label : "No option selected"}
      </p>
    </>
  );
}`}
            />
          </div>
          <div className="mt-[5rem]">
            <Table
              columns={columns}
              data={data}
              tableTitle="Props Information"
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default select;
