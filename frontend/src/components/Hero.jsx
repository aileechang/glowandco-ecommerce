import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden rounded-lg">
  {/* First Image with Text and Button */}
  <div className="relative w-full md:w-1/2">
    <img
      src={assets.hero1}
      alt="Hero Image 1"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/30 p-4">
      <h2 className="text-white the-seasons text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        New Arrivals
      </h2>
      <p className="text-white text-sm sm:text-base mb-6">
        Discover the latest trends in fashion.
      </p>
      <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
        Shop Now
      </button>
    </div>
  </div>

  {/* Second Image with Text and Button */}
  <div className="relative w-full md:w-1/2">
    <img
      src={assets.hero2}
      alt="Hero Image 2"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/30 p-4">
      <h2 className="text-white the-seasons text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Explore Collections
      </h2>
      <p className="text-white text-sm sm:text-base mb-6">
        Find your perfect style with our curated collections.
      </p>
      <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
        View Collections
      </button>
    </div>
  </div>
</div>
  );
};

export default Hero;
