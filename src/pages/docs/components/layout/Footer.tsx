import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";
import { Footer } from "@/components/hexta-ui/Footer";
import { NextSeo } from "next-seo";

import { Table } from "@/components/hexta-ui/Table";

const footer = () => {
  const data = [
    {
      propName: "logo",
      propType:
        "{ src: string; alt: string; width: number; height: number; title: string; }",
      defaultValue: "undefined",
      description: "Logo of the footer.",
    },
    {
      propName: "links",
      propType: "{ title?: string; items?: LinkItem[] | undefined; }[]",
      defaultValue: "undefined",
      description: "Links of the footer.",
    },
    {
      propName: "subscribe",
      propType: "boolean",
      defaultValue: "false",
      description: "Adds a subscribe section to the footer.",
    },
    {
      propName: "contact",
      propType: "{ address?: string; phone?: string; email?: string; }",
      defaultValue: "undefined",
      description: "Contact details of the footer.",
    },
    {
      propName: "language",
      propType:
        "{ options: { value: string; label: string }[]; defaultValue?: string; }",
      defaultValue: "undefined",
      description: "Language selection dropdown.",
    },
    {
      propName: "social",
      propType: "{ label?: string; onClick?: () => void; }",
      defaultValue: "undefined",
      description: "Social media links.",
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
      {" "}
      <NextSeo
        title="Footer - HextaUI ✨"
        description="Collection of Footer components with different variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/footer"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/footer",
          title: "Footer - HextaUI ✨",
          description:
            "Collection of Footer components with different variants.",
          images: [
            {
              url: "https://i.imgur.com/Jad7qle.png",
              width: 1920,
              height: 1080,
              alt: "Footer - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Footer - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Footer</h1>
            <p className="text-sm opacity-80">
              Collection of Footer components with different variants.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Footer</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[25rem]">
                  {" "}
                  <Footer
                    logo={{
                      src: "https://placeholder.co/70",
                      alt: "HextaUI",
                      width: 70,
                      height: 70,
                      title: "HextaUI",
                    }}
                    links={[
                      {
                        title: "Company",
                        items: [
                          { label: "About", href: "#" },
                          { label: "Careers", href: "#" },
                          { label: "Contact", href: "#" },
                        ],
                      },
                      {
                        title: "Resources",
                        items: [
                          { label: "Blog", href: "#" },
                          { label: "Docs", href: "#" },
                          { label: "FAQs", href: "#" },
                        ],
                      },
                    ]}
                  />
                </div>
                <CodeBlock
                  lang="tsx"
                  filename="tsx"
                  code={`<Footer
  logo={{
    src: "https://placeholder.co/70",
    alt: "HextaUI",
    width: 70,
    height: 70,
    title: "HextaUI",
  }}
  links={[
    {
      title: "Company",
      items: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "#" },
        { label: "Docs", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
  ]}
/>`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Footer With Newsletter</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[25rem]">
                  <Footer
                    subscribe
                    logo={{
                      title: "HextaUI",
                    }}
                  />
                </div>
                <CodeBlock
                  lang="tsx"
                  filename="tsx"
                  code={`<Footer
  subscribe
  logo={{
    title: "HextaUI",
  }}
/>`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Footer With Contact</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[25rem]">
                  <Footer
                    logo={{
                      title: "HextaUI",
                    }}
                    contact={{
                      address: "123 Main Street, Anytown USA",
                      phone: "(555) 123-4567",
                      email: "hi@preetsuthar.me",
                    }}
                  />
                </div>
                <CodeBlock
                  lang="tsx"
                  filename="tsx"
                  code={`<Footer
logo={{
  title: "HextaUI",
}}

  contact={{
    address: "123 Main Street, Anytown USA",
    phone: "(555) 123-4567",
    email: "hi@preetsuthar.me",
  }}
/>`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Footer With Logo & Title</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[25rem]">
                  <Footer
                    logo={{
                      src: "https://placeholder.co/50",
                      alt: "HextaUI Logo",
                      width: 50,
                      height: 50,
                      title: "HextaUI",
                    }}
                  />
                </div>
                <CodeBlock
                  lang="tsx"
                  filename="tsx"
                  code={`<Footer
  logo={{
    src: "https://placeholder.co/50",
    alt: "HextaUI Logo",
    width: 50,
    height: 50,
    title: "HextaUI",
  }}
/>`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Footer With Logo & Title</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[25rem]">
                  <Footer
                    logo={{
                      title: "HextaUI",
                    }}
                    language={{
                      options: [
                        { value: "en", label: "English" },
                        { value: "es", label: "Español" },
                        { value: "fr", label: "Français" },
                        { value: "de", label: "Deutsch" },
                      ],
                      defaultValue: "en",
                    }}
                  />
                </div>
                <CodeBlock
                  lang="tsx"
                  filename="tsx"
                  code={`<Footer
language={{
    options: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Español' },
      { value: 'fr', label: 'Français' },
      { value: 'de', label: 'Deutsch' },
    ],
    defaultValue: 'en',
  }}
/>`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Footer With Logo & Title</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[25rem]">
                  <Footer
                    logo={{
                      title: "HextaUI",
                    }}
                    social={{
                      label: "HextaUI",
                      onClick: () => {
                        console.log("Clicked!");
                      },
                    }}
                  />
                </div>
                <CodeBlock
                  lang="tsx"
                  filename="tsx"
                  code={`<Footer
  social={{
    label: "HextaUI",
    onClick: () => {
      console.log("Clicked!");
    },
  }}
/>`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">All in One Footer</h3>
                <div className="relative flex items-end justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[25rem]">
                  <Footer
                    links={[
                      {
                        title: "Company",
                        items: [
                          { label: "About", href: "#" },
                          { label: "Careers", href: "#" },
                          { label: "Contact", href: "#" },
                        ],
                      },
                      {
                        title: "Resources",
                        items: [
                          { label: "Blog", href: "#" },
                          { label: "Docs", href: "#" },
                          { label: "FAQs", href: "#" },
                        ],
                      },
                    ]}
                    subscribe
                  />
                </div>
                <CodeBlock
                  lang="tsx"
                  filename="tsx"
                  code={`<Footer
  links={[
    {
      title: "Company",
      items: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "#" },
        { label: "Docs", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
  ]}
  subscribe
  social={{
    label: "HextaUI",
    onClick: () => {
      console.log("Clicked");
    },
  }}
/>`}
                />
              </div>
            </div>
          </div>
          <Table data={data} columns={columns} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default footer;
