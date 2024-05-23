import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import { useState } from "react";

import { Table } from "@/components/hexta-ui/Table";
import { Toggle } from "@/components/hexta-ui/Toggle";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

const toggle = () => {
  const data = [
    {
      propName: "enabled",
      propType: "boolean",
      defaultValue: "false",
      description: "State of the toggle.",
    },
    {
      propName: "onChange",
      propType: "function",
      defaultValue: "null",
      description: "Function to be called on toggle.",
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

  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = (value: boolean | ((prevState: boolean) => boolean)) => {
    setIsEnabled(value);
  };

  return (
    <>
      <DocsSEO
        title="Toggle - HextaUI ✨"
        description="Toggle switch component with enabled and disabled state."
        image="https://i.imgur.com/L9bkOYd.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Toggle"
            description="Toggle switch component with enabled and disabled state."
          />
          <DocsPreview>
            <Toggle enabled={isEnabled} onChange={handleToggle} />
            <p className="mt-2 text-sm ">
              {isEnabled ? "Enabled" : "Disabled"}
            </p>
          </DocsPreview>
          <InstallationSteps component="Toggle" />
          <CodeBlock
            lang="tsx"
            filename="Home.tsx"
            code={`import { useState } from "react";

export const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = (value) => {
    setIsEnabled(value);
  };
  
  return (
    <>
      <div>
        <Toggle enabled={isEnabled} onChange={handleToggle} />
        
        <p className="mt-2 text-sm ">
          {isEnabled ? "Enabled" : "Disabled"}
        </p>
      </div>
    </>
  );
}`}
          />
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

export default toggle;
