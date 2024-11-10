"use client";
import "../components/ImageSlider.css";
import { useState } from "react";

type ImageSliderProps = {
  images: string[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <div className="customBox">
        <img
          src={images[currentIndex]}
          alt="Slider Image"
          className="customImage"
        />
      </div>

      <button onClick={prevSlide} className="customButton  left">
        &#9664;
      </button>

      <button onClick={nextSlide} className="customButton right">
        &#9654;
     
      </button>
    </div>
  );
};

export default ImageSlider;