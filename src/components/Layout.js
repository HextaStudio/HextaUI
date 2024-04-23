import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ docs, children }) => {
  return (
    <>
      <div className="fixed top-0 z-50 w-full border-b-zinc-800">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};
