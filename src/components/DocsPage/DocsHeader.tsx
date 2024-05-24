import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbItem,
} from "@/components/hexta-ui/Breadcrumb";

interface DocsHeaderProps {
  title: string;
  description: string;
}

export const DocsHeader = ({ title, description }: DocsHeaderProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 header">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components/layout/Accordion">
                Components
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>{" "}
        <h1 className="text-4xl font-black leading-10">{title}</h1>
        <p className="text-md opacity-80">{description}</p>
      </div>
    </>
  );
};
