import React from "react";
import "./Ready.css";
import coverPhoto from "../../assets/bottomcover1.jpg";

const Ready = () => {
  return (
    <>
      <div
        className="ready-container"
        style={{ backgroundImage: `url(${coverPhoto})` }}
      >
        <div className="ready-overlay"></div>
        <div className="ready-content">
          <h1 className="ready-head">
            Ready to Start Your <br /> Adventure?
          </h1>
          <p className="ready-dis">
            Let us help you create the perfect journey. Our travel Experts are <br />
            ready to craft your dream vacation.
          </p>
          <button className="ready-btn">Get Started</button>
        </div>
      </div>

      {/* 👇 Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Column 1: Logo + Info */}
          <div className="footer-col">
            <h2 className="footer-logo">TravelX</h2>
            <p>Your trusted partner for unforgettable journeys.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/packages">Packages</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h3>Contact</h3>
            <p>Email: info@travelx.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

          {/* Column 4: Follow Us */}
          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TravelX. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Ready;
