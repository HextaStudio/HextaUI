import { useState, useEffect } from "react";
import { Input } from "../hexta-ui/Input";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export interface Item {
  name: string;
  url: string;
  type: string;
}

export interface Data {
  components: Item[];
  resources: Item[];
  examples: Item[];
  templates: Item[];
}

export const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Data | null>(null);
  const [filteredData, setFilteredData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("/components.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    if (data) {
      setFilteredData({
        components: data.components.filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.type.toLowerCase().includes(query.toLowerCase())
        ),
        resources: data.resources.filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.type.toLowerCase().includes(query.toLowerCase())
        ),
        examples: data.examples.filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.type.toLowerCase().includes(query.toLowerCase())
        ),
        templates: data.templates.filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.type.toLowerCase().includes(query.toLowerCase())
        ),
      });
    }
  }, [query, data]);

  return (
    <div className=" bg-zinc-950 rounded-md w-[90%] mx-auto flex flex-col gap-3 min-h-[15rem] max-h-[20rem] overflow-auto relative overscroll-y-contain">
      <div className="sticky top-0 -mb-3 -translate-y-[1px]">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a component..."
          className="m-0 rounded-none  border-t-0 border-r-0 border-l-0 py-4 focus:outline-0 focus:ring-0 border-b border-b-white border-opacity-10 relative"
        />
        <span className="absolute flex items-center top-1/2 -translate-y-1/2 right-6">
          <FaSearch size={15} />
        </span>
      </div>
      <div>
        <p></p>
        <div>
          {filteredData && (
            <>
              <ul className="flex flex-col -space-y-3 w-full">
                <p className="text-white px-4 my-2   mx-2 text-sm opacity-60 font-medium">
                  Components
                </p>
                {filteredData.components.map((item, index) => (
                  <li key={index} className="w-full grow flex">
                    <Link
                      key={index}
                      href={item.url}
                      className="px-4 py-2  hover:bg-white w-full hover:bg-opacity-10 flex items-center gap-2 text-[14px] m-2 rounded"
                    >
                      📦 {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col -space-y-3 w-full">
                <p className="text-white px-4 my-2   mx-2 text-sm opacity-60 font-medium">
                  Getting Started
                </p>
                {filteredData.resources.map((item, index) => (
                  <li key={index} className="w-full grow flex">
                    <Link
                      key={index}
                      href={item.url}
                      className="px-4 py-2  hover:bg-white w-full hover:bg-opacity-10 flex items-center gap-2 text-[14px] m-2 rounded"
                    >
                      📄 {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col -space-y-3 w-full">
                <p className="text-white px-4 my-2   mx-2 text-sm opacity-60 font-medium">
                  Examples
                </p>
                {filteredData.examples.map((item, index) => (
                  <li key={index} className="w-full grow flex">
                    <Link
                      key={index}
                      href={item.url}
                      className="px-4 py-2  hover:bg-white w-full hover:bg-opacity-10 flex items-center gap-2 text-[14px] m-2 rounded"
                    >
                      🚀 {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col -space-y-3 w-full">
                <p className="text-white px-4 my-2   mx-2 text-sm opacity-60 font-medium">
                  Templates
                </p>
                {filteredData.templates.map((item, index) => (
                  <li key={index} className="w-full grow flex">
                    <Link
                      key={index}
                      href={item.url}
                      className="px-4 py-2  hover:bg-white w-full hover:bg-opacity-10 flex items-center gap-2 text-[14px] m-2 rounded"
                    >
                      👀 {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
