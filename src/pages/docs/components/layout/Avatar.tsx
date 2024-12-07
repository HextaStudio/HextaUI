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
      defaultValue: "required",
      description: "Primary image URL for the avatar",
    },
    {
      propName: "size",
      propType: '"xs" | "sm" | "md" | "lg" | "xl" | number',
      defaultValue: '"md"',
      description: "Size of the avatar. Can be predefined or custom number",
    },
    {
      propName: "variant",
      propType: '"default" | "withStatus" | "withBadge" | "withBoth"',
      defaultValue: '"default"',
      description: "Determines the avatar's display variant",
    },
    {
      propName: "status",
      propType: '"online" | "offline" | "away" | "busy"',
      defaultValue: "undefined",
      description: "User's status indicator",
    },
    {
      propName: "fallbackUrl",
      propType: "string",
      defaultValue: "undefined",
      description: "Backup image URL if primary fails",
    },
    {
      propName: "fallbackInitials",
      propType: "string",
      defaultValue: "undefined",
      description: "Initials to show when images fail",
    },
    {
      propName: "shape",
      propType: '"circle" | "square" | "rounded"',
      defaultValue: '"circle"',
      description: "Shape of the avatar",
    },
    {
      propName: "badgeContent",
      propType: "ReactNode",
      defaultValue: "undefined",
      description: "Custom content for badge",
    },
    {
      propName: "badgePosition",
      propType: '"top-right" | "top-left" | "bottom-right" | "bottom-left"',
      defaultValue: '"top-right"',
      description: "Position of the badge",
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
        title="Avatar - hextastudio/ui"
        description="Versatile avatar component with multiple variants, statuses, and fallback options."
        image="https://i.imgur.com/Wm4aBoc.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Avatar"
            description="A versatile avatar component that supports various sizes, shapes, and states."
          />

          <InstallationSteps component={["Avatar"]} imports={["Avatar"]} />

          {/* Basic Usage */}
          <DocsPreview>
            <div className="flex gap-4 items-center">
              <Avatar avatarUrl="https://i.pravatar.cc/300" size="sm" />
              <Avatar avatarUrl="https://i.pravatar.cc/300" size="md" />
              <Avatar avatarUrl="https://i.pravatar.cc/300" size="lg" />
            </div>
          </DocsPreview>

          <CodeBlock
            free
            title="Basic Usage"
            lang="tsx"
            code={`<Avatar avatarUrl="https://i.pravatar.cc/300" size="md" />`}
          />

          {/* With Status */}
          <DocsPreview>
            <div className="flex gap-4 items-center">
              <Avatar
                variant="withStatus"
                avatarUrl="https://i.pravatar.cc/300"
                status="online"
                size="lg"
              />
              <Avatar
                variant="withStatus"
                avatarUrl="https://i.pravatar.cc/300"
                status="busy"
                size="lg"
              />
              <Avatar
                variant="withStatus"
                avatarUrl="https://i.pravatar.cc/300"
                status="away"
                size="lg"
              />
            </div>
          </DocsPreview>

          <CodeBlock
            title="With Status"
            lang="tsx"
            code={`<Avatar
  variant="withStatus"
  avatarUrl="https://i.pravatar.cc/300"
  status="online"
  size="lg"
/>`}
          />

          {/* With Badge */}
          <DocsPreview>
            <div className="flex gap-4 items-center">
              <Avatar
                variant="withBadge"
                avatarUrl="https://i.pravatar.cc/300"
                badgeContent={3}
                size="lg"
              />
              <Avatar
                variant="withBoth"
                avatarUrl="https://i.pravatar.cc/300"
                badgeContent="!"
                status="online"
                size="lg"
              />
            </div>
          </DocsPreview>

          <CodeBlock
            title="With Badge"
            lang="tsx"
            code={`<Avatar
  variant="withBoth"
  avatarUrl="https://i.pravatar.cc/300"
  badgeContent="!"
  status="online"
  size="lg"
/>`}
          />

          {/* Props Table */}
          <Table columns={columns} data={data} tableTitle="Props Reference" />
        </main>
      </DocsLayout>
    </>
  );
};

export default avatar;
