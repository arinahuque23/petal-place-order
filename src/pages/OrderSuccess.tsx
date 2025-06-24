
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Package } from 'lucide-react';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your beautiful flowers are being prepared and will be delivered soon.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center text-gray-600 mb-2">
            <Package className="h-5 w-5 mr-2" />
            <span className="text-sm">Order #FL-2024-001</span>
          </div>
          <p className="text-sm text-gray-500">
            You will receive an email confirmation and tracking information shortly.
          </p>
        </div>
        
        <div className="space-y-3">
          <Link
            to="/"
            className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center"
          >
            <Home className="h-5 w-5 mr-2" />
            Return to Home
          </Link>
          
          <Link
            to="/flowers"
            className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors block"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
