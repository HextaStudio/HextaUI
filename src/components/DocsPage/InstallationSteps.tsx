import { CodeBlock } from "./CodeBlock";

interface InstallationStepsProps {
  component: string;
  imports?: any[];
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const InstallationSteps = ({
  component,
  imports,
}: InstallationStepsProps) => {
  return (
    <>
      {" "}
      <div className="installation">
        <h2 className="text-3xl font-bold">Installation</h2>
        <CodeBlock
          lang="bash"
          filename="bash"
          code={`npx hexta-ui add ${component.toLowerCase()}`}
        />

        <CodeBlock
          lang="tsx"
          filename="tsx"
          code={`import { ${capitalizeFirstLetter(
            imports ? imports.join(", ") : component
          )} } from "@/components/hexta-ui/${capitalizeFirstLetter(
            component
          )}";`}
        />
      </div>
    </>
  );
};
