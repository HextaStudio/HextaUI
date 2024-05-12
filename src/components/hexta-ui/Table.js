import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";

const cn = (...args) => {
  return twMerge(clsx(args));
};

export const Table = ({
  data,
  columns,
  tableTitle = "Table",
  className,
  headerClassName,
  rowClassName,
  cellClassName,
}) => {
  const [visibleColumns, setVisibleColumns] = React.useState(
    columns.map((column) => column.key)
  );
  const [searchTerm, setSearchTerm] = React.useState("");
  const [limitedData, setLimitedData] = React.useState([]);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setLimitedData(filteredData);
  }, [data, searchTerm]);

  const toggleColumn = (key) => {
    setVisibleColumns((prevVisibleColumns) =>
      prevVisibleColumns.includes(key)
        ? prevVisibleColumns.filter((column) => column !== key)
        : [...prevVisibleColumns, key]
    );
  };

  return (
    <div className="mt-[5rem]  min-w-[60dvw] max-w-[60dvw] max-[900px]:max-w-[90dvw]">
      <h2 className="text-2xl font-semibold">{tableTitle}</h2>
      <div className="flex flex-wrap items-center justify-between mb-[2rem] gap-4">
        <div className="flex items-center justify-between grow">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="flex px-4 py-3 mx-1 my-4 text-sm rounded-lg grow focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50"
          />
        </div>
        <div className="flex flex-wrap items-center gap-4 mx-1">
          {columns.map((column) => (
            <div
              key={column.key}
              className="flex items-center mr-4 cursor-pointer"
              onClick={() => toggleColumn(column.key)}
            >
              <input
                type="checkbox"
                checked={visibleColumns.includes(column.key)}
                readOnly
                className="mr-2"
              />
              <span className="text-sm pointer-events-none">
                {column.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className={cn("w-full", className)}>
          <thead>
            <tr>
              {columns
                .filter((column) => visibleColumns.includes(column.key))
                .map((column) => (
                  <th
                    key={column.key}
                    className={cn(
                      "px-4 py-3 text-left bg-gray-100 bg-opacity-5",
                      headerClassName
                    )}
                  >
                    {column.label}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {limitedData.map((row, index) => (
              <tr key={index} className={cn("", rowClassName)}>
                {columns
                  .filter((column) => visibleColumns.includes(column.key))
                  .map((column) => (
                    <td
                      key={`${index}-${column.key}`}
                      className={cn(
                        "px-4 py-3 text-md opacity-90 text-left text-[14px]",
                        cellClassName
                      )}
                    >
                      {row[column.key]}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </div>
    </div>
  );
};
