import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { Skeleton } from "@/components/hexta-ui/Skeleton";

const skeleton = () => {
  return (
    <>
      <DocsSEO
        title="Skeleton - hextastudio/ui"
        description="A skeleton is a placeholder for content that hasn't loaded yet."
        image="https://i.imgur.com/CwIeSDP.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Skeleton"
            description="A skeleton is a placeholder for content that hasn't loaded yet."
          />
          <div>
            <DocsPreview>
              <div className="flex items-center justify-center gap-3">
                <div>
                  <Skeleton className="w-12 h-12 rounded-full" />
                </div>
                <div className="flex flex-col gap-3">
                  <Skeleton className="w-44 h-4 rounded-sm" />
                  <Skeleton className="w-24 h-4 rounded-sm" />
                </div>
              </div>
            </DocsPreview>
            <InstallationSteps
              imports={["Skeleton"]}
              component={["Skeleton"]}
            />
            <CodeBlock
              lang="tsx"
              filename="tsx"
              code={`<div className="flex items-center justify-center gap-3">
   <div>
       <Skeleton className="w-12 h-12 rounded-full" />
   </div>
   <div className="flex flex-col gap-3">
       <Skeleton className="w-44 h-4 rounded-sm" />
       <Skeleton className="w-24 h-4 rounded-sm" />
   </div>
</div>`}
            />
          </div>
          <div>
            <DocsPreview>
              <div className="flex items-center justify-center gap-3 flex-col">
                <div>
                  <Skeleton className="w-44  h-24" />
                </div>
                <div className="flex gap-2 items-center">
                  <Skeleton className="w-6 h-6 rounded-full" />
                  <Skeleton className="w-36 h-4 rounded-sm" />
                </div>
              </div>
            </DocsPreview>{" "}
            <CodeBlock
              lang="tsx"
              filename="tsx"
              code={`<div className="flex items-center justify-center gap-3 flex-col">
    <div>
        <Skeleton className="w-44  h-24" />
    </div>
    <div className="flex gap-2 items-center">
        <Skeleton className="w-6 h-6 rounded-full" />
        <Skeleton className="w-36 h-4 rounded-sm" />
    </div>
</div>`}
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default skeleton;
