import { Layout } from "@/components/Layout";
import { NextSeo } from "next-seo";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import PricingCards from "@/components/PricingCards";

const pricing = () => {
  const whiteRayRef = useRef(null);

  useEffect(() => {
    gsap.to(whiteRayRef.current, {
      transform: "translateY(0) rotate(-70deg)",
      delay: 1,
      duration: 2,
      ease: "circ.out",
    });
  }, []);

  return (
    <>
      <NextSeo
        title="Pricing ✨ - HextaUI"
        description="Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness."
        openGraph={{
          url: "https://ui.hextastudio.in/pricing",
          title: "Pricing ✨ - HextaUI",
          description:
            "Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness.",
          images: [
            {
              url: "https://i.imgur.com/xlCPzQc.png",
              width: 1920,
              height: 1080,
              alt: "Pricing ✨ - HextaUI",
              type: "image/png",
            },
          ],
          siteName: "Pricing ✨ - HextaUI",
        }}
      />
      <Layout>
        <main className="flex flex-col items-center justify-center gap-5 pt-[10rem] pb-56 overflow-x-hidden text-center px-7 hero step1 max-sm:py-40 relative">
          <div>
            <div
              className="absolute w-20 -rotate-45 opacity-45 left-16 blur-4xl white-ray"
              ref={whiteRayRef}
              style={{
                height: "40rem",
                top: "-4rem",
                transform: "rotate(-70deg) translateY(-30rem)",
                background: "white",
              }}
            ></div>
            <h1 className="max-w-5xl h1 max-sm:text-4xl max-sm:leading-[2.3rem]">
              Need custom components or websites? We've got you covered
            </h1>
            <p className="text-sm opacity-70">Simple pricing, no hidden fees</p>
          </div>
          <div>
            <PricingCards />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default pricing;
