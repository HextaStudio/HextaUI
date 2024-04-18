import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 py-48 overflow-x-hidden text-center px-7 hero step1">
        <div className="hero-content">
          <h1 className="max-w-4xl font-extrabold tracking-tighter text-7xl bricolage-fonts leading-15 max-sm:text-4xl">
            Gorgeous Web Components, Zero Effort
          </h1>
          <p className="max-w-2xl py-4 mx-auto text-sm leading-5 opacity-80">
            Elevate your projects with stunning, modern components. Simply copy
            and paste these responsive, beautiful elements for instant
            awesomeness.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 hero-buttons">
          <Link href="/" className="primary-button grow">
            Browse Components
          </Link>
          <Link href="/" className="secondary-button grow">
            Pricing
          </Link>
        </div>
      </div>
    </>
  );
};
