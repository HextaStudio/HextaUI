import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Sidebar } from "./Sidebar";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DocsLayoutProps {
  children: React.ReactNode;
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center">
        <aside className="pt-16">
          <Sidebar />
        </aside>
        <main className="flex flex-wrap justify-center flex-grow p-[5rem] mt-[2rem] ml-[18rem] max-[900px]:ml-0 max-[900px]:mt-[4rem] max-[600px]:px-[2rem]">
          {children}
        </main>
      </div>
      <div
        className="footer-div"
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
