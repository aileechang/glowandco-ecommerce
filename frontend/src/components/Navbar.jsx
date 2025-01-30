import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  RiSearchLine,
  RiUser3Line,
  RiShoppingCartLine,
  RiMenuFill,
  RiCloseLargeFill,
} from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {
    setShowSearch,
    cartItems,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const location = useLocation();
  const isCollectionPage = location.pathname === "/collection";

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-4 font-medium">
      {/* Menu */}
      <button onClick={() => setIsOpen(!isOpen)} className="">
        {isOpen ? (
          <RiCloseLargeFill className="sm:w-8 w-7 sm:h-8 h-7 text-[#6D4C3D]" />
        ) : (
          <RiMenuFill className="sm:w-8 w-7 sm:h-8 h-7 text-[#6D4C3D]" />
        )}
      </button>
      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[230px] sm:w-[210px] bg-[#F0EFEB] z-50 transform ${
          isOpen
            ? "translate-x-0 border-r-2 border-[#6D4C3D]"
            : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4"
        >
          <RiCloseLargeFill className="sm:w-8 w-7 sm:h-8 h-7 text-[#6D4C3D]" />
        </button>

        {/* Links */}
        <ul className="flex flex-col items-left justify-start h-full text-lg font-medium text-[#6D4C3D] py-10">
          <li className="pt-6 flex flex-row items-center">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-[#6D4C3D] text-[#F0EFEB]"
                    : "hover:bg-[#6D4C3D] hover:text-[#F0EFEB]"
                }`
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="flex flex-row items-center">
            <NavLink
              to="/collection"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-[#6D4C3D] text-[#F0EFEB]"
                    : "hover:bg-[#6D4C3D] hover:text-[#F0EFEB]"
                }`
              }
            >
              COLLECTIONS
            </NavLink>
          </li>
          <li className="flex flex-row items-center">
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-[#6D4C3D] text-[#F0EFEB]"
                    : "hover:bg-[#6D4C3D] hover:text-[#F0EFEB]"
                }`
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li className="flex flex-row items-center">
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-[#6D4C3D] text-[#F0EFEB]"
                    : "hover:bg-[#6D4C3D] hover:text-[#F0EFEB]"
                }`
              }
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>

      <Link to="/">
        <img
          src={assets.logo}
          className="sm:w-[210px] w-[180px] h-auto"
          alt="logo"
        />
      </Link>

      <div className="relative flex items-center gap-3 sm:gap-4">
        {isCollectionPage && (
          <RiSearchLine
            onClick={() => setShowSearch(true)}
            className="sm:w-7 w-6 sm:h-7 h-6 cursor-pointer text-[#6D4C3D]"
          />
        )}

        {token && (
            <p
          onClick={logout}
          className="cursor-pointer text-slate-600 transition-all duration-300"
        >
          Logout
        </p>
        )}

        {/* User Icon */}
        <div className="relative group">
          <RiUser3Line
            onClick={() => (token ? navigate("/account") : navigate("/login"))}
            className="sm:w-7 w-6 sm:h-7 h-6 cursor-pointer text-[#6D4C3D]"
          />
          {/* Dropdown Menu */}
          {/*
          {token && (
            <div className="absolute right-0 pt-1 hidden group-hover:block z-50">
              <div className="flex flex-col w-36 border-2 border-[#6D4C3D] bg-[#F0EFEB] text-[#6D4C3D] rounded-sm shadow-lg">
                <p className="cursor-pointer py-3 px-2 hover:bg-[#6D4C3D] hover:text-[#F0EFEB] transition-all duration-300">
                  Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer py-3 px-2 hover:bg-[#6D4C3D] hover:text-[#F0EFEB] transition-all duration-300"
                >
                  Orders
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer py-3 px-2 hover:bg-[#6D4C3D] hover:text-[#F0EFEB] transition-all duration-300"
                >
                  Logout
                </p>
              </div>
            </div>
          )}*/}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <RiShoppingCartLine className="sm:w-7 w-6 sm:h-7 h-6 text-[#6D4C3D]" />
          <p className="absolute right-[-6px] bottom-[-6px] w-4 text-center leading-4 bg-slate-800 text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
