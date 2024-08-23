import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import {   useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate(); // For navigation after order submission
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    city: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/orders', { ...formData, cart });
      alert('Order placed successfully! Confirmation email sent.');
      clearCart();
      navigate('/thank-you');  
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name and Email */}
        <div className="md:flex md:space-x-4">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 rounded w-full"
              required
            />
          </div>
          <div className="md:w-1/2">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 rounded w-full"
              required
            />
          </div>
        </div>

        {/* Phone and Address */}
        <div className="md:flex md:space-x-4">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 rounded w-full"
              required
            />
          </div>
          <div className="md:w-1/2 mb-4 md:mb-0">
            <label className="block text-gray-700 font-semibold mb-2">Address</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 rounded w-full"
              required
            />
          </div>
        </div>

        {/* City and Country */}
        <div className="md:flex md:space-x-4">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <label className="block text-gray-700 font-semibold mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 rounded w-full"
              required
            />
          </div>
          <div className="md:w-1/2">
            <label className="block text-gray-700 font-semibold mb-2">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 rounded w-full"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition duration-300 w-full md:w-auto"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
