import React, { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { Accordion } from "@chakra-ui/react";
import AccordionComponent from "../../components/accordion/accordion";

function Wellness() {
  const { moreinfo: { image, items, description } } = useContext(ServiceContext)
  return (

    <div className="container py-[40px]">
      <div className="flex gap-[30px] align-center mb-[50px] md:flex-row flex-col">
        <img
          src={image}
          alt="wellness"
        />
        <p className="text-[#949598] text-[18px] font-[400] mb-[30px]">
          {description}
        </p>

      </div>
      <Accordion allowToggle allowMultiple={false}>
        {
          items?.map(item => <AccordionComponent
            title={item.title}
            description={item.description}
            itemImage={item.image}
            key={item.id}
          />)
        }
      </Accordion>
    </div>
  );
}

export default Wellness;
