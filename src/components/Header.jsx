
import React from 'react'
import './header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
function Header() {
  return (
    <header>
    <div className='hamburger-menu'><GiHamburgerMenu /></div>
    <div>
    
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/account">Acount</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/cart" className='cart-icon'><IoMdCart/></a></li>

    </ul>
    </div>
    </header>
  )
}

export default Header