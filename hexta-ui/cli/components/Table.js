import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args) => {
  return twMerge(clsx(args));
};

export const Table = ({
  data,
  columns,
  className,
  headerClassName,
  rowClassName,
  cellClassName,
}) => {
  const [visibleColumns, setVisibleColumns] = React.useState(
    columns.map((column) => column.key)
  );

  const toggleColumn = (key) => {
    setVisibleColumns((prevVisibleColumns) =>
      prevVisibleColumns.includes(key)
        ? prevVisibleColumns.filter((column) => column !== key)
        : [...prevVisibleColumns, key]
    );
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
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
              <span className="text-sm">{column.label}</span>
            </div>
          ))}
        </div>
      </div>
      <table className={cn("w-full table-auto", className)}>
        <thead>
          <tr>
            {columns
              .filter((column) => visibleColumns.includes(column.key))
              .map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    "px-4 py-2 text-left bg-gray-100 ",
                    headerClassName
                  )}
                >
                  {column.label}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={cn("", rowClassName)}>
              {columns
                .filter((column) => visibleColumns.includes(column.key))
                .map((column) => (
                  <td
                    key={`${index}-${column.key}`}
                    className={cn(
                      "px-4 py-2 text-md opacity-90 text-left ",
                      cellClassName
                    )}
                  >
                    {row[column.key]}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
