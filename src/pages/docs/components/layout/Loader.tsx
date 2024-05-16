import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { Loader } from "@/components/hexta-ui/Loader";
import { Table } from "@/components/hexta-ui/Table";

import { NextSeo } from "next-seo";
import { InstallationSteps } from "@/components/utils/InstallationSteps";
import { DocsHeader } from "@/components/utils/DocsHeader";

const loader = () => {
  const data = [
    {
      propName: "variant",
      propType: "string",
      defaultValue: "circleLoader",
      description: "Variant of the loader.",
    },
    {
      propName: "color",
      propType: "string",
      defaultValue: "white",
      description: "Color of the loader.",
    },
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
      <NextSeo
        title="Loaders - HextaUI ✨"
        description="Collection of Loaders components with different variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/loaders"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/loaders",
          title: "Loaders - HextaUI ✨",
          description:
            "Collection of Loaders components with different variants.",
          images: [
            {
              url: "https://i.imgur.com/TQAInIK.png",
              width: 1920,
              height: 1080,
              alt: "Loaders - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Loaders - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Loader"
            description="Collection of Loaders components with different variants."
          />
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[13rem]">
                  <Loader variant="circleLoader" />
                </div>
              </div>
            </div>
            <InstallationSteps component="Loader" />
          </div>{" "}
          <div>
            <h3 className="h3">Basic loader</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] text-center">
              <Loader variant="circleLoader" />
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`<Loader variant="circleLoader" />`}
            />
          </div>
          <div>
            <h3 className="h3">Colored loader</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] text-center">
              <Loader variant="coloredLoader" color="indigo" />
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`<Loader variant="coloredLoader" color="indigo" />`}
            />
          </div>
          <div>
            <h3 className="h3">Loader with custom size and color</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem] text-center">
              <Loader
                variant="circleLoader"
                color="red"
                size={40}
                className="border-t-red-500"
              />
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`<Loader variant="circleLoader" color="red" size={40} className="border-t-red-500"/>`}
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

export default loader;
