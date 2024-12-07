import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket, FaGithub } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 relative">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 bg-[#101010] rounded-3xl border border-white/10 p-8"
          >
            <div className="flex flex-col items-center text-center gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 max-w-2xl"
              >
                <h2 className="md:text-6xl py-2 text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                  Start Building Your Next Project Today
                </h2>
                <p className="text-lg text-white/60">
                  Join thousands of developers creating stunning websites with
                  our components
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  href="docs/components/layout/Accordion"
                  className="group relative px-8 py-3 bg-white rounded-xl text-black font-medium hover:opacity-90 transition-all flex items-center gap-2 grow justify-center"
                >
                  <FaRocket className="transition-transform group-hover:-translate-y-1" />
                  Get Started
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-2 py-0.5 rounded-full"
                  >
                    Free
                  </motion.span>
                </Link>
                <Link
                  href="https://github.com/HextaStudio/HextaUI"
                  className="group px-8 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all flex items-center gap-2 grow justify-center"
                >
                  <FaGithub className="transition-transform group-hover:rotate-12" />
                  Star on GitHub
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
