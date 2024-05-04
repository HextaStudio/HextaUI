import Image from "next/legacy/image";
import Link from "next/link";
import logo from "../../public/hexta-studio.svg";

export const Navbar = ({ docs }) => {
  return (
    <>
      <nav
        className={`flex bg-black items-center justify-between px-10 py-4 navbar z-[9999999] fixed top-0  w-full border-b-zinc-800  ${
          docs && "ml-auto max-w-7xl "
        }`}
        style={{
          borderBottom: "1px solid #ffffff20",
        }}
      >
        <div className="flex items-center justify-center gap-4 navbar-header">
          <Link href="/" className="flex items-center justify-center gap-4 ">
            <Image src={logo} width={35} height={35} alt="HextaUI Logo" />
            <span className="text-md font-bold bricolage-fonts max-[350px]:hidden">
              HextaUI
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center navbar-links max-sm:hidden">
          <ul className="flex items-center gap-5 text-sm list-none">
            <li>
              <Link href="/components" className="opacity-75 hover:opacity-100">
                Components
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="opacity-75 hover:opacity-100">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-cta">
          <Link href="/components" className="button">
            <button className="relative px-3 py-2 text-sm font-medium duration-1000 border-2 rounded-lg group border-slate-300 bg-slate-300 hover:bg-slate-100 text-slate-900 hover:shadow-lg hover:shadow-grey-300/50 hover:shadow-white/20">
              <span className="absolute top-0 left-0 border border-dashed rounded-md shadow-inner size-full border-slate-500 shadow-white/30 group-active:shadow-white/10"></span>
              <span className="absolute top-0 left-0 rotate-180 rounded-md shadow-inner size-full border-slate-500 shadow-black/30 group-active:shadow-black/10"></span>
              <strong>Get Started</strong>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};
