import CardT2 from "@/components/cards-text-2";
import Image from "next/image";

export default function Bestseller() {
  return (
    <div className="relative bg-[#FAFAFA] w-full">
      <div className="max-w-[1440px] h-auto mx-auto">
        <div className="max-w-[1124px] py-[48px] flex flex-col gap-[24px] mx-auto">
          {/* Heading */}
          <div className="flex gap-[10px]">
            <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.2px] text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
          </div>
          {/* Line under the heading */}
          <div className="w-full h-[2px] bg-[#dbdbdb]"></div>
          {/* Products Section */}
          <div className="flex lg:flex-row gap-[30px] flex-col lg:ml-[0px] ml-[100px]">
            {/* Card 1 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image
                  src="/images/product-cover-5 (5).png"
                  alt="pic"
                  width={238}
                  height={238}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardT2 />
            </div>
            {/* Card 2 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image
                  src="/images/fixed-height (23).png"
                  alt="pic"
                  width={238}
                  height={238}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardT2 />
            </div>
            {/* Card 3 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image
                  src="/images/fixed-height (24).png"
                  alt="pic"
                  width={238}
                  height={238}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardT2 />
            </div>
            {/* Card 4 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image
                  src="/images/fixed-height (25).png"
                  alt="pic"
                  width={238}
                  height={238}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardT2 />
            </div>
          </div>
          {/* Second Row */}
          <div className="flex lg:flex-row gap-[30px] flex-col lg:ml-[0px] ml-[100px]">
            {/* Card 5 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image
                  src="/images/fixed-height (26).png"
                  alt="pic"
                  width={238}
                  height={238}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardT2 />
            </div>
            {/* Card 6 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image
                  src="/images/fixed-height (28).png"
                  alt="pic"
                  width={238}
                  height={238}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardT2 />
            </div>
            {/* Card 7 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image
                  src="/images/product-cover-5 (5).png"
                  alt="pic"
                  width={238}
                  height={238}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardT2 />
            </div>
            {/* Card 8 */}
            <div className="w-[238px] lg:w-[238px] sm:w-full h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image
                  src="/images/fixed-height (23).png"
                  alt="pic"
                  width={238}
                  height={238}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardT2 />
            </div>
          </div>
        </div>
      </div>
      {/* Companies */}
      <div className="w-full bg-[#FAFAFA] py-8">
        <div className="max-w-[1124px] mx-auto">
          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex justify-center">
              <Image
                src="/images/col-12.png"
                alt="Client 1 Logo"
                width={72}
                height={72}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/fa-brands-2 (1).png"
                alt="Client 2 Logo"
                width={72}
                height={72}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/fa-brands-3 (1).png"
                alt="Client 3 Logo"
                width={72}
                height={72}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/col-md-2 (4).png"
                alt="Client 4 Logo"
                width={72}
                height={72}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/col-md-2 (1).png"
                alt="Client 5 Logo"
                width={72}
                height={72}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/col-md-2.png"
                alt="Client 6 Logo"
                width={72}
                height={72}
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


