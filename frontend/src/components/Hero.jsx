import React from "react";
// import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-400 py-12 px-6 text-center">
      <div className="flex items-center">
        <span className="relative mr-3 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500"></span>
        </span>
        <p className="text-2xl font-semibold text-gray-800">
          The website is paused for now. Please reach out to the creator for
          more info.
        </p>
      </div>
      {/* Hero Left Side */}
      {/* <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div> */}
      {/* Hero Right Side */}
      {/* <img src={assets.hero_img} className="w-full sm:w-1/2" alt="" /> */}
    </div>
  );
};

export default Hero;
