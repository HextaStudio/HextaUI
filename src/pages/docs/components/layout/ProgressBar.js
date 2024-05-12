import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import React from "react";
import { useState } from "react";

import { NextSeo } from "next-seo";
import { InstallationSteps } from "@/components/utils/InstallationSteps";

import { ProgressBar } from "@/components/hexta-ui/ProgressBar";
import { Table } from "@/components/hexta-ui/Table";

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

const progressBar = () => {
  return (
    <>
      <NextSeo
        title="Progress Bar - HextaUI ✨"
        description="Progress Bar allows user to display progress of specific operation."
        canonical="https://ui.hextastudio.in/docs/components/layout/progressBar"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/progressBar",
          title: "Progress Bar - HextaUI ✨",
          description:
            "Progress Bar allows user to display progress of specific operation.",
          images: [
            {
              url: "https://i.imgur.com/wIeGLVv.png",
              width: 1920,
              height: 1080,
              alt: "Progress Bar - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Progress Bar - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Progress Bar</h1>
            <p className="text-sm opacity-80">
              Progress Bar allows user to display progress of specific
              operation.
            </p>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              {" "}
              <ProgressBar value={50} max={100} />
            </div>
          </div>
          <InstallationSteps component="ProgressBar" />
          <div className="flex flex-col gap-4 py-10 preview">
            <h3 className="h3">Progress Bar</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              {" "}
              <ProgressBar value={50} max={100} />
            </div>
          </div>
          <CodeBlock
            lang="jsx"
            filename="jsx"
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

export default progressBar;
