import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import React from "react";
import { useState } from "react";

import { NextSeo } from "next-seo";
import { InstallationSteps } from "@/components/utils/InstallationSteps";

import { DragAndDrop } from "@/components/hexta-ui/DragAndDrop";
import { Table } from "@/components/hexta-ui/Table";

const data = [
  {
    prop: "items",
    type: "Array",
    default: "[]",
    description: "Array of items to be displayed",
  },
  {
    prop: "onDrop",
    type: "Function",
    default: "() => {}",
    description: "Function to be called when item is dropped",
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

const dragAndDrop = () => {
  const handleDrop = (draggedItem, dropIndex) => {
    const newItems = items.filter((item) => item !== draggedItem);
    newItems.splice(dropIndex, 0, draggedItem);
    setItems(newItems);
  };

  const [items, setItems] = useState([
    { label: "Item 1" },
    { label: "Item 2" },
    { label: "Item 3" },
    { label: "Item 4" },
  ]);

  return (
    <>
      <NextSeo
        title="Drag And Drop - HextaUI ✨"
        description="Allows user to drag and drop to rearrange items."
        canonical="https://ui.hextastudio.in/docs/components/layout/dragAndDrop"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/dragAndDrop",
          title: "Drag And Drop - HextaUI ✨",
          description: "Allows user to drag and drop to rearrange items.",
          images: [
            {
              url: "https://i.imgur.com/mctcbAW.png",
              width: 1920,
              height: 1080,
              alt: "Drag And Drop - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Drag And Drop - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Drag And Drop</h1>
            <p className="text-sm opacity-80">
              Allows user to drag drop to and rearrange items.
            </p>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <DragAndDrop items={items} onDrop={handleDrop} />
            </div>
          </div>
          <InstallationSteps component="DragAndDrop" />
          <div className="flex flex-col gap-4 py-10 preview">
            <h3 className="h3">Drag And Drop</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <DragAndDrop items={items} onDrop={handleDrop} />
            </div>
          </div>
          <CodeBlock
            lang="jsx"
            filename="jsx"
            code={`import { useState } from "react";
import { DragAndDrop } from "@/components/hexta-ui/DragAndDrop";

export const Home = () => {
    const handleDrop = (draggedItem, dropIndex) => {
        const newItems = items.filter((item) => item !== draggedItem);
        newItems.splice(dropIndex, 0, draggedItem);
        setItems(newItems);
    };
    
    const [items, setItems] = useState([
        { label: "Item 1" },
        { label: "Item 2" },
        { label: "Item 3" },
        { label: "Item 4" },
    ]);
    
    return (
        <>
            <DragAndDrop items={items} onDrop={handleDrop} />
        </>
    )
`}
          />
          <Table data={data} columns={columns} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default dragAndDrop;
