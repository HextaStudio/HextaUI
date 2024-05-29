import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

export const Hero = () => {
  return (
    <>
      <div className="left-1/2 -translate-x-1/2 hero-glow  fading-out-2 absolute top-0"></div>
      <section
        className="flex items-center justify-center flex-col pt-[12rem] px-[1rem] relative max-w-full  overflow-hidden backdrop-blur-[6rem] z-[999]"
        style={{
          perspective: "1000px",
        }}
      >
        {/* <div
          className="grid-lines absolute top-[-34rem] -z-0 opacity-[75%] fading-out"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(71deg)",
          }}
        ></div> */}
        <div className="flex flex-col items-center justify-center gap-4 text-center px-4">
          <h1 className="text-7xl font-bold tracking-tight max-w-[60rem] max-[482px]:text-6xl max-[372px]:text-5xl relative hero-heading">
            Modern & Stunning Website Templates and Examples
          </h1>
          <p className="text-md opacity-80 max-w-[40rem] w-full relative">
            Easy to use copy and paste components for your website. Make your
            website 10x more stunning and modern.
          </p>
          <div className="flex flex-wrap gap-3 p-2 z-[99]">
            <Link
              href="/docs/components/layout/Accordion"
              className="rounded-md primary-button grow"
            >
              Browse Components
            </Link>
            <Link
              href="https://pro.ui.hextastudio.in/pricing"
              className="rounded-md secondary-button grow"
            >
              Pricing
            </Link>
          </div>{" "}
          <div className="flex gap-4 opacity-80">
            <FaReact size={24} />
            <SiTypescript size={24} />
            <RiTailwindCssFill size={24} />
            <TbBrandFramerMotion size={24} />
          </div>
        </div>
      </section>
    </>
  );
};
