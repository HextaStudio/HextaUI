import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";
import { useState } from "react";

import { InstallationSteps } from "@/components/utils/InstallationSteps";
import { format } from "date-fns";
import { Datepicker } from "@/components/hexta-ui/Datepicker";
import { Table } from "@/components/hexta-ui/Table";
import { DocsHeader } from "@/components/utils/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const data = [
  {
    propName: "value",
    propType: "Date",
    defaultValue: "null",
    description: "Value of the datepicker",
  },
  {
    propName: "onChange",
    propType: "Function",
    defaultValue: "() => {}",
    description: "Function to be called when value is changed",
  },
  {
    propName: "className",
    propType: "String",
    defaultValue: "null",
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
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  return (
    <>
      <DocsSEO
        title="Date Picker - HextaUI ✨"
        description="The Date Picker component lets users select a date."
        image="https://i.imgur.com/nqWHqng.png"
      />
      <DocsLayout>
        <main>
          {" "}
          <DocsHeader
            title="Date Picker"
            description="The Date Picker component lets users select a date."
          />
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
            lang="tsx"
            filename="Home.tsx"
            code={`import { useState } from "react";
import { Datepicker } from "@/components/hexta-ui/Datepicker";

export const Home = () => {
    const [selectedDate, setSelectedDate] = useState<Date>();

    const handleDateChange = (date: Date | undefined) => {
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
