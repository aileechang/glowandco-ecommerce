import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { BsBoxSeam } from "react-icons/bs";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleStatus = async (e, orderId) => {
    try {
      const response = await axios.post(`${backendUrl}/api/order/status`, {orderId, status: e.target.value}, {headers: { token }})
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3 className="text-slate-800 text-lg mb-3">Orders</h3>
      <div>
        {orders.map((order, index) => (
          <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-t border-[#6D4C3D] p-5 md:p-8 text-xs sm:text-sm text-slate-800 font-medium" key={index}>
            <BsBoxSeam className="w-9 h-9"/>
            <div>
              <div>
                <p>Order #: <span className="font-light">{order.confirmationCode}</span></p>
              </div>
              <p className="mt-3 text-base">{order.address.firstName + " " + order.address.lastName}</p>
              <div>
                <p className="font-light">{`${order.address.street},`}</p>
                <p className="font-light">{`${order.address.city}, ${order.address.state}, ${order.address.country} ${order.address.zipcode}`}</p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div className="px-3">
              <p>Date: <span className="font-light">{new Date(order.date).toLocaleDateString()}</span></p>
              <p className="mt-3 text-sm sm:text-[15px]">Items: <span className="font-light">{order.items.length}</span></p>
              <p className="mt-3">Method: <span className="font-light">{order.paymentMethod}</span></p>
              <p className="mt-1">Payment: <span className="font-light">{order.payment ? 'Paid' : 'Pending' }</span></p>
            </div>
            <p className="text-sm sm:text-[15px]">Order Total: <span className="font-light">{currency}{order.amount}</span></p>
            <div className="flex flex-col gap-1">
            <select onChange={(e)=>handleStatus(e, order.id)} value={order.status} className="p-2 font-semibold">
              <option value="Order Placed">Order Placed</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
            <button className="bg-[#727D71] text-white text-xs sm:text-sm font-bold rounded mt-4 lg:mt-0 px-8 py-2 hover:bg-slate-800 flex items-center justify-center">Details</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
