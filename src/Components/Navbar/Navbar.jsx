import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="container">
      <img src={logo} alt="GEESE" className="logo" />

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`link ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Program">Our Program</Link>
        <Link to="/Blog">Our blog</Link>
        <Link to="/Contact" className="btn">
          Contact
        </Link>

        {/* <a href="#"/>Home</a> */}
        {/* <a href="#">About</a> */}
        {/* <a href="#">Programs</a> */}
        {/* <div><a  href="#" className="btn">Contact</a></div>   */}
      </div>
    </nav>
  );
};

export default Navbar;
