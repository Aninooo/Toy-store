import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Account from './pages/Account.jsx';
import Search from './pages/Search.jsx';
import Header from './components/Header.jsx'; // Import Header component
import NewArrivals from './pages/NewArrivals.jsx';
import Brands from './pages/Brands.jsx'
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="account" element={<Account />} />
        <Route path="search" element={<Search />} />
        <Route path='newarrivals' element={<NewArrivals />}></Route>
        <Route path='brands' element={<Brands />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
