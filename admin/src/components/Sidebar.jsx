import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiAddCircleLine, RiListCheck, RiContractLine } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r border-[#6D4C3D]">
  <div className="flex flex-col gap-4 pt-6 pl-[10%] text-[15px]">
    {/* Add Product */}
    <NavLink
      to="/add"
      className={({ isActive }) =>
        `flex items-center gap-3 border border-[#6D4C3D] border-r-0 px-3 py-2 text-slate-800 transition-all duration-300 ${
          isActive ? "bg-[#6D4C3D] text-white" : "hover:bg-[#6D4C3D] hover:text-white"
        }`
      }
    >
      <RiAddCircleLine className="w-5 h-5" />
      <p className="hidden md:block">Add Product</p>
    </NavLink>

    {/* All Products */}
    <NavLink
      to="/list"
      className={({ isActive }) =>
        `flex items-center gap-3 border border-[#6D4C3D] border-r-0 px-3 py-2 transition-all duration-300 ${
          isActive ? "bg-[#6D4C3D] text-white" : "hover:bg-[#6D4C3D] hover:text-white"
        }`
      }
    >
      <RiListCheck className="w-5 h-5" />
      <p className="hidden md:block">Products</p>
    </NavLink>

    {/* All Orders */}
    <NavLink
      to="/orders"
      className={({ isActive }) =>
        `flex items-center gap-3 border border-[#6D4C3D] border-r-0 px-3 py-2 transition-all duration-300 ${
          isActive ? "bg-[#6D4C3D] text-white" : "hover:bg-[#6D4C3D] hover:text-white"
        }`
      }
    >
      <RiContractLine className="w-5 h-5" />
      <p className="hidden md:block">Orders</p>
    </NavLink>
  </div>
</div>
  )
}

export default Sidebar;
