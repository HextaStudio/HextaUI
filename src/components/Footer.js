import Image from "next/image";
import Link from "next/link";
import logo from "../../public/hexta-studio.svg";

export const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap items-center justify-between p-10 footer gap-7">
        <div className="flex flex-col gap-2 footer-section1">
          <div className="flex items-center gap-4 ">
            <Image src={logo} width={40} height={40} alt="HextaUI" />
            <span className="text-xl font-bold bricolage-fonts">HextaUI</span>
          </div>
          <p className="text-sm">
            <span className="opacity-30">A product by </span>{" "}
            <Link
              className="blue-link"
              href="https://hextastudio.vercel.app"
              target="_blank"
            >
              HextaStudio
            </Link>
          </p>
          <p className="text-sm">
            <span className="opacity-30">Building in public at</span>{" "}
            <Link
              className="blue-link"
              href="https://x.com/preetsuthar17"
              target="_blank"
            >
              @preetsuthar17
            </Link>
          </p>
        </div>
        <div className="footer-section2">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <li>
              <Link href="#" className="opacity-75 hover:opacity-100">
                Components
              </Link>
            </li>
            <li>
              <Link href="#" className="opacity-75 hover:opacity-100">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="opacity-75 hover:opacity-100">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="opacity-75 hover:opacity-100">
                Discord
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
