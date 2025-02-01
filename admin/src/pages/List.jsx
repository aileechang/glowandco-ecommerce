import axios from "axios";
import React, { useState, useEffect } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { RiDeleteBin2Line } from "react-icons/ri";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.error.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id, name) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id, name },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2 text-slate-800 text-lg">All Products</p>
      <div className="flex flex-col">
        {/*--- List Table Title ---*/}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Delete</b>
        </div>

        {/*--- Product List --- */}
        {list.map((item, index) => (
  <div
    className="h-[100px] grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 px-2 py-2 border-t border-[#6D4C3D] text-sm"
    key={index}
  >
    {/* Image Container */}
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <img
        className="w-auto h-full object-contain"
        src={item.image[0]}
        alt={item.name}
      />
    </div>

    {/* Product Name */}
    <p className="truncate">{item.name}</p>

    {/* Category */}
    <p className="truncate">{item.category}</p>

    {/* Price */}
    <p className="truncate">
      {currency}
      {item.price}
    </p>

    {/* Delete Button */}
    <div
      onClick={() => removeProduct(item.id, item.name)}
      className="flex justify-center items-center"
    >
      <RiDeleteBin2Line className="w-5 h-5 cursor-pointer" />
    </div>
  </div>
))}
      </div>
    </>
  );
};

export default List;
