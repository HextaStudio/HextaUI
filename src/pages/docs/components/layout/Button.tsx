import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
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
      propType:
        '"primary" | "secondary" | "info" | "success" | "fail" | "ghost" | "link"',
      defaultValue: "primary",
      description: "Visual style variant of the button",
    },
    {
      propName: "size",
      propType: '"sm" | "md" | "lg"',
      defaultValue: "md",
      description: "Size of the button",
    },
    {
      propName: "outline",
      propType: "boolean",
      defaultValue: "false",
      description: "Outlined style variant",
    },
    {
      propName: "disabled",
      propType: "boolean",
      defaultValue: "false",
      description: "Disables button interactions",
    },
    {
      propName: "loading",
      propType: "boolean",
      defaultValue: "false",
      description: "Shows loading spinner",
    },
    {
      propName: "loadingText",
      propType: "string",
      defaultValue: "undefined",
      description: "Text shown during loading state",
    },
    {
      propName: "icon",
      propType: "ReactNode",
      defaultValue: "undefined",
      description: "Icon element to display",
    },
    {
      propName: "iconPosition",
      propType: '"left" | "right"',
      defaultValue: "left",
      description: "Position of the icon",
    },
    {
      propName: "fullWidth",
      propType: "boolean",
      defaultValue: "false",
      description: "Makes button full width",
    },
    {
      propName: "animated",
      propType: "boolean",
      defaultValue: "false",
      description: "Enables hover animation",
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
        title="Button - hextastudio/ui"
        description="Versatile button component with multiple variants and states."
        image="https://i.imgur.com/eOlyvkH.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Button"
            description="A versatile button component that supports multiple variants, states, and customizations."
          />

          <InstallationSteps component="Button" imports="Button" />

          {/* Basic Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
            <DocsPreview>
              <div className="flex gap-4 flex-wrap">
                <Button>Default Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="info">Info</Button>
                <Button variant="success">Success</Button>
                <Button variant="fail">Fail</Button>
              </div>
            </DocsPreview>
            <CodeBlock
              title="Basic Variants"
              lang="tsx"
              code={`<Button>Default Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="info">Info</Button>
<Button variant="success">Success</Button>
<Button variant="fail">Fail</Button>`}
            />
          </section>

          {/* States */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">States</h2>
            <DocsPreview>
              <div className="flex gap-4 flex-wrap">
                <Button loading loadingText="Loading...">
                  Submit
                </Button>
                <Button disabled>Disabled</Button>
                <Button outline>Outline</Button>
                <Button animated>Animated</Button>
              </div>
            </DocsPreview>
            <CodeBlock
              title="Button States"
              lang="tsx"
              code={`<Button loading loadingText="Loading...">Submit</Button>
<Button disabled>Disabled</Button>
<Button outline>Outline</Button>
<Button animated>Animated</Button>`}
            />
          </section>

          {/* With Icons */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">With Icons</h2>
            <DocsPreview>
              <div className="flex gap-4 flex-wrap">
                <Button icon={<FaGithub />}>GitHub</Button>
                <Button icon={<FaArrowRight />} iconPosition="right">
                  Next Step
                </Button>
              </div>
            </DocsPreview>
            <CodeBlock
              title="Icons"
              lang="tsx"
              code={`<Button icon={<FaGithub />}>GitHub</Button>
<Button icon={<FaArrowRight />} iconPosition="right">Next Step</Button>`}
            />
          </section>

          {/* Sizes */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Sizes</h2>
            <DocsPreview>
              <div className="flex gap-4 items-center flex-wrap">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button fullWidth>Full Width</Button>
              </div>
            </DocsPreview>
            <CodeBlock
              title="Size Variants"
              lang="tsx"
              code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button fullWidth>Full Width</Button>`}
            />
          </section>

          {/* Props Table */}
          <div className="mt-16">
            <Table columns={columns} data={data} tableTitle="Props Reference" />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default button;
