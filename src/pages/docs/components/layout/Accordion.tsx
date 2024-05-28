import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
} from "@/components/hexta-ui/Accordion";

const accordion = () => {
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
            <div className="flex flex-col w-full">
              <Accordion>
                <AccordionHeader>What is hextastudio/ui?</AccordionHeader>
                <AccordionContent>
                  hextastudio/ui is a collection of highly customizable web
                  components.
                </AccordionContent>
              </Accordion>
              <Accordion>
                <AccordionHeader>
                  How do I install hextastudio/ui?
                </AccordionHeader>
                <AccordionContent>
                  You can install hextastudio/ui using npm or yarn.
                </AccordionContent>
              </Accordion>
              <Accordion>
                <AccordionHeader>
                  How do I use hextastudio/ui components?
                </AccordionHeader>
                <AccordionContent>
                  You can use hextastudio/ui components by importing them into
                  your project.
                </AccordionContent>
              </Accordion>
            </div>
          </DocsPreview>
          <InstallationSteps
            component={["Accordion"]}
            imports={["Accordion, AccordionHeader, AccordionContent"]}
          />
          <CodeBlock
            free
            lang="tsx"
            filename="tsx"
            code={`<Accordion>
  <AccordionHeader>What is hextastudio/ui?</AccordionHeader>
  <AccordionContent>
    hextastudio/ui is a collection of highly customizable web
    components.
  </AccordionContent>
</Accordion>

<Accordion>
  <AccordionHeader>
    How do I install hextastudio/ui?
  </AccordionHeader>
  <AccordionContent>
    You can install hextastudio/ui using npm or yarn.
  </AccordionContent>
</Accordion>

<Accordion>
  <AccordionHeader>
    How do I use hextastudio/ui components?
  </AccordionHeader>
  <AccordionContent>
    You can use hextastudio/ui components by importing them into
    your project.
  </AccordionContent>
</Accordion>`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default accordion;
