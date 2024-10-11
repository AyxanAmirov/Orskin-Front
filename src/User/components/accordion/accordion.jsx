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

function AccordionComponent({ title, description }) {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
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
                <p>{title}</p>
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className="border-none">
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

export default AccordionComponent;
