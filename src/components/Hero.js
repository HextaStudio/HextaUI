import Link from "next/link";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
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
      <div className="flex flex-col items-center justify-center gap-5 py-56 overflow-x-hidden text-center px-7 hero step1 max-sm:py-40">
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
        <div className="hero-content">
          <h1 className="max-w-4xl font-extrabold tracking-tighter text-7xl bricolage-fonts leading-15 max-sm:text-5xl max-sm:leading-none ">
            Gorgeous Web Components, Zero Effort
          </h1>
          <p className="max-w-2xl py-4 mx-auto text-sm leading-5 opacity-80">
            Elevate your projects with stunning, modern components. Simply copy
            and paste these responsive, beautiful elements for instant
            awesomeness.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 hero-buttons">
          <Link href="/components" className="primary-button grow">
            Browse Components
          </Link>
          <Link href="/" className="secondary-button grow">
            Pricing
          </Link>
        </div>
      </div>
    </>
  );
};
