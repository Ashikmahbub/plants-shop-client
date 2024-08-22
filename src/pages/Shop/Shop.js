import React, { useState, useEffect } from 'react';
import { getProducts } from '../../api'; // Assuming you have an API file like this

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when the component loads
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Shop Our Plants</h2>

      {/* Filters Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search plants..."
          className="border border-green-700 px-3 py-2 rounded w-full md:w-1/3"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-800">{product.name}</h3>
              <p className="text-gray-700 mt-2">${product.price}</p>
              <button className="bg-green-700 text-white px-4 py-2 rounded mt-4 hover:bg-green-800 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
