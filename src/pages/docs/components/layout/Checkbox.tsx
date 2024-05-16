import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import React from "react";
import { useState } from "react";

import { NextSeo } from "next-seo";
import { InstallationSteps } from "@/components/utils/InstallationSteps";

import { Checkbox } from "@/components/hexta-ui/Checkbox";
import { Table } from "@/components/hexta-ui/Table";
import { DocsHeader } from "@/components/utils/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const data = [
  {
    propName: "checked",
    propType: "Boolean",
    defaultValue: "false",
    description: "State of the checkbox",
  },
  {
    propName: "onChange",
    propType: "Function",
    defaultValue: "() => {}",
    description: "Function to be called when checkbox is changed",
  },
  {
    propName: "label",
    propType: "String",
    defaultValue: "null",
    description: "Label for the checkbox",
  },
  {
    propName: "className",
    propType: "String",
    defaultValue: "null",
    description: "className for the checkbox",
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

const checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <DocsSEO
        title="Checkbox - HextaUI ✨"
        description="Checkboxes allow the user to select one or more items from a set."
        image="https://i.imgur.com/iynaQcS.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Checkbox"
            description="Checkboxes allow the user to select one or more items from a set."
          />
          <div className="flex flex-col gap-4 py-10 preview">
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                label="Accept Terms and Conditions"
              />
            </div>
          </div>
          <InstallationSteps component="Checkbox" />
          <div className="flex flex-col gap-4 py-10 preview">
            <h3 className="h3">Checkbox</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                label="Accept Terms and Conditions"
              />
            </div>
          </div>
          <CodeBlock
            lang="tsx"
            filename="Home.tsx"
            code={`import { useState } from "react";
import { Checkbox } from "@/components/hexta-ui/Checkbox";

export const Home = () => {
    const [checked, setChecked] = useState(false);
    
    return (
        <>
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              label="Accept Terms and Conditions"
            />
        </>
    );
}`}
          />
          <Table columns={columns} data={data} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default checkbox;
