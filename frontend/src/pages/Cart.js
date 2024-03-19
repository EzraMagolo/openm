import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import '../assets/css/global.css'

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('/api/orders');
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await fetch(`/api/cart/${productId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <div>
      <Header />
      <section>
        <h2 className="section-title">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map(item => (
              <CartItem
                key={item._id}
                item={item}
                onRemove={handleRemoveFromCart}
              />
            ))}
            <div className="total">
              <p className="total-title">Total:</p>
              <p className="total-price">${/* Calculate total price */}</p>
            </div>
            <button className="btn-buy">Checkout</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;

