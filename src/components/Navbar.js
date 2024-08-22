import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-700">
          <a href="/">🌿 PlantShop</a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-green-700 font-semibold">
          <li>
            <a href="/" className="hover:text-green-900 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="hover:text-green-900 transition duration-300">
              Shop
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-green-900 transition duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-green-900 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Admin/Login Button */}
        <div>
          <a
            href="/dashboard"
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
          >
            Admin
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
