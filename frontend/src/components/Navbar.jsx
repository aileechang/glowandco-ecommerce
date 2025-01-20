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
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const location = useLocation();
  const isCollectionPage = location.pathname === "/collection";

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to='/'>
        <img src={assets.logo} className="w-36" alt="logo" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        {isCollectionPage && (
          <RiSearchLine onClick={()=>setShowSearch(true)} className="w-5 h-5 cursor-pointer" />
        )}

        <div className="group relative">
          <Link to='/login'><RiUser3Line className="w-5 h-5 cursor-pointer" /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <RiShoppingCartLine className="w-5 h-5 min-w-5" />
          <p className="absolute right-[-6px] bottom-[-6px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <RiMenuFill
          onClick={() => setVisible(true)}
          className="w-5 h-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 h-full bg-white transition-all duration-300 border ${visible ? "w-3/4" : "w-0"}`}>
        <div className="flex flex-col text-gray-600">
            <div onClick={() => setVisible(false)} className="flex items-center gap-1 p-3 cursor-pointer justify-end">
                <RiCloseLargeFill className="w-5 h-5" />
            </div>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
