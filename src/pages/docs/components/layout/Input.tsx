import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import React from "react";
import { useState } from "react";

import { NextSeo } from "next-seo";
import { InstallationSteps } from "@/components/utils/InstallationSteps";

import { Input } from "@/components/hexta-ui/Input";
import { Table } from "@/components/hexta-ui/Table";
import { DocsHeader } from "@/components/utils/DocsHeader";

const data = [
  {
    propName: "value",
    propType: "String",
    defaultValue: "''",
    description: "Value of the input",
  },
  {
    propName: "onChange",
    propType: "Function",
    defaultValue: "() => {}",
    description: "Function to be called when value is changed",
  },
  {
    propName: "placeholder",
    propType: "String",
    defaultValue: "''",
    description: "Placeholder for the input",
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
const input = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <NextSeo
        title="Input - HextaUI ✨"
        description="Collection of Input components with different variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/input"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/input",
          title: "Input - HextaUI ✨",
          description:
            "Collection of Input components with different variants.",
          images: [
            {
              url: "https://i.imgur.com/znkNh7x.png",
              width: 1920,
              height: 1080,
              alt: "Input - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Input - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Input"
            description="Collection of Input components with different variants."
          />
          <div className="flex flex-col gap-4 py-10 preview">
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter your name..."
              />
            </div>
          </div>
          <InstallationSteps component="Input" />
          <div className="flex flex-col gap-4 py-10 preview">
            <h3 className="h3">Text Input</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter your name..."
              />
            </div>
          </div>
          <CodeBlock
            lang="tsx"
            filename="Home.tsx"
            code={`import { useState } from "react";
import { Input } from "@/components/hexta-ui/Input";

export const Home = () => {
    const [value, setValue] = useState("");
    
    return (
        <>
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter your name..."
            />
        </>
    );
}`}
          />
          <Table data={data} columns={columns} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default input;
