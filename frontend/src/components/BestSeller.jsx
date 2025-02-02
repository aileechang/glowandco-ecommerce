import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(()=> {
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    }, [products]);
  return (
    <div className='my-12'>
      <div className='text-center text-2xl sm:text-3xl my-8'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-slate-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, esse cumque maxime.
        </p>
      </div>

      {/* Render Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index)=> (
            <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default BestSeller
