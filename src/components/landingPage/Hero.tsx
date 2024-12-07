import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FaGithub, FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);

  return (
    <div ref={targetRef} className="min-h-[150vh] relative">
      <motion.section
        style={{ opacity, y }}
        className="fixed w-full min-h-screen flex items-center justify-center py-[8rem]"
      >
        {/* can you add gradient to the background of the section */}
        <div className="relative max-w-7xl mx-auto py-[4rem] px-4 bg-zinc-950 rounded-xl overflow-hidden">
          {/* Enhanced gradient effects with more vibrant colors */}
          <div className="absolute inset-0 bg-gradient-to-bl from-indigo-600 via-fuchsia-600 to-cyan-500 opacity-40 blur-[120px]"></div>
          <div className="text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex justify-center space-x-2 mb-6">
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  New Components Available!
                </span>
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold 
                mb-8 bg-clip-text text-transparent 
                bg-gradient-to-b from-white via-white to-white/70 leading-[3.2rem] md:leading-[4.5rem]"
              >
                Build Stunning Websites Without The Hassle
              </h1>
              <p className="md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
                Modern, responsive, and customizable UI components for Next.js.
                Copy, paste, and make it your own.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                href="/docs/components"
                className="group px-8 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition-all flex items-center gap-2"
              >
                Browse Components
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://github.com/HextaStudio/HextaUI"
                className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2"
              >
                <FaGithub className="group-hover:rotate-12 transition-transform" />
                Star on GitHub
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
