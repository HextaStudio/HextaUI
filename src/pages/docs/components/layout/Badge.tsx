import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import { Badge } from "@/components/hexta-ui/Badge";
import { Table } from "@/components/hexta-ui/Table";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

const badge = () => {
  const data = [
    {
      propName: "variant",
      propType: "string",
      defaultValue: "primary",
      description: "Variant of the badge.",
    },
    {
      propName: "outlined",
      propType: "boolean",
      defaultValue: "false",
      description: "Outlined variant of the badge.",
    },
    {
      propName: "icon",
      propType: "boolean",
      defaultValue: "false",
      description: "Icon variant of the badge.",
    },
    {
      propName: "pill",
      propType: "boolean",
      defaultValue: "false",
      description: "Pill variant of the badge.",
    },
    {
      propName: "counter",
      propType: "number",
      defaultValue: "null",
      description: "Counter variant of the badge.",
    },
    {
      propName: "glowing",
      propType: "boolean",
      defaultValue: "false",
      description: "Glowing variant of the badge.",
    },
    {
      propName: "animated",
      propType: "boolean",
      defaultValue: "false",
      description: "Animated variant of the badge.",
    },
    {
      propName: "segmented",
      propType: "boolean",
      defaultValue: "false",
      description: "Segmented variant of the badge.",
    },
    {
      propName: "className",
      propType: "string",
      defaultValue: "null",
      description: "Custom class name for the badge.",
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
        title="Badges - HextaUI ✨"
        description="Collection of multiple badges/chips with multiple variants."
        image="https://i.imgur.com/T4CpygK.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Badges"
            description="Collection of multiple badges/chips with multiple variants."
          />
          <DocsPreview>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
              <Badge>Latest version</Badge>
            </div>
          </DocsPreview>
          <InstallationSteps component="badge" />
          <div className="installation">
            <div>
              <h3 className="h3">Basic Badge</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <Badge>Latest version</Badge>
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Badge>Latest version</Badge>`}
              />
            </div>

            <div>
              <h3 className="h3">Outlined Badge</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <div className="flex gap-4 ">
                  <Badge variant="info" outlined>
                    Info
                  </Badge>
                </div>
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Badge variant="info" outlined>Info</Badge>`}
              />
            </div>

            <div>
              <h3 className="h3">Badge with Icon</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <div className="flex gap-4 ">
                  <Badge pill icon>
                    Success
                  </Badge>
                </div>
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Badge pill icon>Success</Badge>`}
              />
            </div>

            <div>
              <h3 className="h3">Badge with Counter</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <div className="flex gap-4 ">
                  <Badge counter={5}>Notifications</Badge>
                </div>
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Badge counter={5}>Notifications</Badge>`}
              />
            </div>

            <div>
              <h3 className="h3">Glowing Badge</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <div className="flex gap-4 ">
                  <Badge variant="secondary" glowing>
                    Glowing Secondary
                  </Badge>
                </div>
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Badge variant="secondary" glowing>Glowing Secondary</Badge>`}
              />
            </div>

            <div>
              <h3 className="h3">Pulsing Animated Badge</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <div className="flex gap-4 ">
                  <Badge variant="primary" animated>
                    Pulsing Primary
                  </Badge>
                </div>
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<Badge variant="primary" animated>Pulsing Primary</Badge>`}
              />
            </div>

            <div>
              <h3 className="h3">Segmented Badge</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <div className="flex gap-4 ">
                  <div className="inline-flex overflow-hidden rounded-lg">
                    <Badge segmented className="rounded-e-sm">
                      Primary
                    </Badge>
                    <Badge
                      variant="secondary"
                      segmented
                      className="rounded-s-sm"
                    >
                      Secondary
                    </Badge>
                  </div>
                </div>
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="tsx"
                filename="Home.tsx"
                code={`<div className="inline-flex overflow-hidden rounded-lg">
  <Badge segmented className="rounded-e-sm">Primary</Badge>
  <Badge variant="secondary" segmented className="rounded-s-sm">Secondary</Badge>
</div>`}
              />
            </div>
          </div>
          <div className="mt-[5rem]">
            <Table
              columns={columns}
              data={data}
              tableTitle="Props Information"
            />
          </div>{" "}
        </main>
      </DocsLayout>
    </>
  );
};

export default badge;
