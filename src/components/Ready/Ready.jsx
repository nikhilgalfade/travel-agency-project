import React from "react";
import "./Ready.css";
import coverPhoto from "../../assets/bottomcover1.jpg"; // 👈 place your image in assets folder

const Ready = () => {
  return (
    <div className="ready-container">
      <div className="ready-overlay"></div> {/* optional dark overlay */}
      <div className="ready-content">
        <h1 className="ready-head">Ready to Start Your <br /> Adventure?</h1>
        <p className="ready-dis">Let us help you create the perfect journey. Our travel Expert are <br/>ready to craft your dream vacation.</p>
        <button className="ready-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Ready;
