import React, { useState, useRef, useEffect } from 'react';
import './header.css';
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { IoMdArrowDropdown } from "react-icons/io";
import Logo from '../assets/logo-Law.png';
import TextLogo from '../assets/anino-logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import Trust from '../assets/trust_badge.avif';

function Header() {
  const [query, setQuery] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const searchPopupRef = useRef(null);
  const searchButtonRef = useRef(null);
  const navRef = useRef(null);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300;
      const scroll = Math.min(scrollTop / maxScroll, 1);
      setScrollPosition(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const logoHeight = `${110 - scrollPosition * 50}px`;
  const textLogoHeight = `${150 - scrollPosition * 10}px`;

  return (
    <>
      <div className='head-head'>
        <a className='fbpage' href="https://www.facebook.com/AninoGaming">
          <span className='underline'>Follow Anino's Toy Collections Facebook page by Clicking here</span>
        </a>
      </div>
      <header style={{ height: `${135 - scrollPosition * 60}px`, transition: 'height 0.3s', border: 'none' }}>
        <div className='nav-container' style={{ padding: `${20 - scrollPosition * 10}px 0`, border: 'none' }}>
          <div className='logo-container'>

            {scrollPosition < 1 ? (
              <img className='logo' src={Logo} alt="Anino Logo" style={{ height: logoHeight, transition: 'height 0.20s', border: 'none' }} />
            ) : (
              <img className='logo' src={TextLogo} alt="Anino Text Logo" style={{ height: textLogoHeight, transition: 'height 0.1s', border: 'none', marginTop: '15px' }} />
            )}
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
                <li onClick={closeNav}><Link to="/funko" className={getLinkClass('/on-stack')}>Funko</Link></li>
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
            <Link>{<VscAccount style={{ fontSize: '20px' }} />}</Link>
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
