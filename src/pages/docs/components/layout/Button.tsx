import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import { Button } from "@/components/hexta-ui/Button";
import { Table } from "@/components/hexta-ui/Table";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const button = () => {
  const data = [
    {
      propName: "variant",
      propType: "string",
      defaultValue: "primary",
      description: "Variant of the button.",
    },
    {
      propName: "outline",
      propType: "boolean",
      defaultValue: "false",
      description: "Outline variant of the button.",
    },
    {
      propName: "disabled",
      propType: "boolean",
      defaultValue: "false",
      description: "Disabled variant of the button.",
    },
    {
      propName: "className",
      propType: "string",
      defaultValue: "null",
      description: "Custom class name for the button.",
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
        title="Buttons - HextaUI ✨"
        description="Collection of multiple buttons with multiple variants."
        image="https://i.imgur.com/eOlyvkH.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Buttons"
            description="Collection of multiple buttons with multiple variants."
          />
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[13rem]">
                  <Button>Hexta UI Button</Button>
                </div>
              </div>
            </div>
            <InstallationSteps component="Button" />
            <div className="installation">
              <h2 className="text-3xl font-bold">Example Usage</h2>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button>Primary Button</Button>
              </div>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`import Button from "@/components/hexta-ui/Button";
                
<Button>Primary Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Secondary Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button variant="secondary">Secondary Button</Button>
              </div>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Button variant="secondary">Secondary Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Info Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button variant="info">Info Button</Button>
              </div>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Button variant="info">Info Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Success Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button variant="success">Success Button</Button>
              </div>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Button variant="success">Success Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Fail Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button variant="fail">Fail Button</Button>
              </div>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Button variant="fail">Fail Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Ghost Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button variant="ghost">Ghost Button</Button>
              </div>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Button variant="ghost">Ghost Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Link Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button variant="link">Link Button</Button>
              </div>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Button variant="link">Link Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Disabled Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button disabled>Disabled Button</Button>
              </div>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Button disabled>Disabled Button</Button>`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Outline Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
                <Button outline>Outline Button</Button>
              </div>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Button outline>Outline Button</Button>`}
              />
            </div>
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

export default button;
