import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";
import { NextSeo } from "next-seo";

const installNext = () => {
  return (
    <>
      <NextSeo
        title="Install Next Js - HextaUI ✨"
        description="Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness."
        canonical="https://ui.hextastudio.in/docs/components/resouces/install-next"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/resources/install-next",
          title: "Install Next Js - HextaUI ✨",
          description:
            "Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness.",
          images: [
            {
              url: "https://i.imgur.com/xlCPzQc.png",
              width: 1920,
              height: 1080,
              alt: "Install Next Js - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Install Next Js - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <h1 className="h1">Install Next Js</h1>
          <p className="text-sm opacity-80">
            Install Next js with Create Next App CLI
          </p>
          <div className="flex flex-col gap-4 py-10">
            <div>
              <h3 className="h3">Create new project</h3>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npx create-next-app@latest`}
              />
            </div>
            <div>
              <h3 className="h3">On installation You'll see these prompts</h3>
              <CodeBlock
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
