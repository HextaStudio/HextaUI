import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import React from "react";

import { NextSeo } from "next-seo";
import { InstallationSteps } from "@/components/utils/InstallationSteps";
import { OTP } from "@/components/hexta-ui/InputOTP";
import { useState } from "react";
import Toast from "@/components/hexta-ui/Toast";
import { DocsHeader } from "@/components/utils/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const otp = () => {
  const [otpValue, setOtpValue] = useState("");
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handleOTPChange = (value: string) => {
    setOtpValue(value);
    toggleToast();
    console.log("OTP Value:", value);
  };

  return (
    <>
      <DocsSEO
        title="Input OTP - HextaUI ✨"
        description="An Input component for OTP."
        image="https://i.imgur.com/3RiTZRk.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Input OTP"
            description="An Input component for OTP."
          />
          <div className="flex flex-col gap-4 py-10 preview">
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[10rem]">
              <OTP setValue={handleOTPChange} />
            </div>
          </div>
          <InstallationSteps component="InputOTP" />
          <CodeBlock
            lang="tsx"
            filename="Home.tsx"
            code={`import { useState } from "react";
          
export const Home = () => {
  const [otpValue, setOtpValue] = useState("");

  const toggleToast = () => {
    setShowToast(!showToast);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <>
     <OTP setValue={handleOTPChange} />
    </>
  );
}
`}
          />
          <Toast
            text="Successfully verified OTP! 🎉"
            description={`Your OTP - ${otpValue}`}
            showToast={showToast}
            onCancel={toggleToast}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default otp;
