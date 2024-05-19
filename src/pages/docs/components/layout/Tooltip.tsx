import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@/components/hexta-ui/Tooltip";

import { Badge } from "@/components/hexta-ui/Badge";
import { InstallationSteps } from "@/components/utils/InstallationSteps";
import { DocsHeader } from "@/components/utils/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/utils/DocsPreview";

const tooltip = () => {
  return (
    <>
      <DocsSEO
        title="Tooltip - HextaUI ✨"
        description="An awesome component to display tooltip for information."
        image="https://i.imgur.com/TQAInIK.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Tooltip"
            description="An awesome component to display tooltip for information."
          />
          <DocsPreview>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <p className="px-3 py-1 border-2 border-white rounded-full cursor-default text-md border-opacity-30">
                    Hover me
                  </p>
                </TooltipTrigger>
                <TooltipContent direction="top">
                  <p className="text-sm">This is content of tooltip</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DocsPreview>
          <InstallationSteps
            component="Tooltip"
            imports={[
              "Tooltip",
              "TooltipTrigger",
              "TooltipProvider",
              "TooltipContent",
            ]}
          />
          <div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
      <p className="px-3 py-1 border-2 border-white rounded-full cursor-default text-md border-opacity-30">
      Hover me
      </p>
    </TooltipTrigger>
    <TooltipContent direction="top">
      <p className="text-sm">This is content of tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default tooltip;
