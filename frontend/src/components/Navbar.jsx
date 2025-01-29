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
  const { setShowSearch, cartItems, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
  const location = useLocation();
  const isCollectionPage = location.pathname === "/collection";

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  }

  return (
    <div className="flex items-center justify-between py-4 font-medium">
      {/* Menu */}
      <button onClick={() => setIsOpen(!isOpen)} className="">
      {isOpen ? 
        <RiCloseLargeFill className="sm:w-8 w-7 sm:h-8 h-7 text-[#6D4C3D]"/>
        : <RiMenuFill className="sm:w-8 w-7 sm:h-8 h-7 text-[#6D4C3D]"/>
        }
      </button>
      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[230px] sm:w-[210px] bg-[#6D4C3D] z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4"
        >
          <RiCloseLargeFill className="sm:w-8 w-7 sm:h-8 h-7 text-[#F0EFEB]"/>
        </button>

        {/* Links */}
        <ul className="flex flex-col items-left justify-start h-full text-lg font-medium text-[#F0EFEB] py-10">
  <li className="pt-6 flex flex-row items-center">
    <hr className={`w-3 border-none h-full bg-[#727D71] ${location.pathname === "/" ? "block" : "hidden"}`} />
    <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) =>
        `w-full px-4 py-2 transition-all duration-300 ${isActive ? 'bg-[#F0EFEB] text-[#727D71]' : 'hover:bg-[#F0EFEB] hover:text-[#727D71]'}`}>HOME</NavLink>
  </li>
  <li className="flex flex-row items-center">
    <hr className={`w-3 border-none h-full bg-[#727D71] ${location.pathname === "/collection" ? "block" : "hidden"}`} />
    <NavLink to="/collection" onClick={() => setIsOpen(false)} className={({ isActive }) =>
        `w-full px-4 py-2 transition-all duration-300 ${isActive ? 'bg-[#F0EFEB] text-[#727D71]' : 'hover:bg-[#F0EFEB] hover:text-[#727D71]'}`}>COLLECTIONS</NavLink>
  </li>
  <li className="flex flex-row items-center">
    <hr className={`w-3 border-none h-full bg-[#727D71] ${location.pathname === "/about" ? "block" : "hidden"}`} />
    <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) =>
        `w-full px-4 py-2 transition-all duration-300 ${isActive ? 'bg-[#F0EFEB] text-[#727D71]' : 'hover:bg-[#F0EFEB] hover:text-[#727D71]'}`}>ABOUT US</NavLink>
  </li>
  <li className="flex flex-row items-center">
    <hr className={`w-3 border-none h-full bg-[#727D71] ${location.pathname === "/contact" ? "block" : "hidden"}`} />
    <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) =>
        `w-full px-4 py-2 transition-all duration-300 ${isActive ? 'bg-[#F0EFEB] text-[#727D71]' : 'hover:bg-[#F0EFEB] hover:text-[#727D71]'}`}>CONTACT US</NavLink>
  </li>
</ul>


      </div>
      
      <Link to='/'>
        <img src={assets.logo} className="sm:w-[210px] w-[180px] h-auto" alt="logo" />
      </Link>
      <div className="group relative flex items-center gap-5">
      <RiUser3Line onClick={()=>token ? null : navigate('/login')} className="sm:w-7 w-6 sm:h-7 h-6 cursor-pointer text-[#6D4C3D]" />
      <Link to="/cart" className="relative">
          <RiShoppingCartLine className="sm:w-7 w-6 sm:h-7 h-6 text-[#6D4C3D]" />
            <p className="absolute right-[-6px] bottom-[-6px] w-4 text-center leading-4 bg-slate-800 text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
      </div>
      {/*
      <Link to='/'>
        <img src={assets.logo} className="sm:w-[220px] w-[190px] h-auto" alt="logo" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm  text-[#6D4C3D] p-4">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
      </ul>
*/}{/*
      <div className="flex items-center gap-5">
        {isCollectionPage && (
          <RiSearchLine onClick={()=>setShowSearch(true)} className="w-5 h-5 cursor-pointer text-black" />
        )}

        <div className="group relative">
          <RiUser3Line onClick={()=>token ? null : navigate('/login')} className="w-5 h-5 cursor-pointer text-black" />
      */}
          {/* Dropdown Menu */}
          {/*
          {token &&
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-[#6d4c3d] rounded">
              <p className="cursor-pointer hover:text-black bg-white">Profile</p>
              <p onClick={()=> navigate('/orders')} className="cursor-pointer bg-white hover:text-black">Orders</p>
              <p onClick={logout} className="cursor-pointer bg-white hover:text-black">Logout</p>
            </div>
          </div>}
        </div>
        <Link to="/cart" className="relative">
          <RiShoppingCartLine className="w-5 h-5 min-w-5 text-black" />
          <p className="absolute right-[-6px] bottom-[-6px] w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <RiMenuFill
          onClick={() => setVisible(true)}
          className="w-5 h-5 cursor-pointer sm:hidden"
        />
      </div> */}

      {/* Sidebar menu for small screens */}
      {/*
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
*/}
    </div>
  );
};

export default Navbar;
