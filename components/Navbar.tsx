'use client';

import React, { useState } from "react";
import logo from "@/public/image/Group.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 lg:px-20 py-4">
      {/* Top Section: Logo and Toggle Button */}
      <div className="lg:flex lg:justify-around lg:items-center">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="">
          <Image src={logo} alt="Discount Me Logo" width={180} height={10} />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:space-x-4`}
      >
        {/* Search Box */}
        <div className="flex items-center mt-4 lg:mt-0">
          <div className="relative w-full lg:w-[320px]">
            <span className="absolute inset-y-0 left-3 flex items-center text-[#1D242D]">
              <FaSearch size={16} />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 py-2 text-sm rounded-l-full focus:outline-none border border-r-0 border-gray-300"
            />
          </div>
          <button className="bg-[#FF7D29] text-center text-white text-sm px-6  py-[8.6px] rounded-r-full border-l-0 hover:bg-[#FF7D29] focus:outline-none">
            Search
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0 text-[#1D242D] opacity-60 text-sm">
          <a href="#" className="flex items-center space-x-1">
            All Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 30 30"
            >
              <path
                d="M14.7697 19.5698L22.1664 12.1731L20.4274 10.4316L14.7697 16.093L9.11329 10.4316L7.37305 12.1719L14.7697 19.5698Z"
                fill="#1D242D"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-700">
            Coupon
          </a>
          <a href="#" className="text-gray-700">
            Support
          </a>
        </div>
      </div>

      {/* Right Icons Section */}
      <div className=" hidden lg:flex items-center space-x-4 mt-4 lg:mt-0">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 27 27"
            fill="none"
          >
            <g clipPath="url(#clip0_1_11199)">
              <path
                d="M10.2312 24.6147C10.8259 24.6147 11.3081 24.1326 11.3081 23.5378C11.3081 22.9431 10.8259 22.4609 10.2312 22.4609C9.63644 22.4609 9.1543 22.9431 9.1543 23.5378C9.1543 24.1326 9.63644 24.6147 10.2312 24.6147Z"
                stroke="#1D242D"
                strokeWidth="2.46145"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.073 24.6147C22.6677 24.6147 23.1499 24.1326 23.1499 23.5378C23.1499 22.9431 22.6677 22.4609 22.073 22.4609C21.4782 22.4609 20.9961 22.9431 20.9961 23.5378C20.9961 24.1326 21.4782 24.6147 22.073 24.6147Z"
                stroke="#1D242D"
                strokeWidth="2.46145"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.61133 2H5.91887L8.80493 16.4195C8.9034 16.9153 9.17312 17.3607 9.56687 17.6776C9.96062 17.9946 10.4533 18.163 10.9587 18.1533H21.426C21.9314 18.163 22.4241 17.9946 22.8179 17.6776C23.2116 17.3607 23.4813 16.9153 23.5798 16.4195L25.3028 7.38443H6.99576"
                stroke="#1D242D"
                strokeWidth="2.46145"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_11199">
                <rect
                  width="25.8453"
                  height="25.8453"
                  fill="white"
                  transform="translate(0.537109 0.923828)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 31 30"
            fill="none"
          >
            <path
              d="M9.53593 10.0775C9.53593 6.6789 12.291 3.92383 15.6896 3.92383C19.0881 3.92383 21.8432 6.6789 21.8432 10.0775C21.8432 13.476 19.0881 16.2311 15.6896 16.2311C12.291 16.2311 9.53593 13.476 9.53593 10.0775ZM15.6896 13.7696C17.7287 13.7696 19.3817 12.1166 19.3817 10.0775C19.3817 8.03833 17.7287 6.38528 15.6896 6.38528C13.6504 6.38528 11.9974 8.03833 11.9974 10.0775C11.9974 12.1166 13.6504 13.7696 15.6896 13.7696Z"
              fill="#1D242D"
            />
            <path
              d="M8.72752 20.3456C6.88107 22.192 5.84375 24.6964 5.84375 27.3076H8.3052C8.3052 25.3492 9.0832 23.4709 10.468 22.0861C11.8529 20.7013 13.7311 19.9233 15.6896 19.9233C17.648 19.9233 19.5263 20.7013 20.9111 22.0861C22.2959 23.4709 23.0739 25.3492 23.0739 27.3076H25.5354C25.5354 24.6964 24.4981 22.192 22.6516 20.3456C20.8052 18.4991 18.3008 17.4618 15.6896 17.4618C13.0783 17.4618 10.574 18.4991 8.72752 20.3456Z"
              fill="#1D242D"
            />
          </svg>
        </span>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
