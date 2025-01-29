import React from 'react'
import { assets } from '../assets/assets'
import { RiExchangeFundsLine, RiShieldCheckLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";


const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-10 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-slate-800'>
      <div>
        <RiExchangeFundsLine className='w-14 h-14 m-auto mb-5 text-[#727D71]'/>
        <p className='font-semibold'>Easy Exchange</p>
        <p className='text-slate-600'>Hassle free exchange policy</p>
      </div>

      <div>
        <RiShieldCheckLine className='w-14 h-14 m-auto mb-5 text-[#727D71]'/>
        <p className='font-semibold'>30 Days Return </p>
        <p className='text-slate-600'>A 30 days free return policy</p>
      </div>

      <div>
        <BiSupport className='w-14 h-14 m-auto mb-5 text-[#727D71]'/>
        <p className='font-semibold'>Best customer support</p>
        <p className='text-slate-600'>24/7 support provided</p>
      </div>
    </div>
  )
}

export default OurPolicy
