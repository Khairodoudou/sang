"use client"; // Obligatoire pour utiliser useState dans un composant client

import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md p-1 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600">MySite</span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#Home" className="text-gray-600 hover:text-blue-500 transition">Home</a>
          <a href="#About" className="text-gray-600 hover:text-blue-500 transition">About</a>
          <a href="#Resume" className="text-gray-600 hover:text-blue-500 transition">Resume</a>
          <a href="#Certificate" className="text-gray-600 hover:text-blue-500 transition">Certificate</a>
          <a href="#Contact" className="text-gray-600 hover:text-blue-500 transition">Contact</a>
        </nav>

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
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow">
          <a href="#Home" className="block text-gray-600 hover:text-blue-500">Home</a>
          <a href="#About" className="block text-gray-600 hover:text-blue-500">About</a>
          <a href="#Resume" className="block text-gray-600 hover:text-blue-500">Resume</a>
          <a href="#Certificate" className="block text-gray-600 hover:text-blue-500">Certificate</a>
          <a href="#Contact" className="block text-gray-600 hover:text-blue-500">Contact</a>
        </div>
      )}
    </header>
  );
}

export default NavBar;


