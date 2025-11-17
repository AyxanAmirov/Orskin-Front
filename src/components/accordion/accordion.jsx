import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function AccordionComponent({ index, openIndex, setOpenIndex, title, description, itemImage }) {
  const isExpanded = openIndex === index;
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isExpanded) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(`${scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isExpanded]);

  const toggleAccordion = () => {
    setOpenIndex(isExpanded ? null : index);
  };

  return (
    <div className="py-2 border-b border-[#eee]">
      <h2
        onClick={toggleAccordion}
        className="cursor-pointer select-none"
      >
        <div
          className={`gap-[10px] flex items-center duration-[.4s] text-[22px] ${isExpanded ? "text-black" : "text-[#9AD6CC]"
            }`}
        >
          <FontAwesomeIcon icon={isExpanded ? faMinus : faPlus} />
          <p>{title}</p>
        </div>
      </h2>

      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          overflow: "hidden",
          transition: "max-height 0.5s ease, opacity 0.4s ease",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className="pt-4 flex flex-col md:flex-row gap-[30px]">
          {itemImage && (
            <div className="w-[350px] h-[350px] flex-shrink-0">
              <img
                src={itemImage}
                alt={title}
                className="w-[100%] h-[100%] object-cover"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>
          )}
          <p
            className="text-[#444]"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default AccordionComponent;
