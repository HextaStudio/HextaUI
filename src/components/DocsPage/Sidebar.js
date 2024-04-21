import Link from "next/link";

export const Sidebar = () => {
  const componentLinks = [
    {
      name: "Magnetic Button",
      url: "magnetic-button",
    },
    {
      name: "White Ray",
      url: "white-ray",
    },
    {
      name: "Photo Trailing Effect",
      url: "photo-trailing-mousemove",
    },
    {
      name: "Water Drop Effect",
      url: "water-drop-effect",
    },
    {
      name: "Hacker Text Effect",
      url: "hacker-text-effect",
    },
  ];
  return (
    <>
      <aside
        className="z-10 flex flex-col gap-4 p-10 bg-black border-r-2 sidebar min-h-dvh max-[900px]:hidden"
        style={{
          borderRight: "1px solid #ffffff20",

          minWidth: "16rem",
        }}
      >
        <div className="sidebar-section">
          <p className="text-sm font-bold uppercase">INFO</p>
          <ul>
            <li>
              <span className="text-sm opacity-60">Stay updated </span>
              <Link
                className="text-sm blue-link"
                href="https://x.com/hextastudio"
                target="_blank"
              >
                @HextaStudio
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="text-sm font-bold uppercase">Resources</p>
          <ul className="flex flex-col gap-[3px]">
            <li>
              <Link
                className="text-sm transition-all opacity-60 hover:opacity-90 "
                href="/docs/resources/install-next"
              >
                Install Next.js
              </Link>
            </li>
            <li>
              <Link
                className="text-sm transition-all opacity-60 hover:opacity-90 "
                href="/docs/resources/install-tailwind"
              >
                Install Tailwind CSS
              </Link>
            </li>
            <li>
              <Link
                className="text-sm transition-all opacity-60 hover:opacity-90 "
                href="/docs/resources/install-gsap"
              >
                Install GSAP
              </Link>
            </li>
            <li>
              <Link
                className="text-sm transition-all opacity-60 hover:opacity-90 "
                href="/docs/resources/install-framer-motion"
              >
                Install Framer Motion
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="text-sm font-bold uppercase">All Components</p>
          <ul className="flex flex-col gap-[3px]">
            {componentLinks.map((link, index) => (
              <li>
                <Link
                  className="flex items-center gap-1 text-sm transition-all opacity-60 hover:opacity-90"
                  href={`/docs/components/${link.url}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
