import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const Hero = ({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroProps) => {
  return (
    <section
      className="relative flex flex-row items-center justify-center gap-4 p-10 text-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100dvh",
        width: "100dvw",
      }}
    >
      <div className="flex flex-col items-center justify-center p-8 rounded-lg">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter max-w-[30rem] w-full leading-tight text-white ">
          {title}
        </h1>
        <p className="text-sm text-white opacity-80">{subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Link
            href={`${primaryButtonLink}`}
            className="px-[20px] py-[8px] rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 bg-white border border-zinc-900 text-black cursor-pointer"
          >
            {primaryButtonText}
          </Link>
          <Link
            href={`${secondaryButtonLink}`}
            className="px-[20px] py-[8px] rounded-lg flex items-center font-[600] text-[14px] transition-all duration-[0.1s] hover:brightness-90 text-white border bg-zinc-950 border-zinc-900"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
