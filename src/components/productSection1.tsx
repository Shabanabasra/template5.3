import Image from "next/image";

export default function ProductsSection1() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Heading Section */}
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">What We Do</h2>
        <h1 className="text-3xl font-bold mt-2">Innovation tailored for you</h1>
        <nav className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <span>|</span>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Team
          </a>
        </nav>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {/* First Image Spanning Two Rows */}
          <div className="md:col-span-1 md:row-span-2">
            <div className="relative w-full h-[600px]">
              <Image
                src="/images/unsplash_Lks7vei-eAg.png"
                alt="Product 1"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/unsplash_gMsnXqILjp4.png"
                alt="Product 2"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/unsplash_PSmDDeXaEWE (1).png"
                alt="Product 3"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/unsplash_1-aA2Fadydc.png"
                alt="Product 4"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/unsplash_mcSDtbWXUZU.png"
                alt="Product 5"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
