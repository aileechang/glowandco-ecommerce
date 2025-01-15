import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiAddCircleLine, RiListCheck, RiContractLine } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[10%] text-[15px]'>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to='/add'>
            <RiAddCircleLine className='w-5 h-5'/>
            <p className='hidden md:block'>Add Product</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to='/list'>
            <RiListCheck className='w-5 h-5'/>
            <p className='hidden md:block'>Products</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to='/orders'>
            <RiContractLine className='w-5 h-5'/>
            <p className='hidden md:block'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar;
