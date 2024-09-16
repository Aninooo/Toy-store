import React from 'react';
import './Product.css';

const Product = ({ image, title, description, price }) => {
  const formattedPrice = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(price);

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <span className="product-price">{formattedPrice}</span>
      </div>
    </div>
  );
};

export default Product;
