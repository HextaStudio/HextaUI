import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
}

export const PricingCard = ({
  title,
  price,
  features,
  description,
}: PricingCardProps) => {
  return (
    <div
      className="flex gap-3 flex-col w-full grow px-8 py-8 max-[988px]:px-4 text-left  bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 relative shadow-md rounded-2xl  z-[999] pricing-card"
      id="pricing"
    >
      <small className="absolute top-[-1rem] left-[50%] translate-x-[-50%] px-5 py-1 text-black bg-white rounded-3xl">
        Most Popular
      </small>
      <div className="flex flex-wrap justify-between gap-6">
        <div className="flex flex-col items-start space-y-3 justify-right">
          <h2 className="text-2xl font-bold mb-[-8px]">{title}</h2>
          <p className="text-sm text-zinc-300">{description}</p>
          <Link
            href="https://cal.com/preetsuthar/20min"
            className="secondary-button rounded-md max-[988px]:hidden"
          >
            Book A Call
          </Link>
        </div>
        <div className="">
          <div>
            <small>starts at</small>
            <p className="mb-2 text-4xl font-bold">
              ${price}{" "}
              <small className="text-sm font-normal opacity-80">
                <s>${Number(price + 100)}</s>
              </small>
            </p>
          </div>

          <ul className="flex flex-col gap-3 list-none mt-[1rem]">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-1 text-[14px] font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <div className="max-[988px]:flex hidden">
            <Link
              href="https://cal.com/preetsuthar/20min"
              className="secondary-button rounded-md    mt-[1.9rem] text-2xl text-center"
            >
              Book A Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const pricing = [
  {
    title: "Want a custom website?",
    price: 999,
    features: [
      "Senior Web Developer for you work",
      "24/7 On-Call Support and Communication",
      "Project-Based Pricing Model",
      "Search Engine Optimization (SEO) Services",
      "Website Speed Optimization",
      "Responsive and User-Friendly Web Design",
      "Full-Stack Web Development (Front-end and Back-end)",
      "Secure and Reliable Web Hosting Included",
    ],
    description:
      "Let's discuss your project and find the best solution for you.",
  },
];

export const Pricing = () => {
  return (
    <>
      <section className="max-w-[70rem] w-[95%] mx-auto my-[10rem]">
        <div>
          {pricing.map((pricing, index) => (
            <PricingCard
              key={index}
              title={pricing.title}
              description={pricing.description}
              price={pricing.price}
              features={pricing.features}
            />
          ))}
        </div>
      </section>
    </>
  );
};
