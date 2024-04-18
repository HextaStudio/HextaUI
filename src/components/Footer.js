import Image from "next/image";
import Link from "next/link";
import logo from "../../public/hexta-studio.svg";

export const Footer = () => {
  return (
    <>
      <footer className="footer flex items-center justify-between p-7">
        <div className="footer-section1 flex gap-2 flex-col">
          <div className=" flex items-center  gap-4">
            <Image src={logo} width={40} height={40} alt="HextaUI" />
            <span className="text-xl bricolage-fonts font-bold">HextaUI</span>
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
          <ul className="flex list-none flex-col gap-2 text-sm">
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
