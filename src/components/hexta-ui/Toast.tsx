import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface ToastProps {
  text: string;
  description: string;
  showToast: boolean;
  onCancel: () => void;
  className?: string;
}

export const Toast = ({
  text,
  description,
  showToast,
  onCancel,
  className,
}: ToastProps) => {
  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          key="toast"
          initial={{ translateY: 100, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: 100, opacity: 0 }}
          className={cn(
            "flex items-center justify-between h-fit py-3 px-5 m-4 rounded-lg border-b-2 gap-3 border border-zinc-800 bg-zinc-950 fixed bottom-0 right-0 z-[99999999]",
            className,
          )}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col ">
              <p className="text-[15px] font-medium items-center flex tracking-normal opacity-90">
                {text}
              </p>
              <small className="text-[12px] opacity-80">{description}</small>
            </div>
            <div>
              <button
                className="px-[8px] py-[2px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] "
                onClick={onCancel}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.4 17L7 15.6l3.6-3.6L7 8.425l1.4-1.4l3.6 3.6l3.575-3.6l1.4 1.4l-3.6 3.575l3.6 3.6l-1.4 1.4L12 13.4z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
