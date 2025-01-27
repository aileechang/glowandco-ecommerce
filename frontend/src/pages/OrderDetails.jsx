import React, { useState, useEffect, useContext } from "react";
import Title from "../components/Title";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const OrderDetails = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState({});
  const { confirmationCode } = useParams();

  const loadOrderData = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/orderdetails`,
        { confirmationCode },
        { headers: { token } }
      );
      console.log("Response success", response.data.order);
      if (response.data.success) {
        setOrderData(response.data.order);
      }
      console.log("Order data:", orderData);
    } catch (error) {
      console.log("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token, confirmationCode]);

  return (
    <div className="px-2 sm:px-8">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ORDER"} text2={"DETAILS"} />
      </div>
      <div className="flex flex-col items-center gap-6">
        {/* Order information */}
        <div className="w-full">
          <p className="text-xl font-bold mb-3">
            Order #<span> {orderData.confirmationCode}</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-2 mx-10 font-semibold text-md">
            <div className="flex flex-col gap-2">
              <p>
                Date:{" "}
                <span className="font-normal ml-1">
                  {new Date(orderData.date).toDateString()}
                </span>
              </p>
              <p>
                Payment:{" "}
                <span className="font-normal ml-1">
                  {orderData.paymentMethod}
                </span>
              </p>
              <p>{orderData.payment ? "PAID" : "UNPAID"}</p>
            </div>
            <div className="flex flex-col gap-2 text-start sm:text-end">
              <p>({orderData.items.length} Items)</p>
              <p>
                Total:{" "}
                <span className="font-normal ml-1">
                  {currency}
                  {orderData.amount}
                </span>
              </p>
              <p>
                Status:{" "}
                <span className="font-normal ml-1">{orderData.status}</span>
              </p>
            </div>
          </div>
        </div>
        {/* Order items */}
        <div className="w-full">
          {orderData.items.map((item, index) => (
            <div
              key={index}
              className="border-t flex flex-col sm:flex-row justify-between px-8 py-4 gap-1 sm:gap-10"
            >
              {/* Image and Description */}
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-6">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <p className="w-3/4">{item.name}</p>
              </div>

              {/* Size and Quantity */}
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-6">
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        <Link to={"/orders"}>
          <p className="text-blue-500">Back to orders</p>
        </Link>
      </div>
    </div>
  );
};

export default OrderDetails;
