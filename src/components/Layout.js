import { Sidebar } from "./DocsPage/Sidebar";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ docs, children }) => {
  return (
    <>
      <Navbar />
      {docs && <Sidebar />}
      {children}
      <Footer />
    </>
  );
};
