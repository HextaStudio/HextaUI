import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

const images = {
  floating1:
    "https://images.unsplash.com/photo-1708261432863-41fdab7b5de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
  floating2:
    "https://images.unsplash.com/photo-1713528192259-c3514aa54224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
  floating3:
    "https://images.unsplash.com/photo-1713498566844-e466c2f29d4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
  floating4:
    "https://images.unsplash.com/photo-1711109631731-f3ae890bf2ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
  floating5:
    "https://images.unsplash.com/photo-1713735963670-67cf1914a178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
  floating6:
    "https://images.unsplash.com/photo-1713847663181-2f7b22970ef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
};

export const FloatingImages = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;
    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="relative w-screen h-screen overflow-hidden"
    >
      <div ref={plane1} className="absolute w-full h-full">
        <Image
          src={images.floating1}
          alt="image"
          width={300}
          height={1080}
          className="absolute left-[90%] top-[70%]"
        />
        <Image
          src={images.floating2}
          alt="image"
          width={300}
          height={1080}
          className="absolute left-[5%] top-[65%]"
        />
      </div>
      <div ref={plane2} className="w-full h-full absolute brightness-[0.6]">
        <Image
          src={images.floating4}
          alt="image"
          width={250}
          height={1080}
          className="absolute left-[5%] top-[10%]"
        />
        <Image
          src={images.floating6}
          alt="image"
          width={200}
          height={1080}
          className="absolute left-[80%] top-[5%]"
        />
      </div>
      <div ref={plane3} className="w-full h-full absolute brightness-[0.5]">
        <Image
          src={images.floating3}
          alt="image"
          width={150}
          height={1080}
          className="absolute left-[65%] top-[2.5%]"
        />
        <Image
          src={images.floating5}
          alt="image"
          width={200}
          height={1080}
          className="absolute left-[40%] top-[75%]"
        />
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <h3 className="text-lg font-medium text-center text-white h3">
          Floating Images Gallery
        </h3>
      </div>
    </main>
  );
};
