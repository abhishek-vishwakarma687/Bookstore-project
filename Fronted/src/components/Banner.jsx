import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mt-16 md:pt-11 mx-auto md:px-20 px-4 flex md:flex-row flex-col">
        <div className="left mt-8 w-full md:w-1/2 order-2 md:order-1">
          <div className="space-y-10">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              repellat sed ea ipsa sapiente corrupti nam magnam enim quisquam
              inventore modi, corrupti nam magnam enim quisquam inventore modi,
            </p>
            <label className="input validator w-full dark:bg-gray-400">
              <svg
                className="h-[1em] opacity-50 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                className="dark:bg-gray-400 "
                type="email"
                placeholder="Email"
                required
              />
            </label>
          </div>
          <button className="bg-pink-500 p-2 mt-6 text-white rounded-md cursor-pointer hover:bg-pink-700">
            Get started
          </button>
        </div>
        <div className="right w-full md:w-1/2 order-1">
          <img className="md:pl-24" src="/Banner.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
