import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";
import { NextSeo } from "next-seo";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const installNext = () => {
  return (
    <>
      <DocsSEO
        title="Install Next Js - hextastudio/ui"
        description="Easy to use, modern, animated, and responsive UI library to skyrocket your next project impression."
        image="https://i.imgur.com/xlCPzQc.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Install Next Js"
            description="Install Next js with Create Next App CLI"
          />

          <div className="flex flex-col gap-4 py-10">
            <div>
              <h3 className="h3">Create new project</h3>
              <CodeBlock
                free
                lang="bash"
                filename="bash"
                code={`npx create-next-app@latest`}
              />
            </div>
            <div>
              <h3 className="h3">On installation You'll see these prompts</h3>
              <CodeBlock
                free
                filename="bash"
                lang="bash"
                code={`What is your project named? my-app
Would you like to use TypeScript? Yes 
Would you like to use ESLint? No 
Would you like to use Tailwind CSS? Yes
Would you like to use src/ directory? Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No
`}
              />
            </div>
            <div>
              <h3 className="h3">Start the app</h3>
              <CodeBlock
                free
                lang="bash"
                filename="bash"
                code={`cd my-app
npm run dev`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default installNext;
