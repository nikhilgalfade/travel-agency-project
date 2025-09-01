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

        <div className="hero-content  ">
          <p className="hero-up">EXPERIENCE LUXURY TRAVEL</p>
          <h1 className="hero-title  ">Explore the World  <br />Like Never Before</h1>
          <p className="hero-description">
           Curated journeys to the world's most extraordinary destinations. Let us transform <br /> your travel dreams into unforgettable memories.
          </p>
          <div className="hero-actions">
            <a href="#packages" className="hero-button">
              Start Planning
            </a>
             <a href="#packages" className="hero-button">
              Watch Video
            </a>
          </div>
          
        </div>
      </section>

      {/* Additional content to demonstrate scrolling */}
      <section className="additional-content">
        <div className="content-wrapper">
          <h2>About Our Travel Agency</h2>
          <p>
            We specialize in creating unforgettable  travel experiences. Whether you're looking for a relaxing beach getaway, an adventurous mountain trek, or a cultural city tour, we have the perfect package for you.
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