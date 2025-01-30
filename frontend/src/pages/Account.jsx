import React from 'react'

const Account = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-[#6D4C3D]'>
      {/* Left side */}
      <div className='min-w-60 h-auto border-b sm:border-b-0 sm:border-r border-[#6D4C3D]'>
      <p className='mb-3 text-md font-medium text-slate-800'>ACCOUNT INFORMATION</p>
          <div className='flex flex-col gap-2 text-md font-light text-slate-800'>
            <p className='flex gap-2 cursor-pointer'>
              Profile
            </p>
            <p className='flex gap-2 cursor-pointer'>
               Orders
            </p>
            <p className='flex gap-2 cursor-pointer'>
              Payment
            </p>
          </div>
      </div>

      {/* Right side */}
      <div className='flex-1'>
        
      </div>
    </div>
  )
}

export default Account
