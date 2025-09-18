import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Diana Johnston",
      rating: 4.9,
      date: "29 Aug, 2017",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      review: "Been working with appscript for a number of years now with a variety of different apps. They have my recommendation. They are a great team."
    },
    {
      id: 2,
      name: "Lauren Contreras",
      rating: 4.9,
      date: "29 Aug, 2017",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      review: "Been working with appscript for a number of years now with a variety of different apps. They have my recommendation. They are a great team."
    },
    {
      id: 3,
      name: "Edward Alexander",
      rating: 4.9,
      date: "29 Aug, 2017",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      review: "Outstanding service and support. The team went above and beyond to deliver exactly what we needed. Highly professional and reliable."
    },
    {
      id: 4,
      name: "Sarah Mitchell",
      rating: 5.0,
      date: "15 Sep, 2017",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
      review: "Exceptional work quality and attention to detail. They transformed our vision into reality and exceeded all expectations. Truly impressive!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleTimelineItemClick = (index) => {
    setActiveIndex(index);
  };

  const renderStars = (rating) => {
    return (
      <div className="rating">
        <span className="star">★</span>
        <span className="rating-number">{rating}</span>
      </div>
    );
  };

  return (
    <div className="testimonial-container">
      <h2 className="section-title">Customer Reviews</h2>
      
      <div className="testimonial-content">
        {/* Timeline Section */}
        <div className="timeline">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`timeline-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleTimelineItemClick(index)}
            >
              <div className="timeline-dot"></div>
              <div className="profile-section">
                <div className="profile-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">{testimonial.name}</h3>
                  {renderStars(testimonial.rating)}
                  <p className="review-date">on {testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Text Section */}
        <div className="testimonial-text">
          <div className="quote-icon">"</div>
          <p className="review-text">
            {testimonials[activeIndex].review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;