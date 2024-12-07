import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import React from "react";
import { LoadingScreen } from "./LoadingScreen";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LoadingScreen />
      <div className=" paper-texture relative min-h-screen bg-black">
        <Navbar docs={false} />
        <main>{children}</main>
        <Footer docs={false} />
      </div>
    </>
  );
};
