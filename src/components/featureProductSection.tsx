import React from "react";
import Image from "next/image";

const FeatureProductSection = () => {
  return (
    <div>
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Headings Section */}
          <div className="text-center mb-12">
            <h1 className="font-Montserrat font-extrabold text-4xl text-[#252B42] mb-4">
              Featured Products
            </h1>
            <h2 className="font-Montserrat font-bold text-2xl text-[#23856D] mb-2">
              BESTSELLER PRODUCTS
            </h2>
            <h3 className="font-Montserrat font-medium text-lg text-gray-500">
              Problems trying to resolve the conflict between
            </h3>
          </div>

          {/* Grid Container for Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center group transition duration-500 hover:shadow-lg hover:scale-105"
              >
                {/* Image Container */}
                <div className="w-full h-56 mb-4 flex items-center justify-center bg-gray-100 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={`/images/image${index + 1}.jpg`}
                    alt={`Graphic Design ${index + 1}`}
                    width={200}
                    height={224}
                    className="w-auto h-full object-contain"
                  />
                </div>

                {/* Product Title */}
                <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42] mb-2 transition-colors duration-300 group-hover:text-[#23856D]">
                  Graphic Design
                </h5>

                {/* Department */}
                <p className="font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373] mb-4">
                  English Department
                </p>

                {/* Pricing */}
                <div className="flex justify-center gap-3 mb-4">
                  <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD] line-through">
                    $16.48
                  </h5>
                  <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
                    $6.48
                  </h5>
                </div>

                {/* Color Buttons */}
                <div className="flex gap-2">
                  <button className="w-4 h-4 rounded-full bg-red-500 hover:opacity-80 transition-opacity duration-300"></button>
                  <button className="w-4 h-4 rounded-full bg-yellow-500 hover:opacity-80 transition-opacity duration-300"></button>
                  <button className="w-4 h-4 rounded-full bg-green-500 hover:opacity-80 transition-opacity duration-300"></button>
                  <button className="w-4 h-4 rounded-full bg-blue-500 hover:opacity-80 transition-opacity duration-300"></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureProductSection;
