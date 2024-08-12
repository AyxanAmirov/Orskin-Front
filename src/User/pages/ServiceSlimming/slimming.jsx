
import React  from "react";
import AccordionComponent from "../../components/accordion/accordion";
import { Accordion } from "@chakra-ui/react";

function Slimming() {

  return (
    <div className="container py-[40px]">
    <p className="text-[#949598] text-[18px] font-[400]">
      Even with the best intentions it can be difficult to shift fat deposits
      in certain areas, especially as we age. At Orskin, we offer a
      combination of different non-surgical slimming treatments, so you can
      get the desired shape you’re looking for, fast.
    </p>
    <Accordion allowToggle  >  
      <AccordionComponent />
      <AccordionComponent  />
      <AccordionComponent />
      <AccordionComponent />
    </Accordion>
  </div>
  );
}

export default Slimming;
