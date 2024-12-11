'use client';

import { useState } from 'react';
import { FiMapPin } from 'react-icons/fi'; // Location Icon
import { FaMapMarkerAlt, FaSearch, FaStar } from 'react-icons/fa'; // Rating Star Icon
import Image from 'next/image';
import im1 from "@/public/image/Res1.png";
import im2 from "@/public/image/Res2.png";
import im3 from "@/public/image/Res3.png";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AllRestaurantsPage = () => {
  // Dummy restaurant data
  const restaurants = [
    {
      id: 1,
      name: "Trattoria dall'Oste",
      location: "Via Luigi Alamanni, 3, 50123 Firenze",
      rating: 4.5,
      description:
        "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter.",
      image: im1,
    },
    {
      id: 2,
      name: "La Pergola",
      location: "Via Stella, 22, 41121 Modena MO",
      rating: 4.8,
      description:
        "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter.",
      image: im2,
    },
    {
      id: 3,
      name: "Osteria Francescana",
      location: "Via Stella, 22, 41121 Modena MO",
      rating: 4.9,
      description:
        "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter.",
      image: im3,
    },
    {
      id: 4,
      name: "Da Vittorio",
      location: "Via Cantalupa, 17, 24060 Brusaporto BG",
      rating: 4.7,
      description:
        "Located in the serene Italian countryside, this restaurant offers the perfect blend of tradition and elegance.",
      image: im1,
    },
    {
      id: 5,
      name: "Le Calandre",
      location: "Via Liguria, 1, 35030 Sarmeola di Rubano PD",
      rating: 4.6,
      description:
        "Known for its artistic plating and innovative dishes, Le Calandre is a must-visit destination.",
      image: im2,
    },
    {
      id: 6,
      name: "Enoteca Pinchiorri",
      location: "Via Ghibellina, 87, 50122 Firenze",
      rating: 4.8,
      description:
        "Located in a historic Florentine building, offering a fusion of flavors and an extensive wine collection.",
      image: im3,
    },
    {
      id: 7,
      name: "Piazza Duomo",
      location: "Piazza Risorgimento, 4, 12051 Alba CN",
      rating: 4.7,
      description:
        "Piazza Duomo offers a modern take on classic Italian cuisine with a focus on local ingredients.",
      image: im1,
    },
    {
      id: 8,
      name: "Villa Crespi",
      location: "Via Fava, 18, 28016 Orta San Giulio NO",
      rating: 4.9,
      description:
        "A romantic lakeside setting paired with an unforgettable dining experience by Chef Antonino Cannavacciuolo.",
      image: im2,
    },
    {
      id: 9,
      name: "Uliassi",
      location: "Banchina di Levante, 6, 60019 Senigallia AN",
      rating: 4.6,
      description:
        "Offering a beautiful seaside view, Uliassi serves fresh seafood with a contemporary twist.",
      image: im3,
    },
  ];
  
  return (
      <>
           <Navbar></Navbar>
    <div className="px-20 py-8">
      {/* Header */}
    <div className="flex items-center justify-between">
        <div className="">
            <h1 className="text-2xl font-bold text-gray-800">
                Explore <span className="text-orange-500">Top Restaurants</span>
            </h1>
            <p className="text-[#758888] mt-2 text-sm">Check your city nearby <br /> restaurants</p>
        </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center md:justify-start mt-6">
              {/* Search Box */}
              <div className="relative flex items-center w-full max-w-md">
                {/* Location Icon and Text */}
                <div className="absolute left-2 flex items-center bg-[#FF7D29] text-white px-4 py-2 rounded-l-full">
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
                  <button className="absolute right-2 bg-[#FF7D29] hover:bg-[#FF7D29] text-white p-3 rounded-full">
                    <FaSearch size={16} />
                  </button>
                </div>
      </div>
    </div>

       {/* Cards */}
       <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="card w-full bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
          >
            {/* Card Image */}
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover rounded-t-lg"
              width={300}
              height={200}
              priority // Ensures the images load quickly
            />

            {/* Card Content */}
            <div className="p-4">
         <div className="flex items-center justify-between">
                 {/* Restaurant Name */}
                 <h3 className="text-lg font-bold text-gray-800">
                {restaurant.name}
              </h3>
                  {/* Rating */}
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500 mr-1" />
                <span className="text-sm font-medium">({restaurant.rating})</span>
              </div>
         </div>
              {/* Location */}
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <FiMapPin className="mr-1 text-orange-500" />
                <span>{restaurant.location}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                {restaurant.description}{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Read More...
                </a>
              </p>

              {/* Visit Button */}
              <button
                onClick={() => router.push(`/restaurants/${restaurant.id}`)}
                className="mt-4 w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Visit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer></Footer>
      </>
  );
};

export default AllRestaurantsPage;
