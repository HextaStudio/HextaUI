import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

import { useState } from "react";

export const AlertDialogPreview = () => {
  const [showDialog, setShowDialog] = useState(false);

  const toggleAlertDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <>
      <button
        className="px-[20px] py-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border  border-zinc-900"
        onClick={toggleAlertDialog}
      >
        Show Dialog
      </button>
      {showDialog && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-screen h-screen bg-black alert-dialog-backdrop z-[9999] bg-opacity-70">
          <div className="flex flex-col gap-3 px-10 bg-black border border-b-2 rounded-lg alert-dialog p-7 border-zinc-900">
            <div>
              <p className="text-2xl font-bold tracking-tight">Are you sure?</p>
              <p className="text-sm opacity-80">
                Rethink, This action cannot be undone.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
                onClick={toggleAlertDialog}
              >
                Continue
              </button>

              <button
                className="px-[20px] py-[8px] bg-zinc-950 bg-opacity-20  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
                onClick={toggleAlertDialog}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const alertDialog = () => {
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
          {" "}
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
                  <AlertDialogPreview />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { useState } from "react";

export const AlertDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  const toggleAlertDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <>
      <button
        className="px-[20px] py-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border  border-zinc-900"
        onClick={toggleAlertDialog}
      >
        Show Dialog
      </button>
      {showDialog && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-screen h-screen bg-black alert-dialog-backdrop z-[9999] bg-opacity-70">
          <div className="flex flex-col gap-3 px-10 bg-black border border-b-2 rounded-lg alert-dialog p-7 border-zinc-900">
            <div>
              <p className="text-2xl font-bold tracking-tight">Are you sure?</p>
              <p className="text-sm opacity-80">
                Rethink, This action cannot be undone.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
                onClick={toggleAlertDialog}
              >
                Continue
              </button>

              <button
                className="px-[20px] py-[8px] bg-zinc-950 bg-opacity-20  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
                onClick={toggleAlertDialog}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
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
