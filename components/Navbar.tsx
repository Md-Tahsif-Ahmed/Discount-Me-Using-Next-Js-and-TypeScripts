import React from "react";
import logo from "@/public/image/Group.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-around items-center">
      {/* Logo Section */}
      <Image src={logo} alt="Discount Me Logo" w-34 h-28 />

      {/* Search Box and Button */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered max-w-7xl rounded-l-full focus:outline-none border-r-0 "
        />
        <button className="btn bg-[#FF7D29]  rounded-r-full hover:bg-[#FF7D29] text-white border-l-0">
          Search
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-700">
          All Categories 
        </a>
        <a href="#" className="text-gray-700">
          Coupon
        </a>
        <a href="#" className="text-gray-700">
          Support
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
