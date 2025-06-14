import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Slider = ({ slides }) => {


  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full xl:h-[420px] lg:h-[400px] md:h-[380px] sm:h-[330px] h-[253px] overflow-hidden group">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map(slide => (
          <div key={slide.id} className="w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
              width={"100%"}
              height={"100%"}
            />
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-3 py-1 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <FontAwesomeIcon icon={faAngleRight} className="text-[10px]" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer bg-black ${currentSlide === index ? 'opacity-100' : 'opacity-70'} hover:opacity-100 transition-opacity duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
