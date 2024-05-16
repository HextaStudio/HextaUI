import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import React from "react";

import { NextSeo } from "next-seo";
import { InstallationSteps } from "@/components/utils/InstallationSteps";

import { FileUpload } from "@/components/hexta-ui/FileUpload";
import { Table } from "@/components/hexta-ui/Table";
import { DocsHeader } from "@/components/utils/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const data = [
  {
    propName: "onChange",
    propType: "Function",
    defaultValue: "() => {}",
    description: "Function to be called when value is changed",
  },
  {
    propName: "multiple",
    propType: "Boolean",
    defaultValue: "false",
    description: "Allow multiple files to be uploaded",
  },
  {
    propName: "accept",
    propType: "String",
    defaultValue: "null",
    description: "Accepted file types",
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

const fileupload = () => {
  const handleFileChange = (e: { target: { files: any } }) => {
    console.log(e.target.files);
  };
  return (
    <>
      <DocsSEO
        title="File Upload - HextaUI ✨"
        description="File upload allows users to upload files."
        image="https://i.imgur.com/TTpD2Jr.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="File Upload"
            description="File upload allows users to upload files."
          />
          <div className="flex flex-col gap-4 py-10 preview">
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <FileUpload onChange={handleFileChange} multiple accept="image/*">
                Drop or Click Upload Images
              </FileUpload>
            </div>
          </div>
          <InstallationSteps component="FileUpload" />
          <div className="flex flex-col gap-4 py-10 preview">
            <h3 className="h3">File Upload</h3>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <FileUpload onChange={handleFileChange} multiple accept="image/*">
                Drop or Click Upload Images
              </FileUpload>
            </div>
          </div>
          <CodeBlock
            lang="tsx"
            filename="Home.tsx"
            code={`import { FileUpload } from "@/components/hexta-ui/FileUpload";

export const Home = () => {
  
  const handleFileChange = (e: { target: { files: any } }) => {
    console.log(e.target.files);
  };
  
  return (
    <>
      <FileUpload onChange={handleFileChange} multiple accept="image/*">
        Drop or Click Upload Images
      </FileUpload>
    </>
  );
}

`}
          />
          <Table columns={columns} data={data} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default fileupload;
