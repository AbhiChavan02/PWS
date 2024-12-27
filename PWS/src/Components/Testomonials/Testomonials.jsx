import React, { useState, useEffect } from 'react';
import './Testomonials.css';

const testimonials = [
  { id: 1, text: "This company provided excellent service and support!", author: "John Doe" },
  { id: 2, text: "I am very satisfied with the results. Highly recommend!", author: "Jane Smith" },
  { id: 3, text: "A fantastic experience from start to finish.", author: "Alice Johnson" },
  { id: 4, text: "Professional and reliable. Will use again!", author: "Bob Brown" },
  { id: 5, text: "Great communication and outstanding results!", author: "Charlie Davis" },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const nextTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    window.addEventListener('resize', handleResize);
    const interval = setInterval(nextTestimonial, 5000); // Auto slide every 5 seconds

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine the displayed testimonials
  const displayedTestimonials = isMobile
    ? [testimonials[currentIndex]] // Show one card on mobile
    : testimonials.slice(currentIndex, currentIndex + 3); // Show three cards on larger screens

  return (
    <div className="testimonials">
      <h2>
        What Our <span className="sp">Customers</span> Say
      </h2>
      <div className="testimonial-slider">
        {displayedTestimonials.map((testimonial, index) => {
          // Highlight the middle card on larger screens or single card on mobile
          const isMiddleCard = isMobile || (!isMobile && index === 1);

          return (
            <div
              key={testimonial.id}
              className={`testimonial-card ${isMiddleCard ? 'middle' : ''}`}
            >
              <p>{testimonial.text}</p>
              <h4>{testimonial.author}</h4>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
