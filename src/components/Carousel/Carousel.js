import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.image} alt={item.title} className="carousel-image" />
            <div className="carousel-caption">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={goToPrevious}>
        ❮
      </button>
      <button className="carousel-button next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
