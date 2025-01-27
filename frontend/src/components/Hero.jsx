import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className={
        "relative w-full h-[80vh] md:bg-cover md:bg-center md:bg-no-repeat flex flex-row items-center px-6"
      }
      style={{ backgroundImage: `url(${assets.hero})` }}
    >
      <div className="bg-white md:w-[75%] w-full h-[75%] mx-5">
        <div className="flex flex-col h-full justify-center border-4 border-white sm:p-20 md:p-15">
          <div className="flex flex-row gap-3 items-center">
            <hr className="border-b border-white w-[15%]" />
            <p className="font-medium text-[#4b483d] tracking-widest">LATEST STYLES</p>
          </div>
          <p className="cormorant-garamond-bold-italic text-6xl text-white">
            NEW <br /> ARRIVALS
          </p>
          <div className="flex flex-row gap-3 items-center">
            <p className="font-medium text-[#4b483d] tracking-widest">COLLECTION OUT NOW</p>
            <hr className="border-b border-white w-[25%]" />
          </div>
          <button className="bg-[#162512] text-white font-semibold w-[40%] rounded-3xl mt-5 px-4 py-2 hover:bg-white hover:text-black">
            SHOP HERE
          </button>
        </div>
      </div>
      <div className="hidden opacity-0 md:block w-[25%] h-[75%]"></div>
    </div>
  );
};

export default Hero;
