import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";
import Link from "next/link";

import { Breadcrumb } from "@/components/hexta-ui/Breadcrumb";
import { Table } from "@/components/hexta-ui/Table";

const breadcrumb = () => {
  const items = [
    { title: "Home", href: "#" },
    { title: "Docs", href: "#" },
    { title: "Components", href: "#" },
    { title: "Layout", href: "#" },
    { title: "Breadcrumb", href: "#", active: true },
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

  const data = [
    {
      propName: "items",
      propType: "Array",
      defaultValue: "[]",
      description: "Array of items to be displayed in the breadcrumb.",
    },
  ];

  return (
    <>
      <NextSeo
        title="Breadcrumb - HextaUI ✨"
        description="Displays the path to the current resource using a hierarchy of links."
        canonical="https://ui.hextastudio.in/docs/components/layout/breadcrumb"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/breadcrumb",
          title: "Breadcrumb - HextaUI ✨",
          description:
            "Displays the path to the current resource using a hierarchy of links.",
          images: [
            {
              url: "https://i.imgur.com/oDya0tl.png",
              width: 1920,
              height: 1080,
              alt: "Breadcrumb - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Breadcrumb - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Breadcrumb</h1>
            <p className="text-sm opacity-80">
              Displays the path to the current resource using a hierarchy of
              links.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[13rem] p-4">
                  <Breadcrumb items={items} />
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
> Breadcrumb
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
? Which component would you like to install? Breadcrumb
✔ Breadcrumb component was added successfully — Guide to use Breadcrumb, https://ui.hextastudio.in/docs/components/layout/breadcrumb`}
              />
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { Breadcrumb } from "@/components/hexta-ui/Breadcrumb";`}
              />
            </div>
          </div>
          <div>
            <h3 className="h3">Breadcrumb</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] text-center">
              <div>
                <Breadcrumb items={items} />
              </div>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="jsx"
              filename="jsx"
              code={`
import { Breadcrumb } from "@/components/hexta-ui/Breadcrumb";


export const Home = () => {
  const items = [
    { title: "Home", href: "#" },
    { title: "Docs", href: "#" },
    { title: "Components", href: "#" },
    { title: "Layout", href: "#" },
    { title: "Breadcrumb", href: "#", active: true },
  ];
  
  return (
    <>
      <Breadcrumb items={items} />
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

export default breadcrumb;
