import Image from "next/image";
import Link from "next/link";

import logo from "../../public/hexta-studio.svg";
import { useState, useEffect, useRef } from "react";

import { Menu, MenuItem, MenuDivider } from "@/components/hexta-ui/Menu";

import { FaDonate, FaGithub, FaHome, FaRocket } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { BsGrid1X2Fill } from "react-icons/bs";
import { Search } from "./utils/Search";
import { Button } from "./hexta-ui/Button";
import { AnimatePresence, motion } from "framer-motion";

interface NavbarProps {
  docs?: boolean;
}

export const Navbar = ({ docs }: NavbarProps) => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null!);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        (searchRef.current as HTMLElement) &&
        !(searchRef.current as HTMLElement).contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setShowSearch(true);
      }
    };
    const handleClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setShowSearch(false);
      }
    };
    window.addEventListener("keydown", handleClose);
    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  const menuItems = [
    { href: "/docs/resources/install-next", label: "Docs", icon: <FaHome /> },
    {
      href: "/docs/components/layout/Accordion",
      label: "Components",
      icon: <BsGrid1X2Fill />,
    },
    { href: "/docs/examples/Navbar", label: "Examples", icon: <FaRocket /> },
    {
      href: "https://github.com/hextastudio/hextaui",
      label: "GitHub",
      icon: <FaGithub />,
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        className={`flex bg-black items-center justify-between px-[1rem] py-4 navbar z-[9999999] fixed top-0  w-full border-b-zinc-800  ${
          docs && "ml-auto max-w-7xl "
        }`}
        style={{
          borderBottom: "1px solid #ffffff20",
        }}
      >
        <div className="flex items-center gap-7 max-[700px]:gap-1 justify-between">
          <Link href="/" className="flex items-center gap-3 ">
            <Image src={logo} alt="HextaUI" width={35} height={35} />
            <span className="max-[823px]:hidden">
              <p className="font-bold">hextastudio/ui</p>
            </span>
          </Link>
          <div className="flex items-center">
            <ul className="flex items-center justify-center text-[14px] gap-7 max-[700px]:hidden">
              <li>
                <Link
                  href="/docs/resources/install-next"
                  className="opacity-80 hover:opacity-100 hover:underline transition-all"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components/layout/Accordion"
                  className="opacity-80 hover:opacity-100 hover:underline transition-all"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/examples/Navbar"
                  className="opacity-80 hover:opacity-100 hover:underline transition-all"
                >
                  Examples
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            className="text-white bg-zinc-950 px-4 py-2 rounded-md relative w-[15rem] grow max-[937px]:w-[8rem] max-[700px]:w-[13rem]  overflow-clip max-[365px]:w-auto "
            onClick={toggleSearch}
          >
            <span className="text-sm font-normal text-nowrap opacity-60 flex gap-1 text-ellipsis ">
              Search
              <span className="max-[937px]:hidden max-[700px]:block max-[330px]:hidden">
                documentation
              </span>
              ...
            </span>
            <kbd className="pointer-events-none absolute right-[0.3rem]  top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border  px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex text-white bg-zinc-900 border-opacity-5 border-white">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>

          <Link
            href="https://x.com/preetsuthar17"
            className="p-2 rounded hover:bg-white hover:bg-opacity-10 transition-all duration-[0.2s]"
            target="_blank"
          >
            <FaXTwitter size={17} />
          </Link>
          <div className="relative">
            <button
              className="p-2 hover:bg-white hover:bg-opacity-10 items-center justify-center transition-all  rounded hidden  max-[700px]:flex"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8m6 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <Menu
              className="max-[700px]:flex hidden w-fit"
              onOpen={toggleMenu}
              onClose={toggleMenu}
              isOpen={menuOpen}
            >
              <MenuItem>
                <Link
                  href="/"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaHome /> Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/docs/components/layout/Accordion"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <BsGrid1X2Fill /> Components
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/docs/examples/Navbar"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaRocket /> Examples
                </Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link
                  href="https://donate.stripe.com/fZeaGJeU23Cn9u8288"
                  target="_blank"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaDonate /> Support Us
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        {showSearch && (
          <>
            <div className="w-dvw h-dvw bg-black bg-opacity-40 fixed top-0 bottom-0 left-0 right-0">
              <div className="z-[9999999999] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black bg-opacity-90 flex items-center justify-center">
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.1, ease: "easeIn" }}
                    ref={searchRef}
                    className="w-full"
                  >
                    <Search />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};
