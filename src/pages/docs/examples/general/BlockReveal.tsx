import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const BlockReveal = ({
  width = 20,
  height = 20,
  boxColor = "#86ff82",
}: {
  width?: number;
  height?: number;
  boxColor?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElement =
      containerRef.current ||
      (document.querySelector("#container") as HTMLDivElement);
    const divWidth = width;
    const divHeight = height;

    const createDivs = () => {
      if (!containerElement) return;

      const containerWidth = containerElement.offsetWidth;
      const containerHeight = containerElement.offsetHeight;

      const numDivsX = Math.ceil(containerWidth / divWidth);
      const numDivsY = Math.ceil(containerHeight / divHeight);

      for (let i = 0; i < numDivsX * numDivsY; i++) {
        const div = document.createElement("div");
        div.classList.add("BoxDiv");
        div.style.width = `${divWidth}px`;
        div.style.height = `${divHeight}px`;
        div.style.backgroundColor = boxColor;
        div.style.display = "inline-block";
        div.style.margin = "0";
        div.style.padding = "0";
        containerElement.appendChild(div);
      }
    };

    createDivs();

    const handleResize = () => {
      containerElement.innerHTML = "";
      createDivs();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, height, boxColor]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current.children, {
        opacity: 0,
        stagger: {
          amount: 3,
          from: "random",
        },
        duration: 0,
        ease: "none",
      });
    }
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        display: "none",
        delay: 3.1,
      });
    }
  }, []);

  return (
    <>
      <div
        className="w-full h-[40rem] overflow-hidden absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
        id="container"
        ref={containerRef}
        style={{ fontSize: "0", lineHeight: "0" }}
      ></div>
    </>
  );
};

const blockreveal = () => {
  return (
    <>
      <DocsSEO
        title="Block Reveal - hextastudio/ui"
        description="A block reveal animation effect using GSAP."
        image="https://i.imgur.com/ULosOkY.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Block Reveal"
            description="A block reveal animation effect using GSAP."
          />
          <DocsPreview className="h-[40rem] bg-zinc-950">
            <BlockReveal width={101} height={101} boxColor="#a17df5" />
            <p className="text-center font-bold text-5xl w-min leading-[3rem]">
              HELLO THERE!
            </p>
          </DocsPreview>
          <CodeBlock lang="bash" filename="bash" code={`npm install gsap`} />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            code={`import gsap from "gsap";
import { useEffect, useRef } from "react";

const BlockReveal = ({
  width = 20,
  height = 20,
  boxColor = "#86ff82",
}: {
  width?: number;
  height?: number;
  boxColor?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElement =
      containerRef.current ||
      (document.querySelector("#container") as HTMLDivElement);
    const divWidth = width;
    const divHeight = height;

    const createDivs = () => {
      if (!containerElement) return;

      const containerWidth = containerElement.offsetWidth;
      const containerHeight = containerElement.offsetHeight;

      const numDivsX = Math.ceil(containerWidth / divWidth);
      const numDivsY = Math.ceil(containerHeight / divHeight);

      for (let i = 0; i < numDivsX * numDivsY; i++) {
        const div = document.createElement("div");
        div.classList.add("BoxDiv");
        div.style.width = \`\${divWidth}px\`;
        div.style.height = \`\${divHeight}px\`;
        div.style.backgroundColor = boxColor;
        div.style.display = "inline-block";
        div.style.margin = "0";
        div.style.padding = "0";
        containerElement.appendChild(div);
      }
    };

    createDivs();

    const handleResize = () => {
      containerElement.innerHTML = "";
      createDivs();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, height, boxColor]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current.children, {
        opacity: 0,
        stagger: {
          amount: 3,
          from: "random",
        },
        duration: 0,
        ease: "none",
      });
    }
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        display: "none",
        delay: 3.1,
      });
    }
  }, []);

  return (
    <>
      <div
        className="w-full h-[40rem] overflow-hidden absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
        id="container"
        ref={containerRef}
        style={{ fontSize: "0", lineHeight: "0" }}
      ></div>
    </>
  );
};`}
          />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            title="Usage"
            code={`<BlockReveal width={101} height={101} boxColor="#a17df5" />
<p className="text-center font-bold text-5xl w-min leading-[3rem]">
  HELLO THERE!
</p>`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default blockreveal;
