import React, { useState } from 'react';
import './NewArrivals.css';
import Pagination from '../components/Pagination';
import { FaRegHeart, FaLink } from "react-icons/fa";

import Rukawa from '../assets/newarrivals/rukawa.png';
import Sakuragi from '../assets/newarrivals/sakuragi.png';
import Akagi from '../assets/newarrivals/akagi.png';
import Mitsui from '../assets/newarrivals/mitsui.png';
import Ryota from '../assets/newarrivals/ryota.png';
import RukawanadSakuragi from '../assets/newarrivals/rukawa&sakuragi.png';
import Dunk from '../assets/newarrivals/dunk.jpg';
import SakuragiBlack from '../assets/newarrivals/sakuragi-black.png';
import SakuragiEmotion from '../assets/newarrivals/sakuragi-emotion.jpg';
import Absrukawa from '../assets/newarrivals/absrukawa.png';
import Oksakuragi from '../assets/newarrivals/oksakuragi.jpg';
import Sadsakuragi from '../assets/newarrivals/sadsakuragi.jpg';
import Shohuko from '../assets/newarrivals/shohuko.png';
import Sitsakuragi from '../assets/newarrivals/sitsakuragi.jpg';
import Chibifiresakuragi from '../assets/newarrivals/chibifiresakuragi.jpg';
import Chibisakuragi from '../assets/newarrivals/chibisakuragi.jpg';
import Himiko from '../assets/newarrivals/himiko.png';

const products = [
  { image: Rukawa, title: 'Rukawa', description: 'SLAM DUNK Figure DiGiSM One and Only SHOHOKU Starting Member Set JAPAN NEW', price: '₱6,000' },
  { image: Sakuragi, title: 'Sakuragi', description: 'SLAM DUNK Figure DiGiSM One and Only SHOHOKU Starting Member Set JAPAN NEW', price: '₱7,000' },
  { image: Akagi, title: 'Akagi', description: 'SLAM DUNK Figure DiGiSM One and Only SHOHOKU Starting Member Set JAPAN NEW', price: '₱6,000' },
  { image: Mitsui, title: 'Mitsui', description: 'SLAM DUNK Figure DiGiSM One and Only SHOHOKU Starting Member Set JAPAN NEW', price: '₱6,000' },
  { image: Ryota, title: 'Ryota', description: 'SLAM DUNK Figure DiGiSM One and Only SHOHOKU Starting Member Set JAPAN NEW', price: '₱6,000' },
  { image: RukawanadSakuragi, title: 'Anime Slam Dunk', description: 'Q Version Master Kick Ball Sakuragi Hanamichi Rukawa Kaede Action Figures Car Chassis Model Decoration Kids Toys', price: '₱4,500' },
  { image: Dunk, title: 'SLAM DUNK Hanamichi Sakuragi Resin', description: 'Model 1/6 Scale ZX Studio In Stock 40cm New', price: '₱10,000' },
  { image: SakuragiBlack, title: 'Sakuragi Black', description: 'Sakuragi in black outfit', price: '₱2,000' },
  { image: SakuragiEmotion, title: 'Sakuragi', description: 'Sakuragi showing emotion', price: '₱25,000' },
  { image: Absrukawa, title: 'Rukawa', description: 'Rukawa in action', price: '₱12,000' },
  { image: Oksakuragi, title: 'Ok Sakuragi', description: 'Casual Sakuragi', price: '₱11,800' },
  { image: Sadsakuragi, title: 'Sad Sakuragi', description: 'Sakuragi looking sad', price: '₱8,000' },
  { image: Shohuko, title: 'Shohuko', description: 'Shohuko in the game', price: '₱18,000' },
  { image: Sitsakuragi, title: 'Hanamichi Sakuragi Resin M3 Studio Figure GK Model Statue SLAM DUNK', description: 'Sakuragi sitting down', price: '₱5,400' },
  { image: Chibifiresakuragi, title: 'Chibi Fire Sakuragi', description: 'Chibi Sakuragi in action', price: '₱4,000' },
  { image: Chibisakuragi, title: 'Chibi Sakuragi', description: 'Chibi Sakuragi figure', price: '₱1,600' },
  { image: Himiko, title: 'Himiko Toga', description: 'Villain (Sepia Version) Pre-Order Downpayment', price: '₱1,500' },
];

const itemsPerPage = 16;

function NewArrivals({ onAddToCart }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentProducts = products.slice(startIdx, endIdx);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCopyLink = (title) => {
    navigator.clipboard.writeText(`Check out this product: ${title}`);
    alert('Link copied to clipboard!');
  };

  const handleAddToWishlist = (title) => {
    alert(`${title} added to wishlist!`);
  };

  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  const displayedEnd = Math.min(endIdx, products.length);
  const totalResults = products.length;

  return (
    <>
      <div className='title'>
        <h1>New Arrivals List</h1>
      </div>

      <div className="card-container">
        {currentProducts.map((product, index) => (
          <div className='product-card' key={index}>
            <img src={product.image} alt={product.title} className='product-image' />
            <div className='new'>New</div>
            <div className='product-info'>
              <div className='icons-newarrival'>
                <button onClick={() => handleAddToWishlist(product.title)} className='iconF-button'><FaRegHeart /></button>
                <button onClick={() => handleCopyLink(product.title)} className='iconF-button'><FaLink /></button>
                <button onClick={() => handleAddToCart(product)} className='add-to-cart-buttonF'>Add to Cart</button>
              </div>
              <div className='product-title-new'>{product.title}</div>
              <div className='product-description'>{product.description}</div>
              <div className='product-price'>{product.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ color: 'white', marginLeft: '20px' }}>
        <p>Showing {displayedEnd} of {totalResults} Results</p>
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default NewArrivals;
