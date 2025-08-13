import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Info */}
        <div className="footer-section brand">
          <h2>⚡ Electcare</h2>
          <p>
            <a href="mailto:info@svgelectric.com" className="footer-contact">
              info@svgelectric.com
            </a>
          </p>
          <p>
            <a href="tel:+918870719804" className="footer-contact">
             +918870719804
            </a>
          </p>
        </div>

        {/* Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
    
         
            <Link to="/" className="nav-link">
            <p>Home</p>
          </Link>
          <Link to="/about" className="nav-link">
            <p>About Us</p>
          </Link>
          <Link to="/services" className="nav-link">
            <p>Services</p>
          </Link>
          <Link to="/contact" className="nav-link">
            <p>Contact</p>
          </Link>
           
        
        </div>

        {/* Social Icons */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
