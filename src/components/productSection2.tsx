import Image from "next/image"
export default function ProductSection2() {
    return (
      <div className="relative bg-white flex flex-col items-center py-[160px] gap-[96px] lg:w-[1440px] lg:h-[582px] w-full">
        {/* Container */}
        <div className="flex flex-col items-center gap-[36px] w-[607px] lg:w-[1050px] lg:h-[602px]">
          {/* Main content */}
          <div className="flex flex-col items-center gap-[30px] w-[547px] lg:w-[547px] h-[282px]">
            <h2 className="font-Montserrat font-bold lg:text-[40px] text-[20px] leading-[50px] text-center text-[#252B42] w-full">
              Start your 14 days free trial
            </h2>

            <h6 className="font-Montserrat font-normal text-[14px] leading-[20px] text-center text-[#737373] w-[411px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent.
            </h6>
            <div className="flex flex-row items-center gap-[10px]">
              <div className="bg-[#23A6F0] text-white font-Montserrat font-bold text-[14px] leading-[22px] rounded-[5px] px-[40px] py-[15px]">
                Try it free now
              </div>
            </div>
          </div>

          {/* Social Media Logos */}
          <div className="flex flex-row gap-[34px]">
            {/* Twitter */}
            <div className="w-[30px] h-[24.49px] ">
              <Image
                src="/images/Vector (9).png"
                alt="twitter"
                width={20}
                height={20}
              />
            </div>

            {/* Facebook */}
            <div className="w-[30px] h-[30px] ">
              <Image
                src="/images/Vector 7.png"
                alt="fb"
                width={20}
                height={20}
              />
            </div>

            {/* Instagram */}
            <div className="w-[30px] h-[30px]">
              <Image
                src="/images/ant-design_instagram-outlined (1).png"
                alt="insta"
                width={20}
                height={20}
              />
            </div>

            {/* LinkedIn */}
            <div className="w-[30px] h-[29.88px] ">
              <Image
                src="/images/logos_linkedin-icon.png"
                alt="in"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>

  
    
    
  );
}





