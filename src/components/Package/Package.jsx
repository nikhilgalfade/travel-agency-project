import React from "react";
import "./Package.css";
import TajImg from "../../assets/Taj2.jpg";
import Hawai from "../../assets/Hawai2.jpg";
import Kerala from "../../assets/Kerala2.jpg";
import Manali from "../../assets/Manali.jpg";


export default function PackageSection() {
  const destinations = [
    { 
      name: "Taj Mahal", 
      image: TajImg,
      description: "India's crown jewel"
    },
    { 
      name: "Kerala", 
      image: Kerala,
      description: "Land of natural wonders"
    },
    { 
      name: "Jaipur", 
      image: Hawai,
      description: "Historic British capital"
    },
    { 
      name: "Manali", 
      image: Manali,
      description: "Pearl of the Danube"
    },
    
  ];

  return (
    <div className="package-section">
      <div className="package-container">
        {/* Left Content */}
        <div className="package-content">
          <div className="package-header">
            <h3 className="package-subtitle">CHOOSE YOUR PLACE</h3>
            <h1 className="package-title">
              Popular<br />
              Destinations
            </h1>
            <p className="package-description">
              Join us as we explore the wonders of the globe, one
              incredible journey at a time.
            </p>
            <button className="find-packages-btn">
              Find Packages
              <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 
                  010 1.414l-6 6a1 1 0 
                  01-1.414-1.414L14.586 11H3a1 1 0 
                  110-2h11.586l-4.293-4.293a1 1 0 
                  010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        

        {/* Right Side - Destination Grid */}
        <div className="package-grid">
          {destinations.map((place, index) => (
            <div 
              key={index} 
              className={`package-card card-${index + 1}`}
              onClick={() => console.log(`Clicked on ${place.name}`)}
            >
              <div className="card-image">
                <img src={place.image} alt={place.name} />
                <div className="card-overlay">
                  <div className="card-content">
                    <h4 className="card-title">{place.name}</h4>
                    <p className="card-description">{place.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}
