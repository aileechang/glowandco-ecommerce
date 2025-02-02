import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-xl sm:text-2xl pt-10 border-t border-[#6D4C3D]'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-8 md:gap-16 mb-28">
  <div className="w-full md:w-1/2">
    <img
      src={assets.contactus}
      className="w-full h-auto object-cover rounded"
      alt="Contact Us"
      loading='lazy'
    />
  </div>

  <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
    <div>
      <p className="font-semibold text-xl text-slate-600">Our Store</p>
      <p className="text-slate-600">
        2890 Regional Pkwy Suite 101
        <br />
        Las Vegas, NV 89102
      </p>
    </div>

    <div>
      <p className="text-slate-600">
        Phone: (702) 882-0663
        <br />
        Email: contact@urbanapparel.com
      </p>
    </div>

    <div>
      <p className="font-semibold text-xl text-slate-600">Careers</p>
      <p className="text-slate-600">
        Learn more about our team and job openings.
      </p>
    </div>

    <button className="w-[150px] rounded border hover:border-[#727D71] border-slate-800 px-6 py-3 text-sm hover:bg-[#727D71] hover:text-white transition-all duration-500">
      Explore Jobs
    </button>
  </div>
</div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact
