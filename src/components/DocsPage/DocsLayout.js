import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Sidebar } from "./Sidebar";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef } from "react";

export const DocsLayout = ({ children }) => {
  const navbarRef = useRef(null);
  const sidebarRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const pinSidebar = ScrollTrigger.create({
      trigger: sidebarRef.current,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

    return () => {
      pinSidebar.kill();
    };
  }, []);

  return (
    <>
      <div ref={navbarRef}>
        <Navbar />
      </div>
      <div className="flex justify-center">
        <aside ref={sidebarRef} className="pt-16">
          <Sidebar />
        </aside>
        <main className="flex flex-wrap justify-center flex-grow p-10 pt-24">
          {children}
        </main>
      </div>
      <div
        className="footer-div"
        ref={footerRef}
        style={{
          display: "flex",
          marginLeft: "auto",
        }}
      >
        <Footer docs />
      </div>
    </>
  );
};
