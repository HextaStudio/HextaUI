import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar docs={false} />
      <main>{children}</main>
      <Footer docs={false} />
    </>
  );
};
