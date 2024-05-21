import React, { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return clsx(twMerge(...args));
};

interface StepperProps {
  steps: { label: string; content: string }[];
  activeStep: number;
  className?: string;
}

export const Stepper = ({ steps, activeStep, className }: StepperProps) => {
  const isValidStep = activeStep >= 0 && activeStep < steps.length;
  const content = isValidStep ? steps[activeStep].content : "Invalid step";

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between mb-4 gap-7">
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center flex-col relative gap-2",
              index !== steps.length - 1 &&
                "after:content-[''] after:absolute after:w-full after:h-1 after:border-t after:border-gray-300 after:mt-2 after:left-[50%] after:translate-x-[40%] after:top-[15%]",
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full font-semibold z-10",
                activeStep === index
                  ? "bg-blue-500 text-white"
                  : index < activeStep
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600",
              )}
            >
              {index + 1}
            </div>
            <span className="text-sm font-medium text-center text-gray-600">
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="py-1 text-center opacity-90">{content}</div>
    </div>
  );
};
