import React from "react";

const HomeBanner = () => {
  return (
    <div className="bg-gray-800 md:h-[600px] flex justify-center h-[200px]">
      <div className="flex flex-col items-center md:gap-6 gap-3 dark:text-white md:my-40 my-10">
        <h1 className="md:text-8xl dark:text-white text-2xl">
          The Blog.<sapn className="text-blue-500">.</sapn>.
        </h1>
        <p className="md:text-3xl">
          Let them <span className="text-blue-500">know</span> you and find your
          people!
        </p>
        <div className="">
          <button
            type="button"
            className="md:py-3 md:px-4 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Read Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
