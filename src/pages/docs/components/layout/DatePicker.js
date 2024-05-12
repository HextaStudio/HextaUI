import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import React from "react";
import { useState } from "react";

import { NextSeo } from "next-seo";
import { InstallationSteps } from "@/components/utils/InstallationSteps";
import { format } from "date-fns";
import { Datepicker } from "@/components/hexta-ui/Datepicker";
import { Table } from "@/components/hexta-ui/Table";

const data = [
  {
    prop: "value",
    type: "Date",
    default: "null",
    description: "Value of the datepicker",
  },
  {
    prop: "onChange",
    type: "Function",
    default: "() => {}",
    description: "Function to be called when value is changed",
  },
  {
    prop: "className",
    type: "String",
    default: "null",
    description: "className for the datepicker",
  },
];

const columns = [
  {
    label: "Prop Name",
    key: "propName",
  },
  {
    label: "Prop Type",
    key: "propType",
  },
  {
    label: "Default Value",
    key: "defaultValue",
  },
  {
    label: "Description",
    key: "description",
  },
];

const datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <NextSeo
        title="Date Picker - HextaUI ✨"
        description="The Date Picker component lets users select a date."
        canonical="https://ui.hextastudio.in/docs/components/layout/datepicker"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/datepicker",
          title: "Date Picker - HextaUI ✨",
          description: "The Date Picker component lets users select a date.",
          images: [
            {
              url: "https://i.imgur.com/nqWHqng.png",
              width: 1920,
              height: 1080,
              alt: "Date Picker - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Date Picker - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Date Picker</h1>
            <p className="text-sm opacity-80">
              The Date Picker component lets users select a date.
            </p>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div className="relative flex items-start justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem]">
              <div className="flex flex-col gap-1">
                <Datepicker value={selectedDate} onChange={handleDateChange} />
                <p className="text-sm text-center opacity-80">
                  Selected Date:{" "}
                  {selectedDate ? format(selectedDate, "dd/MM/yyyy") : "None"}
                </p>
              </div>
            </div>
          </div>
          <InstallationSteps component="Datepicker" />
          <div className="flex flex-col gap-4 py-10 preview">
            <h3 className="h3">Datepicker</h3>
            <div className="relative flex items-start justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[30rem]">
              <div className="flex flex-col gap-1">
                <Datepicker value={selectedDate} onChange={handleDateChange} />
                <p className="text-sm text-center opacity-80">
                  Selected Date:{" "}
                  {selectedDate ? format(selectedDate, "dd/MM/yyyy") : "None"}
                </p>
              </div>
            </div>
          </div>
          <CodeBlock
            lang="jsx"
            filename="jsx"
            code={`import { useState } from "react";
import { Datepicker } from "@/components/hexta-ui/Datepicker";

export const Home = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    
    return (
        <>
          <Datepicker value={selectedDate} onChange={handleDateChange} />
        </>
    );
}`}
          />
          <Table columns={columns} data={data} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default datepicker;
