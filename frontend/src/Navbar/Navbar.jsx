import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Electcare ⚡</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>

        <Link to={"/"}> Home</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/about"}>About</Link>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}
