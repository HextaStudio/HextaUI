import Image from "next/legacy/image";
import Link from "next/link";

import logo from "../../public/hexta-studio.svg";
import { useState } from "react";

import { Menu } from "@/components/hexta-ui/Menu";

interface NavbarProps {
  docs?: boolean;
}
import { FaGithub, FaHome, FaRocket } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { BsGrid1X2Fill } from "react-icons/bs";

export const Navbar = ({ docs }: NavbarProps) => {
  const menuItems = [
    { href: "/docs/resources/install-next", label: "Docs", icon: <FaHome /> },
    {
      href: "/docs/components/layout/AlertDialog",
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
        className={`flex bg-black items-center justify-between px-10 py-4 navbar z-[9999999] fixed top-0  w-full border-b-zinc-800  ${
          docs && "ml-auto max-w-7xl "
        }`}
        style={{
          borderBottom: "1px solid #ffffff20",
        }}
      >
        <div className="flex items-center gap-7 justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="HextaUI" width={35} height={35} />
            <span className="max-[650px]:hidden">
              <p className="font-bold">hextastudio/ui</p>
            </span>
          </Link>
          <div className="flex items-center">
            <ul className="flex items-center justify-center text-[14px] gap-7 max-[650px]:hidden">
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
              <li>
                <Link
                  href="#"
                  className="opacity-80 hover:opacity-100 hover:underline transition-all"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/hextastudio/hextaui"
            className="p-2 rounded hover:bg-white hover:bg-opacity-10 transition-all duration-[0.2s]"
            target="_blank"
          >
            <FaGithub size={17} />
          </Link>
          <Link
            href="https://x.com/preetsuthar17"
            className="p-2 rounded hover:bg-white hover:bg-opacity-10 transition-all duration-[0.2s]"
            target="_blank"
          >
            <FaXTwitter size={17} />
          </Link>
          <div className="relative">
            <button
              className="p-2 hover:bg-white hover:bg-opacity-10 items-center justify-center transition-all  rounded hidden  max-[650px]:flex"
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
                  fill-rule="evenodd"
                  d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8m6 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <Menu
              className="max-[650px]:flex hidden w-fit"
              items={menuItems}
              onOpen={toggleMenu}
              onClose={toggleMenu}
              isOpen={menuOpen}
            />
          </div>
        </div>
      </nav>
    </>
  );
};
