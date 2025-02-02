import React from 'react';
import { LuPhone } from 'react-icons/lu';
import { BiMessage } from 'react-icons/bi';
import { IoLogoInstagram } from 'react-icons/io5';
import { FiYoutube } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { CiTwitter } from 'react-icons/ci';

const TopHeader = () => {
  return (
    <div className="w-full h-[46px] bg-green-800 flex justify-between items-center px-[24px] text-[#FFFFFF]">
      {/* Phone and Email Section */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1">
          <LuPhone />
          <h6 className="font-[700] text-[14px] leading-[24px]">(225) 555-0118</h6>
        </div>

        <div className="flex items-center gap-1">
          <BiMessage />
          <h6 className="font-[700] text-[14px] leading-[24px]">michelle.river@example.com</h6>
        </div>
      </div>

      {/* Text */}
      <div>
        <h6 className="font-[700] text-[14px] leading-[24px]">
          Follow us and get a chance to win 80% off
        </h6>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
        {/* Instagram */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <IoLogoInstagram size={20} className="hover:text-gray-300 cursor-pointer" />
        </a>

        {/* YouTube */}
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FiYoutube size={20} className="hover:text-gray-300 cursor-pointer" />
        </a>

        {/* Twitter */}
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <CiTwitter size={20} className="hover:text-gray-300 cursor-pointer" />
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={20} className="hover:text-gray-300 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default TopHeader;