import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { Table } from "@/components/hexta-ui/Table";
import { Tabs } from "@/components/hexta-ui/Tabs";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const data = [
  {
    propName: "tabs",
    propType: "Array",
    defaultValue: "[]",
    description: "Array of tabs",
  },
  {
    propName: "tabs.label",
    propType: "String",
    defaultValue: "null",
    description: "Label for the tab",
  },
  {
    propName: "tabs.content",
    propType: "Node",
    defaultValue: "null",
    description: "Content for the tab",
  },
  {
    propName: "className",
    propType: "String",
    defaultValue: "null",
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
      <DocsSEO
        title="Tabs - HextaUI ✨"
        description="Tabs allows users to navigate between different sections of a component"
        image="https://i.imgur.com/GCHQpRl.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Tabs"
            description="Tabs allows users to navigate between different sections of a component"
          />
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
            lang="tsx"
            filename="Home.tsx"
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
