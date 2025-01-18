import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER</p>
        {/* Categories */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Mens'} /> Mens
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Womens'} /> Womens
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} /> Kids
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Beauty'} /> Beauty
            </p>
          </div>
        </div>

        {/* Sub Categories */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Apparel'} /> Apparel
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Accessories'} /> Accessories
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Shoes'} /> Shoes
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Hair'} /> Hair
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Skin'} /> Skin
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Collection
