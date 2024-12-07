import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionProvider,
} from "@/components/hexta-ui/Accordion";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { Table } from "@/components/hexta-ui/Table";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

const accordion = () => {
  const data = [
    {
      propName: "allowMultiple",
      propType: "boolean",
      defaultValue: "false",
      description: "Allow multiple accordions to be open simultaneously",
    },
    {
      propName: "defaultIndex",
      propType: "number",
      defaultValue: "undefined",
      description: "Index of accordion to be open by default",
    },
    {
      propName: "onChange",
      propType: "(index: number) => void",
      defaultValue: "undefined",
      description: "Callback when accordion state changes",
    },
    {
      propName: "disabled",
      propType: "boolean",
      defaultValue: "false",
      description: "Disable accordion interaction",
    },
    {
      propName: "icon",
      propType: "ReactNode",
      defaultValue: "undefined",
      description: "Optional icon before header",
    },
    {
      propName: "variant",
      propType: '"default" | "bordered" | "ghost"',
      defaultValue: "default",
      description: "Visual style variant of the accordion",
    },
  ];

  const columns = [
    {
      label: "Prop Name",
      key: "propName",
    },
    {
      label: "Type",
      key: "propType",
    },
    {
      label: "Default",
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
        title="Accordion - hextastudio/ui"
        description="The Accordion component lets users show and hide sections of related content on a page."
        image="https://i.imgur.com/qDyvQBa.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Accordion"
            description="The Accordion component lets users show and hide sections of related content on a page."
          />
          
          <DocsPreview className="h-[30rem]">
            <div className="flex flex-col w-full gap-4">
              <AccordionProvider allowMultiple>
                <Accordion variant="default">
                  <AccordionHeader>Default Variant</AccordionHeader>
                  <AccordionContent>
                    This is the default style of the accordion component.
                  </AccordionContent>
                </Accordion>
                
                <Accordion variant="bordered">
                  <AccordionHeader>Bordered Variant</AccordionHeader>
                  <AccordionContent>
                    This accordion has a bordered style variant.
                  </AccordionContent>
                </Accordion>
                
                <Accordion variant="ghost" disabled>
                  <AccordionHeader>Disabled State</AccordionHeader>
                  <AccordionContent>
                    This accordion is disabled and cannot be interacted with.
                  </AccordionContent>
                </Accordion>
              </AccordionProvider>
            </div>
          </DocsPreview>

          <InstallationSteps
            component={["Accordion"]}
            imports={[
              "Accordion, AccordionHeader, AccordionContent, AccordionProvider",
            ]}
          />

          <CodeBlock
            free
            title="Basic Usage"
            lang="tsx"
            code={`import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionProvider,
} from "@/components/hexta-ui/Accordion";

export const MyComponent = () => {
  return (
    <AccordionProvider allowMultiple>
      <Accordion>
        <AccordionHeader>Section 1</AccordionHeader>
        <AccordionContent>Content for section 1</AccordionContent>
      </Accordion>
      <Accordion variant="bordered">
        <AccordionHeader>Section 2</AccordionHeader>
        <AccordionContent>Content for section 2</AccordionContent>
      </Accordion>
    </AccordionProvider>
  );
};`}
          />

          <CodeBlock
            title="With Custom Icon"
            lang="tsx"
            code={`import { FiInfo } from "react-icons/fi";

<Accordion icon={<FiInfo />}>
  <AccordionHeader>With Custom Icon</AccordionHeader>
  <AccordionContent>
    This accordion has a custom icon in the header.
  </AccordionContent>
</Accordion>`}
          />

          <Table 
            columns={columns} 
            data={data} 
            tableTitle="Props Reference" 
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default accordion;
