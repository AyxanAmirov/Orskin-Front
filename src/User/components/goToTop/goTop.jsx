import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function GoTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <div
        className="fixed right-7 bottom-[80px] px-[12px] py-[7px] bg-[#70BEBB] cursor-pointer"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-white text-[18px]" />
      </div>
    )
  );
}

export default GoTop;
