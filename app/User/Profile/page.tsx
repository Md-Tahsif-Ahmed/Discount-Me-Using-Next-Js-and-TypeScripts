import React from "react";
import profile from "@/public/image/profile.png";
import image from "@/public/image/image.png";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProfilePage = () => {
  const orderHistory = [
    { id: "#738", date: "8 Sep, 2020", total: "$135.00 (5 Products)", status: "Processing" },
    { id: "#703", date: "24 May, 2020", total: "$25.00 (1 Product)", status: "On the way" },
    { id: "#130", date: "22 Oct, 2020", total: "$250.00 (4 Products)", status: "Completed" },
    { id: "#561", date: "1 Feb, 2020", total: "$35.00 (1 Product)", status: "Completed" },
    { id: "#536", date: "21 Sep, 2020", total: "$578.00 (13 Products)", status: "Cancelled" },
    { id: "#492", date: "22 Oct, 2020", total: "$345.00 (7 Products)", status: "Completed" },
  ];

  return (
    <>
    <Navbar></Navbar>
        <div className="min-h-screen bg-gray-100">
        {/* Breadcrumb Section with Background Image */}
        <div
        className="py-8 px-4 bg-cover bg-center mb-10 w-full"
        style={{
            backgroundImage: `url(${image.src})`, // Corrected template literal syntax
        }}
        >
        </div>


      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6">
       

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-1 lg:col-span-3 bg-white shadow rounded-lg p-4">
            <nav className="space-y-4">
              <a href="#" className="flex items-center text-red-500 font-medium">
                <span className="mr-2">&#x25A0;</span> Dashboard
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-500">
                <span className="mr-2">&#x21BA;</span> Order History
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-500">
                <span className="mr-2">&#x1F6D2;</span> Shopping Cart
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-500">
                <span className="mr-2">&#x2699;</span> Settings
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-500">
                <span className="mr-2">&#x274C;</span> Log-out
              </a>
            </nav>
          </div>

          {/* Profile Info and Order History */}
          <div className="col-span-1 lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
              {/* Profile Info */}
              <div className="sm:col-span-4 bg-white shadow rounded-lg p-4 text-center">
                <Image
                  src={profile}
                  alt="Profile"
                  className="mx-auto w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold">Dianne Russell</h3>
                <p className="text-sm text-gray-500">Customer</p>
                <a href="#" className="text-red-500 text-sm mt-2 inline-block">
                  Edit Profile
                </a>
              </div>

              {/* Billing Address */}
              <div className="sm:col-span-8 bg-white shadow rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-500">Billing Address</h4>
                <p className="text-sm mt-2">
                  Dianne Russell <br />
                  4140 Parker Rd. Allentown, New Mexico 31134 <br />
                  dianne.ressell@gmail.com <br />
                  (671) 555-0110
                </p>
                <a href="#" className="text-red-500 text-sm mt-2 inline-block">
                  Edit Address
                </a>
              </div>
            </div>

            {/* Order History */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-gray-700">Recent Order History</h4>
                <a href="#" className="text-red-500 text-sm">
                  View All
                </a>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left">Order ID</th>
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-left">Total</th>
                      <th className="p-3 text-left">Status</th>
                      <th className="p-3 text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderHistory.map((order, index) => (
                      <tr
                        key={order.id}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="p-3">{order.id}</td>
                        <td className="p-3">{order.date}</td>
                        <td className="p-3">{order.total}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              order.status === "Completed"
                                ? "bg-green-100 text-green-700"
                                : order.status === "Cancelled"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="p-3">
                          <a href="#" className="text-red-500 text-xs">
                            View Details
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default ProfilePage;
