import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import React from "react";
import { useState } from "react";

import { NextSeo } from "next-seo";
import { InstallationSteps } from "@/components/utils/InstallationSteps";

import { Checkbox } from "@/components/hexta-ui/Checkbox";
import { Table } from "@/components/hexta-ui/Table";

const data = [
  {
    prop: "checked",
    type: "Boolean",
    default: "false",
    description: "State of the checkbox",
  },
  {
    prop: "onChange",
    type: "Function",
    default: "() => {}",
    description: "Function to be called when checkbox is changed",
  },
  {
    prop: "label",
    type: "String",
    default: "null",
    description: "Label for the checkbox",
  },
  {
    prop: "className",
    type: "String",
    default: "null",
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
      <NextSeo
        title="Checkbox - HextaUI ✨"
        description="Checkboxes allow the user to select one or more items from a set."
        canonical="https://ui.hextastudio.in/docs/components/layout/checkbox"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/checkbox",
          title: "Checkbox - HextaUI ✨",
          description:
            "Checkboxes allow the user to select one or more items from a set.",
          images: [
            {
              url: "https://i.imgur.com/iynaQcS.png",
              width: 1920,
              height: 1080,
              alt: "Checkbox - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Checkbox - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Checkbox</h1>
            <p className="text-sm opacity-80">
              Checkboxes allow the user to select one or more items from a set.
            </p>
          </div>
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
            lang="jsx"
            filename="jsx"
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
