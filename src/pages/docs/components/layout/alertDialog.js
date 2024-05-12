import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";
import { AlertDialog } from "@/components/hexta-ui/AlertDialog";

import { NextSeo } from "next-seo";

import { useState } from "react";

const alertDialog = () => {
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
      <NextSeo
        title="Alert Dialog - HextaUI ✨"
        description="A modal dialog that interrupts the user with important content and expects a response."
        canonical="https://ui.hextastudio.in/docs/components/layout/alert-dialog"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/alert-dialog",
          title: "Alert Dialog - HextaUI ✨",
          description: "              expects a response.",
          images: [
            {
              url: "https://i.imgur.com/KKUqpjL.png",
              width: 1920,
              height: 1080,
              alt: "Alert Dialog - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Alert Dialog - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Alert Dialog</h1>
            <p className="text-sm opacity-80">
              A modal dialog that interrupts the user with important content and
              expects a response.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <button
                    className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border border-zinc-900"
                    onClick={() => setShowDialog(true)}
                  >
                    Show Dialog
                  </button>

                  <AlertDialog
                    title="Are you sure?"
                    message="Rethink, This action cannot be undone."
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                    isOpen={showDialog}
                  />
                </div>
              </div>
            </div>
            <div className="installation">
              <h2 className="text-3xl font-bold">Installation</h2>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npm install @hextastudio/ui
# or
bun install @hextastudio/ui
# or
yarn add @hextastudio/ui
# or
pnpm add @hextastudio/ui`}
              />

              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npx hexta-ui add`}
              />
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? (Use arrow keys)
> Next.js 
  React`}
              />
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? Next.js
? Which component would you like to install?
> AlertDialog
  Avatar
  Button
  Loader
  Select
  Toast
  Toggle
  Tooltip`}
              />
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`? Which framework are you using? Next.js         
? Which component would you like to install? AlertDialog
✔ AlertDialog component was added successfully — Guide to use AlertDialog, https://ui.hextastudio.in/docs/components/layout/alertDialog`}
              />
              <p>Importing toast in your file.</p>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { AlertDialog } from "@/components/hexta-ui/AlertDialog";`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { useState } from "react";

export const Home = () => {
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
      <button
        className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border border-zinc-900"
        onClick={() => setShowDialog(true)}
      >
        Show Dialog
      </button>

      <AlertDialog
        title="Are you sure?"
        message="Rethink, This action cannot be undone."
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        isOpen={showDialog}
      />
    </>
  );
};`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default alertDialog;
