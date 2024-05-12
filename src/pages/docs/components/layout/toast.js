import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

import { useState } from "react";
import Toast from "@/components/hexta-ui/Toast";
import { Table } from "@/components/hexta-ui/Table";
import { InstallationSteps } from "@/components/utils/InstallationSteps";

const toast = () => {
  const data = [
    {
      propName: "text",
      propType: "string",
      defaultValue: "null",
      description: "Text to be displayed in the toast.",
    },
    {
      propName: "description",
      propType: "string",
      defaultValue: "null",
      description: "Description to be displayed in the toast.",
    },
    {
      propName: "showToast",
      propType: "boolean",
      defaultValue: "false",
      description: "State to open the toast.",
    },
    {
      propName: "onUndo",
      propType: "function",
      defaultValue: "null",
      description: "Function to be called on undo.",
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
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <>
      {" "}
      <NextSeo
        title="Toasts - HextaUI ✨"
        description="Some awesome toasts component with different variants."
        canonical="https://ui.hextastudio.in/docs/components/layout/toasts"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/toasts",
          title: "Toasts - HextaUI ✨",
          description: "Some awesome toasts component with different variants.",
          images: [
            {
              url: "https://i.imgur.com/5P0bFAB.png",
              width: 1920,
              height: 1080,
              alt: "Toasts - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Toasts - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Toasts</h1>
            <p className="text-sm opacity-80">
              Some awesome toasts component with different variants.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div className="installation">
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center  justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <button
                    className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border-zinc-800 border"
                    onClick={toggleToast}
                  >
                    Show Toast
                  </button>
                  <Toast
                    text="Successfully created toast"
                    description="Copy and paste code for this Toast"
                    showToast={showToast}
                    onUndo={toggleToast}
                  />
                </div>
              </div>
            </div>
          </div>
          <InstallationSteps component="Toast" />
          <div className="installation">
            <h2 className="text-3xl font-bold">Example Usage</h2>

            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`import { useState } from "react";
import Toast from "@/components/hexta-ui/Toast";

export const Home = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };
  
  return (
    <>
      <button className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border-zinc-800 border"
        onClick={toggleToast}>
        Show Toast
      </button>

      <Toast
        text="Successfully created toast"
        description="Copy and paste code for this Toast"
        showToast={showToast}
        onUndo={toggleToast}
      />
    </>
  )
}
              `}
            />
          </div>
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

export default toast;
