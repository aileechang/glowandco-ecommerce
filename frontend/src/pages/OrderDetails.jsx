import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import Title from "../components/Title";

const OrderDetails = () => {
  const { currency, token, backendUrl } = useContext(ShopContext);
  const [orderData, setOrderData] = useState(null);

  const { confirmationCode } = useParams();

  const fetchOrderDetails = async (confirmationCode) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/order/${confirmationCode}`,
        {
          headers: { token },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        setOrderData(response.data.order);
      }
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  useEffect(() => {
    if (confirmationCode && token) {
      fetchOrderDetails(confirmationCode);
    }
  }, [confirmationCode, token]);

  // Render nothing until orderData is populated
  if (!orderData) {
    return null;
  }

  return (
    <div className="flex flex-col pt-14 border-t border-[#6D4C3D] text-lg sm:text-xl font-md">
      <div className="mx-20">
        <div className="text-2xl mb-3">
          <Title text1={"ORDER"} text2={"DETAILS"} />
        </div>

        <div className="flex sm:flex-row flex-col items-start sm:items-end md:gap-20 sm:gap-10 gap-2">
          <div>
            <p className="text-base sm:text-lg">
              Order #:{" "}
              <span className="font-light ml-2">
                {orderData.confirmationCode}
              </span>
            </p>
            <p className="text-base sm:text-lg">
              Date:{" "}
              <span className="font-light ml-2">
                {new Date(orderData.date).toLocaleDateString()}
              </span>
            </p>
          </div>
          <div>
            <p className="text-base sm:text-lg">
              Status:{" "}
              <span className="font-light ml-2">{orderData.status}</span>
            </p>
          </div>
          <div>
            <p className="text-base sm:text-lg">
              Total:{" "}
              <span className="font-light ml-2">
                {currency}
                {orderData.amount.toFixed(2)}
              </span>
            </p>
          </div>
        </div>
        <hr className="border-slate-600 my-4" />

        <div>
          {orderData.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-4 border-b border-slate-300 py-4"
            >
              {item.image && item.image.length > 0 && (
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
              )}

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
                <p className="text-base sm:text-lg flex-1">
                  <span className="font-light">{item.name}</span>
                </p>

                <p className="text-base sm:text-lg flex-1">
                  {item.size ? (
                    <>
                      Size: <span className="font-light">{item.size}</span>
                    </>
                  ) : (
                    <span className="font-light">—</span>
                  )}
                </p>

                <p className="text-base sm:text-lg flex-1">
                  Quantity: <span className="font-light">{item.quantity}</span>
                </p>

                <p className="text-base sm:text-lg flex-1">
                  Price:{" "}
                  <span className="font-light">
                    {currency}
                    {item.price.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-slate-600 mb-4" />
        <Link to="/account?section=Orders" className="px-6 py-2 text-lg">
          Back
        </Link>
      </div>
    </div>
  );
};

export default OrderDetails;
