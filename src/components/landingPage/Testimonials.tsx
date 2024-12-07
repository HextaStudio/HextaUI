import { motion } from "framer-motion";
import { Tweet } from "react-tweet";
import { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";

const tweetIds = [
  "1782653978683072684",
  "1782680701067776207",
  "1787135072392364394",
  "1787091751997440143",
  "1786800646433423488",
  "1787163815987007863",
  "1785345519033684406",
];

export const Testimonials = () => {
  const [columns, setColumns] = useState<string[][]>([[], [], []]);

  useEffect(() => {
    const newColumns: string[][] = [[], [], []];
    tweetIds.forEach((id, index) => {
      const columnIndex = index % 3;
      newColumns[columnIndex].push(id);
    });
    setColumns(newColumns);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden max-w-[80rem] w-[95%] mx-auto ">
      {/* Background gradient effects */}
      <div className="absolute -z-10 top-0 left-0 w-[800px] h-[600px] bg-purple-500/10 blur-[120px] rotate-12" />
      <div className="absolute -z-10 bottom-0 right-0 w-[600px] h-[400px] bg-blue-500/10 blur-[120px] -rotate-12" />

      <div className="max-w-7xl mx-auto px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm inline-block mb-4">
            Community Love 💙
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 leading-[2.3rem] md:leading-[2.5rem] py-2">
            Loved by Developers
          </h2>
          <p className="text-lg text-white/60">
            Join developers building amazing projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-6">
              {column.map((tweetId, index) => (
                <motion.div
                  key={tweetId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white bg-opacity-5 backdrop-blur-xl rounded-xl px-4 border-2 border-slate-400/10 transition-all duration-300 hover:border-slate-400/20 hover:-translate-y-1 relative group">
                    <div className="relative z-10">
                      <Tweet id={tweetId} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://twitter.com/intent/tweet?url=&text=%40nott_preett"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-[#151515] hover:bg-[#202020] rounded-xl border-2 border-slate-400/10 transition-all text-sm"
          >
            Share Your Experience
            <FaTwitter className="text-[#1DA1F2] transition-transform group-hover:rotate-12" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
