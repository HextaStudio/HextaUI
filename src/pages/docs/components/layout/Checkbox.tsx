import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";
import { useState } from "react";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { Checkbox } from "@/components/hexta-ui/Checkbox";
import { Table } from "@/components/hexta-ui/Table";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

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
        title="Checkbox - hextastudio/ui"
        description="Checkboxes allow the user to select one or more items from a set."
        image="https://i.imgur.com/iynaQcS.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Checkbox"
            description="Checkboxes allow the user to select one or more items from a set."
          />
          <DocsPreview title="Preview">
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              label="Accept Terms and Conditions"
            />
          </DocsPreview>
          <InstallationSteps component="Checkbox" imports="Checkbox" />

          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import { useState } from "react";

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
