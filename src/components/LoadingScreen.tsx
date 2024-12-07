import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader } from "./hexta-ui/Loader";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Track page load progress
    const calculateProgress = () => {
      const resources = performance.getEntriesByType("resource");
      const total = resources.length;
      const loaded = resources.filter((r) => r.duration > 0).length;
      return Math.min(100, Math.round((loaded / total) * 100));
    };

    const updateProgress = () => {
      setProgress(calculateProgress());
    };

    // Listen for resource load events
    window.addEventListener("load", updateProgress);
    const observer = new PerformanceObserver(updateProgress);
    observer.observe({ entryTypes: ["resource"] });

    return () => {
      window.removeEventListener("load", updateProgress);
      observer.disconnect();
    };
  }, []);

  // Hide loading screen when done
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      className="fixed h-[100dvh] inset-0 flex items-center justify-center bg-zinc-950 z-[99999999]"
    >
      <div className="flex flex-col items-center gap-4">
        <small className="flex items-center gap-4">
          {" "}
          <Loader size={20} /> Loading website content
        </small>
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-white/60">{progress}%</p>
      </div>
    </motion.div>
  );
};
