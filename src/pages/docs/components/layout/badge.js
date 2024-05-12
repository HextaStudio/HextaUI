import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

import Badge from "@/components/hexta-ui/Badges";
import { Table } from "@/components/hexta-ui/Table";

const badges = () => {
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
      <NextSeo
        title="Badges - HextaUI ✨"
        description="Collection of multiple badges/chips with multiple variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/badges"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/badges",
          title: "Badges - HextaUI ✨",
          description:
            "Collection of multiple badges/chips with multiple variants.",
          images: [
            {
              url: "https://i.imgur.com/T4CpygK.png",
              width: 1920,
              height: 1080,
              alt: "Badges - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Badges - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Badges</h1>
            <p className="text-sm opacity-80">
              Collection of multiple badges/chips with multiple variants.
            </p>
          </div>{" "}
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <Badge>Latest version</Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="installation">
            <div>
              <h2 className="text-3xl font-bold">Installation</h2>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npm install @hextastudio/ui
# or
bun install @hextastudio/ui
# or
yarn add @hextastudio/ui
# or
pnpm add @hextastudio/ui`}
              />

              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npx hexta-ui add`}
              />
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? (Use arrow keys)
> Next.js 
  React`}
              />
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? Next.js
? Which component would you like to install?
  AlertDialog
  Avatar
> Badges
  Button
  Loader
  Select
  Toast
  Toggle
  Tooltip`}
              />
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? Next.js         
? Which component would you like to install? Badges
✔ Badges component was added successfully — Guide to use Badges, https://ui.hextastudio.in/docs/components/layout/badges`}
              />
              <p>Importing badges in your file.</p>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { Badge } from "@/components/hexta-ui/Badge";`}
              />
            </div>

            <div>
              <h3 className="h3">Basic Badge</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                <Badge>Latest version</Badge>
              </div>
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
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
                lang="jsx"
                filename="jsx"
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
                lang="jsx"
                filename="jsx"
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
                lang="jsx"
                filename="jsx"
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
                lang="jsx"
                filename="jsx"
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
                lang="jsx"
                filename="jsx"
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
                lang="jsx"
                filename="jsx"
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

export default badges;
