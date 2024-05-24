import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { Table } from "@/components/hexta-ui/Table";
import {
  TabProvider,
  Tab,
  TabHeader,
  TabContent,
} from "@/components/hexta-ui/Tabs";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

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

const data = [
  {
    propName: "defaultActiveTab",
    propType: "string",
    defaultValue: "null",
    description: "Default active tab id.",
  },
  {
    propName: "id",
    propType: "string",
    defaultValue: "null",
    description: "Tab id.",
  },
];

const tabs = () => {
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
          <DocsPreview>
            <TabProvider defaultActiveTab="1">
              <div className="flex flex-col space-y-4">
                <div className="flex gap-1 bg-zinc-950  rounded-md p-1">
                  <TabHeader id="1">Tab 1</TabHeader>
                  <TabHeader id="2">Tab 2</TabHeader>
                </div>
                <Tab>
                  <TabContent id="1">
                    <p>This is the content for Tab 1.</p>
                  </TabContent>
                  <TabContent id="2">
                    <p>This is the content for Tab 2.</p>
                  </TabContent>
                </Tab>
              </div>
            </TabProvider>
          </DocsPreview>
          <InstallationSteps
            component="Tabs"
            imports={["Tab, TabProvider, TabHeader, TabContent"]}
          />
          <Table data={data} columns={columns} tableTitle="Props Information" />
          <CodeBlock
            title="Usage"
            lang="tsx"
            filename="Home.tsx"
            code={`<TabProvider defaultActiveTab="1">
  <div className="flex flex-col space-y-4">
    <div className="flex gap-1 bg-zinc-950  rounded-md p-1">
      <TabHeader id="1">Tab 1</TabHeader>
      <TabHeader id="2">Tab 2</TabHeader>
    </div>
    <Tab>
      <TabContent id="1">
        <p>This is the content for Tab 1.</p>
      </TabContent>
      <TabContent id="2">
        <p>This is the content for Tab 2.</p>
      </TabContent>
    </Tab>
  </div>
</TabProvider>`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default tabs;
