'use client';

import { useRouter } from 'next/navigation';
import { FiMapPin } from 'react-icons/fi'; // Location Icon
import { FaStar } from 'react-icons/fa'; // Rating Star Icon
import Image from 'next/image'; // For optimized image handling
import im1 from '@/public/image/Res1.png';
import im2 from '@/public/image/Res2.png';
import im3 from '@/public/image/Res3.png';

const Homepart = () => {
  const router = useRouter();

  // Dummy restaurant data
  const restaurants = [
    {
      id: 1,
      name: "Trattoria dall'Oste",
      location: "Via Luigi Alamanni, 3, 50123 Firenze",
      rating: 4.5,
      description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter ",
      image: im1,
    },
    {
      id: 2,
      name: "La Pergola",
      location: "Via Stella, 22, 41121 Modena MO",
      rating: 4.8,
      description:
       "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter ",
       image: im2,
    },
    {
      id: 3,
      name: "Osteria Francescana",
      location: "Via Stella, 22, 41121 Modena MO",
      rating: 4.9,
      description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter ",
      image: im3,
    },
  ];

  return (
    <div className="px-20 py-8">
     <div className="flex items-center justify-between">
        <div className="">
            <h1 className="text-2xl font-bold text-gray-800">
                Explore <span className="text-orange-500">Top Restaurants</span>
            </h1>
            <p className="text-[#758888] mt-2 text-sm">Check your city nearby <br /> restaurants</p>
        </div>
      <div className="flex items-center space-x-2 text-sm">
        <p >See All </p><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 21" fill="none">
        <path d="M7.875 4.375L14 10.5L7.875 16.625" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></span>
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
  );
};

export default Homepart;
