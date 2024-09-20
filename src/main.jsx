import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Account from './pages/Account.jsx';
import Search from './pages/Search.jsx';
import Header from './components/Header.jsx'; 
import NewArrivals from './cards/NewArrivals.jsx';
import Brands from './pages/Brands.jsx';
import Chatbot from './Chatbot.jsx';
import ProtectedRoutes from './utils/ProtectedRoutes.jsx';
import Cart from './pages/Cart.jsx';
import Notification from './components/Notification.jsx'; 
import './index.css';

function App() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState('');

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.title === product.title);
      if (existingItem) {
        return prevCart.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setNotification(`${product.title} added to cart!`);
    setTimeout(() => setNotification(''), 3000); 
  };

  const handleCloseNotification = () => {
    setNotification('');
  };

  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route element={<ProtectedRoutes />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="account" element={<Account />} />
        <Route path="search" element={<Search />} />
        <Route path="newarrivals" element={<NewArrivals onAddToCart={handleAddToCart} />} /> 
        <Route path="brands" element={<Brands />} />
        <Route path="cart" element={<Cart cartItems={cart} />} />
      </Routes>
      <Chatbot />
      {notification && <Notification message={notification} onClose={handleCloseNotification} />} 
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
