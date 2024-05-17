import Image from "next/image";
import Link from "next/link";
import logo from "../../public/hexta-studio.svg";

interface FooterProps {
  docs?: boolean;
}

export const Footer = ({ docs }: FooterProps) => {
  return (
    <>
      <footer
        className={`flex flex-wrap items-center  p-12 footer gap-7 grow justify-between  className="max-lg:ml-auto" `}
        style={{
          borderTop: "1px solid #ffffff20",
        }}
      >
        <div className={`flex flex-col gap-2 footer-section1 `}>
          <div className={`flex items-center gap-4`}>
            <Image
              src={logo}
              width={40}
              height={40}
              alt="HextaUI"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <span className="text-xl font-bold bricolage-fonts">HextaUI</span>
          </div>
          <p className="text-sm">
            <span className="opacity-60">A product by </span>{" "}
            <Link
              className="blue-link"
              href="https://hextastudio.in"
              target="_blank"
            >
              HextaStudio
            </Link>
          </p>
          <p className="text-sm">
            <span className="opacity-60">Building in public at</span>{" "}
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
          <ul className="flex flex-col gap-2 text-[14px] list-none">
            <li>
              <Link href="/components" className="opacity-75 hover:opacity-100">
                Components
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="opacity-75 hover:opacity-100">
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/hextastudio"
                target="_blank"
                className="opacity-75 hover:opacity-100"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://discord.gg/EjpmkjJKFU"
                target="_blank"
                className="opacity-75 hover:opacity-100"
              >
                Discord
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
