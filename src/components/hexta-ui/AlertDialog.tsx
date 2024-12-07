import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

interface AlertDialogProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
  closeOnOutsideClick?: boolean;
  closeOnEsc?: boolean;
  position?: "center" | "top" | "bottom";
  size?: "sm" | "md" | "lg";
  showOverlay?: boolean;
  overlayClassName?: string;
}

export const AlertDialog = ({
  isOpen,
  onClose,
  className,
  children,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  position = "center",
  size = "md",
  showOverlay = true,
  overlayClassName,
  ...rest
}: AlertDialogProps) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && closeOnEsc && onClose) {
        onClose();
      }
    };

    if (isOpen && closeOnEsc) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, closeOnEsc, onClose]);

  const handleOutsideClick = () => {
    if (closeOnOutsideClick && onClose) {
      onClose();
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "items-start pt-20";
      case "bottom":
        return "items-end pb-20";
      default:
        return "items-center";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "max-w-[20rem]";
      case "lg":
        return "max-w-[40rem]";
      default:
        return "max-w-[30rem]";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed inset-0 z-[9999] flex justify-center",
            getPositionClasses(),
            showOverlay && "bg-black/80",
            overlayClassName
          )}
          onClick={handleOutsideClick}
        >
          <div
            className={cn(
              "flex flex-col gap-3 p-6 mx-4 bg-black border rounded-lg shadow-lg",
              "border-zinc-800",
              getSizeClasses(),
              className
            )}
            onClick={(e) => e.stopPropagation()}
            {...rest}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface AlertDialogTitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  className?: string;
}

export const AlertDialogTitle = ({
  children,
  className,
  ...rest
}: AlertDialogTitleProps) => {
  return (
    <p
      className={cn("text-2xl font-bold tracking-tight leading-6", className)}
      {...rest}
    >
      {children}
    </p>
  );
};

interface AlertDialogContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  className?: string;
}

export const AlertDialogContent = ({
  children,
  className,
  ...rest
}: AlertDialogContentProps) => {
  return (
    <p className={cn("text-[14px] opacity-80", className)} {...rest}>
      {children}
    </p>
  );
};

interface AlertDialogButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  action: () => void;
  variant?: "primary" | "secondary";
}

export const AlertDialogButton = ({
  label,
  action,
  variant = "primary",
  ...rest
}: AlertDialogButtonProps) => {
  const primaryClasses = `grow  text-center items-center  justify-center px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90`;
  const secondaryClasses =
    "grow  text-center items-center  justify-center px-[20px] py-[8px] bg-zinc-950 bg-opacity-20 border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90";

  return (
    <button
      className={variant === "primary" ? primaryClasses : secondaryClasses}
      onClick={action}
      {...rest}
    >
      {label}
    </button>
  );
};

interface AlertDialogButtonsProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttons: {
    label: string;
    action: () => void;
    variant?: "primary" | "secondary";
  }[];
}

export const AlertDialogButtons = ({
  buttons,
  ...rest
}: AlertDialogButtonsProps) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {buttons.map((button, index) => (
        <AlertDialogButton
          {...rest}
          key={index}
          label={button.label}
          action={button.action}
          variant={button.variant}
        />
      ))}
    </div>
  );
};
