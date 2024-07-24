import React, { useState, useEffect } from "react";
import axios from "axios";

const Slider = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6622d9c13e17a3ac846e1a5a.mockapi.io/books"
        );
        const result = response.data;

        setData(result);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [data.length]);

  // Handle dot click
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
      {data.length > 0 && (
        <div className="container flex flex-col items-center">
          <div className="max-w-[700px] flex flex-col gap-[60px] text-center">
            <h3 className="text-[40px] text-[#2f2f2f]">WHAT OUR CLIENTS SAY</h3>
            <p className="text-xl text-[#393939] font-bold">
              {data[currentIndex].desc}
            </p>
            <h5 className="font-[400] tracking-[5px]">
              {data[currentIndex].author}
            </h5>
          </div>
          <div className="absolute bottom-4 flex gap-2">
            {data.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full border-2 cursor-pointer ${
                  index === currentIndex
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
