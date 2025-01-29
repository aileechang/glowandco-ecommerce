import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className={
        `relative w-full h-[88vh] md:bg-cover md:bg-center bg-right md:bg-no-repeat flex items-center justify-center md:justify-start rounded-xl`
      }
      style={{ backgroundImage: `url(${assets.hero})` }}
    >
      <div className="bg-white w-full md:w-[45%] m-10 md:m-15 py-8 px-4 flex justify-center md:justify-start rounded-xl">
        <div className="w-full md:w-[5800px] flex flex-col items-center">
          <div className="flex flex-row gap-3 items-center">
            <hr className="border-1 border-black w-[30px]" />
            <p className="cormorant-garamond-regular-italic text-slate-800 text-4xl bg-none">
              NEW
            </p>
          </div>
          <p className="cormorant-garamond-bold-italic text-[#727D71] text-6xl">
            ARRIVALS
          </p>
          <div className="flex flex-row gap-3 items-center mt-1">
            <p className="font-semibold text-md md:text-sm text-slate-600 tracking-wide">
              LATEST COLLECTION HERE
            </p>
            <hr className="border-2 border-slate-600 w-[50px] md:w-[70px]" />
          </div>
          <button className="bg-[#727D71] text-white font-bold rounded-full  mt-16 px-8 py-3 hover:bg-[#6D4C3D]">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
