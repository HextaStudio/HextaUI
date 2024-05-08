import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

import { NextSeo } from "next-seo";

import { useState } from "react";

const BasicCard = ({ title, description, image }) => {
  return (
    <div className="overflow-hidden border rounded-lg shadow-md bg-zinc-950 border-zinc-800">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-56 max-w-full border rounded-lg border-zinc-900"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const CardWithButton = ({ title, description, image, buttonText }) => {
  return (
    <div className="overflow-hidden border rounded-lg shadow-md bg-zinc-950 border-zinc-800">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 border rounded-lg border-zinc-900"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-gray-500">{description}</p>
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const CardWithAvatar = ({ title, description, image, avatarUrl }) => {
  return (
    <div className="overflow-hidden border rounded-lg shadow-md bg-zinc-950 border-zinc-800">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 border rounded-lg border-zinc-900"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-8 h-8 mr-2 rounded-full"
          />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const CardWithTags = ({ title, description, image, tags }) => {
  return (
    <div className="overflow-hidden border rounded-lg shadow-md bg-zinc-950 border-zinc-800">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 border rounded-lg border-zinc-900"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-gray-500">{description}</p>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 mb-2 mr-2 text-xs border border-white rounded-md bg-zinc-900 text-zinc-200 border-opacity-5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const HorizontalCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-wrap overflow-hidden border rounded-lg shadow-md bg-zinc-950 border-zinc-900">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-48 h-auto border rounded-lg max-sm:w-auto border-zinc-900"
        />
      </div>
      <div className="flex flex-col items-start flex-grow gap-3 p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <button className="px-[20px] py-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Meow
        </button>
      </div>
    </div>
  );
};

const HoverCard = ({ title, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHovered = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className="perspective-400"
      onMouseEnter={handleHovered}
      onMouseLeave={handleHovered}
    >
      <div
        className={`relative w-64 h-80 bg-zinc-950 rounded-lg shadow-md overflow-hidden transform transition-all duration-500 transform-style-preserve border border-zinc-900`}
      >
        <div className="absolute inset-0 backface-hidden">
          <img
            src={image}
            alt={title}
            className={`object-cover w-full h-full transition-all duration-200 ease-in-out ${
              isHovered && "brightness-[30%]"
            }`}
          />
        </div>
        <div
          className={`absolute inset-0 transform ${
            isHovered ? "rotate-y-180" : "rotate-y-0"
          } backface-hidden`}
        >
          <div
            className={`p-4 transition-all duration-200 ease-in-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <p className="text-sm text-zinc-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkewedCard = ({ title, description, image }) => {
  return (
    <div className="relative overflow-hidden transform skew-y-3 border rounded-lg shadow-md bg-zinc-950 border-zinc-900">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 border rounded-lg border-zinc-900"
        />
      </div>
      <div className="p-4 ">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const AnimatedCard = ({ title, description, image }) => {
  return (
    <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-md bg-zinc-950 hover:scale-[1.02] border border-zinc-900">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 border rounded-lg border-zinc-900"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const cards = () => {
  return (
    <>
      <NextSeo
        title="Cards - HextaUI ✨"
        description="Collection of multiple reusable card components with props."
        canonical="https://ui.hextastudio.in/docs/components/layout/cards"
        openGraph={{
          url: "https://ui.hextastudio.in/docs/components/layout/cards",
          title: "Cards - HextaUI ✨",
          description:
            "Collection of multiple reusable card components with props.",
          images: [
            {
              url: "https://i.imgur.com/L9bkOYd.png",
              width: 1920,
              height: 1080,
              alt: "Cards - HextaUI ✨",
              type: "image/png",
            },
          ],
          siteName: "Cards - HextaUI ✨",
        }}
      />
      <DocsLayout>
        <main>
          {" "}
          <div className="header">
            <h1 className="h1">Cards</h1>
            <p className="text-sm opacity-80">
              Collection of multiple reusable card components with props.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Basic Card</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container py-[5rem] p-[1rem]">
                  <BasicCard
                    title={"Cats are so cute :3"}
                    description={"I love cats they are so cute <3 "}
                    image={"https://source.unsplash.com/random?kitten"}
                  />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`const BasicCard = ({ title, description, image }) => {
  return (
    <div className="overflow-hidden border rounded-lg shadow-md bg-zinc-950 border-zinc-800">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-56 max-w-full border rounded-lg border-zinc-900"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};
`}
              />
            </div>
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<BasicCard
    title={"Cats are so cute :3"}
    description={
        "I love cats they are so cute <3 "
    }
    image={"https://source.unsplash.com/random?kitten"}
/>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Card with button</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container py-[5rem] p-[1rem]">
                  <CardWithButton
                    buttonText={"Create free account"}
                    title={"Cats are so cute :3"}
                    description={"I love cats they are so cute <3 "}
                    image={"https://source.unsplash.com/random?kitten"}
                  />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`const CardWithButton = ({ title, description, image, buttonText }) => {
  return (
    <div className="overflow-hidden border rounded-lg shadow-md bg-zinc-950 border-zinc-800">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 border rounded-lg border-zinc-900"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-gray-500">{description}</p>
        <button className="px-[20px] py-[8px] bg-white border border-zinc-900 text-black rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          {buttonText}
        </button>
      </div>
    </div>
  );
};`}
              />
            </div>{" "}
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<CardWithButton
    buttonText={"Create free account"}
    title={"Cats are so cute :3"}
    description={
        "I love cats they are so cute <3 "
    }
    image={"https://source.unsplash.com/random?kitten"}
/>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Card with Avatar</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container py-[5rem] p-[1rem]">
                  <CardWithAvatar
                    avatarUrl={
                      "https://source.unsplash.com/random/100x100?headshot"
                    }
                    title={"Cats are so cute :3"}
                    description={"I love cats they are so cute <3 "}
                    image={"https://source.unsplash.com/random?kitten"}
                  />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`const CardWithAvatar = ({ title, description, image, avatarUrl }) => {
  return (
    <div className="overflow-hidden border rounded-lg shadow-md bg-zinc-950 border-zinc-800">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 border rounded-lg border-zinc-900"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-8 h-8 mr-2 rounded-full"
          />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};`}
              />
            </div>{" "}
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<CardWithAvatar
    avatarUrl={
        "https://source.unsplash.com/random/100x100?headshot"
    }
    title={"Cats are so cute :3"}
    description={
        "I love cats they are so cute <3 "
    }
    image={"https://source.unsplash.com/random?kitten"}
/>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Card with Tags</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container py-[5rem] p-[1rem]">
                  <CardWithTags
                    tags={["cute", "cat", "meow", "kitty"]}
                    avatarUrl={
                      "https://source.unsplash.com/random/100x100?headshot"
                    }
                    title={"Cats are so cute :3"}
                    description={"I love cats they are so cute <3 "}
                    image={"https://source.unsplash.com/random?kitten"}
                  />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`const CardWithTags = ({ title, description, image, tags }) => {
  return (
    <div className="overflow-hidden border rounded-lg shadow-md bg-zinc-950 border-zinc-800">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 border rounded-lg border-zinc-900"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-gray-500">{description}</p>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 mb-2 mr-2 text-xs border border-white rounded-md bg-zinc-900 text-zinc-200 border-opacity-5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};`}
              />
            </div>{" "}
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<CardWithTags
    tags={["cute", "cat", "meow", "kitty"]}
    avatarUrl={
        "https://source.unsplash.com/random/100x100?headshot"
    }
    title={"Cats are so cute :3"}
    description={
        "I love cats they are so cute <3 "
    }
    image={"https://source.unsplash.com/random?kitten"}
/>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Horizontal Card</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container py-[5rem] p-[1rem]">
                  <HorizontalCard
                    title={"Cats are so cute :3"}
                    description={"I love cats they are so cute <3 "}
                    image={"https://source.unsplash.com/random?kitten"}
                  />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`const HorizontalCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-wrap overflow-hidden border rounded-lg shadow-md bg-zinc-950 border-zinc-900">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-48 h-auto border rounded-lg max-sm:w-auto border-zinc-900"
        />
      </div>
      <div className="flex flex-col items-start flex-grow gap-3 p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <button className="px-[20px] py-[8px] bg-zinc-900  border border-zinc-900 text-white rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90">
          Meow
        </button>
      </div>
    </div>
  );
};`}
              />
            </div>{" "}
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<HorizontalCard
    title={"Cats are so cute :3"}
    description={
        "I love cats they are so cute <3 "
    }
    image={"https://source.unsplash.com/random?kitten"}
/>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Hover Card</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container py-[5rem] p-[1rem]">
                  <HoverCard
                    title={"Cats are so cute :3"}
                    description={"I love cats they are so cute <3 "}
                    image={"https://source.unsplash.com/random?kitten"}
                  />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`import { useState } from "react";

const HoverCard = ({ title, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHovered = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className="perspective-400"
      onMouseEnter={handleHovered}
      onMouseLeave={handleHovered}
    >
      <div
        className={\`relative w-64 h-80 bg-zinc-950 rounded-lg shadow-md overflow-hidden transform transition-all duration-500 transform-style-preserve border border-zinc-900\`}
      >
        <div className="absolute inset-0 backface-hidden">
          <img
            src={image}
            alt={title}
            className={\`object-cover w-full h-full transition-all duration-200 ease-in-out \${
              isHovered && "brightness-[30%]"
            }\`}
          />
        </div>
        <div
          className={\`absolute inset-0 transform \${
            isHovered ? "rotate-y-180" : "rotate-y-0"
          } backface-hidden\`}
        >
          <div
            className={\`p-4 transition-all duration-200 ease-in-out \${
              isHovered ? "opacity-100" : "opacity-0"
            }\`}
          >
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <p className="text-sm text-zinc-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};`}
              />
            </div>{" "}
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<HoverCard
    title={"Cats are so cute :3"}
    description={
        "I love cats they are so cute <3 "
    }
    image={"https://source.unsplash.com/random?kitten"}
/>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Skewed Card</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container py-[5rem] p-[1rem]">
                  <SkewedCard
                    title={"Cats are so cute :3"}
                    description={"I love cats they are so cute <3 "}
                    image={"https://source.unsplash.com/random?kitten"}
                  />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`const SkewedCard = ({ title, description, image }) => {
  return (
    <div className="relative overflow-hidden transform skew-y-3 border rounded-lg shadow-md bg-zinc-950 border-zinc-900">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 border rounded-lg border-zinc-900"
        />
      </div>
      <div className="p-4 ">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};`}
              />
            </div>{" "}
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={` <SkewedCard
    title={"Cats are so cute :3"}
    description={
        "I love cats they are so cute <3 "
    }
    image={"https://source.unsplash.com/random?kitten"}
/>`}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Animated Card</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container py-[5rem] p-[1rem]">
                  <AnimatedCard
                    title={"Cats are so cute :3"}
                    description={"I love cats they are so cute <3 "}
                    image={"https://source.unsplash.com/random?kitten"}
                  />
                </div>
              </div>
            </div>
            <div className="installation">
              <h3 className="h3">Code</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`const AnimatedCard = ({ title, description, image }) => {
  return (
    <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-md bg-zinc-950 hover:scale-[1.02] border border-zinc-900">
      <div className="p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 border rounded-lg border-zinc-900"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};`}
              />
            </div>{" "}
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="jsx"
                filename="jsx"
                code={`<AnimatedCard
    title={"Cats are so cute :3"}
    description={
        "I love cats they are so cute <3 "
    }
    image={"https://source.unsplash.com/random?kitten"}
/>`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default cards;
