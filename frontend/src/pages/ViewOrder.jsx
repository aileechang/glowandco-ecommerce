import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to get the order ID from URL

const ViewOrder = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [order, setOrder] = useState(null);  // State to hold order details
  const [orderItems, setOrderItems] = useState([]); // State to hold order items
  const { orderId } = useParams();  // Get order ID from URL params

  const loadOrderDetails = async () => {
    try {
      if (!token) {
        return; // If there's no token, do nothing or redirect to login
      }

    } catch (error) {
      console.log('Error fetching order details:', error);
    }
  };

  useEffect(() => {
    loadOrderDetails();  // Load order details when the component mounts
  }, [token, orderId]);  // Rerun effect when token or orderId changes

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={'ORDER'} text2={'DETAILS'} />
      </div>

      
        <div className="py-4 border-t border-b text-gray-700">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div>
              <p className="sm:text-base font-semibold">
                Order # <br />{' '}
                <span className="font-normal text-gray-600">{order.confirmationCode}</span>
              </p>
              <p className="mt-3 sm:text-base font-semibold">
                Date: <span className="font-normal text-gray-600">{new Date(order.date).toDateString()}</span>
              </p>
              <p className="sm:text-base font-semibold">
                Payment Method: <span className="font-normal text-gray-600">{order.paymentMethod}</span>
              </p>
              <p className="sm:text-base font-semibold">
                Order Total: <span className="font-normal text-gray-600">{currency}{order.amount}</span>
              </p>
              <p className="sm:text-base font-semibold">
                Status: <span className="font-normal text-gray-600">{order.status}</span>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Items in Order</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {orderItems.map((item, index) => (
                  <div key={index} className="border rounded-md p-4 shadow-lg">
                    <div className="flex flex-col items-center">
                      <img
                        src={item.image}  // Assuming item.image contains the image URL
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-gray-600">Size: {item.size}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default ViewOrder;

