import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const NewArrivals = () => {
  const { products } = useContext(ShopContext);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    setNewArrivals(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-2xl sm:text-3xl">
        <Title text1={"NEW"} text2={"ARRIVALS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-slate-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Render Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-6">
        {newArrivals.map((item, index)=> (
            <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
