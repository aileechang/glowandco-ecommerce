import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { RiArrowDropRightLine } from 'react-icons/ri'; // Import the icon
import axios from 'axios'; // Import axios for API calls

const Account = () => {
  const { token, backendUrl, currency } = useContext(ShopContext);
  const [displayData, setDisplayData] = useState("Profile");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [orders, setOrders] = useState([]); // State to store orders

  // Function to fetch orders from the backend
  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/userorders`, // Replace with your actual endpoint
        {},
        { headers: { token } } // Pass the token in the headers
      );
      console.log(response.data)
      if (response.data.success) {
        setOrders(response.data.orders); // Store orders in state
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Fetch orders when the "Orders" section is displayed
  useEffect(() => {
    if (displayData === "Orders" && token) {
      fetchOrders();
    }
  }, [displayData, token]);

  // Handle click on menu items
  const handleClick = (section) => {
    setDisplayData(section);
    setIsMenuOpen(false); // Close the menu on smaller screens after selection
  };

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-[#6D4C3D]'>
      {/* Left side */}
      <div className='min-w-60 h-auto border-b sm:border-b-0 sm:border-r border-[#6D4C3D]'>
        {/* Mobile Menu (Dropdown) */}
        <div className='sm:hidden'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='w-full text-left mb-3 text-md font-medium text-slate-800 flex items-center gap-1'
          >
            <span>ACCOUNT INFORMATION</span>
            <RiArrowDropRightLine
              className={`w-5 h-5 text-slate-600 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}
            />
          </button>
          {isMenuOpen && (
            <div className='flex flex-col gap-2 text-md font-light text-slate-800'>
              <p className='flex gap-2 cursor-pointer' onClick={() => handleClick("Profile")}>
                Profile
              </p>
              <p className='flex gap-2 cursor-pointer' onClick={() => handleClick("Orders")}>
                Orders
              </p>
              <p className='flex gap-2 cursor-pointer' onClick={() => handleClick("Payment")}>
                Payment
              </p>
            </div>
          )}
        </div>

        {/* Desktop Menu (Always Visible) */}
        <div className='hidden sm:block'>
          <p className='mb-3 text-md font-medium text-slate-800'>ACCOUNT INFORMATION</p>
          <div className='flex flex-col gap-2 text-md font-light text-slate-800'>
            <p className='flex gap-2 cursor-pointer' onClick={() => handleClick("Profile")}>
              Profile
            </p>
            <p className='flex gap-2 cursor-pointer' onClick={() => handleClick("Orders")}>
              Orders
            </p>
            <p className='flex gap-2 cursor-pointer' onClick={() => handleClick("Payment")}>
              Payment
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1'>
        {displayData === "Profile" && (
          <div>
            <h2 className='text-xl font-semibold mb-4'>Profile Information</h2>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1234567890</p>
            {/* Add more profile details here */}
          </div>
        )}

        {displayData === "Orders" && (
          <div>
            <h2 className='text-xl font-semibold mb-4'>Order History</h2>
            {orders.length > 0 ? (
              orders.map((order) => (
                <div key={order.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
                  <p className="font-semibold">Order # {order.confirmationCode}</p>
                  <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                  <p>Total: {currency} {order.amount}</p>
                  <p>Status: {order.status}</p>
                  {/* Add more order details here */}
                </div>
              ))
            ) : ""
            }
          </div>
        )}

        {displayData === "Payment" && (
          <div>
            <h2 className='text-xl font-semibold mb-4'>Payment Methods</h2>
            <p>Card ending in 1234</p>
            <p>PayPal: john.doe@example.com</p>
            {/* Add more payment details here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
