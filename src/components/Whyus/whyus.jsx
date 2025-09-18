import React from "react";
import { FaPlane, FaHiking, FaHotel } from "react-icons/fa";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div className="whyus-container">
      <div className="whyus-overlay"></div>

      <div className="whyus-wrapper">
        {/* Left Card */}
        <div className="whyus-card">
          <div className="card-item">
            <FaPlane className="card-icon" />
            <div>
              <h3>Customized Packages</h3>
              <p>
                Tailor-made itineraries to suit your preferences and interests,
                ensuring a unique travel experience every time.
              </p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="card-item">
            <FaHiking className="card-icon" />
            <div>
              <h3>Adventure Tours</h3>
              <p>
                Explore thrilling destinations and activities, from mountain
                trekking to scuba diving, for the adrenaline seekers.
              </p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="card-item">
            <FaHotel className="card-icon" />
            <div>
              <h3>Luxury Vacations</h3>
              <p>
                Indulge in opulent accommodations and exclusive experiences,
                designed for those seeking a lavish escape.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="whyus-content">
          <button className="whyus-badge">WHY US</button>
          <h2 className="whyus-title">
            Crafting <br /> Unforgettable Journeys
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
