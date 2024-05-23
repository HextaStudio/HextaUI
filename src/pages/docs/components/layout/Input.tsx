import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";
import { useState } from "react";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { Input } from "@/components/hexta-ui/Input";
import { Table } from "@/components/hexta-ui/Table";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

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
      <DocsSEO
        title="Input - HextaUI ✨"
        description="Collection of Input components with different variants."
        image="https://i.imgur.com/znkNh7x.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Input"
            description="Collection of Input components with different variants."
          />
          <DocsPreview>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter your name..."
            />
          </DocsPreview>
          <InstallationSteps component="Input" />

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
