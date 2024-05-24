import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbItem,
} from "@/components/hexta-ui/Breadcrumb";
import { Table } from "@/components/hexta-ui/Table";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

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
      <DocsSEO
        title="Breadcrumb - hextastudio/ui"
        description="Displays the path to the current resource using a hierarchy of links."
        image="https://i.imgur.com/oDya0tl.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Breadcrumb"
            description="Displays the path to the current resource using a hierarchy of links."
          />
          <DocsPreview>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </DocsPreview>
          <InstallationSteps
            component="Breadcrumb"
            imports={[
              "Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbItem",
            ]}
          />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
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

export default breadcrumb;
