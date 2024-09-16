import React from 'react';
import './Product.css';

const Product = ({ image, title, description, price }) => {
  const formattedPrice = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(price);

  const handleAddToCart = () => {
    alert(`${title} added to cart!`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <div>
          <h2 className="product-title">{title}</h2>
          <p className="product-description">{description}</p>
        </div>
        <div>
          <span className="product-price">{formattedPrice}</span>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
