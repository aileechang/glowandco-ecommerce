import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import {
  RiSearchLine,
  RiUser3Line,
  RiShoppingCartLine,
  RiMenuFill,
  RiCloseLargeFill,
  RiLoginBoxLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialPintarest,
} from "react-icons/sl";
import { IoShareSocialOutline } from "react-icons/io5";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
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

  const handleAccountClick = () => {
    setIsOpen(false);
    if (token) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  const logout = () => {
    setIsOpen(false);
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
        <ul className="flex flex-col items-left justify-between h-full text-lg font-medium text-[#6D4C3D] pt-10 pb-5">
          <div>
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
                Home
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
                Collections
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
                About
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
                Contact
              </NavLink>
            </li>
          </div>
          <div>
            <hr className="w-full border-[#6D4C3D]" />
            {token ? (
              <>
                <li className="flex flex-row items-center">
                  <button
                    onClick={handleAccountClick}
                    className="w-full px-4 py-2 hover:bg-[#6D4C3D] hover:text-[#F0EFEB] text-left"
                  >
                    My Account
                  </button>
                </li>

                <li className="flex flex-row items-center">
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-x-3 px-4 py-2 hover:bg-[#6D4C3D] hover:text-[#F0EFEB] text-left"
                  >
                    <span>Logout</span>
                    <RiLogoutBoxRLine className="w-5 h-5" />
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={handleAccountClick}
                  className="w-full flex items-center gap-x-3 px-4 py-2 hover:bg-[#6D4C3D] hover:text-[#F0EFEB] text-left"
                >
                  <span>Login</span>
                  <RiLoginBoxLine className="w-5 h-5" />
                </button>
              </li>
            )}

            <li className="mt-5 flex flex-row items-center justify-center gap-4">
              <SlSocialFacebook className="w-5 h-5 cursor-pointer" />
              <SlSocialInstagram className="w-5 h-5 cursor-pointer" />
              <SlSocialPintarest className="w-5 h-5 cursor-pointer" />
              <IoShareSocialOutline className="w-5 h-5 cursor-pointer" />
            </li>
          </div>
        </ul>
      </div>

      <Link to="/">
        <img
        onClick={()=> setIsOpen(false)}
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

        {/* User Icon */}
        <div className="relative group">
          <RiUser3Line
            onClick={handleAccountClick}
            className="sm:w-7 w-6 sm:h-7 h-6 cursor-pointer text-[#6D4C3D]"
          />
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <RiShoppingCartLine onClick={()=> setIsOpen(false)} className="sm:w-7 w-6 sm:h-7 h-6 text-[#6D4C3D]" />
          <p className="absolute right-[-6px] bottom-[-6px] w-4 text-center leading-4 bg-slate-800 text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
