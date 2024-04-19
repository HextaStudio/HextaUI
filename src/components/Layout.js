import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Layout = ({ docs, children }) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    gsap.to(navbarRef.current, {
      background: "#000000",
      borderBottom: "1px solid #ffffff20",
      scrollTrigger: {
        scrub: true,
        trigger: navbarRef.current,
        start: "top",
      },
    });
  }, []);
  return (
    <>
      <div
        className="fixed top-0 z-50 w-full border-b-zinc-800"
        style={{
          borderBottom: "1px solid #ffffff00",
        }}
        ref={navbarRef}
      >
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};
