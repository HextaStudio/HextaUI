import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Sidebar } from "./Sidebar";

import gsap from "gsap";
import Link from "next/link";
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
        <main className="flex flex-wrap justify-center flex-grow p-[5rem] mt-[5rem] ml-[17em] max-[900px]:ml-0 max-[900px]:mt-[5rem] max-[600px]:px-[2rem] relative">
          <div className="w-full ml-auto h-[2.5rem] bg-gradient-to-r from-green-900 to-teal-900  absolute top-[-0.6rem] left-0 right-0 flex items-center justify-center  max-[598px]:justify-end max-sm:hidden p-4">
            <p className="font-medium flex items-center gap-3  p-4">
              hextastudio/ui needs your support to stay running 🫶{" "}
              <Link
                className="underline flex items-center gap-1"
                href="https://buy.stripe.com/7sI1693bkdcXayc8wE"
              >
                Help us
              </Link>
            </p>
          </div>
          {children}
        </main>
        <span className="w-[10rem] h-[40rem] opacity-50 blur-[10rem] fixed right-10 top-[10rem] -rotate-45 bg-gradient-to-t from-rose-500 to-blue-700 z-[0]"></span>
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
