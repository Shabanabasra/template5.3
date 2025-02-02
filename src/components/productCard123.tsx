import React from "react";
import Image from "next/image";

const ProductCard123 = () => {
  return (
    <div>
      <section className="relative bg-[#23856D] py-12 px-4 rounded-[5px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section: Text Content */}
          <div className="max-w-lg flex flex-col gap-6">
            {/* Summer 2020 Label */}
            <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-white opacity-90 transition-opacity duration-300 hover:opacity-100">
              SUMMER 2020
            </h4>

            {/* Product Title */}
            <h1 className="font-Montserrat font-bold text-[48px] md:text-[58px] leading-[60px] md:leading-[80px] text-white transition-colors duration-500 hover:text-[#2DC071]">
              Vita Classic Product
            </h1>

            {/* Description */}
            <p className="font-Montserrat font-medium text-[14px] leading-[20px] text-white opacity-80 transition-opacity duration-300 hover:opacity-100">
              We know how large objects will act. We know how our objects will act. We know.
            </p>

            {/* Price and Add to Cart Button */}
            <div className="flex items-center gap-8">
              {/* Price */}
              <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-white">
                $16.48
              </h3>

              {/* Add to Cart Button */}
              <button className="bg-[#2DC071] text-white py-3 px-6 rounded-[5px] hover:bg-[#27a05d] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Right Section: Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/image16.jpg"
              alt="Vita Classic Product"
              width={400}
              height={400}
              className="w-full max-w-sm h-auto rounded-md transform transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCard123;