import Image from "next/image";

const products = [
  {
    id: 1,
    imageSrc: "/images/image20.jpg",
    alt: "Elegant Leather Bag Image",
  },
  {
    id: 2,
    imageSrc: "/images/card-item (1).jpg",
    alt: "Classic Wristwatch Image",
  },
  {
    id: 3,
    imageSrc: "/images/fixed-height (15).png",
    alt: "Designer Sunglasses Image",
  },
  {
    id: 4,
    imageSrc: "/images/filter.jpg",
    alt: "Stylish Sneakers Image",
  },
  {
    id: 5,
    imageSrc: "/images/fixed-height (16).png",
    alt: "Casual T-Shirt Image",
  },
  {
    id: 6,
    imageSrc: "/images/fixed-height (13).png",
    alt: "Denim Jeans Image",
  },
  {
    id: 7,
    imageSrc: "/images/fixed-height (12).png",
    alt: "Running Shoes Image",
  },
  {
    id: 8,
    imageSrc: "/images/gril-5.jpg",
    alt: "Summer Dress Image",
  },
  {
    id: 9,
    imageSrc: "/images/fixed-height (21).png",
    alt: "Winter Jacket Image",
  },
  {
    id: 10,
    imageSrc: "/images/fixed-height (20).png",
    alt: "Formal Suit Image",
  },
  {
    id: 11,
    imageSrc: "/images/fixed-height (18).png",
    alt: "Casual Hoodie Image",
  },
  {
    id: 12,
    imageSrc: "/images/fixed-height (17).png",
    alt: "Leather Wallet Image",
  },
];

const ShopSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center transition duration-300 hover:text-blue-500">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="w-full h-72 relative">
                <Image
                  src={product.imageSrc}
                  alt={product.alt}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-lg transform transition duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42] mb-2 transition duration-300 hover:text-blue-500">
                  Graphic Design
                </h5>
                <p className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#737373] mb-4 transition duration-300 hover:text-gray-900">
                  English Department
                </p>
                <div className="flex justify-center gap-3 mb-4">
                  <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD] line-through">
                    $16.48
                  </h5>
                  <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
                    $6.48
                  </h5>
                </div>
                <div className="flex justify-center gap-2">
                  <button className="w-4 h-4 rounded-full bg-red-500 hover:scale-125 transition duration-300"></button>
                  <button className="w-4 h-4 rounded-full bg-yellow-500 hover:scale-125 transition duration-300"></button>
                  <button className="w-4 h-4 rounded-full bg-green-500 hover:scale-125 transition duration-300"></button>
                  <button className="w-4 h-4 rounded-full bg-blue-500 hover:scale-125 transition duration-300"></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;