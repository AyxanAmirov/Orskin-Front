import React, { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
function AccordionComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
      <AccordionItem>
        <h2>
          <AccordionButton onClick={handleToggle}>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              display="flex"
              gap="10px"
              alignItems="center"
              _hover={{ color: "black" }}
              className={`duration-[.4s] text-[22px] ${
                isOpen ? "text-black" : "text-[#9AD6CC]"
              }`}
            >
              <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
              <p>EmSlim</p>
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className="border-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

    </div>
  );
}

export default AccordionComponent;
