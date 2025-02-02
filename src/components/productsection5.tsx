import React from "react";
import Image from "next/image";

const Productionsection5 = () => {
  return (
    <div>
      <section className="mt-12">
        {/* Header Section */}
        <div className="font-extrabold text-3xl gap-[10px] h-[55px] w-full mx-auto mb-6 text-center">
          <h1>EDITORS PICK</h1>
        </div>
        <div className="w-full mx-auto mb-12 text-center">
          <h1>Problems trying to resolve the conflict between</h1>
        </div>

        {/* Image Grid Section */}
        <div className="flex justify-center gap-8 flex-wrap">
          {/* Men Collection */}
          <div className="relative w-[250px] h-[530px] group">
            <Image
              src="/images/image20.jpg"
              className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
              alt="Men Collection"
              width={250}
              height={530}
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-6 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Men
            </button>
          </div>

          {/* Women Collection */}
          <div className="relative w-[250px] h-[530px] group">
            <Image
              src="/images/card-item (1).jpg"
              className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
              alt="Women Collection"
              width={250}
              height={530}
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-6 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Women
            </button>
          </div>

          {/* Accessories and Kids Collection */}
          <div className="flex flex-col gap-8">
            {/* Accessories */}
            <div className="relative w-[200px] h-[250px] group">
              <Image
                src="/images/card-item (2).jpg"
                className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                alt="Accessories Collection"
                width={200}
                height={250}
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-6 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Accessories
              </button>
            </div>

            {/* Kids */}
            <div className="relative w-[200px] h-[250px] group">
              <Image
                src="/images/filter.jpg"
                className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                alt="Kids Collection"
                width={200}
                height={250}
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-6 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Kids
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productionsection5;