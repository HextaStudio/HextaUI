import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import React from "react";

import { NextSeo } from "next-seo";
import { InstallationSteps } from "@/components/utils/InstallationSteps";

import { Table } from "@/components/hexta-ui/Table";
import { Tabs } from "@/components/hexta-ui/Tabs";

const data = [
  {
    prop: "tabs",
    type: "Array",
    default: "[]",
    description: "Array of tabs",
  },
  {
    prop: "tabs.label",
    type: "String",
    default: "null",
    description: "Label for the tab",
  },
  {
    prop: "tabs.content",
    type: "Node",
    default: "null",
    description: "Content for the tab",
  },
  {
    prop: "className",
    type: "String",
    default: "null",
    description: "className for the tabs",
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

const tabs = () => {
  const tabContent = [
    {
      label: "Tab 1",
      content: <div>Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>Content for Tab 3</div>,
    },
  ];
  return (
    <>
      <NextSeo
        title="Tabs - HextaUI ✨"
        description="Tabs allows users to navigate between different sections of a component"
        canonical="https://ui.hextastudio.in/docs/components/layout/tabs"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/tabs",
          title: "Tabs - HextaUI ✨",
          description:
            "Tabs allows users to navigate between different sections of a component",
          images: [
            {
              url: "https://i.imgur.com/GCHQpRl.png",
              width: 1920,
              height: 1080,
              alt: "Tabs - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Tabs - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Tabs</h1>
            <p className="text-sm opacity-80">
              Tabs allows users to navigate between different sections of a
              component
            </p>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <Tabs tabs={tabContent} />
            </div>
          </div>
          <InstallationSteps component="Tabs" />
          <div className="flex flex-col gap-4 py-10 preview">
            <h3 className="h3">Tabs</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <Tabs tabs={tabContent} />
            </div>
          </div>
          <CodeBlock
            lang="jsx"
            filename="jsx"
            code={`import { Tabs } from "@/components/hexta-ui/Tabs";

export const Home = () => {
  
  const tabContent = [
    {
      label: "Tab 1",
      content: <div>Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>Content for Tab 3</div>,
    },
  ];
  
  return (
    <>
      <Tabs tabs={tabContent} />
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

export default tabs;
