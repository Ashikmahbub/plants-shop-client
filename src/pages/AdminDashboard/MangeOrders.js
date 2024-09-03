import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader'; // For react-spinners, or use a custom spinner

const API_URL = 'http://localhost:5000/api/';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true); // Show spinner
    try {
      const response = await axios.get(`${API_URL}admin/orders`);
      setOrders(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error('Failed to fetch orders');
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      await axios.put(`${API_URL}admin/orders/${orderId}/status`, { status });
      toast.success('Order status updated');
      fetchOrders(); // Refresh orders after update
    } catch (error) {
      toast.error('Failed to update order status');
    }
  };

  const deleteOrder = async (orderId) => {
    if (!window.confirm('Are you sure you want to delete this order?')) return;

    try {
      await axios.delete(`${API_URL}admin/orders/${orderId}`);
      toast.success('Order deleted');
      fetchOrders(); // Refresh orders after deletion
    } catch (error) {
      toast.error('Failed to delete order');
    }
  };

  const handleEditOrder = (orderId) => {
    navigate(`/admin/orders/${orderId}/edit`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Manage Orders</h2>

      {loading ? ( // Show spinner while loading
        <div className="flex justify-center items-center h-64">
          <ClipLoader color="#38a169" loading={loading} size={50} /> {/* Spinner */}
        </div>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Order ID</th>
              <th className="py-2 px-4 border">Items</th>
              <th className="py-2 px-4 border">Total Amount</th>
              <th className="py-2 px-4 border">Payment Status</th>
              <th className="py-2 px-4 border">Delivery Status</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="py-2 px-4 border">{order.orderCode}</td>
                <td className="py-2 px-4 border">
                  {order.cart.length} items
                  <button
                    className="text-blue-600 underline ml-2"
                    onClick={() => handleEditOrder(order._id)}
                  >
                    View/Edit
                  </button>
                </td>
                <td className="py-2 px-4 border">${order.orderTotal}</td>
                <td className="py-2 px-4 border">{order.paymentStatus}</td>
                <td className="py-2 px-4 border">{order.deliveryStatus}</td>
                <td className="py-2 px-4 border flex space-x-2">
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                    className="border px-2 py-1 rounded"
                  >
                    <option value="Awaiting Payment">Awaiting Payment</option>
                    <option value="Awaiting Processing">Awaiting Processing</option>
                    <option value="Paid">Paid</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditOrder(order._id)}
                    className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageOrders;
