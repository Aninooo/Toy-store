import React from 'react';
import './Product.css';
import { FaRegHeart } from "react-icons/fa";
import { FaLink } from 'react-icons/fa';


const Product = ({ image, title, description, price }) => {
  const formattedPrice = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(price);

  const handleAddToCart = () => {
    alert(`${title} added to cart!`);
  };

  const handleWishlist = () => {
    alert(`${title} added to wishlist!`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className='pre-order'>PRE-ORDER</div>
      <div className="product-footer">
        <button className="icon-button" onClick={handleWishlist}>
        <FaRegHeart />
        </button>
        <button className="icon-button" onClick={handleCopyLink}>
          <FaLink />
        </button>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Order now!
        </button>
      </div>
      <div className="product-info">
        <div>
          <h2 className="product-title">{title}</h2>
          <p className="product-description">{description}</p>
        </div>
        <div>
          <span className="product-price">{formattedPrice}</span>
        </div>
      </div>
      <div className="product-footer-mobile">
        <button className="icon-button-mobile" onClick={handleWishlist}>
        <FaRegHeart />
        </button>
        <button className="icon-button-mobile" onClick={handleCopyLink}>
          <FaLink />
        </button>
        <button className="add-to-cart-button-mobile" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
