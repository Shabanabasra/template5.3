import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CollectionSection = () => {
  return (
    <div>
      <section className="mt-0 relative">
        <div className="relative w-full h-screen overflow-hidden">
          {/* Background Image with Overlay */}
          <Image
            src="/images/image10.jpg"
            alt="image10"
            height={716}
            width={1440}
            className="w-full h-full object-cover brightness-75" // Added brightness to make text more visible
          />
          
          {/* Overlay Text Section */}
          <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12 z-20">
            <div className="w-full sm:w-[599px] gap-[25px] text-center sm:text-left">
              <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] text-white">
                SUMMER 2020
              </h5>
              <h1 className="font-montserrat font-bold text-[40px] sm:text-[58px] text-white z-30">
                NEW COLLECTION
              </h1>
              <h4 className="font-montserrat font-normal text-[16px] sm:text-[20px] text-white">
                We know how large objects will act, but things on a small scale.
              </h4>
              
              {/* Shop Now Button with Link to "/shop" */}
              <Link href="/shop">
                <button className="w-full sm:w-auto bg-[#2daac0] py-[12px] sm:px-[40px] rounded-[5px] text-white mt-4 hover:bg-green-800 transition duration-300">
                  Shop Now
                </button>
              </Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionSection;