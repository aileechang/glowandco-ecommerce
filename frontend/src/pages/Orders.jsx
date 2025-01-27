import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  const loadOrderData = async () => {
    try {

      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      }
    } catch (error) {
      console.log("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {orders
          .slice()
          .reverse()
          .map((order) => (
            <div
              key={order.id}
              className="py-4 border-t border-b text-gray-700"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div>
                  <p className="sm:text-base font-semibold">
                    Order # <br />{" "}
                    <span className="font-normal text-gray-600">
                      {order.confirmationCode}
                    </span>
                  </p>
                  <p className="mt-3 sm:text-base font-semibold">
                    Date:{" "}
                    <span className="font-normal text-gray-600">
                      {new Date(order.date).toDateString()}
                    </span>
                  </p>
                </div>
                <p className="sm:text-base font-semibold">
                  Items:{" "}
                  <span className="font-normal text-gray-600">
                    {order.items.length}
                  </span>
                </p>
                <p className="sm:text-base font-semibold">
                  Total:{" "}
                  <span className="font-normal text-gray-600">
                    {currency}
                    {order.amount}
                  </span>
                </p>
                <p className="sm:text-base font-semibold">
                  Status:{" "}
                  <span className="font-normal text-gray-600">
                    {order.status}
                  </span>
                </p>
                {/*<Link to={`/details/${order.confirmationCode}`}>*/}
                  <button className="border border-gray-300 text-gray-700 hover:bg-black hover:text-white sm:px-6 px-4 py-2 text-sm font-semibold rounded-md">
                    View Order
                  </button>
                {/*</Link>*/}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Orders;
