import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import { BsGoogle, BsMicrosoft, BsSpotify, BsYoutube } from "react-icons/bs";

import { useRef, useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

const MagicHoverCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardsContainer = document.getElementById("cards-container");
    if (cardsContainer) {
      cardsContainer.onmousemove = (e) => {
        const cards = Array.from(document.getElementsByClassName("card"));
        for (const card of cards) {
          const htmlCard = card as HTMLElement;
          htmlCard.style.setProperty("--x", `${e.clientX}px`);
          htmlCard.style.setProperty("--y", `${e.clientY}px`);
          const rect = htmlCard.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

          htmlCard.style.setProperty("--x", `${x}px`);
          htmlCard.style.setProperty("--y", `${y}px`);
        }
      };
    }
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        className={cn(
          "card w-[300px] h-[200px] bg-white rounded-md  bg-opacity-10 cursor-pointer before:absolute before:h-full before:w-full before:top-0 before:left-0  before:[border-radius:inherit] before:z-[3] before:bg-[radial-gradient(800px_circle_at_var(--x)_var(--y),_var(--tw-gradient-stops))] before:from-[#ffffff10] before:opacity-0 before:transition-all hover:before:opacity-90  before:to-[transparent_40%] relative grid place-items-center grow",
          className
        )}
      >
        <div className="border-0 absolute h-full w-full top-0 left-0  [border-radius:inherit] z-[1] bg-[radial-gradient(400px_circle_at_var(--x)_var(--y),_var(--tw-gradient-stops))] from-[#ffffff40] opacity-0 transition-all   to-[transparent_40%] group-hover:opacity-80"></div>
        <div className="content h-[calc(100%-2px)] w-[calc(100%-2px)] my-[1px] bg-zinc-950  [border-radius:inherit] z-[2] relative ">
          {children}
        </div>
      </div>
    </>
  );
};

const magichovercard = () => {
  return (
    <>
      <DocsSEO
        title="Magical Hover Card - hextastudio/ui"
        description="Magical card with awesome mouse hover effect."
        image="https://i.imgur.com/0m18mkg.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Magical Hover Card"
            description="Magical card with awesome mouse hover effect."
          />
          <DocsPreview className="p-4">
            <div
              className="flex flex-wrap items-center justify-center gap-2 group p-3"
              id="cards-container"
            >
              <MagicHoverCard className="w-[400px]">
                <div className="h-full gap-2 flex-col flex items-center justify-center">
                  <BsGoogle size={40} />
                  <p className="text-2xl font-bold">Google</p>
                </div>
              </MagicHoverCard>
              <MagicHoverCard>
                <div className="h-full gap-2 flex-col flex items-center justify-center">
                  <BsMicrosoft size={40} />
                  <p className="text-2xl font-bold">Microsoft</p>
                </div>
              </MagicHoverCard>

              <MagicHoverCard>
                <div className="h-full gap-2 flex-col flex items-center justify-center">
                  <BsYoutube size={40} />
                  <p className="text-2xl font-bold">YouTube</p>
                </div>
              </MagicHoverCard>
              <MagicHoverCard className="w-[400px]">
                <div className="h-full gap-2 flex-col flex items-center justify-center">
                  <BsSpotify size={40} />
                  <p className="text-2xl font-bold">Spotify</p>
                </div>
              </MagicHoverCard>
            </div>
          </DocsPreview>
          <CodeBlock
            lang="tsx"
            free
            filename="MagicalCard.tsx"
            code={`import { useRef, useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => {
  return twMerge(clsx(args));
};

const MagicHoverCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardsContainer = document.getElementById("cards-container");
    if (cardsContainer) {
      cardsContainer.onmousemove = (e) => {
        const cards = Array.from(document.getElementsByClassName("card"));
        for (const card of cards) {
          const htmlCard = card as HTMLElement;
          htmlCard.style.setProperty("--x", \`\${e.clientX}px\`);
          htmlCard.style.setProperty("--y", \`\${e.clientY}px\`);
          const rect = htmlCard.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

          htmlCard.style.setProperty("--x", \`\${x}px\`);
          htmlCard.style.setProperty("--y", \`\${y}px\`);
        }
      };
    }
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        className={cn(
          "card w-[300px] h-[200px] bg-white rounded-md  bg-opacity-10 cursor-pointer before:absolute before:h-full before:w-full before:top-0 before:left-0  before:[border-radius:inherit] before:z-[3] before:bg-[radial-gradient(800px_circle_at_var(--x)_var(--y),_var(--tw-gradient-stops))] before:from-[#ffffff10] before:opacity-0 before:transition-all hover:before:opacity-90  before:to-[transparent_40%] relative grid place-items-center grow",
          className
        )}
      >
        <div className="border-0 absolute h-full w-full top-0 left-0  [border-radius:inherit] z-[1] bg-[radial-gradient(400px_circle_at_var(--x)_var(--y),_var(--tw-gradient-stops))] from-[#ffffff40] opacity-0 transition-all   to-[transparent_40%] group-hover:opacity-80"></div>
        <div className="content h-[calc(100%-2px)] w-[calc(100%-2px)] my-[1px] bg-zinc-950  [border-radius:inherit] z-[2] relative ">
          {children}
        </div>
      </div>
    </>
  );
};
`}
          />
          <CodeBlock
            lang="tsx"
            filename="tsx"
            title="Usage"
            free
            code={`import { MagicalCard } from '../MagicalCard';
import { BsGoogle, BsMicrosoft, BsSpotify, BsYoutube } from "react-icons/bs";

export default function Home(){
  <div
    className="flex flex-wrap items-center justify-center gap-2 group p-3"
    id="cards-container"
  > 
  {/* Above line is must the \`group\` and id="cards-container" */}

    <MagicHoverCard className="w-[400px]">
      <div className="h-full gap-2 flex-col flex items-center justify-center">
        <BsGoogle size={40} />
        <p className="text-2xl font-bold">Google</p>
      </div>
    </MagicHoverCard>
    <MagicHoverCard>
      <div className="h-full gap-2 flex-col flex items-center justify-center">
        <BsMicrosoft size={40} />
        <p className="text-2xl font-bold">Microsoft</p>
      </div>
    </MagicHoverCard>

    <MagicHoverCard>
      <div className="h-full gap-2 flex-col flex items-center justify-center">
        <BsYoutube size={40} />
        <p className="text-2xl font-bold">YouTube</p>
      </div>
    </MagicHoverCard>
    <MagicHoverCard className="w-[400px]">
      <div className="h-full gap-2 flex-col flex items-center justify-center">
        <BsSpotify size={40} />
        <p className="text-2xl font-bold">Spotify</p>
      </div>
    </MagicHoverCard>
  </div>
}`}
          />
          <small>
            Thanks{" "}
            <Link
              className="text-blue-400"
              href="https://x.com/Hyperplexed"
              target="_blank"
            >
              @Hyperplexed 🫶
            </Link>
          </small>
        </main>
      </DocsLayout>
    </>
  );
};

export default magichovercard;
