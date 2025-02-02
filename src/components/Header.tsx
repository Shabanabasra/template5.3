"use client";
import Link from "next/link";
import { useState } from "react";
import { FiUser, FiSearch, FiShoppingCart, FiMail } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h3 className="text-2xl font-bold">Bandage</h3>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6 font-semibold text-gray-600">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages1">Pages1</Link></li>
          </ul>
          <div className="flex gap-4">
            <FiSearch size={20} />
            
            {/* Cart icon links to /cart page */}
            <Link href="/cart">
              <FiShoppingCart size={20} />
            </Link>
            
            {/* Email Icon with mailto link */}
            <a href="mailto:shabanabasra8@gmail.com" className="hover:text-blue-600">
              <FiMail size={20} />
            </a>

            <FiUser size={20} />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white p-4">
          <ul className="flex flex-col gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages1">Pages1</Link></li>
          </ul>
          <button onClick={toggleMenu} className="mt-4 text-white">
            Close Menu
          </button>
        </div>
      )}
    </header>
  );
}