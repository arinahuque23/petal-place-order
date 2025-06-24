
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Minus, Plus, X } from 'lucide-react';

interface CartDropdownProps {
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ onClose }) => {
  const { items, updateQuantity, removeFromCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border p-4 z-50">
        <div className="text-center py-8">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Shopping Cart</h3>
      </div>
      
      <div className="max-h-64 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="p-4 border-b flex items-center space-x-3">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-12 h-12 object-cover rounded"
            />
            <div className="flex-1">
              <h4 className="text-sm font-medium">{item.name}</h4>
              <p className="text-sm text-gray-500">${item.price}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="text-sm w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded"
              >
                <Plus className="w-3 h-3" />
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="w-6 h-6 flex items-center justify-center text-red-500"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold">Total: ${total.toFixed(2)}</span>
        </div>
        <div className="flex space-x-2">
          <Link
            to="/cart"
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-800 py-2 px-4 rounded text-center hover:bg-gray-200 transition-colors"
          >
            View Cart
          </Link>
          <Link
            to="/checkout"
            onClick={onClose}
            className="flex-1 bg-pink-500 text-white py-2 px-4 rounded text-center hover:bg-pink-600 transition-colors"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
