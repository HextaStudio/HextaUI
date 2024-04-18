import Image from "next/image";
import Link from "next/link";
import logo from "../../public/hexta-studio.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar flex items-center justify-between p-7">
        <div className="navbar-header flex items-center justify-center gap-4">
          <Image src={logo} width={40} height={40} alt="HextaUI" />
          <span className="text-xl bricolage-fonts font-bold">HextaUI</span>
        </div>
        <div className="navbar-links flex items-center justify-center max-sm:hidden">
          <ul className="flex items-center list-none gap-5 text-sm">
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
          <Link href="/components" className="primary-button">
            Get Started
          </Link>
        </div>
      </nav>
    </>
  );
};
