import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import React from "react";
import { PaperTexture } from "./PaperTexture";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-black">
      <PaperTexture />
      <Navbar docs={false} />
      <main>{children}</main>
      <Footer docs={false} />
    </div>
  );
};
