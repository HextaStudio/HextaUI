import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{ left: cursorPosition.x, top: cursorPosition.y }}
      transition={{
        damping: 28,
        stiffness: 500,
        ease: "linear",
        duration: 0,
      }}
      className="cursor -translate-x-1/2 animate-pulse -translate-y-1/2 fixed w-[14rem] h-[5rem] bg-gradient-to-r from-blue-400 to-pink-900 rounded-full blur-3xl opacity-50"
    ></motion.div>
  );
};

const customcursor = () => {
  return (
    <>
      <DocsSEO
        title="Custom Cursor"
        description="A cursor follows the mouse position and has a gradient background."
        image="https://i.imgur.com/wpuOT6T.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Custom Cursor"
            description="A cursor follows the mouse position and has a gradient background."
          />
          <DocsPreview className="overflow-hidden">
            <CustomCursor />
          </DocsPreview>
          <CodeBlock
            lang="tsx"
            free
            filename="tsx"
            code={`import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{ left: cursorPosition.x, top: cursorPosition.y }}
      transition={{
        damping: 28,
        stiffness: 500,
        ease: "linear",
        duration: 0,
      }}
      className="cursor -translate-x-1/2 animate-pulse -translate-y-1/2 fixed w-[14rem] h-[5rem] bg-gradient-to-r from-blue-400 to-pink-900 rounded-full blur-3xl opacity-50"
    ></motion.div>
  );
};`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default customcursor;
