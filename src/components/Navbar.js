import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="text-2xl font-bold text-green-700">
          <Link to="/">🌿 PlantShop</Link>
        </div>

        {/* Search Bar */}
        <div className="relative hidden md:flex md:w-1/3">
          <input
            type="text"
            placeholder="Search plants..."
            className="border border-green-700 px-4 py-2 rounded-l w-full focus:outline-none"
          />
          <button className="absolute inset-y-0 right-0 px-4 py-2 bg-green-700 text-white rounded-r hover:bg-green-800 transition duration-300 flex items-center">
            <FaSearch />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-700 hover:text-green-900 transition duration-300"
          onClick={handleToggleMobileMenu}
        >
          <FaSearch size={24} />
        </button>

        {/* Navbar Links */}
        <ul className={`flex flex-col md:flex-row md:space-x-6 text-green-700 font-semibold md:items-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link to="/" className="block py-2 md:py-0 hover:text-green-900 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="block py-2 md:py-0 hover:text-green-900 transition duration-300">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 md:py-0 hover:text-green-900 transition duration-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 md:py-0 hover:text-green-900 transition duration-300">
              Contact
            </Link>
          </li>
          {/* Mobile Menu Items */}
          <li className="md:hidden">
            <Link to="/cart" className="flex items-center text-green-700 hover:text-green-900 transition duration-300">
              <FaShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
          <li className="md:hidden">
            <Link to="/profile" className="text-green-700 hover:text-green-900 transition duration-300">
              <FaUserCircle size={24} />
            </Link>
          </li>
        </ul>

        {/* Desktop Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative text-green-700 hover:text-green-900 transition duration-300 hidden md:flex items-center">
            <FaShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>

          <Link to="/profile" className="text-green-700 hover:text-green-900 transition duration-300 hidden md:flex">
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className="flex flex-col space-y-4 px-4">
            <li>
              <Link to="/" className="block py-2 text-green-700 hover:text-green-900 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="block py-2 text-green-700 hover:text-green-900 transition duration-300">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 text-green-700 hover:text-green-900 transition duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 text-green-700 hover:text-green-900 transition duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" className="flex items-center text-green-700 hover:text-green-900 transition duration-300">
                <FaShoppingCart size={24} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-green-700 hover:text-green-900 transition duration-300">
                <FaUserCircle size={24} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
