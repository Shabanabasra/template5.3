import React from "react";
import Image from "next/image";
import TopHeader from "@/components/TopHeader";
import Header2 from "@/components/header2";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer2 from "@/components/footer2";

export default function About() {
  return (
    <div>
      {/* Header Section */}
      <TopHeader/>
      <Header2 />
      <main>
        {/* Section 1 */}
        <section className="relative flex flex-col md:flex-row items-center justify-center py-24 px-6 bg-white overflow-hidden">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2 transition-opacity duration-300 hover:opacity-80">
              About Company
            </h4>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 transition-colors duration-500 hover:text-blue-500">
              About Us
            </h2>
            <p className="text-gray-600 mb-6 transition-opacity duration-300 hover:opacity-80">
              We know how large objects will act, but things on a small scale.
            </p>
            <a
              href="#"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transform transition duration-300 hover:scale-105"
            >
              Get Quote Now
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative inline-block">
              {/* Pink Background Circle */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[30rem] h-[30rem] bg-pink-200 rounded-full shadow-lg z-0"></div>

              {/* Image */}
              <Image
                src="/images/shopping-girl.jpg" // Ensure this file exists in /public/images/
                alt="Shopping Girl"
                width={300}
                height={400}
                className="rounded-lg shadow-lg relative z-10 transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="py-16 px-6 bg-white text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <h5 className="text-sm font-semibold uppercase text-gray-500 mb-2 transition-opacity duration-300 hover:opacity-80">
              Highlights
            </h5>
            <p className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-500 hover:text-blue-500">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </p>
            <p className="text-gray-500 transition-opacity duration-300 hover:opacity-80">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { label: "Happy Customers", value: "15K" },
              { label: "Monthly Visitors", value: "150K" },
              { label: "Countries Worldwide", value: "15" },
              { label: "Top Partners", value: "100+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transform transition-transform duration-300 hover:scale-105"
              >
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Image
                src="/images/mountain-video-thumbnail.png" // Ensure this file exists in /public/images/
                alt="Video Thumbnail"
                width={800}
                height={450}
                className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              />
              <a
                href="https://www.youtube.com/watch?v=your-video-id"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transform transition-transform duration-300 hover:scale-110">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Section 3 - Meet Our Team */}
        <section className="relative bg-white py-16">
          <div className="container mx-auto flex flex-col items-center gap-16 px-4">
            <div className="text-center max-w-lg">
              <h2 className="text-4xl font-bold text-[#252B42] transition-colors duration-500 hover:text-blue-500">
                Meet Our Team
              </h2>
              <p className="text-base text-[#737373] mt-4">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { name: "John Doe", title: "Software Engineer", image: "media.png" },
                { name: "Jane Smith", title: "Marketing Head", image: "team-1-user-3.jpg" },
                { name: "Emily Rose", title: "UI/UX Designer", image: "media3.png" },
              ].map((team, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="w-full h-[230px] relative">
                    <Image
                      src={`/images/${team.image}`} // Ensure media1.png, media2.png, media3.png exist in /public/images/
                      alt={team.name}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h5 className="text-xl font-bold text-[#252B42]">
                      {team.name}
                    </h5>
                    <h6 className="text-sm font-semibold text-[#737373]">
                      {team.title}
                    </h6>
                    <div className="flex justify-center gap-4 mt-4">
                      <FaFacebookF className="text-gray-600 hover:text-blue-500 transition" />
                      <FaInstagram className="text-gray-600 hover:text-pink-500 transition" />
                      <FaTwitter className="text-gray-600 hover:text-blue-400 transition" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer2 />
      </main>
    </div>
  );
}