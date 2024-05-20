import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

const OTP_LENGTH = 6;

interface OTPProps {
  setValue: (value: string) => void;
}

export const OTP = ({ setValue }: OTPProps) => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    const regex = /^[0-9]$/; // Only allow numbers
    if (regex.test(value) || value === "") {
      newOtp[index] = value;
      setOtp(newOtp);
    }

    if (value && index < OTP_LENGTH - 1 && regex.test(value)) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && !event.currentTarget.value && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    } else if (event.key === "Enter") {
      handleOTPSubmit();
    }
  };

  const handleOTPSubmit = () => {
    const otpValue = otp.join("");
    if (otpValue.length === OTP_LENGTH && !/[^0-9]/.test(otpValue)) {
      setValue(otpValue);
      setError("");
    } else {
      setError("Please enter a valid OTP.");
    }
  };

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, OTP_LENGTH);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        {otp.map((value, index) => (
          <div key={index} className="flex items-center">
            <input
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => {
                inputRefs.current[index] = el!;
              }}
              className={cn(
                "w-10 h-12 text-center text-lg font-semibold border border-zinc-900 focus:outline-none focus:border-2 focus:border-white bg-zinc-950",
                `${index === 0 && "rounded-l-xl"}`,
                `${index === 5 && "rounded-r-xl"}`
              )}
            />
            {index === 2 && (
              <span className="mx-3 font-black opacity-50">-</span>
            )}
          </div>
        ))}
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};
