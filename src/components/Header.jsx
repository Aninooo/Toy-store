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
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const toggleBrandsDropdown = () => {
    setIsBrandsDropdownOpen(!isBrandsDropdownOpen);
  };

  return (
    <header>
      <div className='logo-container'>
        <img className='logo' src={Logo} alt="" />
      </div>
      <div className='nav-container'>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/newarrivals">New Arrivals</Link></li>
          <li className="dropdown">
            <button 
              className={`dropdown-toggle ${isProductDropdownOpen ? 'active' : ''}`} 
              onClick={toggleProductDropdown}
            >
              All Products <IoMdArrowDropdown className="dropdown-icon" />
            </button>
            <ul className={`dropdown-menu ${isProductDropdownOpen ? 'show' : ''}`}>
              <li><Link to="/big-sale">Big Sale</Link></li>
              <li><Link to="/on-stack">On Stack</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <button 
              className={`dropdown-toggle ${isBrandsDropdownOpen ? 'active' : ''}`} 
              onClick={toggleBrandsDropdown}
            >
              Brands / Toylines <IoMdArrowDropdown className="dropdown-icon" />
            </button>
            <ul className={`dropdown-menu ${isBrandsDropdownOpen ? 'show' : ''}`}>
              <li><Link to="/brands/bandai">Bandai</Link></li>
              <li><Link to="/brands/banpresto">Banpresto</Link></li>
              <li><Link to="/brands/whos-studio">WHO/S Studio</Link></li>
              <li><Link to="/brands/fox-studios">Fox Studios</Link></li>
              <li><Link to="/brands/x6-studio">X6 Studio</Link></li>
            </ul>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="icon-links">
          <Link to="/search"><CiSearch /></Link>
          <Link to="/account">{<VscAccount style={{ fontSize: '20px' }} />}</Link>
          <Link to="/cart"><CiShoppingCart /></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
