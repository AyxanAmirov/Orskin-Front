import React, { useState, useEffect } from "react";
import { feedbacks } from "../../../data/data";
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [feedbacks]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="w-full bg-cover bg-center py-[70px] relative"
      style={{
        backgroundImage: `url('https://orskin.ae/wp-content/uploads/2023/02/bg-testimonial-500x208.jpg')`,
      }}
    >
      {feedbacks.length > 0 && (
        <div className="container flex flex-col items-center">
          <div className="max-w-[700px] flex flex-col gap-[60px] text-center">
            <h3 className="xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[22px] text-[22px] text-[#2f2f2f]">WHAT OUR CLIENTS SAY</h3>
            <p className="xl:text-xl lg:text-xl md:text-xl sm:text-[15px] text-[15px] text-[#393939] font-bold">
              {feedbacks[currentIndex]?.desc}
            </p>
            <h5 className="font-[400] tracking-[5px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[14px]">
              {feedbacks[currentIndex]?.author}
            </h5>
          </div>
          <div className="absolute bottom-4 flex gap-2">
            {feedbacks.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full border-2 cursor-pointer ${index === currentIndex
                  ? "bg-black border-black"
                  : "border-black bg-transparent"
                  }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
