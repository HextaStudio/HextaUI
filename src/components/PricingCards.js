import Link from "next/link";
import React from "react";

const PricingCards = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-8 mt-[4rem]  max-[915px]:flex-col">
      {/* Card 1 */}
      <div className="flex gap-3 flex-col w-full max-w-[20rem] p-4 text-left bg-black border border-white shadow-md rounded-2xl border-opacity-10 grow ">
        <h3 className="text-xl font-bold ">Existing Components</h3>
        <div>
          <small>Tada ~</small>
          <p className="mb-2 text-3xl font-bold">Free</p>
        </div>
        <p className="mb-6 text-sm text-zinc-300">
          All the components that are free to use for your websites.
        </p>
        <ul className="flex flex-col gap-3 list-none ">
          <li className="flex gap-1 text-[14px]">
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
            Access to all free to use components
          </li>
          <li className="flex gap-1 text-[14px]">
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
            React/Next.js/Tailwind CSS code
          </li>
          <li className="flex gap-1 text-[14px]">
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
            Personal or commercial projects
          </li>
          <li className="flex gap-1 text-[14px]">
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
            Free to use forever
          </li>
        </ul>
        <Link
          href="/components"
          className="flex mt-5 secondary-button"
          style={{
            width: "100%",
          }}
        >
          Browse Components
        </Link>
      </div>
      {/* Card 2 */}
      <div className="flex gap-3 flex-col w-full max-w-[20rem] p-4 text-left bg-black border border-white relative shadow-md rounded-2xl grow  ">
        <small className="absolute top-[-1rem] left-[50%] translate-x-[-50%] px-5 py-1 text-black bg-white rounded-3xl">
          Most Popular
        </small>
        <h3 className="text-xl font-bold ">Custom Components</h3>
        <div>
          <small>starts at</small>
          <p className="mb-2 text-3xl font-bold">$699/m</p>
        </div>
        <p className="mb-6 text-sm text-zinc-300">
          Perfect for attractive and awesome website elements or sections.
        </p>
        <ul className="flex flex-col gap-3 list-none ">
          <li className="flex gap-1 text-[14px]">
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
            Senior developer for your work
          </li>
          <li className="flex gap-1 text-[14px]">
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
            Unlimited design development
          </li>
          <li className="flex gap-1 text-[14px]">
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
            On call communication
          </li>
          <li className="flex gap-1 text-[14px]">
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
            One request at a time
          </li>
          <li className="flex gap-1 text-[14px]">
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
            Pause or cancel anytime
          </li>
        </ul>
        <Link
          href="https://cal.com/preetsuthar/20min"
          className="mt-5 primary-button"
          style={{
            width: "100%",
          }}
        >
          Book A Call
        </Link>
      </div>
      {/* Card 3 */}
      <div className="flex gap-3 flex-col w-full max-w-[20rem] p-4 text-left bg-black border border-white shadow-md rounded-2xl border-opacity-10 grow ">
        <h3 className="text-xl font-bold ">Multi Page Website</h3>
        <div>
          <small>starts at</small>
          <p className="mb-2 text-3xl font-bold">$1,499</p>
        </div>
        <p className="mb-6 text-sm text-zinc-300">
          Best for small businesses and startups that need awesome website.
        </p>
        <ul className="flex flex-col gap-3 list-none ">
          <li className="flex gap-1 text-[14px]">
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
            Senior developer for your work
          </li>
          <li className="flex gap-1 text-[14px]">
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
            Pay per project
          </li>
          <li className="flex gap-1 text-[14px]">
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
            Quick response time
          </li>
          <li className="flex gap-1 text-[14px]">
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
            On call communication
          </li>
          <li className="flex gap-1 text-[14px]">
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
            One request at a time
          </li>
          <li className="flex gap-1 text-[14px]">
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
            SEO Optimization
          </li>
        </ul>
        <Link
          href="https://cal.com/preetsuthar/20min"
          className="mt-5 secondary-button"
          style={{
            width: "100%",
          }}
        >
          Book A Call
        </Link>
      </div>
    </div>
  );
};

export default PricingCards;
