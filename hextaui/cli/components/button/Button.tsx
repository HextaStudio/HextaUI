import React from "react";

const buttonVariants = {
  primary: "bg-white border border-zinc-900 text-black",
  secondary: "bg-zinc-900 border border-zinc-900 text-white",
  info: "bg-blue-400 border border-blue-900 text-black",
  success: "bg-green-400 border border-green-900 text-black",
  failure: "bg-red-700 border border-red-900 text-white",
  ghost: "text-white hover:bg-zinc-900",
  link: "text-white hover:underline underline-offset-1",
};

export const Button = ({ children, variant, className, ...props }) => {
  const variantClass = buttonVariants[variant] || "";

  return (
    <button
      className={`px-[20px] py-[8px] rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
