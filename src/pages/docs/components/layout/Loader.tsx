import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import { Loader } from "@/components/hexta-ui/Loader";
import { Table } from "@/components/hexta-ui/Table";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

const loader = () => {
  const data = [
    {
      propName: "size",
      propType: "number",
      defaultValue: "32",
      description: "Size of the loader.",
    },
    {
      propName: "className",
      propType: "string",
      defaultValue: "null",
      description: "Custom class name for the loader.",
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
  return (
    <>
      <DocsSEO
        title="Loaders - HextaUI ✨"
        description="Collection of Loaders components with different variants."
        image="https://i.imgur.com/TQAInIK.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Loader"
            description="Collection of Loaders components with different variants."
          />
          <DocsPreview>
            <Loader size={40} />
          </DocsPreview>
          <InstallationSteps component="Loader" imports="Loader" />
          <CodeBlock lang="tsx" filename="tsx" code={`<Loader size={40} />`} />
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

export default loader;
