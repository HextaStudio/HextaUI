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
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

const alertdialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleConfirm = () => {
    console.log("Action confirmed");
    setShowDialog(false);
  };

  const handleCancel = () => {
    console.log("Action canceled");
    setShowDialog(false);
  };

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
            description=" A modal dialog that interrupts the user with important content and
              expects a response."
          />
          <DocsPreview>
            <button
              className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border border-zinc-900"
              onClick={() => setShowDialog(true)}
            >
              Books Tickets
            </button>

            <AlertDialog isOpen={showDialog}>
              <AlertDialogTitle>Confirm booking?</AlertDialogTitle>
              <AlertDialogContent>
                This Action is irreversible. Are you sure you want to book the
                tickets?
              </AlertDialogContent>
              <AlertDialogButtons
                buttons={[
                  {
                    label: "Confirm",
                    action: handleConfirm,
                    variant: "primary",
                  },
                  {
                    label: "Cancel",
                    action: handleCancel,
                    variant: "secondary",
                  },
                ]}
              />
            </AlertDialog>
          </DocsPreview>
          <InstallationSteps
            component={["AlertDialog"]}
            imports={[
              "AlertDialog, AlertDialogButtons, AlertDialogContent, AlertDialogTitle",
            ]}
          />
          <CodeBlock
            free
            title="Usage"
            lang="tsx"
            code={`
import {
  AlertDialog,
  AlertDialogButtons,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/hexta-ui/AlertDialog";

<button
  className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border border-zinc-900"
  onClick={() => setShowDialog(true)}
  >
  Book Tickets
</button>


<AlertDialog isOpen={showDialog}>
  <AlertDialogTitle>Confirm booking?</AlertDialogTitle>
  <AlertDialogContent>
    This Action is irreversible. Are you sure you want to book the tickets?
  </AlertDialogContent>
  <AlertDialogButtons
    buttons={[
      {
        label: "Confirm",
        action: handleConfirm,
        variant: "primary",
      },
      {
        label: "Cancel",
        action: handleCancel,
        variant: "secondary",
      },
    ]}
  />
</AlertDialog>

`}
          />
          <CodeBlock
            free
            title="Example"
            lang="tsx"
            code={`import {
  AlertDialog,
  AlertDialogButtons,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/hexta-ui/AlertDialog";

import { useState } from "react";


export const Home = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleConfirm = () => {
    console.log("Action confirmed");
    setShowDialog(false);
  }

  const handleCancel = () => {
    console.log("Action canceled");
    setShowDialog(false);
  }

  return (
    <>
      <button onClick={() => setShowDialog(true)}>Books Tickets</button>

      <AlertDialog isOpen={showDialog}>
        <AlertDialogTitle>Confirm booking?</AlertDialogTitle>
        <AlertDialogContent>
          This Action is irreversible. Are you sure you want to book the tickets?
        <AlertDialogButtons
          buttons={[
            {
              label: "Confirm",
              action: handleConfirm,
              variant: "primary",
            },
            {
              label: "Cancel",
              action: handleCancel,
              variant: "secondary",
            },
          ]}
        />
      </AlertDialog>
    </>
  );
}`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default alertdialog;
