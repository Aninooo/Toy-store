import React, { useState, useRef, useEffect } from 'react';
import './header.css';
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { IoMdArrowDropdown } from "react-icons/io";
import Logo from '../assets/logo-Law.png';
import { GiHamburgerMenu } from "react-icons/gi";
import Trust from '../assets/trust_badge.avif';
import { FaInstagram } from "react-icons/fa6";

function Header() {
  const [query, setQuery] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Used to get the current URL

  const searchPopupRef = useRef(null);
  const searchButtonRef = useRef(null);
  const navRef = useRef(null);
  const navLinks = document.querySelectorAll('.nav-links li a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(nav => nav.parentElement.classList.remove('active')); // Remove active class from all
      link.parentElement.classList.add('active'); // Add active to clicked item
    });
  });

  const handleSearch = (event) => {
    event.preventDefault();
    if (query) {
      navigate(`/search?q=${query}`);
      setIsSearchOpen(false);
    }
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const toggleBrandsDropdown = () => {
    setIsBrandsDropdownOpen(!isBrandsDropdownOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchPopupRef.current && !searchPopupRef.current.contains(event.target) &&
        searchButtonRef.current && !searchButtonRef.current.contains(event.target) &&
        navRef.current && !navRef.current.contains(event.target)
      ) {
        closeNav();
        setIsSearchOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <div className='head-head'>
        <a className='fbpage' href="https://www.facebook.com/AninoGaming">
          <span className='underline'>Follow Anino's Toy Collections Facebook page by Clicking here</span>
        </a>
      </div>
      <header>
        <div className='nav-container'>
          <div className='logo-container'>
            <img className='logo' src={Logo} alt="Logo" />
          </div>
          <div className='hamburger-menu' onClick={toggleNav}>
            <GiHamburgerMenu />
          </div>
          <ul ref={navRef} className={`nav-links ${isNavOpen ? 'show' : ''}`}>
            <li onClick={closeNav}><Link to="/" className={getLinkClass('/')}>Home</Link></li>
            <li onClick={closeNav}><Link to="/newarrivals" className={getLinkClass('/newarrivals')}>New Arrivals</Link></li>
            <li className="dropdown">
              <button
                className={`dropdown-toggle ${isProductDropdownOpen ? 'active' : ''}`}
                onClick={toggleProductDropdown}
              >
                All Products <IoMdArrowDropdown className="dropdown-icon" />
              </button>
              <ul className={`dropdown-menu ${isProductDropdownOpen ? 'show' : ''}`}>
                <li onClick={closeNav}><Link to="/big-sale" className={getLinkClass('/big-sale')}>Big Sale</Link></li>
                <li onClick={closeNav}><Link to="/on-stack" className={getLinkClass('/on-stack')}>On Stack</Link></li>
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
                <li onClick={closeNav}><Link to="/brands/bandai" className={getLinkClass('/brands/bandai')}>Bandai</Link></li>
                <li onClick={closeNav}><Link to="/brands/banpresto" className={getLinkClass('/brands/banpresto')}>Banpresto</Link></li>
                <li onClick={closeNav}><Link to="/brands/whos-studio" className={getLinkClass('/brands/whos-studio')}>WHO/S Studio</Link></li>
                <li onClick={closeNav}><Link to="/brands/fox-studios" className={getLinkClass('/brands/fox-studios')}>Fox Studios</Link></li>
                <li onClick={closeNav}><Link to="/brands/x6-studio" className={getLinkClass('/brands/x6-studio')}>X6 Studio</Link></li>
              </ul>
            </li>
            <li onClick={closeNav}><Link to="/about" className={getLinkClass('/about')}>About</Link></li>
            <li onClick={closeNav}><Link to="/contact" className={getLinkClass('/contact')}>Contact</Link></li>
          </ul>
          <div className="icon-links">
            <img className='trust-img' src={Trust} alt="" />
            <div ref={searchButtonRef} style={{ display: 'inline-block' }}>
              <CiSearch onClick={toggleSearch} style={{ cursor: 'pointer' }} />
            </div>
            <Link to="/account">{<VscAccount style={{ fontSize: '20px' }} />}</Link>
            <Link to="/cart"><CiShoppingCart /></Link>
          </div>
        </div>
        {isSearchOpen && (
          <div ref={searchPopupRef} className="search-popup">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;          