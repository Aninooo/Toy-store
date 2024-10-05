import React from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import './Side.css';

function Side() {
  return (
    <div className="side-container">
      <p>Instagram</p>
      <FaInstagram />
      <FaFacebook />
    </div>
  );
}

export default Side;
