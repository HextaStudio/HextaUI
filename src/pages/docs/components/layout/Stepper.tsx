import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { Stepper } from "@/components/hexta-ui/Stepper";
import { Table } from "@/components/hexta-ui/Table";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const data = [
  {
    propName: "steps",
    propType: "Array",
    defaultValue: "[]",
    description: "Array of steps",
  },
  {
    propName: "steps.label",
    propType: "String",
    defaultValue: "null",
    description: "Label for the step",
  },
  {
    propName: "steps.content",
    propType: "Node",
    defaultValue: "null",
    description: "Content for the step",
  },
  {
    propName: "activeStep",
    propType: "Number",
    defaultValue: "0",
    description: "Active step index",
  },
  {
    propName: "className",
    propType: "String",
    defaultValue: "null",
    description: "className for the stepper",
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
const stepper = () => {
  const stepContent = [
    {
      label: "Step 1",
      content: <div>Step 1 is Active</div>,
    },
    {
      label: "Step 2",
      content: <div>Step 2 is Active</div>,
    },
    {
      label: "Step 3",
      content: <div>Step 3 is Active</div>,
    },
    {
      label: "Step 3",
      content: <div>Step 3 is Active</div>,
    },
  ];
  return (
    <>
      <DocsSEO
        title="Stepper - HextaUI ✨"
        description="Stepper is used to display progress in a linear sequence of tasks."
        image="https://i.imgur.com/2XmpMHU.png"
      />
      <DocsLayout>
        <main>
          {" "}
          <DocsHeader
            title="Stepper"
            description="Stepper is used to display progress in a linear sequence of tasks."
          />
          <div className="flex flex-col gap-4 py-10 preview">
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
              <div>
                <Stepper
                  steps={stepContent.map((step) => ({
                    ...step,
                    content: step.content.toString(),
                  }))}
                  activeStep={2}
                />
              </div>
            </div>
          </div>
          <InstallationSteps component="ProgressBar" />
          <div className="flex flex-col gap-4 py-10 preview">
            <h3 className="h3">Slider</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
              <div>
                <Stepper
                  steps={stepContent.map((step) => ({
                    ...step,
                    content: step.content.toString(),
                  }))}
                  activeStep={2}
                />{" "}
              </div>
            </div>
          </div>
          <CodeBlock
            lang="tsx"
            filename="Home.tsx"
            code={`import { Stepper } from "@/components/hexta-ui/Stepper";

export const Home = () => {
  const stepContent = [
    {
      label: "Step 1",
      content: <div>Step 1 is Active</div>,
    },
    {
      label: "Step 2",
      content: <div>Step 2 is Active</div>,
    },
    {
      label: "Step 3",
      content: <div>Step 3 is Active</div>,
    },
    {
      label: "Step 3",
      content: <div>Step 3 is Active</div>,
    },
  ];
  
  return (
    <>
      <div>
          <Stepper
            steps={stepContent.map((step) => ({
              ...step,
              content: step.content.toString(),
            }))}
            activeStep={2}
          />      
      </div>
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

export default stepper;
