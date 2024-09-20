import React from 'react';
import './Cart.css';
import Footer from '../components/Footer';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img 
              src={item.image} 
              alt={item.title} 
              className="cart-image" 
            />
            <div className="cart-item-info">
              <div className="cart-item-title">{item.title}</div>
              <div className="cart-item-price">{item.price} x {item.quantity}</div>
            </div>
            <button className="buy-button">Buy</button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <button className="checkout-button">Checkout</button>
      )}
      <Footer/>
    </div>
  );
}

export default Cart;
