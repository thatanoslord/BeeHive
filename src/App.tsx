import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Star, ShoppingCart, Phone, Mail, MapPin, Facebook, Github, Twitter } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Wildflower Honey",
      price: "$24.99",
      image: "/images/c1.png",
      description: "Pure wildflower honey with a delicate floral taste"
    },
    {
      id: 2,
      name: "Manuka Honey",
      price: "$89.99",
      image: "/images/c2.png",
      description: "Premium Manuka honey with exceptional health benefits"
    },
    {
      id: 3,
      name: "Organic Comb Honey",
      price: "$34.99",
      image: "/images/c3.png",
      description: "Raw honeycomb straight from our sustainable hives"
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "The best honey I've ever tasted! Pure, natural, and absolutely delicious."
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Amazing quality and fast shipping. The Manuka honey is exceptional."
    },
    {
      name: "Emma Davis",
      rating: 5,
      comment: "Love supporting local beekeepers. This honey is pure gold!"
    },
    {
      name: "David Wilson",
      rating: 5,
      comment: "Outstanding customer service and the freshest honey around."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-opacity-95 backdrop-blur-sm" style={{ backgroundColor: 'var(--background-color)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="Beehive Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold" style={{ color: 'var(--main-color)' }}>Beehive</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-orange-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('products')} className="hover:text-orange-400 transition-colors">Products</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-orange-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-orange-400 transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition-colors">Contact</button>
              <Link to="/cart" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                <ShoppingCart size={18} />
                <span>Cart</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-orange-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 hover:text-orange-400 transition-colors">Products</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-orange-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('reviews')} className="block w-full text-left py-2 hover:text-orange-400 transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-orange-400 transition-colors">Contact</button>
              <Link to="/cart" className="flex items-center space-x-2 py-2 hover:text-orange-400 transition-colors">
                <ShoppingCart size={18} />
                <span>Cart</span>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-bold mb-6 leading-tight" style={{ fontSize: 'var(--big-font)', color: 'var(--text-color)' }}>
            Pure Nature,<br />
            <span style={{ color: 'var(--main-color)' }}>Sweet Delights</span>
          </h1>
          <p className="mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: 'var(--p-font)', color: 'var(--second-color)' }}>
            Experience the finest artisanal honey, harvested with care from our sustainable beehives.
            Each jar contains the pure essence of nature's sweetest gift.
          </p>
          <button
            onClick={() => scrollToSection('products')}
            className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            style={{ backgroundColor: 'var(--main-color)', color: 'var(--first-color)' }}
          >
            Shop Now
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4" style={{ fontSize: 'var(--h2-font)', color: 'var(--text-color)' }}>
              Our <span style={{ color: 'var(--main-color)' }}>Premium</span> Collection
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--main-color)' }}></div>
            <p style={{ fontSize: 'var(--p-font)', color: 'var(--second-color)' }}>
              Discover our carefully curated selection of artisanal honey varieties
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-gray-800/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-color)' }}>
                    {product.name}
                  </h3>
                  <p className="mb-4" style={{ color: 'var(--second-color)' }}>
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold" style={{ color: 'var(--main-color)' }}>
                      {product.price}
                    </span>
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'var(--main-color)', color: 'var(--first-color)' }}>
                      <ShoppingCart size={18} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4" style={{ backgroundColor: 'var(--first-color)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold mb-6" style={{ fontSize: 'var(--h2-font)', color: 'var(--text-color)' }}>
                Our <span style={{ color: 'var(--main-color)' }}>Story</span>
              </h2>
              <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--main-color)' }}></div>
              <p className="mb-6 leading-relaxed" style={{ fontSize: 'var(--p-font)', color: 'var(--second-color)' }}>
                For over three generations, our family has been dedicated to the ancient art of beekeeping.
                What started as a small hobby has grown into a passionate commitment to producing the finest,
                most sustainable honey while protecting our precious bee populations.
              </p>
              <p className="mb-6 leading-relaxed" style={{ fontSize: 'var(--p-font)', color: 'var(--second-color)' }}>
                Our bees roam freely across pristine wildflower meadows, collecting nectar from diverse
                botanical sources. We practice sustainable beekeeping methods that prioritize the health
                and wellbeing of our colonies, ensuring that every jar of honey represents the purest
                expression of nature's bounty.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--main-color)' }}>50+</div>
                  <div style={{ color: 'var(--second-color)' }}>Active Hives</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--main-color)' }}>100%</div>
                  <div style={{ color: 'var(--second-color)' }}>Organic</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about.png"
                alt="Our Beekeeping Team"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4" style={{ fontSize: 'var(--h2-font)', color: 'var(--text-color)' }}>
              What Our <span style={{ color: 'var(--main-color)' }}>Customers</span> Say
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--main-color)' }}></div>
            <p style={{ fontSize: 'var(--p-font)', color: 'var(--second-color)' }}>
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-current" style={{ color: 'var(--main-color)' }} />
                  ))}
                </div>
                <p className="mb-4 italic" style={{ color: 'var(--second-color)' }}>
                  "{review.comment}"
                </p>
                <div className="font-semibold" style={{ color: 'var(--text-color)' }}>
                  {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4" style={{ backgroundColor: 'var(--first-color)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4" style={{ fontSize: 'var(--h2-font)', color: 'var(--text-color)' }}>
              Get In <span style={{ color: 'var(--main-color)' }}>Touch</span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--main-color)' }}></div>
            <p style={{ fontSize: 'var(--p-font)', color: 'var(--second-color)' }}>
              Have questions about our honey or want to learn more about beekeeping?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text-color)' }}>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" style={{ color: 'var(--main-color)' }} />
                  <span style={{ color: 'var(--second-color)' }}> +212 0610122293 </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" style={{ color: 'var(--main-color)' }} />
                  <span style={{ color: 'var(--second-color)' }}>sabbarmoussa@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" style={{ color: 'var(--main-color)' }} />
                  <span style={{ color: 'var(--second-color)' }}>400 Taddart Agadir Morocco</span>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium" style={{ color: 'var(--text-color)' }}>Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-orange-400 focus:outline-none transition-colors"
                  style={{ color: 'var(--text-color)' }}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: 'var(--text-color)' }}>Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-orange-400 focus:outline-none transition-colors"
                  style={{ color: 'var(--text-color)' }}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: 'var(--text-color)' }}>Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-orange-400 focus:outline-none transition-colors resize-none"
                  style={{ color: 'var(--text-color)' }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--main-color)', color: 'var(--first-color)' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/images/logo.png" alt="Beehive Logo" className="h-8 w-8" />
              <span className="text-xl font-bold" style={{ color: 'var(--main-color)' }}>Beehive</span>
            </div>

            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://m.facebook.com/moussa.sabbar.549/ " target="_blank" className="hover:scale-110 transition-transform" style={{ color: 'var(--main-color)' }}>
                <Facebook size={24} />
              </a>
              <a href="https://x.com/MoussaSabbar" target="_blank" className="hover:scale-110 transition-transform" style={{ color: 'var(--main-color)' }}>
                <Twitter size={24} />
              </a>
              <a href="https://github.com/thatanoslord" target="_blank" className="hover:scale-110 transition-transform" style={{ color: 'var(--main-color)' }}>
                <Github size={24} />
              </a>
            </div>

            <div style={{ color: 'var(--second-color)' }}>
              © 2024 Beehive. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;