import React from "react";
import shop from "@/public/image/coffee-shop.png";  
import arrow from "@/public/image/loom-arrow.png";
import box from "@/public/image/box-1.png";  
import hour from "@/public/image/24-hour.png";  
import shield from "@/public/image/shield.png";  
import vector from "@/public/image/Vector.png";    
import { FaMapMarkerAlt } from "react-icons/fa"; 
import { FaSearch } from "react-icons/fa"; 
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20 ">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto px-20">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left space-y-6 mt-12">
          <div className="space-y-10">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Good <span className="text-orange-400">food</span>, great memories
                </h1>
                <p className="text-lg md:text-2xl text-[#232323] font-medium">
                  Enable diners to customize their booking by requesting a specific table location or view.
                </p>
          </div>
          <div className="flex items-center justify-center md:justify-start mt-6">
              {/* Search Box */}
              <div className="relative flex items-center w-full max-w-md">
                {/* Location Icon and Text */}
                <div className="absolute left-2 flex items-center bg-[#00B047] text-white px-4 py-2 rounded-l-full">
                  <FaMapMarkerAlt size={18} className="mr-2" />
                  <span className="text-sm">Location</span>
                  <span className="pl-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                  <path d="M5.5 5.5L0.736861 0.249999L10.2631 0.25L5.5 5.5Z" fill="#F8FAFC"/>
                  </svg>
                  </span>
                </div>

                {/* Search Input */}
                <input
                  type="text"
                  placeholder=""
                  className="w-full pl-32 pr-16 py-3 text-sm text-gray-700 bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-green-400 focus:outline-none"
                />

                {/* Search Button */}
                  <button className="absolute right-2 bg-[#00B047] hover:bg-[#00B047] text-white p-3 rounded-full">
                    <FaSearch size={16} />
                  </button>
                </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative mt-8 md:mt-0">
          {/* Decorative Arrow */}
          <div className="absolute top-3 left-10 transform -translate-x-1/2 md:-left-40">
            <Image src={arrow} alt="Decorative Arrow" width={370} height={50} />
          </div>
          {/* Illustration */}
          <div className="mt-10">
            <Image src={shop} alt="Coffee Shop" width={500} height={500} />
          </div>
        </div>
      </div>

      {/* next part of hero */}
      <div className="px-34">
      <div className="bg-[#FFF] flex items-center justify-center space-x-7 w-[350px] lg:w-[700px] py-4 mx-auto px-2 lg:px-0 mt-2 lg:mt-0">
        <div className="lg:flex items-center space-x-2 space-y-1">
          <div className="">
            <Image src={box} alt="box" width={36} height={36} />
          </div>
          <div className="">
            <h3 className="font-medium text-xs text-[#272343]">Discount</h3>
            <p className="text-[#9A9CAA] text-[8px] font-normal">Every week new sales </p>
          </div>
        </div>
        <div className="lg:flex items-center space-x-2 space-y-1">
          <div className="">
            <Image src={vector} alt="vector" width={36} height={36} />
          </div>
          <div className="">
            <h3 className="font-medium text-xs text-[#272343]">Free Delivery</h3>
            <p className="text-[#9A9CAA] text-[8px] font-normal">100% Free for all orders</p>
          </div>
        </div>
        <div className="lg:flex items-center space-x-2 space-y-1">
          <div className="">
            <Image src={hour} alt="hour" width={36} height={36} />
          </div>
          <div className="">
            <h3 className="font-medium text-xs text-[#272343]">Great Support 24/7</h3>
            <p className="text-[#9A9CAA] text-[8px] font-normal">We care your experiences</p>
          </div>
        </div>
        <div className="lg:flex items-center space-x-2 space-y-1">
          <div className="">
            <Image src={shield} alt="shield" width={36} height={36} />
          </div>
          <div className="">
            <h3 className="font-medium text-xs text-[#272343]">secure Payment</h3>
            <p className="text-[#9A9CAA] text-[8px] font-normal">100% Secure Payment Method</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;

