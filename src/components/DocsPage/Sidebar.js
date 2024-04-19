import Link from "next/link";

export const Sidebar = () => {
  return (
    <>
      <aside className="sticky top-0 flex flex-col h-full gap-4 p-10 border-r-2 border-zinc-900 sidebar min-h-dvh max-sm:hidden max-w-80">
        <div className="sidebar-section">
          <p className="text-sm font-bold uppercase">PINNED</p>
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
          <ul>
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
          <ul>
            <li>
              <Link className="text-sm opacity-60" href="#">
                Magnetic button
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
