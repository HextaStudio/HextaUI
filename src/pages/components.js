import { DocsLayout } from "@/components/DocsPage/DocsLayout";

const components = () => {
  return (
    <>
      <DocsLayout>
        <main>
          <h1 className="h1">
            Copy Paste Gorgeous Web Components,Without Effort
          </h1>
          <p className="opacity-80">
            Just copy and paste our prebuilt components in your website and make
            your website look awesome!
          </p>
          <div className="flex flex-col gap-4 py-10">
            <div>
              <h3 className="h3">Top picked Components</h3>
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default components;
