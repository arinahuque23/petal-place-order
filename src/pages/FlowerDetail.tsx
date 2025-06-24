
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ArrowLeft, Plus, Minus, ShoppingCart, Heart } from 'lucide-react';
import { flowers } from '../data/flowers';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const FlowerDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const flower = flowers.find(f => f.id === parseInt(id || '0'));

  if (!flower) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Flower not found</h1>
          <Link to="/flowers" className="text-pink-500 hover:underline">
            Back to Flowers
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: flower.id,
        name: flower.name,
        price: flower.price,
        image: flower.image
      });
    }
    toast.success(`Added ${quantity} ${flower.name} to cart!`);
  };

  const relatedFlowers = flowers
    .filter(f => f.category === flower.category && f.id !== flower.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link 
          to="/flowers"
          className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Flowers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="space-y-4">
            <img 
              src={flower.image} 
              alt={flower.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full mb-2">
                {flower.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{flower.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(flower.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">({flower.reviews} reviews)</span>
              </div>

              <div className="text-3xl font-bold text-pink-500 mb-4">
                ${flower.price}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {flower.description}
              </p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${flower.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={`font-medium ${flower.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {flower.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Quantity and Add to Cart */}
            {flower.inStock && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 font-medium">Quantity:</span>
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 border-x">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                  <button className="border-2 border-pink-500 text-pink-500 py-3 px-6 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Product Details */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Product Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fresh flowers delivered daily</li>
                <li>• Professional arrangement included</li>
                <li>• Care instructions provided</li>
                <li>• 7-day freshness guarantee</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedFlowers.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Flowers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedFlowers.map((relatedFlower) => (
                <Link
                  key={relatedFlower.id}
                  to={`/flower/${relatedFlower.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img 
                    src={relatedFlower.image} 
                    alt={relatedFlower.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{relatedFlower.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-pink-500 font-bold">${relatedFlower.price}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{relatedFlower.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlowerDetail;
