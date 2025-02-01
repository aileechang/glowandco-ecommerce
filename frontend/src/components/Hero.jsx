import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className={
        `relative w-full h-[88vh] bg-cover bg-center bg-no-repeat flex items-center justify-center md:justify-start rounded-xl`
      }
      style={{ backgroundImage: `url(${assets.hero})` }}
    >
      <div className="bg-white w-[520px] md:w-[550px] m-10 md:m-15 lg:ml-20 py-8 px-4 flex justify-center md:justify-start rounded-xl">
        <div className="w-full md:w-[5800px] flex flex-col items-center">
          <div className="flex flex-row gap-3 items-center">
            <hr className="border-1 border-black w-[30px]" />
            <p className="the-seasons italic text-slate-800 text-3xl md:text-4xl bg-none">
              NEW
            </p>
          </div>
          <p className="the-seasons italic text-[#727D71] text-5xl md:text-6xl">
            ARRIVALS
          </p>
          <div className="flex flex-row gap-3 items-center mt-1">
            <p className="font-semibold text-sm md:text-base text-slate-600 tracking-widest">
              LATEST COLLECTION HERE
            </p>
            <hr className="border-2 border-slate-600 w-[50px] md:w-[70px]" />
          </div>
          <button className="bg-[#727D71] text-white font-bold rounded-full mt-16 px-8 py-3 hover:bg-slate-800">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
