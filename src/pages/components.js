import { DocsLayout } from "@/components/DocsPage/DocsLayout";

import Link from "next/link";
import Image from "next/image";

const CardComponent = ({ component }) => {
  return (
    <div className="p-4 m-2 border border-white border-opacity-10 rounded-xl w-60 h-fit component-card">
      <div className="h-60">
        <Image
          className="object-cover w-full h-full border border-white border-opacity-10"
          src={component.image}
          width={1920}
          height={1080}
          alt={component.title}
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-between h-1/3">
        <div className="flex flex-col py-3">
          <h4 className="text-lg font-semibold">{component.title}</h4>
          <p>{component.description}</p>
        </div>
        <Link
          href={`/docs/components/${component.url}`}
          className="secondary-button"
        >
          Check out
        </Link>
      </div>
    </div>
  );
};

const components = () => {
  const components = [
    {
      title: "Magnetic Button",
      description:
        " A button that follows mouse cursor within specific range around button.",
      url: "magnetic-url",
      image: "https://i.imgur.com/tCNsXzc.gif",
    },
  ];
  return (
    <>
      <DocsLayout>
        <main>
          <h1 className="h1 max-sm:text-4xl">Gorgeous , Zero Effort</h1>
          <p className="text-sm opacity-70">
            Just copy and paste our prebuilt components in your website and make
            your website look awesome!
          </p>
          <div className="flex flex-col gap-4 py-10">
            <div>
              <h3 className="h3">Top picked components</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              {components.map((component, index) => (
                <CardComponent
                  key={index}
                  component={{
                    title: component.title,
                    image: component.image,
                    url: component.url,
                    description: component.description,
                  }}
                />
              ))}
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default components;
