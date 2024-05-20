import Link from "next/link";
import React, { useState, useEffect, useRef, RefObject } from "react";
import { useRouter } from "next/router";

import { Input } from "../hexta-ui/Input";
import { url } from "inspector";

const layoutComponentLinks = [
  {
    name: "Badge",
    hidden: false,
  },
  {
    name: "Input OTP",
    new: true,
    hidden: false,
  },
  {
    name: "Input",
    hidden: false,
  },
  {
    name: "TreeView",
    new: true,
    hidden: false,
  },
  {
    name: "Checkbox",
    hidden: false,
  },
  {
    name: "Date Picker",
    hidden: false,
  },

  {
    name: "Tabs",
    hidden: false,
  },
  {
    name: "Card",
    new: true,
    hidden: false,
  },
  {
    name: "Stepper",
    hidden: false,
  },
  {
    name: "Progress Bar",
    hidden: false,
  },
  {
    name: "Slider",
    hidden: false,
  },
  {
    name: "Select",
    hidden: false,
  },
  {
    name: "File Upload",
    hidden: false,
  },
  {
    name: "Button",
    hidden: false,
  },
  {
    name: "Table",
    hidden: false,
  },
  {
    name: "Avatar",
    hidden: false,
  },
  {
    name: "Loader",
    hidden: false,
  },
  {
    name: "Toast",
    hidden: false,
  },
  {
    name: "Menu",
    hidden: false,
  },
  {
    name: "Toggle",
    hidden: false,
  },
  {
    name: "Tooltip",
    hidden: false,
  },
  {
    name: "Card",
    hidden: false,
  },
  {
    name: "Alert Dialog",
    hidden: false,
  },
  {
    name: "Breadcrumb",
    hidden: false,
  },
  {
    name: "Hero",
    hidden: false,
  },
  {
    name: "Navbar",
    hidden: false,
  },
  {
    name: "Footer",
    hidden: false,
  },
].sort();

const getStartedLinks = [
  {
    name: "Install Next.js",
    url: "install-next",
  },
  {
    name: "CLI",
    url: "install-hexta-ui",
  },
  {
    name: "Install Tailwind CSS",
    url: "install-tailwind",
  },
  {
    name: "Install GSAP",
    url: "install-gsap",
  },
  {
    name: "Install Framer Motion",
    url: "install-framer-motion",
  },
];

const templateComponentsLinks = [
  {
    name: "Startup (SaaS)",
    url: "startup-saas",
    new: false,
  },
  {
    name: "Portfolio v1",
    url: "portfolio-v1",
    new: false,
  },
];

const exampleComponentsLinks = [
  {
    name: "Post Card",
    new: true,
    hidden: false,
  },
];

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null!);

  const filteredLayoutComponentLinks = layoutComponentLinks.filter((link) => {
    return link.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 900px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  useEffect(() => {
    const inputElement = searchInputRef.current;
    if (inputElement) {
      const handleShortcut = (e: KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
          e.preventDefault();
          inputElement.focus();
        }
      };

      inputElement.addEventListener("keydown", handleShortcut);

      return () => {
        inputElement.removeEventListener("keydown", handleShortcut);
      };
    }
  }, []);
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
        className={`z-10 fixed flex flex-col gap-4 p-10 pb-20 bg-black border-r-2 docs-sidebar h-full max-[900px]:fixed overflow-auto  ${
          sidebarOpen ? "translate-x-0" : "translate-x-[-60rem]"
        } ${!isMobile && "translate-x-[0rem]"}`}
        style={{
          borderRight: "1px solid #ffffff20",
          minWidth: "16rem",
        }}
      >
        {" "}
        <Input
          type="text"
          placeholder="Search Components..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          ref={searchInputRef}
        />
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
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="flex items-center justify-between gap-1 p-2 text-sm font-bold uppercase ">
            Getting Started
          </p>
          <ul className="flex flex-col gap-[8px] p-2">
            {getStartedLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className={`flex items-center gap-1 text-sm transition-all  hover:opacity-90 hover:underline w-fit ${
                    router.pathname === `/docs/resources/${link.url}`
                      ? "opacity-100"
                      : "opacity-60"
                  }`}
                  href={`/docs/resources/${link.url}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="flex items-center justify-between gap-1 p-2 text-sm font-bold uppercase ">
            Templates (pro)
          </p>
          <ul className="flex flex-col gap-[8px] p-2">
            {templateComponentsLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className={`flex items-center gap-1 text-sm transition-all  hover:opacity-90 hover:underline w-fit ${
                    router.pathname === `/docs/templates/${link.url}`
                      ? "opacity-100"
                      : "opacity-60"
                  }`}
                  href={`/docs/templates/${link.url}`}
                >
                  {link.name}
                  {link.new && (
                    <span className=" bg-green-400 border border-green-900 text-black rounded-full flex items-center font-[600] text-[10px] py-[0.3px] px-[8px] decoration-none">
                      new
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="flex items-center justify-between gap-1 p-2 text-sm font-bold uppercase ">
            Examples
          </p>
          <ul className="flex flex-col gap-[8px] p-2">
            {exampleComponentsLinks
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((link, index) => (
                <li key={index} className={` ${link.hidden && "hidden"} `}>
                  <Link
                    className={`flex items-center gap-1 text-sm transition-all  hover:opacity-90 hover:underline w-fit ${
                      router.pathname ===
                      `/docs/examples/${link.name.replace(" ", "")}`
                        ? "opacity-100"
                        : "opacity-60"
                    }`}
                    href={`/docs/examples/${link.name.replace(" ", "")}`}
                  >
                    {link.name}{" "}
                    {link.new && (
                      <span className=" bg-green-400 border border-green-900 text-black rounded-full flex items-center font-[600] text-[10px] py-[0.3px] px-[8px] decoration-none">
                        new
                      </span>
                    )}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="flex items-center justify-between gap-1 p-2 text-sm font-bold uppercase ">
            Components
          </p>
          <ul className="flex flex-col gap-[8px] p-2">
            {filteredLayoutComponentLinks
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((link, index) => (
                <li key={index} className={` ${link.hidden && "hidden"} `}>
                  <Link
                    className={`flex items-center gap-1 text-sm transition-all  hover:opacity-90 hover:underline w-fit ${
                      router.pathname ===
                      `/docs/components/layout/${link.name.replace(" ", "")}`
                        ? "opacity-100"
                        : "opacity-60"
                    }`}
                    href={`/docs/components/layout/${link.name.replace(
                      " ",
                      ""
                    )}`}
                  >
                    {link.name}{" "}
                    {link.new && (
                      <span className=" bg-green-400 border border-green-900 text-black rounded-full flex items-center font-[600] text-[10px] py-[0.3px] px-[8px] decoration-none">
                        new
                      </span>
                    )}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
