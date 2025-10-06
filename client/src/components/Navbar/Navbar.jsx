import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src="/main-logo.png"
            alt="All American Medical Staffing Logo"
          />
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/nurse-staffing">Nurse Staffing</Link></li>
          <li><Link to="/management-staff-placement">Staff Placement</Link></li>
          <li><Link to="/vision">Mission & Vision</Link></li>
        </ul>

        {/* Contact Button */}
        <div className="navbar-contact">
          <Link to="/rapid-visit-request-form" className="contact-button">
            Request Visit
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
