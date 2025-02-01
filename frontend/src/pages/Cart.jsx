import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { RiDeleteBin2Line } from "react-icons/ri";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (cartItems && Object.keys(cartItems).length > 0 && products.length > 0) {
      const tempData = [];

      for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
          const quantity = cartItems[itemId][size];
          if (quantity > 0) {
            tempData.push({
              id: itemId,
              size: size,
              quantity: quantity,
            });
          }
        }
      }

      if (JSON.stringify(tempData) !== JSON.stringify(cartData)) {
        setCartData(tempData);
      }
    }
  }, [cartItems, products, cartData]);

  return (
    <div className="border-t border-[#6D4C3D] pt-14">
      <div className="text-3xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="px-5 sm:px-10">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => String(product.id) === item.id
          );

          return (
            <div
              className="py-4 border-t border-[#6D4C3D] text-slate-800 grid grid-cols[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              key={index}
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    {!(
                      productData.category === "Beauty" &&
                      productData.subCategory === "Accessories"
                    ) ? (
                      <p className="px-2 sm:px-3 sm:py-1">{item.size}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item.id, item.size, Number(e.target.value))
                }
                className="border max-w-8 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <RiDeleteBin2Line
                onClick={() => updateQuantity(item.id, item.size, 0)}
                className="w-5 h-5 mr-4 sm:w-5 text-slate-600 cursor-pointer"
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px] bg-white rounded-md shadow-md border-2 border-[#6D4C3D] px-4 py-6">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-[#727D71] text-[#F0EFEB] hover:bg-slate-800 text-sm my-8 px-8 py-3"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
