import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Badge } from "../hexta-ui/Badge";
import { Loader } from "../hexta-ui/Loader";
import { Skeleton } from "../hexta-ui/Skeleton";

export interface Item {
  name: string;
  url: string;
  type: string;
  new: string;
}

export interface Data {
  components: Item[];
  resources: Item[];
  examples: Item[];
  templates: Item[];
}

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("/components.json")
      .then((response) => response.json())
      .then((data) => {
        for (let category in data) {
          data[category].sort((a: { name: string }, b: { name: any }) =>
            a.name.localeCompare(b.name)
          );
        }
        setData(data);
      });
  }, []);

  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div
        className="fixed left-[1rem] p-[9px] cursor-pointer top-[5.3rem] border border-zinc-800 rounded bg-black hidden max-[900px]:flex z-[99] "
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M14 5H2V3h12zm0 4H2V7h12zM2 13h12v-2H2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <aside
        className={`z-10 fixed flex flex-col gap-2 p-10 pb-20   max-[1092px]:ml-[1.2rem] max-[600px]:ml-0 bg-black border-r-2 docs-sidebar h-full max-[900px]:fixed overflow-auto  ${
          sidebarOpen && "open"
        } `}
        style={{
          borderRight: "1px solid #ffffff20",
          minWidth: "16rem",
        }}
      >
        <div
          className="absolute w-fit justify-end items-end ml-auto right-[1rem] p-[9px] cursor-pointer top-[1rem] border border-zinc-800 rounded bg-black hidden max-[900px]:flex z-[9999999999]"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
            />
          </svg>
        </div>
        <div className="relative bg-black sidebar-section">
          <p className="p-2 text-sm font-bold uppercase rounded-md">INFO</p>
          <ul className="p-2">
            <li>
              <span className="text-sm opacity-60">Stay updated </span>
              <Link
                className="text-sm blue-link w-fit"
                href="https://x.com/preetsuthar17"
                target="_blank"
              >
                @preetsuthar17
              </Link>
            </li>
            <li>
              <span className="text-sm opacity-90">🙏 Support </span>
              <Link
                className="text-sm blue-link w-fit"
                href="https://donate.stripe.com/fZeaGJeU23Cn9u8288"
                target="_blank"
              >
                hextastudio/ui
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="flex items-center justify-between gap-1 p-2 text-sm font-bold uppercase ">
            Getting Started
          </p>
          <ul className="flex flex-col gap-[8px] p-2">
            {data ? (
              <>
                {data.resources.map((item, index) => (
                  <li key={index}>
                    <Link
                      className={`flex items-center gap-1 text-sm transition-all  hover:opacity-90 hover:underline w-fit ${
                        router.pathname === `${item.url}`
                          ? "opacity-100"
                          : "opacity-60"
                      }`}
                      href={`${item.url}`}
                    >
                      {item.name}
                      {item.new === "true" && (
                        <span className="text-xs p-0 bg-green-500 px-2 hover:no-underline rounded-full text-black font-medium">
                          new
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
              </div>
            )}
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="flex items-center justify-between gap-1 p-2 text-sm font-bold uppercase ">
            Templates (pro)
          </p>
          <ul className="flex flex-col gap-[8px] p-2">
            {data ? (
              <>
                {data.templates.map((item, index) => (
                  <li key={index}>
                    <Link
                      className={`flex items-center gap-1 text-sm transition-all  hover:opacity-90 hover:underline w-fit ${
                        router.pathname === `${item.url}`
                          ? "opacity-100"
                          : "opacity-60"
                      }`}
                      href={`${item.url}`}
                    >
                      {item.name}
                      {item.new === "true" && (
                        <span className="text-xs p-0 bg-green-500 px-2 hover:no-underline rounded-full text-black font-medium">
                          new
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
              </div>
            )}
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="flex items-center justify-between gap-1 p-2 text-sm font-bold uppercase ">
            Examples
          </p>
          <ul className="flex flex-col gap-[8px] p-2">
            {data ? (
              <>
                {data.examples.map((item, index) => (
                  <li key={index}>
                    <Link
                      className={`flex items-center gap-1 text-sm transition-all  hover:opacity-90 hover:underline w-fit ${
                        router.pathname === `${item.url}`
                          ? "opacity-100"
                          : "opacity-60"
                      }`}
                      href={`${item.url}`}
                    >
                      {item.name}
                      {item.new === "true" && (
                        <span className="text-xs p-0 bg-green-500 px-2 hover:no-underline rounded-full text-black font-medium">
                          new
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
              </div>
            )}
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="flex items-center justify-between gap-1 p-2 text-sm font-bold uppercase ">
            Components
          </p>
          <ul className="flex flex-col gap-[8px] p-2">
            {data ? (
              <>
                {data.components.map((item, index) => (
                  <li key={index}>
                    <Link
                      className={`flex items-center gap-1 text-sm transition-all  hover:opacity-90 hover:underline w-fit ${
                        router.pathname === `${item.url}`
                          ? "opacity-100"
                          : "opacity-60"
                      }`}
                      href={`${item.url}`}
                    >
                      {item.name}
                      {item.new === "true" && (
                        <span className="text-xs p-0 bg-green-500 px-2 hover:no-underline rounded-full text-black font-medium">
                          new
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
              </div>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
};
