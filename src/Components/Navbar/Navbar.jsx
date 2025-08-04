import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="container">
      <Link to="/">
        <img src={logo} alt="GEESE" className="logo" />
      </Link>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`link ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/team">Our Team</Link>
        <Link to="/services">Our Services</Link>
        <Link to="/Program">Our Program</Link>
        <Link to="/Blog">Our blog</Link>
        <Link to="/Careers">Careers</Link>

        <Link to="/Contact" className="btn">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
