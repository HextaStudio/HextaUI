import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Sidebar } from "./Sidebar";

export const DocsLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <Sidebar />
        <main className="flex justify-center flex-grow p-10">{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
