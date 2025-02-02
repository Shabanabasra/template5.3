"use client";

import { useState } from "react";
import React from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log("Email submitted:", email);
  };

  return (
    <footer className="bg-white py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Company Info</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Carrier
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  We are hiring
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Carrier
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  We are hiring
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 ">Subscribe</h3>
            <form onSubmit={handleSubmit} className="subscribe-form">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md p-2 flex-1"
                required
              />
            
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md p-2 gap-2 mt-4"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="social-links flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} Ecommerce Store. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


