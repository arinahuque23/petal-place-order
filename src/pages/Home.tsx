
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Award, Truck } from 'lucide-react';
import { flowers } from '../data/flowers';

const Home = () => {
  const featuredFlowers = flowers.slice(0, 4);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Beautiful flowers and excellent service! My order arrived exactly on time.",
      rating: 5
    },
    {
      name: "Mike Chen",
      text: "The quality of flowers is outstanding. Will definitely order again!",
      rating: 5
    },
    {
      name: "Emily Davis",
      text: "Perfect for my anniversary. My wife loved the bouquet!",
      rating: 5
    }
  ];

  const services = [
    {
      icon: <Truck className="h-8 w-8 text-pink-500" />,
      title: "Free Delivery",
      description: "Free delivery on orders over $50"
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Fresh Flowers",
      description: "100% fresh flowers guaranteed"
    },
    {
      icon: <Award className="h-8 w-8 text-pink-500" />,
      title: "Quality Service",
      description: "Award-winning customer service"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Beautiful Flowers
            <span className="text-pink-500"> Delivered</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Express your feelings with our stunning collection of fresh flowers. 
            Perfect for every occasion and delivered with love.
          </p>
          <Link
            to="/flowers"
            className="inline-flex items-center bg-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Featured Flowers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Flowers</h2>
            <p className="text-gray-600">Discover our most popular and beautiful flower arrangements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredFlowers.map((flower) => (
              <div key={flower.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={flower.image} 
                  alt={flower.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{flower.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < flower.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({flower.reviews})</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{flower.description.substring(0, 80)}...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-500">${flower.price}</span>
                    <Link 
                      to={`/flower/${flower.id}`}
                      className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/flowers"
              className="inline-flex items-center border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-colors"
            >
              View All Flowers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600">We provide the best flower delivery service in the city</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Read reviews from our happy customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Send Beautiful Flowers?</h2>
          <p className="text-xl mb-8">Browse our collection and make someone's day special</p>
          <Link
            to="/flowers"
            className="inline-flex items-center bg-white text-pink-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Shopping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
