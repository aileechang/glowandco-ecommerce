import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='w-32 mb-5' src={assets.logo} alt="logo" loading='lazy'/>
            <p className='w-full md:w-2/3 text-slate-600'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum qui, ab culpa perspiciatis harum optio eaque vel officia atque excepturi iste odio enim temporibus esse saepe.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium text-slate-800 mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-slate-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Shipping</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium text-slate-800 mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-slate-600'>
                <li>+1 202-836-0221</li>
                <li>contact@glowandco.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr className='border-[#6D4C3D]' />
        <p className='py-5 text-sm text-slate-800 font-medium text-center'>Copyright 2025@glowandco.com - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
