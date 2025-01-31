import React from 'react'

const NewsLetterBox = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-semibold text-slate-800'>Subscribe now & get 25% off</p>
        <p className='text-slate-600 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam saepe, blanditiis consequatur dolore.</p>
        <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 bg-white border border-[#727D71] rounded pl-3'>
            <input className='w-full sm:flex-1 outline-none bg-inherit' type="email" placeholder='Enter your email' required />
            <button type='submit' className='bg-[#727D71] text-white hover:bg-slate-800 text-xs font-bold  tracking-wide px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
