import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import Geese from '../../assets/img/Geese.png';
import wha from "../../assets/wha.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
<>
       <div className="footer-highlight">
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
          {/* <a href="https://wa.me/919994887194" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a> */}
        </div>
    
      </div>
    <footer className="footer-container">

      {/* Top Social Bar */}
      
   

      {/* Main Footer Content */}
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src={Geese} alt="GEESE Logo" className="footer-logo-img" />
          <p>Empowering People. Enabling Growth.</p>
        </div>

      <div className="footer-contact-section">
      <h4>Contact Us</h4>

      <p className="whatsapp-link">
        {/* <span>WhatsApp: </span> */}
        <a
          href="https://wa.me/919994887194?text=Hello%2C%20I%20am%20interested%20in%20your%20training%20program.%20Please%20share%20more%20details."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={wha} alt="WhatsApp" className="whatsapp-icon" />
          {/* <span className="whatsapp-number">9994887194</span> */}
        </a>
      </p>

      <p>
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <span style={{ marginLeft: "8px" }}>
          <a href="mailto:geesehr@gmail.com">geese.hr@gmail.com </a>
        </span>
      </p>

      <p>
        <FontAwesomeIcon icon={faPhone} className="icon" />
        <span style={{ marginLeft: "8px" }}>9994887194, 9789449223</span>
      </p>
    </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GEESE HR & Business Solutions. All Rights Reserved.</p>
      </div>
    </footer>

    </>
  );
};

export default Footer;
