import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ token, setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      {/* Logo */}
      <img className="w-[max(10%,180px)]" src={assets.logoadmin} alt="Logo" />

      {/* Logout Button (Conditional Rendering) */}
      {token === "" ? (
        <></>
      ) : (
        <button
          onClick={() => setToken("")}
          className="bg-[#727D71] hover:bg-slate-800 text-white px-5 py-2 sm:px-6 rounded-md text-xs sm:text-sm transition-colors duration-300"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
