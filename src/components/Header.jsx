import React, { useState } from 'react';
import './header.css';
import { CiShoppingCart } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import Logo from '../assets/logo-law.png'

function Header() {
  const [query, setQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
        <div className='logo-container'>
        <img className='logo' src={Logo} alt="" />
        </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/newarrivals">New Arrivals</Link></li>
        <li className="dropdown">
          <button 
            className={`dropdown-toggle ${isDropdownOpen ? 'active' : ''}`} 
            onClick={toggleDropdown}
          >
            All Products <IoMdArrowDropdown className="dropdown-icon" />
          </button>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li><Link to="/big-sale">Big Sale</Link></li>
            <li><Link to="/on-stack">On Stack</Link></li>
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="icon-links">
        <Link to="/search"><CiSearch /></Link>
        <Link to="/account"><VscAccount /></Link>
        <Link to="/cart"><CiShoppingCart /></Link>
      </div>
    </header>
  );
}

export default Header;
