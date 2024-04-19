import Link from "next/link";

export const Sidebar = () => {
  return (
    <>
      <aside className="sticky top-0 flex flex-col h-full gap-4 border-r-2 border-zinc-900 p-7 sidebar min-h-dvh max-sm:hidden max-w-60">
        <div className="sidebar-section">
          <p className="text-sm font-bold">PINNED</p>
          <ul>
            <li>
              <span className="text-sm opacity-60">Stay updated </span>
              <Link
                className="text-sm blue-link"
                href="https://x.com/hextastudio"
                target="_blank"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="text-sm font-bold">Resources</p>
          <ul>
            <li>
              <Link className="text-sm opacity-60" href="#">
                Install Next.js
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="text-sm font-bold">All Components</p>
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
