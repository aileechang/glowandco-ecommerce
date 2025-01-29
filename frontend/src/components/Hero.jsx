import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className={
        "relative w-full h-[88vh] md:bg-cover md:bg-center bg-right md:bg-no-repeat flex items-center justify-left"
      }
      style={{ backgroundImage: `url(${assets.hero})` }}
    >
        <div className="w-full md:w-[450px] h-[300px] md:h-[500px] p-20">
            <div className="flex flex-row gap-3 items-center ml-8">
            <hr className="border-1 border-black w-[30px]"/>
            <p className="cormorant-garamond-medium-italic text-5xl bg-none">NEW</p>
            </div>
            <p className="cormorant-garamond-bold text-6xl ml-20">ARRIVALS</p>
            <div className="flex flex-row gap-3 items-center mt-10">
            <p className="font-medium text-l tracking-wide">COLLECTION OUT NOW</p>
            <hr className="border-1 border-black w-[70px]"/>
            </div>
            <button className="bg-black text-white mt-14 ml-20 px-8 py-3 hover:text-black hover:bg-white">SHOP HERE</button>
        </div>
    </div>
  );
};

export default Hero;
