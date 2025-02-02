import React from "react";
import Image from "next/image";

const Cardsesection = () => {
  return (
    <div>
      <section className="relative mb-16">
        <div className="w-full h-auto">
          <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-[30px] px-4 lg:px-0">
            {/* Image Section */}
            <div className="relative w-full lg:w-[707px] h-[400px] lg:h-[682px] flex justify-center group">
              <Image
                src="/images/image14.jpg"
                alt="Couple Collection"
                width={707}
                height={682}
                className="object-contain w-full h-auto rounded-md transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-[573px] h-auto flex flex-col gap-[20px] justify-center items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0">
              {/* Summer 2020 */}
              <h5 className="text-[14px] lg:text-[16px] font-Montserrat font-bold leading-[24px] text-[#BDBDBD] transition-opacity duration-300 hover:opacity-100">
                SUMMER 2020
              </h5>

              {/* Heading */}
              <h2 className="lg:w-[375px] text-[24px] lg:text-[40px] font-Montserrat font-bold leading-[32px] lg:leading-[50px] text-[#252B42] transition-colors duration-500 hover:text-[#2DC071]">
                Part of the Neutral Universe
              </h2>

              {/* Subheading */}
              <h4 className="lg:w-[375px] text-[16px] lg:text-[20px] font-Montserrat font-normal leading-[24px] lg:leading-[30px] text-[#737373] transition-opacity duration-300 hover:opacity-100">
                We know how large objects will act, but things on a small scale.
              </h4>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-[10px]">
                {/* Buy Now Button */}
                <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] bg-[#2DC071] flex justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  <h1 className="text-[14px] font-Montserrat font-bold text-white">
                    BUY NOW
                  </h1>
                </button>

                {/* Read More Button */}
                <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] border border-[#2DC071] flex justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  <h1 className="text-[14px] font-Montserrat font-bold whitespace-nowrap text-[#2DC071]">
                    READ MORE
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cardsesection;