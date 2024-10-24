import React, { useState } from 'react';
import './Product.css';
import { FaRegHeart } from "react-icons/fa";
import { FaLink } from 'react-icons/fa';
import { LuShoppingCart } from "react-icons/lu";

const Product = ({ image, title, description, price }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const formattedPrice = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(price);

  const handleAddToCart = () => {
    alert(`${title} added to cart!`);
  };

  const handleWishlist = () => {
    setDialogMessage(`${title} added to wishlist!`);
    setIsDialogOpen(true);
    setTimeout(closeDialog, 3000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setDialogMessage('Link copied to clipboard!');
        setIsDialogOpen(true);
        setTimeout(closeDialog, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        setDialogMessage('Failed to copy link!');
        setIsDialogOpen(true);
        setTimeout(closeDialog, 3000);
      });
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
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

        {/*  <div><p>⭐⭐⭐</p>
        </div> */}
      </div>
      <div className="product-footer-mobile">
        <button className="icon-button-mobile" onClick={handleWishlist}>
          <FaRegHeart />
        </button>
        <button className="icon-button-mobile" onClick={handleCopyLink}>
          <FaLink />
        </button>
        <button className="icon-button-mobile" onClick={handleAddToCart}>
          <LuShoppingCart />
        </button>
      </div>
      {isDialogOpen && (
        <div className={`dialog-overlay ${isDialogOpen ? 'show' : ''}`}>
          <div className="dialog">
            <p>{dialogMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
