import { CodeBlock } from "./CodeBlock";

interface InstallationStepsProps {
  component: any[] | string;
  imports?: any[] | string;
  title?: string;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const InstallationSteps = ({
  component,
  imports,
  title = "Installation",
}: InstallationStepsProps) => {
  const generateImportStatements = (components: any[], imports: any[]) => {
    return components
      .map(
        (component, index) =>
          `import { ${
            imports[index]
          } } from "@/components/hexta-ui/${capitalizeFirstLetter(component)}";`
      )
      .join("\n");
  };

  return (
    <>
      <div className="installation">
        <h2 className="text-2xl font-bold">{title}</h2>
        <CodeBlock
          lang="bash"
          filename="bash"
          code={`npx hexta-ui add ${
            Array.isArray(component)
              ? component.join(" ").toLowerCase()
              : component.toLowerCase()
          }`}
        />

        <CodeBlock
          lang="tsx"
          filename="tsx"
          code={
            Array.isArray(imports) && Array.isArray(component)
              ? generateImportStatements(component, imports)
              : `import { ${capitalizeFirstLetter(
                  String(imports)
                )} } from "@/components/hexta-ui/${capitalizeFirstLetter(
                  String(component)
                )}";`
          }
        />
      </div>
    </>
  );
};
