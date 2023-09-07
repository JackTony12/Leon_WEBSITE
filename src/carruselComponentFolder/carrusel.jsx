import React, { useState, useEffect } from "react";
import img1 from "../assets/images/choza.webp";
import img2 from "../assets/images/carrito.webp";
import img3 from "../assets/images/cocina.webp";

import "./styles.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className={`image-wrapper ${currentIndex === 0 ? "" : "hidden"}`}>
        <img src={img1} alt="Imagen 1" />
      </div>
      <div className={`image-wrapper ${currentIndex === 1 ? "" : "hidden"}`}>
        <img src={img2} alt="Imagen 2" />
      </div>
      <div className={`image-wrapper ${currentIndex === 2 ? "" : "hidden"}`}>
        <img src={img3} alt="Imagen 2" />
      </div>
    </div>
  );
};

export default Carousel;
