import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { ProgressBar } from "@/components/hexta-ui/ProgressBar";
import { Table } from "@/components/hexta-ui/Table";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

const data = [
  {
    propName: "value",
    propType: "Number",
    defaultValue: "0",
    description: "Value of the progress bar",
  },
  {
    propName: "max",
    propType: "Number",
    defaultValue: "100",
    description: "Maximum value of the progress bar",
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

const progressbar = () => {
  return (
    <>
      <DocsSEO
        title="Progress Bar - HextaUI ✨"
        description="Progress Bar allows user to display progress of specific operation."
        image="https://i.imgur.com/wIeGLVv.png"
      />
      <DocsLayout>
        <main>
          {" "}
          <DocsHeader
            title="Progress Bar"
            description="Progress Bar allows user to display progress of specific operation."
          />
          <DocsPreview>
            <ProgressBar value={50} max={100} />
          </DocsPreview>
          <InstallationSteps component="ProgressBar" />
          <CodeBlock
            lang="tsx"
            filename="tsx"
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
          <Table columns={columns} data={data} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default progressbar;
