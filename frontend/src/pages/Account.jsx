import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { RiArrowDropRightLine } from "react-icons/ri";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Account = () => {
  const { token, backendUrl, currency, navigate } = useContext(ShopContext);
  const [displayData, setDisplayData] = useState("Profile");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const location = useLocation();

  const fetchOrders = async () => {
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
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    const section = location.state?.section || new URLSearchParams(location.search).get('section');
    if (section && ["Profile", "Orders", "Payment"].includes(section)) {
      setDisplayData(section);
    }
  }, [location]);

  useEffect(() => {
    if (displayData === "Orders" && token) {
      fetchOrders();
    }
  }, [displayData, token]);

  const handleClick = (section) => {
    setDisplayData(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-[#6D4C3D]">
      {/* Left side */}
      <div className="min-w-60 h-auto border-b sm:border-b-0 sm:border-r border-[#6D4C3D]">
        {/* Mobile Menu (Dropdown) */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full text-left mb-3 text-md font-medium text-slate-800 flex items-center gap-1"
          >
            <span>ACCOUNT INFORMATION</span>
            <RiArrowDropRightLine
              className={`w-5 h-5 text-slate-600 transition-transform ${
                isMenuOpen ? "rotate-90" : ""
              }`}
            />
          </button>
          {isMenuOpen && (
            <div className="flex flex-col gap-2 my-3 mx-4 text-md font-light text-slate-800">
              <p
                className="flex gap-2 cursor-pointer"
                onClick={() => handleClick("Profile")}
              >
                Profile
              </p>
              <p
                className="flex gap-2 cursor-pointer"
                onClick={() => handleClick("Orders")}
              >
                Orders
              </p>
              <p
                className="flex gap-2 cursor-pointer"
                onClick={() => handleClick("Payment")}
              >
                Payment
              </p>
            </div>
          )}
        </div>

        {/* Desktop Menu (Always Visible) */}
        <div className="hidden sm:block">
          <p className="text-md font-medium text-slate-800">
            ACCOUNT INFORMATION
          </p>
          <div className="flex flex-col gap-2 my-3 mx-4 text-md font-light text-slate-800">
            <p
              className="flex gap-2 cursor-pointer"
              onClick={() => handleClick("Profile")}
            >
              Profile
            </p>
            <p
              className="flex gap-2 cursor-pointer"
              onClick={() => handleClick("Orders")}
            >
              Orders
            </p>
            <p
              className="flex gap-2 cursor-pointer"
              onClick={() => handleClick("Payment")}
            >
              Payment
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1">
        {displayData === "Profile" && (
          <div className="text-lg sm:text-xl font-md flex flex-col gap-2">
            <Title text1={"MY"} text2={"PROFILE"} />
            <p className="text-base sm:text-lg">
              Name: <span className="font-light ml-2">Jane Doe</span>
            </p>
            <p className="text-base sm:text-lg">
              Email:{" "}
              <span className="font-light ml-2">jane.doe@example.com</span>
            </p>
            <p className="text-base sm:text-lg">
              Phone: <span className="font-light ml-2"></span>
            </p>
            <button className="w-[100px] bg-[#727D71] text-white text-sm sm:text-base font-bold rounded mt-10 px-8 py-2 hover:bg-slate-800">
              Edit
            </button>
          </div>
        )}

        {displayData === "Orders" && (
          <div className="h-full text-lg sm:text-xl font-md flex flex-col">
            <Title text1={"ORDER"} text2={"HISTORY"} />
            {orders.length > 0
              ? orders.map((order) => (
                  <div
                    key={order.id}
                    className="w-[70vw] sm:w-[50vw] flex flex-col lg:flex-row justify-between gap-3 py-4 px-6 sm:px-4 border-t border-[#6D4C3D] text-slate-800"
                  >
                    <div>
                      <p className="text-base sm:text-lg">
                        Order:{" "}
                        <span className="font-medium ml-1">
                          {order.confirmationCode}
                        </span>
                      </p>
                      <p className="text-base sm:text-lg">
                        Date:{" "}
                        <span className="font-light ml-2">
                          {new Date(order.date).toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-base sm:text-lg">
                        Total: <span className="font-light ml-2">{currency}{order.amount.toFixed(2)}</span>
                      </p>
                      <p className="text-base sm:text-lg">
                        Status: <span className="font-light ml-2">{order.status}</span>
                      </p>
                    </div>
                    <div>
                      <button className="w-[100px] bg-[#727D71] text-white text-sm sm:text-base font-bold rounded mt-4 lg:mt-0 px-8 py-2 hover:bg-slate-800 flex items-center justify-center">
                        Details
                      </button>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        )}

        {displayData === "Payment" && (
          <div className="text-lg sm:text-xl font-md flex flex-col gap-2">
            <Title text1={"MANAGE"} text2={"PAYMENTS"} />
            <p className="text-base sm:text-lg">
              Card ending in: <span className="font-light ml-2">**1234</span>
            </p>
            <p className="text-base sm:text-lg">
              Stripe:{" "}
              <span className="font-light ml-2">jane.doe@example.com</span>
            </p>
            <button className="w-[100px] bg-[#727D71] text-white text-sm sm:text-base font-bold rounded mt-10 px-8 py-2 hover:bg-slate-800">
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
