import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
  return (
    <Link className="font-medium cursor-pointer block w-[220px] sm:w-[210px]" to={`/product/${id}`}>

  <div className="overflow-hidden w-full h-[230px] sm:h-[220px]">
    <img
      className="w-full h-full object-contain hover:scale-110 transition ease-in-out"
      src={image[0]}
      alt={name}
    />
  </div>

  <div className="w-full pt-3 pb-1 px-2">
    <p className="text-sm text-slate-800 truncate">{name}</p>
    <p className="text-sm italic text-slate-600">{currency}{price}</p>
  </div>
</Link>
  )
}

export default ProductItem
