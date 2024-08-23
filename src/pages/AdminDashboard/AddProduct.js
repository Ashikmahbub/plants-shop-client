// src/pages/Admin/AddProduct.js
import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Indoor'); // Default to "Indoor"
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Get the uploaded file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('weight', weight);
    formData.append('price', price);
    formData.append('image', image); // Append the image file

    try {
      const response = await axios.post(`${API_URL}/products`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for handling file uploads
        },
      });
      alert(response.data.message);
    } catch (error) {
      alert('Failed to add product');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Product Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter product title"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Succulents">Succulents</option>
            <option value="Herbs">Herbs</option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Weight (in grams)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter weight in grams"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Price (in USD)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter price"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Product Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="file-input file-input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-600"
            accept="image/*"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-success w-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
