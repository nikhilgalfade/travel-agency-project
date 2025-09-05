import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">My Logo</div>
      
      <nav >
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Packages</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="plan_trip"> 
        <a href="#packages" className="plan-button">
              Plan Your Trip
            </a>
      </div>
      
    </header>
  );
}
