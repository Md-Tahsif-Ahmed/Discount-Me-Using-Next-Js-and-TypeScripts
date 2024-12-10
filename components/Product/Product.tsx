import React from "react";
import Image from "next/image";
import im1 from "@/public/image/image-1.png";
import im2 from "@/public/image/image-2.png";
import im3 from "@/public/image/image-3.png";
import im4 from "@/public/image/image-4.png";
import im5 from "@/public/image/image-5.png";

const products = [
  { id: 1, name: "Skateboard Shoe", price: "$125", image: im1 },
  { id: 2, name: "Skateboard Shoe", price: "$125", image: im2 },
  { id: 3, name: "Skateboard Shoe", price: "$125", image: im3 },
  { id: 4, name: "Skateboard Shoe", price: "$125", image: im4 },
  { id: 5, name: "Skateboard Shoe", price: "$125", image: im5 },
  { id: 6, name: "Skateboard Shoe", price: "$125", image: im1 },
  { id: 7, name: "Skateboard Shoe", price: "$125", image: im2 },
  { id: 8, name: "Skateboard Shoe", price: "$125", image: im3 },
  { id: 9, name: "Skateboard Shoe", price: "$125", image: im5 },
];

const ProductSection = () => {
  return (
    <div className="px-20 py-8 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-start">Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className=" w-full rounded-lg"
          >
            
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-[200px] object-cover rounded-xl"
                width={300}
                height={200}
              />
        
            <div className="text-start">
              <h2 className="text-sm font-medium text-[#232323]">{product.name}</h2>
              <p className="text-xs text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
