import Image from "next/image";

import bento3 from "../../public/assets/bento-3.png";
import bento2 from "../../public/assets/bento-2.png";
import bento1 from "../../public/assets/bento-1.png";

export const BentoGrid = () => {
  return (
    <>
      <main>
        <div className="grid features-bento ">
          <div className="feature-bento-1 p-[1rem] step1-bg flex items-center bg-[#101010] rounded-3xl corner-border">
            <div className="w-[70%]  max-[620px]:w-full  max-[620px]:p-[1rem]">
              <h2 className="text-5xl font-bold leading-[2.6rem] tracking-tighter max-[620px]:text-3xl max-[620px]:text-left max-[620px]:leading-[2rem]">
                Awesome Components
              </h2>
              <p className="text-[14px] opacity-75 pt-[20px] max-[620px]:text-left max-[620px]:pt-2">
                Copy and paste components like this in your own website and
                customize with your own style without any efforts.
              </p>
            </div>
            <div className="">
              <Image
                className="w-full h-auto max-w-full rounded-3xl opacity-90"
                src={bento2}
                width={1920}
                height={1080}
                loading="lazy"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="feature-bento-2 p-[1rem] flex  step1-bg items-center flex-col-reverse bg-[#101010] rounded-3xl corner-border gap-[1rem]">
            <div className="p-[1rem]">
              <h2 className="text-3xl font-bold tracking-tighter text-left leading-[2rem] ">
                Popular Choices
              </h2>
              <p className="text-[14px] opacity-75 text-left max-[620px]:pt-2">
                HextaUI uses popular libraries like Tailwind CSS, Framer Motion.
              </p>
            </div>
            <div className="max-w-[30rem] flex-grow">
              <Image
                className="w-full h-auto max-w-full"
                src={bento3}
                width={1920}
                height={1080}
                loading="lazy"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="feature-bento-3 p-[1rem] flex step1-bg items-center flex-col-reverse bg-[#101010] rounded-3xl corner-border gap-[1rem]">
            <div className="p-[1rem]">
              <h2 className="text-3xl font-bold tracking-tighter text-left leading-[2rem] ">
                Copy and Paste
              </h2>
              <p className="text-[14px] opacity-75 text-left max-[620px]:pt-2">
                Just copy and paste the awesome components in your website, it's
                that simple.
              </p>
            </div>
            <div className="max-w-[30rem] flex-grow">
              <Image
                className="w-full h-auto max-w-full"
                src={bento1}
                width={1920}
                height={1080}
                loading="lazy"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
