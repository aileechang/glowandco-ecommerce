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
    <div className="pt-10 border-t border-[#6D4C3D] text-lg sm:text-xl font-md">
      <Title text1={"ORDER"} text2={"DETAILS"} />
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="mb-6">
          <p className="text-base sm:text-lg">
            Confirmation Code: <span className="font-light ml-2">{orderData.confirmationCode}</span>
          </p>
          <p className="text-base sm:text-lg">
            Date:{" "}
            <span className="font-light ml-2">{new Date(orderData.date).toLocaleDateString()}</span>
          </p>
          <p className="text-base sm:text-lg">
            Total: <span className="font-light ml-2">{currency}{orderData.amount.toFixed(2)}</span>
          </p>
          <p className="text-base sm:text-lg">
            Status: <span className="font-light ml-2">{orderData.status}</span>
          </p>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl font-md mb-2">Items</h2>
          {orderData.items.map((item) => (
            <div key={item.id} className="border-b py-4">
              <p className="text-base sm:text-lg">
                Product: <span className="font-light ml-2">{item.name}</span>
              </p>
              <p className="text-base sm:text-lg">
                Quantity: <span className="font-light ml-2">{item.quantity}</span>
              </p>
              <p className="text-base sm:text-lg">
                Price: <span className="font-light ml-2">{currency}{item.price.toFixed(2)}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Link to="/account?section=Orders" className="px-6 py-2">
        Back
      </Link>{" "}
    </div>
  );
};

export default OrderDetails;
