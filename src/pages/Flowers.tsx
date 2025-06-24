
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Filter } from 'lucide-react';
import { flowers } from '../data/flowers';

const Flowers = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['All', ...new Set(flowers.map(flower => flower.category))];

  const filteredFlowers = flowers.filter(flower => 
    selectedCategory === 'All' || flower.category === selectedCategory
  );

  const sortedFlowers = [...filteredFlowers].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Flower Collection</h1>
          <p className="text-gray-600">Choose from our beautiful selection of fresh flowers</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Category:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedFlowers.map((flower) => (
            <div key={flower.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={flower.image} 
                  alt={flower.name}
                  className="w-full h-48 object-cover"
                />
                {!flower.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">Out of Stock</span>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{flower.name}</h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(flower.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({flower.reviews})</span>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{flower.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-pink-500">${flower.price}</span>
                  <Link 
                    to={`/flower/${flower.id}`}
                    className={`px-4 py-2 rounded font-medium transition-colors ${
                      flower.inStock
                        ? 'bg-pink-500 text-white hover:bg-pink-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {flower.inStock ? 'View Details' : 'Out of Stock'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedFlowers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No flowers found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flowers;
