import { Breadcrumb } from "../hexta-ui/Breadcrumb";

interface DocsHeaderProps {
  title: string;
  description: string;
}

export const DocsHeader = ({ title, description }: DocsHeaderProps) => {
  const items = [
    { title: "Docs", href: "/components" },
    { title: title, href: title.replace(" ", ""), active: true },
  ];
  return (
    <>
      <div className="flex flex-col gap-2 header">
        <Breadcrumb items={items} />
        <h1 className="h1">{title}</h1>
        <p className="text-md opacity-80">{description}</p>
      </div>
    </>
  );
};
