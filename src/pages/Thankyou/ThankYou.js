import React from 'react';

const ThankYou = () => {
  return (
    <div className="container mx-auto px-4 py-6 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Thank You for Your Order!</h2>
      <p className="text-gray-700 mb-6">Your order has been placed successfully. A confirmation email has been sent to you.</p>
      <p className="text-green-700 font-semibold">We appreciate your business and hope you enjoy your new plants!</p>
    </div>
  );
};

export default ThankYou;
