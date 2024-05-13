import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";

import anime from "animejs";
import Link from "next/link";
import { NextSeo } from "next-seo";

interface WaterDropGridPreviewProps {
  width?: number;
  height?: number;
}

export const WaterDropGridPreview = ({
  width,
  height,
}: WaterDropGridPreviewProps) => {
  const GRID_WIDTH = width || 40;
  const GRID_HEIGHT = height || 40;

  const DotGrid = () => {
    const handleDotClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
      anime({
        targets: ".dot-point",
        scale: [
          { value: 1.35, easing: "easeOutSine", duration: 250 },
          { value: 1, easing: "easeInOutQuad", duration: 500 },
        ],
        translateY: [
          { value: -15, easing: "easeOutSine", duration: 250 },
          { value: 0, easing: "easeInOutQuad", duration: 500 },
        ],
        opacity: [
          { value: 1, easing: "easeOutSine", duration: 250 },
          { value: 0.5, easing: "easeInOutQuad", duration: 500 },
        ],
        delay: anime.stagger(100, {
          grid: [GRID_WIDTH, GRID_HEIGHT],
          from: parseInt((e.target as HTMLDivElement).dataset.index ?? ""),
        }),
      });
    };

    const dots = [];
    let index = 0;

    for (let i = 0; i < GRID_WIDTH; i++) {
      for (let j = 0; j < GRID_HEIGHT; j++) {
        dots.push(
          <div
            className="p-2 transition-colors rounded-full group hover:bg-slate-600"
            data-index={index}
            key={`${i}-${j}`}
          >
            <div
              className="w-2 h-2 rounded-full opacity-50 dot-point bg-gradient-to-b from-slate-700 to-slate-400 group-hover:from-indigo-600 group-hover:to-white"
              data-index={index}
            />
          </div>
        );
        index++;
      }
    }

    return (
      <div
        onClick={handleDotClick}
        style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
        className="grid w-fit"
      >
        {dots}
      </div>
    );
  };
  return (
    <div className="relative grid px-8 py-12 place-content-center">
      <DotGrid />
    </div>
  );
};
const waterDropEffect = () => {
  return (
    <>
      <NextSeo
        title="Water Drop Effect - HextaUI ✨"
        description="Beautiful water drop effect using grids and AnimeJs"
        canonical="https://ui.hextastudio.in/docs/components/modern/water-drop-effect"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/modern/water-drop-effect",
          title: "Water Drop Effect - HextaUI ✨",
          description: "Beautiful water drop effect using grids and AnimeJs",
          images: [
            {
              url: "https://i.imgur.com/AehlLPi.png",
              width: 1920,
              height: 1080,
              alt: "Water Drop Effect - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Water Drop Effect - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          <div className="header">
            <h1 className="h1">Water Drop Effect</h1>
            <p className="text-sm opacity-80">
              Beautiful water drop effect using grids and AnimeJs{" "}
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
                <WaterDropGridPreview />
              </div>
            </div>
          </div>
          <div className="installation">
            <h3 className="h3">Setup</h3>
            <div>
              <h3>Installation</h3>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npm install animejs`}
              />
            </div>
            <CodeBlock
              lang="jsx"
              filename="index.jsx"
              code={`import anime from 'animejs';`}
            />
            <CodeBlock
              lang="jsx"
              filename="index.jsx"
              code={`const WaterDropGridPreview = () => {
return (
    <div className="relative grid px-8 py-12 place-content-center">
    <DotGrid />
    </div>
);
};

const GRID_WIDTH = 40;
const GRID_HEIGHT = 40;

const DotGrid = () => {
const handleDotClick = (e) => {
    anime({
    targets: ".dot-point",
    scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
    ],
    translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
    ],
    opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
    ],
    delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
    }),
    });
};

const dots = [];
let index = 0;

for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
    dots.push(
        <div
        className="p-2 transition-colors rounded-full group cursor-crosshair hover:bg-slate-600"
        data-index={index}
        key={\`\${i}-\${j}\`}
        >
        <div
            className="w-2 h-2 rounded-full opacity-50 dot-point bg-gradient-to-b from-slate-700 to-slate-400 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
        />
        </div>
    );
    index++;
    }
}

return (
    <div
    onClick={handleDotClick}
    style={{ gridTemplateColumns: \`repeat(\${GRID_WIDTH}, 1fr)\` }}
    className="grid w-fit"
    >
    {dots}
    </div>
);
};`}
            />
          </div>
          <div>
            <small>
              This component was inspired by{" "}
              <Link
                href="https://www.youtube.com/watch?v=wo-rf-dzoHo"
                target="_blank"
                className="blue-link"
              >
                Tom is Loading
              </Link>
            </small>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default waterDropEffect;
