import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import { Button } from "@/components/hexta-ui/Button";
import { Table } from "@/components/hexta-ui/Table";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

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
        title="Buttons - hextastudio/ui"
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
            <DocsPreview>
              <Button>Hexta UI Button</Button>
            </DocsPreview>
            <InstallationSteps component="Button" />

            <DocsPreview>
              <Button variant="secondary">Secondary Button</Button>
            </DocsPreview>
            <CodeBlock
              lang="tsx"
              filename="tsx"
              code={`<Button variant="secondary">Secondary Button</Button>`}
            />

            <DocsPreview>
              <Button variant="fail">Fail Button</Button>
            </DocsPreview>
            <CodeBlock
              lang="tsx"
              filename="tsx"
              code={`<Button variant="fail">Fail Button</Button>`}
            />

            <DocsPreview>
              <Button variant="ghost">Ghost Button</Button>
            </DocsPreview>
            <CodeBlock
              lang="tsx"
              filename="tsx"
              code={`<Button variant="ghost">Ghost Button</Button>`}
            />

            <DocsPreview>
              <Button variant="link">Link Button</Button>
            </DocsPreview>
            <CodeBlock
              lang="tsx"
              filename="tsx"
              code={`<Button variant="link">Link Button</Button>`}
            />

            <DocsPreview>
              <Button disabled>Disabled Button</Button>
            </DocsPreview>
            <CodeBlock
              lang="tsx"
              filename="tsx"
              code={`<Button disabled>Disabled Button</Button>`}
            />

            <DocsPreview>
              <Button outline>Outline Button</Button>
            </DocsPreview>
            <CodeBlock
              lang="tsx"
              filename="tsx"
              code={`<Button outline>Outline Button</Button>`}
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

export default button;
