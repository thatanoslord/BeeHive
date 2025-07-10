import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
}

function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Wildflower Honey",
      price: 24.99,
      image: "/images/c1.png",
      quantity: 2,
      description: "Pure wildflower honey with a delicate floral taste"
    },
    {
      id: 2,
      name: "Manuka Honey",
      price: 89.99,
      image: "/images/c2.png",
      quantity: 1,
      description: "Premium Manuka honey with exceptional health benefits"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      {/* Header */}
      <header className="border-b border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft size={24} style={{ color: 'var(--main-color)' }} />
              <span className="text-lg font-medium">Back to Shop</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="Beehive Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold" style={{ color: 'var(--main-color)' }}>Beehive</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <ShoppingBag size={32} style={{ color: 'var(--main-color)' }} />
              <h1 className="text-3xl font-bold">Shopping Cart</h1>
              <span className="text-lg" style={{ color: 'var(--second-color)' }}>
                ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
              </span>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag size={64} className="mx-auto mb-4 opacity-50" style={{ color: 'var(--second-color)' }} />
                <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                <p className="mb-6" style={{ color: 'var(--second-color)' }}>
                  Add some delicious honey to get started!
                </p>
                <Link 
                  to="/"
                  className="inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: 'var(--main-color)', color: 'var(--first-color)' }}
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-colors">
                    <div className="flex items-center space-x-6">
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                        <p className="mb-3" style={{ color: 'var(--second-color)' }}>
                          {item.description}
                        </p>
                        <div className="text-2xl font-bold" style={{ color: 'var(--main-color)' }}>
                          ${item.price.toFixed(2)}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3 bg-gray-700 rounded-full px-4 py-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-600 rounded-full transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-600 rounded-full transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-full transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-gray-800/50 rounded-2xl p-6 sticky top-6">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-400">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span style={{ color: 'var(--main-color)' }}>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {shipping > 0 && (
                  <div className="mb-6 p-4 bg-orange-400/10 border border-orange-400/20 rounded-lg">
                    <p className="text-sm" style={{ color: 'var(--main-color)' }}>
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}

                <button className="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  style={{ backgroundColor: 'var(--main-color)', color: 'var(--first-color)' }}
                >
                  <CreditCard size={20} />
                  <span>Proceed to Checkout</span>
                </button>

                <Link 
                  to="/"
                  className="block w-full text-center py-3 mt-4 rounded-xl border border-gray-600 hover:bg-gray-700 transition-colors"
                >
                  Continue Shopping
                </Link>

                <div className="mt-6 pt-6 border-t border-gray-600">
                  <h3 className="font-semibold mb-3">We Accept</h3>
                  <div className="flex space-x-2">
                    <div className="w-12 h-8 bg-gray-700 rounded flex items-center justify-center text-xs font-bold">
                      VISA
                    </div>
                    <div className="w-12 h-8 bg-gray-700 rounded flex items-center justify-center text-xs font-bold">
                      MC
                    </div>
                    <div className="w-12 h-8 bg-gray-700 rounded flex items-center justify-center text-xs font-bold">
                      AMEX
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;