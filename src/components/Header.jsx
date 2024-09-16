import React, { useState } from 'react';
import './header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <header>
      <div className='hamburger-menu'><GiHamburgerMenu /></div>
      <h1 className='title'>Anino's Toy Collections</h1>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/account">Account</Link></li>
          <form onSubmit={handleSearch} className='search-form'>
        <input
          type="text"
          placeholder='Search Toys...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
          <li><Link to="/cart" className='cart-icon'><IoMdCart /></Link></li>
          
        </ul>
      </div>
    </header>
  );
}

export default Header;
