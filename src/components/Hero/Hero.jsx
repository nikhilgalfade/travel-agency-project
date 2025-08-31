import React from "react";
import coverImg from "../../assets/cover.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{ 
          backgroundImage: `url(${coverImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Content */}
        <div className="hero-content">
          <h1 className="hero-title">Let's Travel The World Together</h1>
          <p className="hero-description">
            Discover amazing places at exclusive deals. Make your travel memorable.
          </p>
          <div className="hero-actions">
            <a href="#packages" className="hero-button">
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Additional content to demonstrate scrolling */}
      <section className="additional-content">
        <div className="content-wrapper">
          <h2>About Our Travel Agency</h2>
          <p>
            We specialize in creating unforgettable travel experiences. Whether you're looking for a relaxing beach getaway, an adventurous mountain trek, or a cultural city tour, we have the perfect package for you.
          </p>
          <p>
            Our team of travel experts works tirelessly to find the best deals and create itineraries that maximize your enjoyment while minimizing stress. Let us handle the details so you can focus on making memories.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;