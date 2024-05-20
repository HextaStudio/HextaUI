import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import { Table } from "@/components/hexta-ui/Table";
import React from "react";

import { Navbar } from "@/components/hexta-ui/Navbar";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

const navbar = () => {
  const data = [
    {
      propName: "title",
      propType: "String",
      defaultValue: "''",
      description: "Title of the Navbar",
    },
    {
      propName: "links",
      propType: "{ label: string; href: string }[]",
      defaultValue: "[]",
      description: "Links to be displayed in the Navbar",
    },
    {
      propName: "cta",
      propType: "{ label: string; onClick: () => void }",
      defaultValue: "undefined",
      description: "Call to action button",
    },
    {
      propName: "search",
      propType: "Boolean",
      defaultValue: "false",
      description: "Search bar in the Navbar",
    },
    {
      propName: "image",
      propType: "{ src: string; alt: string; width: number; height: number }",
      defaultValue: "undefined",
      description: "Image to be displayed in the Navbar",
    },
    {
      propName: "icons",
      propType: "{ src: string; alt: string; href: string }[]",
      defaultValue: "undefined",
      description: "Icons to be displayed in the Navbar",
    },
    {
      propName: "dropdown",
      propType: "{ label: string; options: { label: string; href: string }[] }",
      defaultValue: "undefined",
      description: "Dropdown menu in the Navbar",
    },
    {
      propName: "responsive",
      propType: "Boolean",
      defaultValue: "false",
      description: "Responsive Navbar",
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
        title="Navbar - HextaUI ✨"
        description="Collection of Navbar components with different variants."
        image="https://i.imgur.com/BtOWZYT.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Navbar"
            description="Collection of Navbar components with different variants."
          />
          <DocsPreview>
            <Navbar
              image={{
                src: "https://placeholder.co/100",
                alt: "logo",
                width: 45,
                height: 45,
              }}
              links={[
                { label: "Home", href: "#" },
                { label: "About", href: "#" },
                { label: "Contact", href: "#" },
              ]}
            />
          </DocsPreview>
          <InstallationSteps
            component={["Navbar", "Input"]}
            imports={["Navbar", "Input"]}
          />
          <div className="flex flex-col gap-4 py-10 preview">
            <div>
              <h3 className="h3">Navbar with Title</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                <Navbar title="HextaUI" />
              </div>
              <CodeBlock
                filename="tsx"
                lang="tsx"
                code={`<Navbar title="HextaUI" />`}
              ></CodeBlock>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div>
              <h3 className="h3">Navbar with Title and Button</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                <Navbar
                  title="HextaUI"
                  cta={{
                    label: "Let's Talk",
                    onClick: () => {
                      console.log("Clicked");
                    },
                  }}
                />
              </div>
              <CodeBlock
                filename="tsx"
                lang="tsx"
                code={`<Navbar title="HextaUI" cta={{ label: "Let's Talk", onClick: () => console.log("Clicked") }} />`}
              ></CodeBlock>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div>
              <h3 className="h3">Navbar with Title, Search and Logo</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                <Navbar
                  title="HextaUI"
                  search
                  image={{
                    src: "https://source.unsplash.com/random/35x35",
                    alt: "logo",
                    width: 35,
                    height: 35,
                  }}
                />
              </div>
              <CodeBlock
                filename="tsx"
                lang="tsx"
                code={`<Navbar title="HextaUI" search image={{ src: "https://source.unsplash.com/random/35x35", alt: "logo", width: 35, height: 35 }} />`}
              ></CodeBlock>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div>
              <h3 className="h3">Navbar with Links</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                <Navbar
                  title="HextaUI"
                  links={[
                    { label: "Home", href: "#" },
                    { label: "About", href: "#" },
                    { label: "Contact", href: "#" },
                  ]}
                />
              </div>
              <CodeBlock
                filename="tsx"
                lang="tsx"
                code={`<Navbar title="HextaUI" links={[{ label: "Home", href: "#" }, { label: "About", href: "#" }, { label: "Contact", href: "#" }]} />`}
              ></CodeBlock>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div>
              <h3 className="h3">Navbar with Icons and Links</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                <Navbar
                  image={{
                    src: "https://placeholder.co/40",
                    alt: "logo",
                    width: 40,
                    height: 40,
                  }}
                  links={[
                    { label: "Home", href: "#" },
                    { label: "About", href: "#" },
                    { label: "Contact", href: "#" },
                  ]}
                />
              </div>
              <CodeBlock
                filename="tsx"
                lang="tsx"
                code={`<Navbar image={{ src: "https://placeholder.co/100", alt: "logo", width: 100, height: 100 }} links={[{ label: "Home", href: "#" }, { label: "About", href: "#" }, { label: "Contact", href: "#" }]} />`}
              ></CodeBlock>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div>
              <h3 className="h3">Navbar with Icons as Links</h3>
              <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container">
                <Navbar
                  title="HextaUI"
                  icons={[
                    {
                      src: "https://placeholder.co/100",
                      alt: "icon",
                      href: "#",
                    },
                    {
                      src: "https://placeholder.co/100",
                      alt: "icon",
                      href: "#",
                    },
                    {
                      src: "https://placeholder.co/100",
                      alt: "icon",
                      href: "#",
                    },
                  ]}
                />
              </div>
              <CodeBlock
                filename="tsx"
                lang="tsx"
                code={`<Navbar title="HextaUI" icons={[{ src: "https://placeholder.co/100", alt: "icon", href: "#" }, { src: "https://placeholder.co/100", alt: "icon", href: "#" }, { src: "https://placeholder.co/100", alt: "icon", href: "#" }]} />`}
              ></CodeBlock>
            </div>
          </div>
          <Table data={data} columns={columns} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default navbar;
