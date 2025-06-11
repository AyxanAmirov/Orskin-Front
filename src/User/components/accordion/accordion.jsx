import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function AccordionComponent({ title, description, itemImage }) {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2 data-aos="zoom-in">
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                display="flex"
                gap="10px"
                alignItems="center"
                _hover={{ color: "black" }}
                className={`duration-[.4s] text-[22px] ${isExpanded ? "text-black" : "text-[#9AD6CC]"
                  }`}
              >
                <FontAwesomeIcon icon={isExpanded ? faMinus : faPlus} />
                <p data-aos="zoom-in">{title}</p>
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className="border-none flex flex-col md:flex-row gap-[30px] pl-[30px]">
            {
              itemImage ? <div className="w-[350px] h-[350px] flex-shrink-0">
                <img src={itemImage} alt={title} className="w-[100%] h-[100%] object-cover"
                  width={"100%"} height={"100%"} loading="lazy"
                />
              </div> : null
            }
            <p dangerouslySetInnerHTML={{ __html: description }}  ></p>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

export default AccordionComponent;
