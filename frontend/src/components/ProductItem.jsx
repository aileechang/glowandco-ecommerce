import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
  return (
    <Link className='text-slate-600 font-medium cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className='w-[210px] sm:w-[200px] h-[220px] sm:h-[210px] object-contain hover:scale-110 transition ease-in-out' src={image[0]} alt={name} />
      </div>
      <p className='w-full pt-3 pb-1 px-2 text-sm'>{name}</p>
      <p className='text-sm px-2 italic'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
