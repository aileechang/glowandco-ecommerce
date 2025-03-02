import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { RiStarFill, RiStarLine } from "react-icons/ri";
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    const product = products.find((item) => String(item.id) === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  return productData ? (
    <div className='border-t border-[#6D4C3D] pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* --- Product Data --- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        
        {/* --- Product Images --- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt={productData.name} />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt={productData.name} loading='lazy'/>
          </div>
        </div>

        {/* ---Product Information --- */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2 text-slate-800'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <RiStarFill className="w-3.5 h-3.5 text-yellow-500" />
              <RiStarFill className="w-3.5 h-3.5 text-yellow-500" />
              <RiStarFill className="w-3.5 h-3.5 text-yellow-500" />
              <RiStarFill className="w-3.5 h-3.5 text-yellow-500" />
              <RiStarLine className="w-3.5 h-3.5 text-yellow-500" />
              <p className='pl-2'>(89)</p>
            </div>
            <p className='mt-5 text-xl font-medium text-slate-800'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md: w-4/5'>{productData.description}</p>
            {(productData.category !== 'Beauty' && productData.subCategory !== 'Accessories') && (
              <div className="flex flex-col gap-4 my-8">
                <p>Sizes</p>
                <div className="flex gap-2">
                  {productData.sizes.map((item, index) => (
                    <button
                      onClick={()=>setSize(item)}
                      className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-[#6D4C3D] border-2' : ''}`}
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button onClick={()=>addToCart(productData.id, size, productData.category, productData.subCategory)} className='bg-[#727D71] text-white mt-4 px-8 py-3 text-sm active:bg-slate-800'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5 border-[#6D4C3D]' />
            <div className='text-sm text-slate-600 mt-5 flex flex-col gap-1'>
              <p>100% Original Product</p>
              <p>Free shipping available on qualified orders of $25+</p>
              <p>Easy 30 days return and exchange on items</p>
            </div>
        </div>
      </div>

      {/* --- Description and Reviews --- */}   
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-[#6D4C3D] px-5 py-3 text-sm cursor-pointer'>Description</b>
          <p className='border border-[#6D4C3D] px-5 py-3 text-sm cursor-pointer'>Reviews (14)</p>
        </div>
        <div className='flex flex-col gap-4 border border-[#6D4C3D] px-6 py-6 text-sm text-slate-600'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam illo nam, exercitationem ab facere officiis quis quisquam totam perspiciatis error minus iusto iste, quidem consectetur, quas adipisci cupiditate quaerat dolorum.</p>
            <p>Lorem ipsum dolor sit eaque laborum vitae iste commodi fugit illo temporibus nihil quis sapiente culpa placeat, optio eum et corporis voluptatibus consectetur, reprehenderit obcaecati? Perspiciatis!</p>
        </div>
      </div>

      {/* --- Related Products --- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
