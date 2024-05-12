import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface AlertDialogProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
  className?: string;
}

export const AlertDialog = ({
  title,
  message,
  onConfirm,
  onCancel,
  isOpen,
  className,
}: AlertDialogProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-screen h-screen bg-black alert-dialog-backdrop z-[9999] bg-opacity-70">
          <div
            className={cn(
              "flex flex-col gap-3 px-10 bg-black border border-b-2 rounded-lg alert-dialog p-7 border-zinc-900",
              className
            )}
          >
            <div>
              <p className="text-2xl font-bold tracking-tight">{title}</p>
              <p className="text-sm opacity-80">{message}</p>
            </div>
            <div className="flex gap-3">
              <button
                className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
                onClick={onConfirm}
              >
                Continue
              </button>
              <button
                className="px-[20px] py-[8px] bg-zinc-950 bg-opacity-20 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
