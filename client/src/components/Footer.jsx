import React from "react";

const Footer = () => {
  return (
    <div className="h-[180px] md:h-[300px] dark:bg-gray-800 flex flex-col gap-5 justify-center items-center">
      <div className="dark:text-white md:text-3xl text-xl">
        Developed By : Abhishek Sharma
      </div>
      <div className="dark:text-white">Links</div>
    </div>
  );
};

export default Footer;
