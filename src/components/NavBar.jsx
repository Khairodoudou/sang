"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md p-1 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600">MySite</span>
        </Link>

        {/* Liens au centre */}
        <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-gray-600 hover:text-blue-500 transition">الصفحة الرئيسية</Link>
          <a href="#About" className="text-gray-600 hover:text-blue-500 transition">متبرع جديد</a>
          <a href="#Resume" className="text-gray-600 hover:text-blue-500 transition">البحث عن متبرع</a>
        </nav>

        {/* Bouton Login à droite */}
        <div className="hidden md:block">
          <Link
            href="/Login"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            تسجيل الدخول
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white py-1 px-4 pb-4 space-y-2 shadow">
          <Link href="/" className="block text-end text-gray-600 hover:text-blue-500">الصفحة الرئيسية</Link>
          <a href="#About" className="block text-end text-gray-600 hover:text-blue-500">متبرع جديد</a>
          <a href="#Resume" className="block text-end text-gray-600 hover:text-blue-500">البحث عن متبرع</a>
          <Link
            href="/Login"
            className="block text-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            تسجيل الدخول
          </Link>
        </div>
      )}
    </header>
  );
}

export default NavBar;
