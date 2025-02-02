import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { RiSearchLine, RiCloseLine } from "react-icons/ri";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=> {
        if (location.pathname.includes('collection')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location])

  return showSearch && visible ? (
    <div className='border-t border-b border-[#6D4C3D] text-center'>
        <div className='inline-flex items-center justify-center bg-gray-50 border border-[#6D4C3D] px-5 py-2 my-4 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
            <RiSearchLine className='w-5 h-5 text-[#6D4C3D]' />
        </div>
        <RiCloseLine onClick={()=>setShowSearch(false)} className='inline w-5 h-5 text-slate-600 cursor-pointer' />
    </div>
  ) : null
}

export default SearchBar
