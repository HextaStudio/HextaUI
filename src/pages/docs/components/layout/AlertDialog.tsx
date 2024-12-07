import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";
import {
  AlertDialog,
  AlertDialogButtons,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/hexta-ui/AlertDialog";
import { useState } from "react";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { Table } from "@/components/hexta-ui/Table";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { Button } from "@/components/hexta-ui/Button";

const alertdialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  const data = [
    {
      propName: "isOpen",
      propType: "boolean",
      defaultValue: "false",
      description: "Controls the visibility of the dialog",
    },
    {
      propName: "onClose",
      propType: "function",
      defaultValue: "undefined",
      description: "Callback function when dialog is closed",
    },
    {
      propName: "closeOnOutsideClick",
      propType: "boolean",
      defaultValue: "true",
      description: "Allow closing dialog by clicking outside",
    },
    {
      propName: "closeOnEsc",
      propType: "boolean",
      defaultValue: "true",
      description: "Allow closing dialog using ESC key",
    },
    {
      propName: "position",
      propType: '"center" | "top" | "bottom"',
      defaultValue: "center",
      description: "Position of the dialog on screen",
    },
    {
      propName: "size",
      propType: '"sm" | "md" | "lg"',
      defaultValue: "md",
      description: "Predefined sizes for the dialog",
    },
    {
      propName: "showOverlay",
      propType: "boolean",
      defaultValue: "true",
      description: "Show/hide the backdrop overlay",
    },
    {
      propName: "overlayClassName",
      propType: "string",
      defaultValue: "undefined",
      description: "Custom classes for overlay styling",
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
        title="Alert Dialog - hextastudio/ui"
        description="A modal dialog that interrupts the user with important content and expects a response."
        image="https://i.imgur.com/KKUqpjL.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Alert Dialog"
            description="A modal dialog that interrupts the user with important content and expects a response."
          />
          <DocsPreview>
            <div className="flex gap-4">
              <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>
              
              <AlertDialog 
                isOpen={showDialog}
                onClose={() => setShowDialog(false)}
                position="center"
                size="md"
              >
                <AlertDialogTitle>Confirm Action</AlertDialogTitle>
                <AlertDialogContent>
                  This action cannot be undone. Are you sure you want to proceed?
                </AlertDialogContent>
                <AlertDialogButtons
                  buttons={[
                    {
                      label: "Cancel",
                      action: () => setShowDialog(false),
                      variant: "secondary"
                    },
                    {
                      label: "Confirm",
                      action: () => {
                        console.log("Confirmed");
                        setShowDialog(false);
                      },
                      variant: "primary"
                    }
                  ]}
                />
              </AlertDialog>
            </div>
          </DocsPreview>

          <InstallationSteps
            component={["AlertDialog"]}
            imports={["AlertDialog, AlertDialogTitle, AlertDialogContent, AlertDialogButtons"]}
          />

          <CodeBlock
            free
            title="Basic Usage"
            lang="tsx"
            code={`import { useState } from 'react';
import { 
  AlertDialog,
  AlertDialogTitle,
  AlertDialogContent,
  AlertDialogButtons 
} from '@/components/hexta-ui/AlertDialog';

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Dialog
      </button>

      <AlertDialog 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="center"
        size="md"
      >
        <AlertDialogTitle>Confirm Action</AlertDialogTitle>
        <AlertDialogContent>
          This action cannot be undone. Are you sure you want to proceed?
        </AlertDialogContent>
        <AlertDialogButtons
          buttons={[
            {
              label: "Cancel",
              action: () => setIsOpen(false),
              variant: "secondary"
            },
            {
              label: "Confirm", 
              action: () => {
                console.log("Confirmed");
                setIsOpen(false);
              },
              variant: "primary"
            }
          ]}
        />
      </AlertDialog>
    </>
  );
}`}
          />

          <CodeBlock
            title="Custom Positioning"
            lang="tsx"
            code={`<AlertDialog 
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position="top"
  size="lg"
  showOverlay={false}
>
  {/* Dialog content */}
</AlertDialog>`}
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

export default alertdialog;
