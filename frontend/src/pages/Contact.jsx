import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t border-[#6D4C3D]'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contactus} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-slate-600'>Our Store</p>
          <p className='text-slate-600'>2890 Regional Pkwy Suite 101<br /> Las Vegas, NV 89102</p>
          <p className='text-slate-600'>Phone: (702) 882-0663 <br /> Email: contact@urbanapparel.com</p>
          <p className='font-semibold text-xl text-slate-600'>Careers</p>
          <p className='text-slate-600'>Learn more about our team and job openings.</p>
          <button className='border hover:border-[#727D71] border-slate-800 px-8 py-4 text-sm hover:bg-[#727D71] hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact
