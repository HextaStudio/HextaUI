import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { Button } from "../hexta-ui/Button";
import { Toast } from "../hexta-ui/Toast";
import { OTP } from "../hexta-ui/InputOTP";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AnimatedDock } from "@/pages/docs/examples/AnimatedDock";

export const Features = () => {
  const canvasRef = useRef(null!);
  const [showToast, setShowToast] = useState(false);
  const [otpValue, setOtpValue] = useState("");

  const toggleToast = () => {
    setShowToast(!showToast);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const handleOTPChange = (value: string) => {
    setOtpValue(value);
    toggleToast();
    console.log("OTP Value:", value);
  };

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 0.8,
      width: 200 * 2,
      height: 200 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 8000,
      mapBrightness: 8,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 0.8, 1.9],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.002;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <>
      <section className="max-w-[70rem] w-[95%] mx-auto my-[10rem] relative">
        {" "}
        <div className="rounded-[inherit] [border:calc(1.9*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]  absolute inset-0 rounded-inherit border-2 border-transparent !mask-clip-padding-box-border-box after:absolute after:aspect-square after:w-[250px] after:animate-animatedBeam after:bg-gradient-to-l after:from-purple-500 after:via-purple-950 after:to-transparent after:[offset-anchor:90%_50%] after:[offset-path:rect(0_auto_auto_0_round_250px)]"></div>
        <div className="grid auto-rows-[150px] grid-cols-3 gap-4 max-[900px]:grid-cols-2">
          <div className="relative flex flex-col col-span-2 row-span-2 p-5 bg-white border-2 rounded-xl border-slate-400/10 bg-opacity-5 ">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl leading-10 w-min">Customization</h2>
              <p className="text-sm opacity-80">
                Customize any components with your own style seamlessly!
              </p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[10%] scale-[1.3]  max-[420px]:scale-[1] text-center">
              <p className="text-[10px] mb-1">Try guessing the correct OTP</p>

              <OTP setValue={handleOTPChange} />
              <small className="text-[9px] opacity-60">
                Hint - Count to 5 (this is array)
              </small>
            </div>
          </div>
          <div className="row-span-3 rounded-xl border-2 border-slate-400/10 bg-white bg-opacity-5  p-5  max-[900px]:col-span-2 overflow-hidden flex relative">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl leading-10 w-min">Stunning Components</h2>
              <p className="text-sm opacity-80">
                Copy and Paste Modern components without any efforts.
              </p>
            </div>
            <canvas
              className="absolute"
              ref={canvasRef}
              style={{
                width: 700,
                height: 700,
                maxWidth: "100%",
                aspectRatio: 1,
              }}
            />
          </div>
          <div className="row-span-2 rounded-xl border-2 border-slate-400/10 bg-white bg-opacity-5  p-5 col-span-1 max-[900px]:col-span-2 flex items-center justify-center text-center relative">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl leading-10 ">Your project, Your code</h2>
              <p className="text-sm opacity-80">
                The components added to working directory, instead of
                node_modules.
              </p>
            </div>
          </div>
          <div className="row-span-2 rounded-xl border-2 border-slate-400/10 bg-white bg-opacity-5  p-5 col-span-1 max-[900px]:col-span-2  max-[900px]:row-span-1 flex items-center justify-center">
            <Button onClick={() => toggleToast()} className="scale-[1.2]">
              Click me!
            </Button>
          </div>
          <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-white bg-opacity-5  p-5 col-span-1 max-[900px]:col-span-2 flex items-center justify-center z-[9999] overflow-hidden">
            <AnimatedDock
              items={[
                {
                  link: "https://github.com/preetsuthar17",
                  target: "_blank",
                  Icon: <FaGithub size={22} />,
                },
                {
                  link: "https://x.com/preetsuthar17",
                  target: "_blank",
                  Icon: <FaXTwitter size={22} />,
                },
                {
                  link: "https://dsc.gg/hextastudio",
                  target: "_blank",
                  Icon: <FaDiscord size={22} />,
                },
                {
                  link: "https://linkedin.com/in/preetsuthar17",
                  target: "_blank",
                  Icon: <FaLinkedin size={22} />,
                },
              ]}
            />
          </div>
        </div>{" "}
        <Toast
          text={otpValue === "012345" ? "🥳 Whohooo!!" : "❌ Nope!!"}
          description="Copy and paste code for this Toast"
          showToast={showToast}
          onCancel={toggleToast}
        />
      </section>
    </>
  );
};
