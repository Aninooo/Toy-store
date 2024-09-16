import React, { useState } from 'react';
import './header.css';
import { IoMdCart } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

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

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/newarrivals">New Arrivals</Link></li>
        <li><Link to="/products">All Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="icon-links">
        <Link to="/search"><CiSearch /></Link>
        <Link to="/account"><MdOutlineAccountCircle /></Link>
        <Link to="/cart"><IoMdCart /></Link>
      </div>
    </header>
  );
}

export default Header;
