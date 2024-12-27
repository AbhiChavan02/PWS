import { useState, useEffect } from "react";
import slide11 from "../../assets/Images/11.jpg";
import slide22 from "../../assets/Images/22.jpg";
import mobileSlide11 from "../../assets/Images/33.png";
import mobileSlide22 from "../../assets/Images/44.png";
// import mobileSlide11 from "../../assets/Images/mobile11.jpg";
// import mobileSlide22 from "../../assets/Images/mobile22.jpg";
import "./Home.css"; // Ensure this file contains relevant styles

function Slider({ interval = 5000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Desktop and mobile slides
  const slidesDesktop = [slide11, slide22];
  const slidesMobile = [mobileSlide11, mobileSlide22];
  const slides = isMobile ? slidesMobile : slidesDesktop;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const autoPlay = setInterval(nextSlide, interval);
    return () => clearInterval(autoPlay);
  }, [isPaused, activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="carousel"
      id="Home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="carousel-inner"
        style={{
          display: "flex",
          transition: "transform 1.5s ease-in-out",
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${index === activeIndex ? "active-slide" : ""}`}
            style={{
              width: "100%",
              height: "auto",
              flex: "0 0 100%",
            }}
          />
        ))}
      </div>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`dash ${index === activeIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            style={{
              width: "40px",
              height: "6px",
              margin: "0 5px",
              backgroundColor: index === activeIndex ? "#007bff" : "#ccc",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
