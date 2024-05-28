import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import { useState } from "react";
import { Toast } from "@/components/hexta-ui/Toast";
import { Table } from "@/components/hexta-ui/Table";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

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
      propName: "onCancel",
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
      <DocsSEO
        title="Toasts - hextastudio/ui"
        description="Some awesome toasts component with different variants."
        image="https://i.imgur.com/5P0bFAB.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Toasts"
            description="Some awesome toasts component with different variants."
          />
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
                    onCancel={() => setShowToast(false)}
                  />
                </div>
              </div>
            </div>
          </div>
          <InstallationSteps imports="Toast" component="Toast" />
          <div className="installation">
            <CodeBlock
              free
              lang="tsx"
              filename="tsx"
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
        onCancel={toggleToast}
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
