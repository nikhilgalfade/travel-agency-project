import React from "react";
import coverImg from "../../assets/cover.jpg";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";


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
          
           <h1 className="hero-title">
  Explore the World <br />
  <span className="typewriter-text">
    <Typewriter
      words={['Like Never Before', 'Your Way', 'With Us']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</h1>
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
          <p className="popular-destination">POPULAR DESTINATION</p>
          <h2 className="handpick">
           Handpicked Packages
          </h2>
          <p>
            Our team of travel experts works tirelessly to find the best deals and create itineraries that maximize your enjoyment while minimizing stress. Let us handle the details so you can focus on making memories.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;