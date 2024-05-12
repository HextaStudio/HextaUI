import { CodeBlock } from "../CodeBlock";

export const InstallationSteps = ({ component }) => {
  return (
    <>
      {" "}
      <div className="installation">
        <h2 className="text-3xl font-bold">Installation</h2>
        <CodeBlock
          lang="bash"
          filename="bash"
          code={`npm install @hextastudio/ui
# or
bun install @hextastudio/ui
# or
yarn add @hextastudio/ui
# or
pnpm add @hextastudio/ui`}
        />

        <CodeBlock lang="bash" filename="bash" code={`npx hexta-ui add`} />
        <CodeBlock
          lang="bash"
          filename="bash"
          code={`? Which framework are you using? (Use arrow keys)
> Next.js 
React`}
        />
        <CodeBlock
          lang="bash"
          filename="bash"
          code={`? Which framework are you using? Next.js
? Which component would you like to install?
  ...
  ...
  ...
> ${component}
  ...
  ...
  ...`}
        />
        <CodeBlock
          lang="bash"
          filename="bash"
          code={`? Which framework are you using? Next.js         
? Which component would you like to install? ${component}
✔ ${component} component was added successfully — Guide to use ${component}, https://ui.hextastudio.in/docs/components/layout/${component}`}
        />
        <CodeBlock
          lang="jsx"
          filename="jsx"
          code={`import { ${component} } from "@/components/hexta-ui/${component}";`}
        />
      </div>
    </>
  );
};
