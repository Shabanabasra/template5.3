"use client"; // ✅ Add this at the very top

import Image from "next/image";
import { useEffect, useState } from "react";

export default function TeamSection() {
  const teamMembers = [
    { name: "Username", profession: "Profession", image: "/images/media (5).png" },
    { name: "Username", profession: "Profession", image: "/images/media (6).png" },
    { name: "Username", profession: "Profession", image: "/images/media (7).png" },
    { name: "Username", profession: "Profession", image: "/images/team-1-user-3.jpg" },
    { name: "Username", profession: "Profession", image: "/images/team-1-user-2.jpg" },
    { name: "Username", profession: "Profession", image: "/images/media3.png" },
    { name: "Username", profession: "Profession", image: "/images/media.png" },
    { name: "Username", profession: "Profession", image: "/images/media (9).png" },
    { name: "Username", profession: "Profession", image: "/images/media (10).png" },
  ];

  // ✅ Smooth fade-in effect when the component mounts
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 300);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className={`container mx-auto px-6 text-center transition-opacity duration-700 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-3xl font-bold mb-12">Meet Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-lg"
            >
              {/* Image Section */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={224}
                  className="rounded-t-lg object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              {/* Text Section */}
              <div className="p-6">
                <h2 className="text-lg font-medium mt-2">{member.name}</h2>
                <p className="text-gray-600">{member.profession}</p>
                <div className="flex justify-center mt-4 space-x-3">
                  {/* Facebook */}
                  <div className="w-[30px] h-[30px] transition-transform duration-300 hover:scale-110">
                    <Image src="/images/Vector 7.png" alt="fb" width={20} height={20} />
                  </div>
                  {/* Twitter */}
                  <div className="w-[30px] h-[24.49px] transition-transform duration-300 hover:scale-110">
                    <Image src="/images/Vector (9).png" alt="twitter" width={20} height={20} />
                  </div>
                  {/* Instagram */}
                  <div className="w-[30px] h-[30px] transition-transform duration-300 hover:scale-110">
                    <Image src="/images/ant-design_instagram-outlined (1).png" alt="insta" width={20} height={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
