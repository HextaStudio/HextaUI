import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { Countdown } from "@/components/hexta-ui/Countdown";
import { Table } from "@/components/hexta-ui/Table";

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
    propName: "end",
    propType: "Number",
    defaultValue: "Required",
    description: "The end value of the countdown",
  },
  {
    propName: "duration",
    propType: "Number",
    defaultValue: "end",
    description: "The duration of the countdown",
  },
  {
    propName: "className",
    propType: "String",
    defaultValue: "null",
    description: "Additional classes to be added",
  },
  {
    propName: "fontSize",
    propType: "Number",
    defaultValue: "30",
    description: "Font size of the countdown",
  },
];

const countdown = () => {
  return (
    <>
      <DocsSEO
        title="Countdown"
        description="A simple animated countdown component."
        image="https://i.imgur.com/Le3MNlj.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Countdown"
            description="A simple animated countdown component."
          />
          <DocsPreview>
            <Countdown end={50} duration={20} />
          </DocsPreview>
          <InstallationSteps
            imports={["countdown"]}
            component={["countdown"]}
          />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`<Countdown end={50} duration={20} />`}
          />
          <Table columns={columns} data={data} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default countdown;
