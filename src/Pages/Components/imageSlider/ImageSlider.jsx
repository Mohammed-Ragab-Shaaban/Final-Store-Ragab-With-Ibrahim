import { useEffect, useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const validInterval = setInterval(() => {
      const isCurrentImage = currentIndex === 0;
      const newIndex = isCurrentImage ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      console.log(currentIndex);
    }, 3000);
    return () => clearInterval(validInterval);
  }, [slides.length, currentIndex]);

  // Style for the div that contain the images in slider
  const sliderStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    borderRadius: "1rem",
    transition: "background-image 0.5s",
    position: "absolute",
    top: "-3rem",
  };
  return <div style={sliderStyle}></div>;
};

export default ImageSlider;
