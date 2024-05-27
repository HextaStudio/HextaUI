import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { useState } from "react";
import { Slider } from "@/components/hexta-ui/Slider";
import { Table } from "@/components/hexta-ui/Table";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

const data = [
  {
    propName: "value",
    propType: "Number",
    defaultValue: "0",
    description: "Value of the slider",
  },
  {
    propName: "min",
    propType: "Number",
    defaultValue: "0",
    description: "Minimum value of the slider",
  },
  {
    propName: "max",
    propType: "Number",
    defaultValue: "100",
    description: "Maximum value of the slider",
  },
  {
    propName: "onChange",
    propType: "Function",
    defaultValue: "() => {}",
    description: "Function to be called when value is changed",
  },
  {
    propName: "className",
    propType: "String",
    defaultValue: "null",
    description: "className for the slider",
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
const slider = () => {
  const [value, setValue] = useState(23);

  return (
    <>
      <DocsSEO
        title="Slider - hextastudio/ui"
        description="Slider allows user to select a value from range of specific values."
        image="https://i.imgur.com/rkYrlmH.png"
      />
      <DocsLayout>
        <main>
          {" "}
          <DocsHeader
            title="Slider"
            description="Slider allows user to select a value from range of specific values."
          />
          <DocsPreview>
            <div>
              <Slider
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                min={0}
                max={100}
              />
              <p className="text-sm opacity-80">Value: {value}</p>
            </div>
          </DocsPreview>
          <InstallationSteps component="Slider" imports="Slider" />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import React from "react";
import { useState } from "react";          

export const Home = () => {
    const [value, setValue] = useState(23);
    return (
        <>
             <Slider
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                min={0}
                max={100}
              />
              <p className="text-sm opacity-80">Value: {value}</p> 
        </>
    )
}

`}
          />
          <Table data={data} columns={columns} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default slider;
