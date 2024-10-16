import React, { useState } from 'react';
import { IoIosCall } from "react-icons/io";
import { SiFacebook } from "react-icons/si";
import { FaQuestionCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import emailjs from 'emailjs-com';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: email,
    };

    emailjs.send('service_t7o2axd', 'template_iwchkxb', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setEmail('');
      }, (error) => {
        console.log('Failed to send email:', error);
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <>
      <div className='emails'>
        <div className='email-title'>Anino's Toy Collections</div>
        <h4>Our newsletters are packed full of special offers, new toys, events, competitions, and all the latest in the magical world of toys.</h4>
        <div className='email-container'>
          <input
            className='input-email'
            placeholder='Email address'
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <button onClick={sendEmail} className='btn-email'>
              <IoSend />
            </button>
          </div>
        </div>
        <div className='terms-privacy'>*By submitting your email address, you agree to receive marketing emails from Hamleys.</div>
        <div className='terms-privacy-click'>Click here to read our privacy policy & terms and conditions</div>
      </div>
      <footer>
        <div className='footer-main'>
          <div className='footer-info'>
            <h4><b>Information</b></h4>
            <a href="#">Search</a>
            <a href="#">FAQs</a>
            <a href="#">Payment Methods</a>
            <a href="#">Shipping/Pick-up Details</a>
            <a href="#">About us</a>
          </div>
          <div className='footer-account'>
            <h4><b>My Account</b></h4>
            <a href="#">Login</a>
            <a href="#">Register</a>
            <a href="#">Profile</a>
          </div>
          <div className='get-in-touch'>
            <h4><b>Get in touch</b></h4>
            <a href="#">Location & Hours</a>
            <a href="#">bryanlomerioanino@gmail.com</a>
          </div>
          <div className='needsomehelp'>
            <h2>Need some help?</h2>
            <p>We're here and ready by phone, email, and Facebook page every day,</p>
            <p>M-Sat 10am-6pm</p>
            <div className="need-help-icons">
              <div className="icon-label">
                <a className='call' href="tel:09947946338"><IoIosCall /></a>
                <label htmlFor="call">Call</label>
              </div>
              <div className="icon-label">
                <a className='facebook' href="https://www.facebook.com/profile.php?id=100093050435995"><SiFacebook /></a>
                <label htmlFor="facebook">Facebook</label>
              </div>
              <div className="icon-label">
                <a className='faq' href=""><FaQuestionCircle /></a>
                <label htmlFor="faqs">FAQ</label>
              </div>
              <div className="icon-label">
                <a className='email' href=""><MdEmail /></a>
                <label htmlFor="email">Email</label>
              </div>
            </div>
          </div>
        </div>

        <div className='copyrights'>
          <p>&copy; {new Date().getFullYear()} Anino's Toy Collections. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
