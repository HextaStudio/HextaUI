import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Sidebar } from "./Sidebar";

export const DocsLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex gap-10">
        <Sidebar />
        <main className="flex-grow p-10">{children}</main>
      </div>
      <Footer />
    </>
  );
};
