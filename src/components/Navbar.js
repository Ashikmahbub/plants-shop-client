// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-700">
          <Link to="/">🌿 PlantShop</Link>
        </div>

        <div className="relative hidden md:flex md:w-1/3">
          <input
            type="text"
            placeholder="Search plants..."
            className="border border-green-700 px-4 py-2 rounded-l w-full focus:outline-none"
          />
          <button className="absolute right-0 top-0 mt-2 mr-2 bg-green-700 text-white px-4 py-2 rounded-r hover:bg-green-800 transition duration-300">
            <FaSearch />
          </button>
        </div>

        <ul className="flex space-x-6 text-green-700 font-semibold hidden md:flex">
          <li>
            <Link to="/" className="hover:text-green-900 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-green-900 transition duration-300">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-900 transition duration-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-900 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative text-green-700 hover:text-green-900 transition duration-300 flex items-center">
            <FaShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>

          <Link to="/profile" className="text-green-700 hover:text-green-900 transition duration-300">
            <FaUserCircle size={24} />
          </Link>

          <Link to="/dashboard" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300 hidden md:block">
            Admin
          </Link>

          <Link to="/cart" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300 hidden md:block">
            Go to Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
