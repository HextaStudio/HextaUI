import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { FileUpload } from "@/components/hexta-ui/FileUpload";
import { Table } from "@/components/hexta-ui/Table";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

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
          <DocsPreview>
            <FileUpload onChange={handleFileChange} multiple accept="image/*">
              Drop or Click Upload Images
            </FileUpload>
          </DocsPreview>
          <InstallationSteps component="FileUpload" imports="FileUpload" />

          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`export const Home = () => {
  
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
