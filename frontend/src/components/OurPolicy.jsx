import React from 'react'
import { assets } from '../assets/assets'
import { RiExchangeFundsLine, RiShieldCheckLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";


const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around pag-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <RiExchangeFundsLine className='w-12 h-12 m-auto mb-5'/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer a hassle free exchange policy</p>
      </div>

      <div>
        <RiShieldCheckLine className='w-12 h-12 m-auto mb-5'/>
        <p className='font-semibold'>30 Days Return Policy</p>
        <p className='text-gray-400'>We provide a 30 days free return policy</p>
      </div>

      <div>
        <BiSupport className='w-12 h-12 m-auto mb-5'/>
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy
