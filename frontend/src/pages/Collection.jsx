import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { RiFilter2Line, RiArrowDropRightLine } from "react-icons/ri";
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  }

  const sortProduct = () => {
    let filterProductsCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(filterProductsCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(filterProductsCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=> {
    applyFilter();
  }, [category, subCategory, search, showSearch, products])

  useEffect(()=> {
    sortProduct();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-[#6D4C3D]'>
      
      {/* Filter */}
      <div className='min-w-60 h-auto border-b sm:border-b-0 sm:border-r border-[#6D4C3D]'>
        <div onClick={()=>setShowFilter(!showFilter)} className='flex items-center cursor-pointer gap-1'>
          <p className='my-2 text-xl flex items-center text-slate-800'>
            <RiFilter2Line className='w-5 h-5 text-slate-800'/>
            FILTER
          </p>
          <RiArrowDropRightLine className={`w-5 h-5 text-slate-600 sm:hidden ${showFilter ? 'rotate-90' : ''}`}/>
        </div>
        
        {/* Categories */}
        <div className={`bg-white sm:bg-inherit border-b border-slate-300 mx-4 pl-5 py-3 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-slate-800'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-slate-800'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Mens'} onChange={toggleCategory} /> Mens
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Womens'} onChange={toggleCategory} /> Womens
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Beauty'} onChange={toggleCategory} /> Beauty
            </p>
          </div>
        </div>

        {/* Sub Categories */}
        <div className={`bg-white sm:bg-inherit mx-4 pl-5 py-3 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-slate-800'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-slate-800'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Apparel'} onChange={toggleSubCategory} /> Apparel
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Accessories'} onChange={toggleSubCategory} /> Accessories
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Shoes'} onChange={toggleSubCategory} /> Shoes
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Hair'} onChange={toggleSubCategory} /> Hair
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Skin'} onChange={toggleSubCategory} /> Skin
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-xl sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Sort Products */}
          <div className='flex gap-1 items-center text-sm mx-2'>
            <p className='font-medium'>Sort by:</p>
            <select onChange={(e)=>setSortType(e.target.value)} className='border border-slate-600'>
              <option value="relavent">Relavent</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
          </select>
          </div>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6'>
          {filterProducts.map((item, index)=>(
            <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image} />
          ))}
        </div>

      </div>

    </div>
  )
}

export default Collection
