import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import { useEffect, useRef, useState } from "react";
import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

import { NextSeo } from "next-seo";

const photoTrailingOnMousemove = () => {
  const [isMobile, setIsMobile] = useState(false);
  const PhotoTrailingOnMousemovePreview = () => {
    const images = [
      "https://images.unsplash.com/photo-1713204641930-9be477a56a8d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1681857599354-d0b396455e03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1672190158329-d06d0a35477a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1677717108742-ba9c37a40bab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1712313275295-105a8ab7bb1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1712957412171-e91ae3f5801e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1713245294954-c5805efcd5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1713211762276-d30a318b241f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1713203403441-4a3137c6f39b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    ];

    const imageRefs = useRef([]);

    let globalIndex = 0,
      last = { x: 0, y: 0 };

    const activate = (index, x, y) => {
      const image = imageRefs.current[index];

      if (image) {
        image.style.position = "absolute";
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
        image.style.transform = "translate(-160%, -160%)";
        image.style.zIndex = globalIndex;

        image.dataset.status = "active";

        last = { x, y };
      }
    };

    const distanceFromLast = (x, y) => {
      return Math.hypot(x - last.x, y - last.y);
    };

    const handleOnMove = (e) => {
      if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 15) {
        const leadIndex = globalIndex % images.length;
        const tailIndex = (globalIndex - 5) % images.length;

        activate(leadIndex, e.clientX, e.clientY);

        const tail = imageRefs.current[tailIndex];
        if (tail) tail.dataset.status = "inactive";

        globalIndex++;
      }
    };

    useEffect(() => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(
        window.navigator.userAgent
      );
      if (isMobile) {
        setIsMobile(true);
      } else {
        window.onmousemove = (e) => handleOnMove(e);
        window.ontouchmove = (e) => handleOnMove(e.touches[0]);
      }
    }, []);

    return (
      <>
        {images.map((image, index) => (
          <img
            src={image}
            width={1920}
            height={1080}
            alt="image"
            key={index}
            data-status="inactive"
            ref={(el) => (imageRefs.current[index] = el)}
            className="absolute w-[20rem] rounded-xl data-[status=active]:block data-[status=inactive]:hidden"
          />
        ))}
      </>
    );
  };
  return (
    <>
      <NextSeo
        title="Photo Trailing on MouseMove - HextaUI ✨"
        description="An Awesome mouse move effect combined with image gallery for creative UI"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/photo-trailing-mousemove",
          title: "Photo Trailing on MouseMove - HextaUI ✨",
          description:
            "An Awesome mouse move effect combined with image gallery for creative UI",
          images: [
            {
              url: "https://i.imgur.com/AehlLPi.png",
              width: 1920,
              height: 1080,
              alt: "Photo Trailing on MouseMove - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Photo Trailing on MouseMove - HextaUI ✨",
        }}
        twitter={{
          handle: "@HextaStudio",
          site: "@HextaStudio",
          cardType: "summary_large_image",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Photo Trailing Effect</h1>
            <p className="text-sm opacity-80">
              Awesome photo trailing effect on mousemove event
            </p>
          </div>
          <div className="flex flex-col gap-4 py-10 preview">
            <div>
              <h3 className="h3">Preview</h3>
              <div
                className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container"
                style={{
                  height: "35rem",
                }}
              >
                {isMobile ? (
                  <p className="text-center h3 m-7">
                    Mobile Devices Not Supported
                  </p>
                ) : (
                  <PhotoTrailingOnMousemovePreview />
                )}
              </div>
            </div>
          </div>
          <div className="installation">
            <h3 className="h3">Setup</h3>
            <CodeBlock
              lang="Javascript"
              filename="index.jsx"
              code={`import { useEffect, useRef } from "react";
import React from "react";`}
            />
            <CodeBlock
              lang="Javascript"
              filename="index.jsx"
              code={`const PhotoTrailingOnMousemovePreview = () => {
const images = [
    "https://images.unsplash.com/photo-1713204641930-9be477a56a8d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1681857599354-d0b396455e03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1681857599354-d0b396455e03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1672190158329-d06d0a35477a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1703210466493-994109aec84f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1677717108742-ba9c37a40bab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
];

const imageRefs = useRef([]);

let globalIndex = 0,
    last = { x: 0, y: 0 };

const activate = (index, x, y) => {
    const image = imageRefs.current[index];

    if (image) {
    image.style.position = "absolute";
    image.style.left = \`\${x}px\`;
    image.style.top = \`\${y}px\`;
    image.style.transform = "translate(-160%, -160%)";
    image.style.zIndex = globalIndex;

    image.dataset.status = "active";

    last = { x, y };
    }
};

const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
};

const handleOnMove = (e) => {
    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 20) {
    const leadIndex = globalIndex % images.length;
    const tailIndex = (globalIndex - 5) % images.length;

    activate(leadIndex, e.clientX, e.clientY);

    const tail = imageRefs.current[tailIndex];
    if (tail) tail.dataset.status = "inactive";

    globalIndex++;
    }
};

useEffect(() => {
    window.onmousemove = (e) => handleOnMove(e);

    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
}, []);

return (
    <>
    {images.map((image, index) => (
        <img
        src={image}
        width={1920}
        height={1080}
        alt="image"
        key={index}
        data-status="inactive"
        ref={(el) => (imageRefs.current[index] = el)}
        className="absolute w-[20rem] rounded-xl data-[status=active]:block data-[status=inactive]:hidden"
        />
    ))}
    </>
);
};`}
            />
          </div>
          <div>
            <small>
              This component was inspired by{" "}
              <Link
                href="https://bridget.pictures/"
                className="blue-link"
                target="_blank"
              >
                bridget.pictures
              </Link>
            </small>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default photoTrailingOnMousemove;
