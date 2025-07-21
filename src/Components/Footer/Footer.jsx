import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

import "./Footer.css";
import logo from "../../assets/logo.png"; // Update with your logo path
import Geese from '../../assets/img/Geese.png'
const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Highlight Section */}
      <div className="footer-highlight">
        <img src={logo} alt="GEESE Logo" className="highlight-logo" />
        <div className="highlight-social">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedinIn} />
  </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-top">
        <div className="footer-logo">
          <img src={Geese} alt="GEESE Logo" />
          <p>Empowering People. Enabling Growth.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Corporate</h4>
            <ul>
              <li>Nike</li>
              <li>Hyundai</li>
              <li>Royal Enfield</li>
              <li>GE</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Associations</h4>
            <ul>
              <li>BNI</li>
              <li>JCI</li>
              <li>Rotary</li>
              <li>TAI</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Universities</h4>
            <ul>
              <li>IIM</li>
              <li>NIT</li>
              <li>AN University</li>
              <li>AREK</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Programs</h4>
            <ul>
              <li>UTURN</li>
              <li>SMS</li>
              <li>MEME</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Message Section */}
      <div className="footer-message">
        <p>Message us on</p>
        <div className="footer-email-form">
  <input
    type="email"
    placeholder="Enter your email"
    className="email-input"
  />
  <button className="email-send-btn">Send Message</button>
</div>

        <div className="footer-social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GEESE HR & Business Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
