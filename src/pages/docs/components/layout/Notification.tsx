import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { Button } from "@/components/hexta-ui/Button";
import {
  Notification,
  NotificationDescription,
  NotificationHeader,
} from "@/components/hexta-ui/Notification";

import { useState } from "react";
import { Table } from "@/components/hexta-ui/Table";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

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
    propName: "showNotification",
    propType: "boolean",
    defaultValue: "false",
    description: "Show or hide the notification.",
  },
  {
    propName: "onCancel",
    propType: "() => void",
    defaultValue: "null",
    description: "Callback function to hide the notification.",
  },
  {
    propName: "direction",
    propType: '"topRight" | "topLeft" | "bottomRight" | "bottomLeft"',
    defaultValue: '"bottomRight"',
    description: "Position of the notification.",
  },
  {
    propName: "children",
    propType: "ReactNode",
    defaultValue: "null",
    description: "Content of the notification.",
  },
];

const notification = () => {
  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <>
      <DocsSEO
        title="Notification - hextastudio/ui"
        description="The Notification component displays a message to the user."
        image="https://i.imgur.com/qeLj5CP.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Notification"
            description="The Notification component displays a message to the user."
          />
          <DocsPreview>
            <Button variant="secondary" onClick={toggleNotification}>
              Show Notification
            </Button>
            <Notification
              showNotification={showNotification}
              onCancel={toggleNotification}
              direction="bottomRight"
            >
              <NotificationHeader>
                Ready to level up your website?
              </NotificationHeader>
              <NotificationDescription>
                Get started with hextastudio/ui today! completely for free!
              </NotificationDescription>
            </Notification>
          </DocsPreview>
          <InstallationSteps
            component={["Notification"]}
            imports={[
              "Notification, NotificationHeader, NotificationDescription",
            ]}
          />
          <CodeBlock
            free
            lang="tsx"
            filename="tsx"
            code={`import { useState } from "react";

export const Home = () => {
  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };
  
  return (
    <>
    <main>
      <Notification
      showNotification={showNotification}
      onCancel={toggleNotification}
      direction="bottomRight"
    >
      <NotificationHeader>
        Ready to level up your website?
      </NotificationHeader>
      <NotificationDescription>
        Get started with hextastudio/ui today! completely for free!
      </NotificationDescription>
    </Notification>
  </main>
    </>
  )
}`}
          />
          <Table columns={columns} data={data} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default notification;
