import React from "react";
import coverImg from "../../assets/cover3.png";
import "./Aboutus.css";

export default function Aboutus() {
  return (
    <div className="about-section">
      {/* Left side image */}
      <div className="about-image">
        <img src={coverImg} alt="About Us" />
      </div>

      {/* Right side text */}
      <div className="about-content">
        <h1 className="about-us">ABOUT US</h1>
        <h1 className="about-journey">Your Journey, Our Passion</h1>
          
        
        <h4 >We believe that travel is more than just visiting new places; it's about creating memories, experiencing diverse cultures, and discovering the wonders of the world. With years of experience in the travel industry, our dedicated team is committed to providing exceptional travel experiences tailored to your unique desires and needs.
        </h4>

        <nav>
        <ol>✔ Budget-Friendly <ol/>
          <ol>✔ Luxurious Getaways</ol>
         ✔ Trusted Local Guides</ol>
          </nav>

          <div className="learn-more">
            <a href="" className="learn-button">Learn More</a>
            
          </div>
      </div>
    </div>
  );
}
