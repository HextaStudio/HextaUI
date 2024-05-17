import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <section
        className="flex items-center justify-center flex-col pt-[14rem] px-[1rem]relative max-w-full  overflow-hidden"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className="grid-lines absolute top-[-34rem] -z-0 opacity-[75%] fading-out"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(71deg)",
          }}
        ></div>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-7xl font-bold tracking-tight max-w-[60rem] max-[482px]:text-6xl max-[372px]:text-5xl relative">
            Level up your Design Game with HextaUI
          </h1>
          <p className="text-md opacity-80 max-w-[40rem] w-full relative">
            Easy to use copy and paste components in your website and make your
            website 10x stunning and modern.
          </p>
          <div className="scale-[1.1] flex gap-3 flex-wrap p-2">
            <Link href="#" className="rounded-md primary-button grow">
              Get Started
            </Link>
            <Link href="#" className="rounded-md secondary-button grow">
              Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
