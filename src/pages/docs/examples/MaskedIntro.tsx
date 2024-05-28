import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

import { motion } from "framer-motion";

import Image from "next/image";
import React from "react";

const MaskedIntro = () => {
  return (
    <>
      <section>
        <motion.div
          initial={{
            clipPath: "polygon(0% 0%, 0% 0%, 500% 500%, 0% 0%)",
            scale: 1.3,
          }}
          animate={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1,
          }}
          transition={{ duration: 1, ease: [0.87, 0, 0.13, 1], delay: 0.2 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background-image"
            width={1920}
            height={1080}
            objectFit="cover"
            className="h-screen w-screen brightness-90"
            loading="eager"
          />
        </motion.div>
        <div className="z-[9999]">
          <motion.p
            className="p1 text-9xl   max-[660px]:text-8xl max-[484px]:text-7xl max-[350px]:absolute text-center flex items-center justify-center font-bold absolute bottom-[50%] "
            initial={{ left: "50%" }}
            animate={{ left: "13.5%" }}
            transition={{ duration: 1, ease: [0.87, 0, 0.13, 1], delay: 0.2 }}
          >
            Hello
          </motion.p>
          <motion.p
            className="p1 text-9xl   max-[660px]:text-8xl max-[484px]:text-7xl max-[350px]:absolute text-center flex items-center justify-center font-bold absolute top-[50%]  "
            initial={{ right: "50%" }}
            animate={{ right: "9%" }}
            transition={{ duration: 1, ease: [0.87, 0, 0.13, 1], delay: 0.2 }}
          >
            World
          </motion.p>
        </div>
      </section>
    </>
  );
};

const animatedMaskedIntroPage = () => {
  return (
    <>
      <DocsSEO
        title="Masked Intro - hextastudio/ui"
        description="An example section with a mask reveal animation"
        image="https://i.imgur.com/zrddM4u.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Masked Intro"
            description="An example section with a mask reveal animation"
          />
          <DocsPreview className="h-[30rem]">
            <MaskedIntro />
          </DocsPreview>
          <CodeBlock
            free
            lang="tsx"
            filename="tsx"
            code={`import { motion } from "framer-motion";

import Image from "next/image";
import React from "react";

const MaskedIntro = () => {
  return (
    <>
      <section>
        <motion.div
          initial={{
            clipPath: "polygon(0% 0%, 0% 0%, 500% 500%, 0% 0%)",
            scale: 1.3,
          }}
          animate={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1,
          }}
          transition={{ duration: 1, ease: [0.87, 0, 0.13, 1], delay: 0.2 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background-image"
            width={1920}
            height={1080}
            objectFit="cover"
            className="h-screen w-screen brightness-90"
          />
        </motion.div>
        <div className="z-[9999]">
          <motion.p
            className="p1 text-9xl   max-[660px]:text-8xl max-[484px]:text-7xl max-[350px]:absolute text-center flex items-center justify-center font-bold absolute bottom-[50%] "
            initial={{ left: "50%" }}
            animate={{ left: "13.5%" }}
            transition={{ duration: 1, ease: [0.87, 0, 0.13, 1], delay: 0.2 }}
          >
            Hello
          </motion.p>
          <motion.p
            className="p1 text-9xl   max-[660px]:text-8xl max-[484px]:text-7xl max-[350px]:absolute text-center flex items-center justify-center font-bold absolute top-[50%]  "
            initial={{ right: "50%" }}
            animate={{ right: "9%" }}
            transition={{ duration: 1, ease: [0.87, 0, 0.13, 1], delay: 0.2 }}
          >
            World
          </motion.p>
        </div>
      </section>
    </>
  );
};`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default animatedMaskedIntroPage;
