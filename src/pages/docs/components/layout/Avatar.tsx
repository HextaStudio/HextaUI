import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import { Avatar } from "@/components/hexta-ui/Avatar";
import { Table } from "@/components/hexta-ui/Table";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

const avatar = () => {
  const data = [
    {
      propName: "avatarUrl",
      propType: "string",
      defaultValue: "null",
      description: "URL of the avatar.",
    },
    {
      propName: "size",
      propType: "number",
      defaultValue: "40",
      description: "Size of the avatar.",
    },
    {
      propName: "variant",
      propType: "string",
      defaultValue: "null",
      description: "Variant of the avatar.",
    },
    {
      propName: "badgeNumber",
      propType: "number",
      defaultValue: "null",
      description: "Number to be displayed on the badge.",
    },
    {
      propName: "offline",
      propType: "boolean",
      defaultValue: "false",
      description: "Status of the user.",
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
        title="Avatars - hextastudio/ui"
        description="Collection of Avatar components with multiple variants."
        image="https://i.imgur.com/Wm4aBoc.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Avatar"
            description="Collection of Avatar components with multiple variants."
          />
          <DocsPreview>
            <Avatar avatarUrl="https://placeholder.co/80" size={80} />
          </DocsPreview>
          <InstallationSteps component="Avatar" imports="Avatar" />
          <DocsPreview>
            <Avatar avatarUrl="https://placeholder.co/80" size={80} />
          </DocsPreview>
          <CodeBlock
            free
            lang="tsx"
            title="Usage"
            filename="tsx"
            code={`<Avatar avatarUrl="/path/to/avatar.jpg" />`}
          />
          <DocsPreview>
            <div className="flex gap-4 ">
              <Avatar
                variant="withStatus"
                avatarUrl="https://placeholder.co/80"
                size={80}
              />
              <Avatar
                variant="withStatus"
                avatarUrl="https://placeholder.co/80"
                size={80}
                offline
              />
            </div>
          </DocsPreview>
          <CodeBlock
            free
            lang="tsx"
            title="Usage"
            filename="tsx"
            code={`<Avatar variant="withStatus" avatarUrl="https://placeholder.co/80" size={80} />

                
<Avatar variant="withStatus" avatarUrl="https://placeholder.co/80" size={80} offline/>`}
          />
          <DocsPreview>
            <div className="flex gap-4 ">
              <Avatar
                variant="withBadge"
                avatarUrl="https://placeholder.co/80"
                size={80}
                badgeNumber={5}
              />
            </div>
          </DocsPreview>
          <CodeBlock
            free
            lang="tsx"
            title="Usage"
            filename="tsx"
            code={` <Avatar variant="withBadge" avatarUrl="https://placeholder.co/80" size={80} badgeNumber={5} />`}
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

export default avatar;
