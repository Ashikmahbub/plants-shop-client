import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

const IndoorPlants = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchIndoorPlants = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/products/indoor`);
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch indoor plants');
      }
    };

    fetchIndoorPlants();
  }, []);

  const handleAddToCart = (product) => {
    // Implement your add-to-cart functionality here
    console.log('Adding to cart:', product);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Indoor Plants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={`${API_URL}${product.imageUrl}`}
              alt={product.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">Weight: {product.weight} grams</p>
              <p className="text-gray-600 mb-4">Price: ${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndoorPlants;
