import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { Button } from "@/components/hexta-ui/Button";
import { Menu, MenuItem } from "@/components/hexta-ui/Menu";

import { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaMoneyBill, FaUser } from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const StatsWithIcon = () => {
  const [menuOpen0, setMenuOpen0] = useState(false);
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);

  return (
    <>
      <div className="flex justify-center gap-8 items-center flex-wrap">
        <div className="flex flex-col items-start gap-2 p-4  border-b border-b-white border-opacity-10 bg-zinc-950 rounded-md  relative grow pr-[4rem] max-[308px]:pr-4">
          <div className=" absolute top-4 right-4 max-[308px]:top-1/2 max-[308px]:-translate-y-1/2">
            <Button
              className="px-2 py-2"
              onClick={() => setMenuOpen0(true)}
              variant="ghost"
            >
              <BsThreeDotsVertical />
            </Button>
            <Menu
              isOpen={menuOpen0}
              onOpen={() => setMenuOpen0(true)}
              onClose={() => setMenuOpen0(false)}
              className="w-fit px-2 "
            >
              <MenuItem className="p-0 rounded-md  m-0">
                <Button
                  variant="ghost"
                  className="m-0 w-full rounded-md text-sm"
                >
                  Details
                </Button>
              </MenuItem>
            </Menu>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-zinc-900 w-10 h-10 flex border-b border-b-white border-opacity-10 items-center justify-center rounded-md ">
              <FaUser size={20} />
            </div>
            <p className="font-medium text-nowrap">Total Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold">23,234</p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-nowrap">
              <span className="text-green-300 flex items-center gap-2">
                <FaArrowTrendUp /> +728
              </span>{" "}
              vs last week
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 p-4  border-b border-b-white border-opacity-10 bg-zinc-950 rounded-md relative grow pr-[4rem] max-[308px]:pr-4">
          <div className=" absolute top-4 right-4 max-[308px]:top-1/2 max-[308px]:-translate-y-1/2">
            <Button
              className="px-2 py-2"
              onClick={() => setMenuOpen1(true)}
              variant="ghost"
            >
              <BsThreeDotsVertical />
            </Button>
            <Menu
              isOpen={menuOpen1}
              onOpen={() => setMenuOpen1(true)}
              onClose={() => setMenuOpen1(false)}
              className="w-fit px-2 "
            >
              <MenuItem className="p-0 rounded-md  m-0">
                <Button
                  variant="ghost"
                  className="m-0 w-full rounded-md text-sm"
                >
                  Revenue
                </Button>
              </MenuItem>
            </Menu>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-zinc-900 w-10 h-10 flex border-b border-b-white border-opacity-10 items-center justify-center rounded-md ">
              <FaMoneyBill size={20} />
            </div>
            <p className="font-medium  text-nowrap">Total Revenue</p>
          </div>
          <div>
            <p className="text-3xl font-bold">$100k+</p>
          </div>
          <div>
            <p className="flex items-center gap-1  text-nowrap">
              <span className="text-green-300 flex items-center gap-2">
                <FaArrowTrendUp /> +$10k
              </span>{" "}
              vs last week
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 p-4  border-b border-b-white border-opacity-10 bg-zinc-950 rounded-md  relative grow pr-[4rem] max-[308px]:pr-4">
          <div className=" absolute top-4 right-4 max-[308px]:top-1/2 max-[308px]:-translate-y-1/2">
            <Button
              className="px-2 py-2"
              onClick={() => setMenuOpen2(true)}
              variant="ghost"
            >
              <BsThreeDotsVertical />
            </Button>
            <Menu
              isOpen={menuOpen2}
              onOpen={() => setMenuOpen2(true)}
              onClose={() => setMenuOpen2(false)}
              className="w-fit px-2 "
            >
              <MenuItem className="p-0 rounded-md  m-0">
                <Button
                  variant="ghost"
                  className="m-0 w-full rounded-md text-sm"
                >
                  Details
                </Button>
              </MenuItem>
            </Menu>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-zinc-900 w-10 h-10 flex border-b border-b-white border-opacity-10 items-center justify-center rounded-md ">
              <FaArrowTrendUp size={20} />
            </div>
            <p className="font-medium  text-nowrap">Bounce Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold">8%</p>
          </div>
          <div>
            <p className="flex items-center gap-1  text-nowrap">
              <span className="text-red-300 flex items-center gap-2">
                <FaArrowTrendDown /> +2%
              </span>{" "}
              vs last week
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const statspage = () => {
  return (
    <>
      <DocsSEO
        title="Stats Section - hextastudio/ui"
        description="Customizable Stats section with icons and dropdown menu"
        image="https://i.imgur.com/bTu72n5.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Stats Section"
            description="Customizable Stats section with icons and dropdown menu"
          />
          <DocsPreview className="p-4">
            <StatsWithIcon />
          </DocsPreview>
          <InstallationSteps
            imports={["Menu, MenuItem", "Button"]}
            component={["Menu", "Button"]}
          />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaMoneyBill, FaUser } from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const StatsWithIcon = () => {
  const [menuOpen0, setMenuOpen0] = useState(false);
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);

  return (
    <>
      <div className="flex justify-center gap-8 items-center flex-wrap">
        <div className="flex flex-col items-start gap-2 p-4  border-b border-b-white border-opacity-10 bg-zinc-950 rounded-md  relative grow pr-[4rem] max-[308px]:pr-4">
          <div className=" absolute top-4 right-4 max-[308px]:top-1/2 max-[308px]:-translate-y-1/2">
            <Button
              className="px-2 py-2"
              onClick={() => setMenuOpen0(true)}
              variant="ghost"
            >
              <BsThreeDotsVertical />
            </Button>
            <Menu
              isOpen={menuOpen0}
              onOpen={() => setMenuOpen0(true)}
              onClose={() => setMenuOpen0(false)}
              className="w-fit px-2 "
            >
              <MenuItem className="p-0 rounded-md  m-0">
                <Button
                  variant="ghost"
                  className="m-0 w-full rounded-md text-sm"
                >
                  Details
                </Button>
              </MenuItem>
            </Menu>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-zinc-900 w-10 h-10 flex border-b border-b-white border-opacity-10 items-center justify-center rounded-md ">
              <FaUser size={20} />
            </div>
            <p className="font-medium text-nowrap">Total Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold">23,234</p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-nowrap">
              <span className="text-green-300 flex items-center gap-2">
                <FaArrowTrendUp /> +728
              </span>{" "}
              vs last week
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 p-4  border-b border-b-white border-opacity-10 bg-zinc-950 rounded-md relative grow pr-[4rem] max-[308px]:pr-4">
          <div className=" absolute top-4 right-4 max-[308px]:top-1/2 max-[308px]:-translate-y-1/2">
            <Button
              className="px-2 py-2"
              onClick={() => setMenuOpen1(true)}
              variant="ghost"
            >
              <BsThreeDotsVertical />
            </Button>
            <Menu
              isOpen={menuOpen1}
              onOpen={() => setMenuOpen1(true)}
              onClose={() => setMenuOpen1(false)}
              className="w-fit px-2 "
            >
              <MenuItem className="p-0 rounded-md  m-0">
                <Button
                  variant="ghost"
                  className="m-0 w-full rounded-md text-sm"
                >
                  Revenue
                </Button>
              </MenuItem>
            </Menu>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-zinc-900 w-10 h-10 flex border-b border-b-white border-opacity-10 items-center justify-center rounded-md ">
              <FaMoneyBill size={20} />
            </div>
            <p className="font-medium  text-nowrap">Total Revenue</p>
          </div>
          <div>
            <p className="text-3xl font-bold">$100k+</p>
          </div>
          <div>
            <p className="flex items-center gap-1  text-nowrap">
              <span className="text-green-300 flex items-center gap-2">
                <FaArrowTrendUp /> +$10k
              </span>{" "}
              vs last week
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 p-4  border-b border-b-white border-opacity-10 bg-zinc-950 rounded-md  relative grow pr-[4rem] max-[308px]:pr-4">
          <div className=" absolute top-4 right-4 max-[308px]:top-1/2 max-[308px]:-translate-y-1/2">
            <Button
              className="px-2 py-2"
              onClick={() => setMenuOpen2(true)}
              variant="ghost"
            >
              <BsThreeDotsVertical />
            </Button>
            <Menu
              isOpen={menuOpen2}
              onOpen={() => setMenuOpen2(true)}
              onClose={() => setMenuOpen2(false)}
              className="w-fit px-2 "
            >
              <MenuItem className="p-0 rounded-md  m-0">
                <Button
                  variant="ghost"
                  className="m-0 w-full rounded-md text-sm"
                >
                  Details
                </Button>
              </MenuItem>
            </Menu>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-zinc-900 w-10 h-10 flex border-b border-b-white border-opacity-10 items-center justify-center rounded-md ">
              <FaArrowTrendUp size={20} />
            </div>
            <p className="font-medium  text-nowrap">Bounce Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold">8%</p>
          </div>
          <div>
            <p className="flex items-center gap-1  text-nowrap">
              <span className="text-red-300 flex items-center gap-2">
                <FaArrowTrendDown /> +2%
              </span>{" "}
              vs last week
            </p>
          </div>
        </div>
      </div>
    </>
  );
};`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default statspage;
