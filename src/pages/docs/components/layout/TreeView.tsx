import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import {
  TreeView,
  TreeChild,
  TreeHeader,
} from "@/components/hexta-ui/TreeView";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { Table } from "@/components/hexta-ui/Table";

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
    propName: "children",
    propType: "React.ReactNode",
    defaultValue: "null",
    description: "Children of the component.",
  },
  {
    propName: "className",
    propType: "string",
    defaultValue: "null",
    description: "Classes to be applied to the component.",
  },
  {
    propName: "id",
    propType: "string",
    defaultValue: "null",
    description: "Id to specific root.",
  },
];

const treeview = () => {
  return (
    <>
      <DocsSEO
        title="TreeView - HextaUI ✨"
        description="A TreeView component is used to display hierarchical data in a tree-like structure."
        image="https://i.imgur.com/dHVkUIz.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="TreeView"
            description="A TreeView component is used to display hierarchical data in a tree-like structure."
          />
          <DocsPreview className="min-h-[30rem] h-full">
            <TreeView>
              <TreeHeader id="1" title="src">
                <TreeHeader id="2" title="components">
                  <TreeHeader id="3" title="hexta-ui">
                    <TreeChild>TreeView.tsx</TreeChild>
                    <TreeChild>Loader.tsx</TreeChild>
                    <TreeChild>Modal.tsx</TreeChild>
                  </TreeHeader>
                </TreeHeader>
                <TreeHeader id="4" title="pages">
                  <TreeChild>_app.tsx</TreeChild>
                  <TreeChild>_documents.tsx</TreeChild>
                  <TreeChild>index.tsx</TreeChild>
                </TreeHeader>
              </TreeHeader>
              <TreeHeader id="5" title="public">
                <TreeChild>favicon.ico</TreeChild>
                <TreeChild>logo.svg</TreeChild>
                <TreeChild>logo.png</TreeChild>
              </TreeHeader>
            </TreeView>
          </DocsPreview>
          <InstallationSteps
            component="TreeView"
            imports={["TreeView, TreeChild, TreeHeader"]}
          />{" "}
          <CodeBlock
            lang="tsx"
            title="Usage"
            filename="tsx"
            code={`<TreeView>
  <TreeHeader id="1" title="src">
    <TreeHeader id="2" title="components">
      <TreeHeader id="3" title="hexta-ui">
        <TreeChild>TreeView.tsx</TreeChild>
        <TreeChild>Loader.tsx</TreeChild>
        <TreeChild>Modal.tsx</TreeChild>
      </TreeHeader>
    </TreeHeader>
    <TreeHeader id="4" title="pages">
      <TreeChild>_app.tsx</TreeChild>
      <TreeChild>_documents.tsx</TreeChild>
      <TreeChild>index.tsx</TreeChild>
    </TreeHeader>
  </TreeHeader>
  <TreeHeader id="5" title="public">
    <TreeChild>favicon.ico</TreeChild>
    <TreeChild>logo.svg</TreeChild>
    <TreeChild>logo.png</TreeChild>
  </TreeHeader>
</TreeView>`}
          />
          <Table columns={columns} data={data} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default treeview;
