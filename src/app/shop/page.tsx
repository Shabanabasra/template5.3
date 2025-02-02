import React from "react";
import { FiArrowRight } from "react-icons/fi";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import ShopSection from "@/components/shopSection";

export default function Shop() {
  return (
    <div>
      <TopHeader />
      <Header />

      <div className="container mx-auto p-4">
        {/* Section Heading */}
        <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-full h-[92px] py-[24px] flex flex-col items-center">
          <div className="w-[1049px] h-[44px] flex gap-[1000px] items-center py-[40px]">
            {/* Shop Title */}
            <div className="w-full h-[32px] flex justify-center items-center mb-[8px]">
              <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
                Shop
              </h2>
            </div>
            {/* Breadcrumb */}
            <div className="w-full h-[44px] flex justify-center items-center gap-[5px]">
              <div className="flex items-center gap-[15px]">
                <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42] hover:text-blue-500 transition duration-300">
                  Home
                </div>
                <FiArrowRight size={8} className="transition-transform duration-300 hover:scale-125" />
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                  Shop
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-[200px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Product Cards */}
          {[
            { src: "/images/col-md-4 (2).png", title: "CLOTHS", items: "5 Items" },
            { src: "/images/image10.jpg", title: "CLOTHS", items: "5 Items" },
            { src: "/images/col-md-4 (3).png", title: "CLOTHS", items: "5 Items" },
            { src: "/images/card-item (9).png", title: "CLOTHS", items: "5 Items" },
            { src: "/images/card-item (10).png", title: "CLOTHS", items: "5 Items" },
          ].map((product, index) => (
            <div
              key={index}
              className="relative group h-[300px] overflow-hidden rounded-md shadow-md hover:shadow-lg transition duration-300"
            >
              <Image
                src={product.src}
                alt={product.title}
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-bold">{product.title}</p>
                <p className="text-white mt-1">{product.items}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-gray-500">Showing all 12 results</p>
          <div className="flex items-center gap-4">
            <select className="border-gray-300 rounded px-2 py-1 hover:border-blue-500 transition">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            "/images/col-12.png",
            "/images/fa-brands-2 (1).png",
            "/images/fa-brands-3 (1).png",
            "/images/col-md-2 (4).png",
            "/images/col-md-2 (1).png",
            "/images/col-md-2.png",
          ].map((src, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={src}
                alt={`Logo ${index + 1}`}
                width={100}
                height={48}
                className="h-12 w-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="flex justify-end items-center gap-4 mt-6">
        <a href="https://www.facebook.com/" className="text-blue-500 hover:text-blue-700 transition duration-300">
          <FaFacebook className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/" className="text-pink-500 hover:text-pink-700 transition duration-300">
          <FaInstagram className="w-6 h-6" />
        </a>
        <a href="https://www.twitter.com/" className="text-blue-400 hover:text-blue-600 transition duration-300">
          <FaTwitter className="w-6 h-6" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Company Info</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center border-t border-gray-200 pt-6">
            <p className="text-gray-600">Made with ❤️ by Tailwind CSS</p>
          </div>
        </div>
      </footer>

      {/* Additional Section */}
      <ShopSection />
    </div>
  );
}
