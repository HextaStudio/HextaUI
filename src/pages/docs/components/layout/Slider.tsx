import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";

import { NextSeo } from "next-seo";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { useState } from "react";
import { Slider } from "@/components/hexta-ui/Slider";
import { Table } from "@/components/hexta-ui/Table";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

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
  const [value, setValue] = useState(50);

  return (
    <>
      <DocsSEO
        title="Slider - HextaUI ✨"
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
          <div className="flex flex-col gap-4 py-10 preview">
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              {" "}
              <div>
                <Slider
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  min={0}
                  max={100}
                />
                <p className="text-sm opacity-80">Value: {value}</p>
              </div>
            </div>
          </div>
          <InstallationSteps component="ProgressBar" />
          <div className="flex flex-col gap-4 py-10 preview">
            <h3 className="h3">Slider</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <div>
                <Slider
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  min={0}
                  max={100}
                />
                <p className="text-sm opacity-80">Value: {value}</p>
              </div>
            </div>
          </div>
          <CodeBlock
            lang="tsx"
            filename="Home.tsx"
            code={`import { ProgressBar } from "@/components/hexta-ui/ProgressBar";

export const Home = () => {
    return (
        <>
            <ProgressBar value={50} max={100} />   
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
