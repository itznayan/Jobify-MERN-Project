import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div data-scroll-section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" bg-gray-950 rounded-t-sm"
      >
        <div className="mx-auto h-full px-4 py-28 md:py-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="">
              <div className="lg:max-w-xl lg:pr-5">
                <p
                  data-scroll
                  data-scroll-speed=".6"
                  className="flex text-sm uppercase text-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 inline h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  An site for which find perfect jobs for you
                </p>
                <h2
                  data-scroll
                  data-scroll-speed=".8"
                  className="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-white sm:text-7xl sm:leading-snug"
                >
                  We make you look
                  <motion.span
                    data-scroll
                    data-scroll-section
                    data-scroll-speed="-1.15"
                    initial={{ width: 0 }}
                    animate={{ width: 320 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="my-1 inline-block border-b-8 border-white bg-orange-400 px-4 font-bold text-white"
                  >
                    different
                  </motion.span>
                </h2>
                <p className="text-base text-gray-400">
                  Identify the job that is an ideal match for your skills and
                  abilities.
                </p>
              </div>
              <div
                data-scroll
                data-scroll-speed="1.2"
                data-scroll-direction="horizontal"
                className="mt-10 flex flex-col items-center md:flex-row"
              >
                <Link
                  to={"/job/getall"}
                  className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800"
                >
                  Find Now
                </Link>
                <Link
                  to={"./"}
                  aria-label=""
                  className="group inline-flex items-center font-semibold text-white"
                >
                  Watch how it works
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
              <div className="abg-orange-400 w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -left-10 -top-20 h-28 w-28 rounded-xl text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="flex w-96 flex-wrap">
                  <div className="h-48 w-1/2 rounded-full rounded-br-none bg-red-400"></div>
                  <div className="rounded-[6rem] h-48 w-1/2 rounded-tl-none rounded-br-none bg-violet-400"></div>
                  <div className="h-48 w-1/2 rounded-full rounded-b-none rounded-br-none bg-yellow-400"></div>
                  <div className="h-48 w-1/2 rounded-full rounded-t-none rounded-br-none bg-indigo-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
