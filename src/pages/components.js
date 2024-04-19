import { DocsLayout } from "@/components/DocsPage/DocsLayout";

import Link from "next/link";
import Image from "next/image";

const CardComponent = ({ component }) => {
  return (
    <>
      <div>
        <Image
          src={component.image}
          width={1920}
          height={1080}
          alt={component.title}
          objectFit="cover"
          loading="lazy"
        />
      </div>
    </>
  );
};

const components = () => {
  return (
    <>
      <DocsLayout>
        <main>
          <h1 className="h1">Gorgeous Web Components, Zero Effort</h1>
          <p className="opacity-80">
            Just copy and paste our prebuilt components in your website and make
            your website look awesome!
          </p>
          <div className="flex flex-col gap-4 py-10">
            <div>
              <h3 className="h3">Top picked components</h3>
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default components;
