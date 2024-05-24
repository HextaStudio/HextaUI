import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import { Table } from "@/components/hexta-ui/Table";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const table = () => {
  const data = [
    {
      propName: "data",
      propType: "array",
      defaultValue: "[]",
      description: "Data to be displayed in the table.",
    },
    {
      propName: "columns",
      propType: "array",
      defaultValue: "[]",
      description: "Columns to be displayed in the table.",
    },
    {
      propName: "className",
      propType: "string",
      defaultValue: "null",
      description: "Custom class name for the table.",
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

  const TableData = [
    { id: 1, name: "Whiskers", age: 2 },
    { id: 2, name: "Fluffy", age: 5 },
    { id: 3, name: "Sassy", age: 3 },
    { id: 4, name: "Shadow", age: 4 },
    { id: 5, name: "Simba", age: 1 },
    { id: 6, name: "Mittens", age: 2 },
    { id: 7, name: "Snowball", age: 5 },
    { id: 8, name: "Tiger", age: 3 },
    { id: 9, name: "Smokey", age: 4 },
    { id: 10, name: "Kitty", age: 1 },
  ];

  const TableColumns = [
    { key: "id", label: "Kitty ID" },
    { key: "name", label: "Kitty Name" },
    { key: "age", label: "Age" },
  ];

  return (
    <>
      <DocsSEO
        title="Table"
        description="Responsive Table component used to display information in table format."
        image="https://i.imgur.com/Vd0QX6d.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Table"
            description="Responsive Table component used to display information in table format."
          />
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center p-6 my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                  <div className="m-4">
                    <Table data={TableData} columns={TableColumns} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InstallationSteps component="Table" />
          <div>
            <div className="relative flex items-center justify-center p-6 my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
              <div>
                <Table data={TableData} columns={TableColumns} />
              </div>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="tsx"
              code={`export const Home = () => {
    const data = [
        { id: 1, name: "Whiskers", age: 2 },
        { id: 2, name: "Fluffy", age: 5 },
        { id: 3, name: "Sassy", age: 3 },
        { id: 4, name: "Shadow", age: 4 },
        { id: 5, name: "Simba", age: 1 },
    ];

    const columns = [
        { key: "id", label: "Kitty ID" },
        { key: "name", label: "Kitty Name" },
        { key: "age", label: "Age" },
    ];

    return (
      <>
          <Table data={TableData} columns={TableColumns} />  
      </>
    );
}`}
            />
          </div>
          <div className="mt-[5rem]">
            <Table
              columns={columns}
              data={data}
              tableTitle="Props Information"
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default table;
