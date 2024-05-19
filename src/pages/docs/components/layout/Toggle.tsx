import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import { useState } from "react";

import { Table } from "@/components/hexta-ui/Table";
import { Toggle } from "@/components/hexta-ui/Toggle";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

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
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] text-center flex-col">
                  <Toggle enabled={isEnabled} onChange={handleToggle} />
                  <p className="mt-2 text-sm ">
                    {isEnabled ? "Enabled" : "Disabled"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <InstallationSteps component="Toggle" />
          <div>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] text-center">
              <div>
                <Toggle enabled={isEnabled} onChange={handleToggle} />
                <p className="mt-2 text-sm ">
                  {isEnabled ? "Enabled" : "Disabled"}
                </p>
              </div>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`import { useState } from "react";
import { Toggle } from "@/components/hexta-ui/Toggle";


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

export default toggle;
