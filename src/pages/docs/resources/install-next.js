import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

const installNext = () => {
  return (
    <>
      <DocsLayout>
        <main>
          <h1 className="h1">Install Next Js</h1>
          <p className="opacity-80">Install Next js with Create Next App CLI</p>
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
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use src/ directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
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
