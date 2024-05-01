import React from "react";

export const Buttons = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4 m-5">
        {/* primary */}
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Primary
        </button>

        {/* secondary */}
        <button className="px-[20px] py-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Secondary
        </button>

        {/* info */}
        <button className="px-[20px] py-[8px] bg-blue-400  border border-blue-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Info
        </button>

        {/* Success */}
        <button className="px-[20px] py-[8px] bg-green-400   border border-green-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Success
        </button>

        {/* Fail */}
        <button className="px-[20px] py-[8px] bg-red-700  border border-red-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Failure
        </button>

        {/* Ghost */}
        <button className="px-[20px] py-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-900 transition-all duration-[0.4s]">
          Ghost
        </button>

        {/* Link */}
        <button className="px-[20px] py-[8px]  text-white rounded-lg flex items-center font-[600] text-[14px] hover:underline underline-offset-1 transition-all duration-[0.4s]">
          Link
        </button>
      </div>
    </>
  );
};
