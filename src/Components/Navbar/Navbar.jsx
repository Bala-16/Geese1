import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // closes menu

  return (
    <nav className="container">
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="GEESE" className="logo" />
      </Link>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`link ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/team" onClick={closeMenu}>Our Team</Link>
        <Link to="/services" onClick={closeMenu}>Our Services</Link>
        <Link to="/Program" onClick={closeMenu}>Our Program</Link>
        <Link to="/Blog" onClick={closeMenu}>Our Blog</Link>
        <Link to="/Careers" onClick={closeMenu}>Careers</Link>
        <Link to="/Contact" className="btn" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
