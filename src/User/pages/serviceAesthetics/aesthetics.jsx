import React from 'react'
import AccordionComponent from '../../components/accordion/accordion'
import { Accordion } from '@chakra-ui/react'

function Aesthetics() {
  return (
    <div className="container py-[40px]">
      <p className="text-[#949598] text-[18px] font-[400]">
      At Orksin, we believe that everyone should feel comfortable in their own skin. We tailor our cutting-edge aesthetics treatments to patients’ individual needs for an authentic, holistic approach to non-surgical skincare. Our Aesthetics Department is led by Medical Director, Dr. Asima Nasir, an enthusiastic, committed American board-certified physician who combines art and science to enhance natural beauty. She provides the best treatment possible to produce outstanding outcomes.
      </p>
      <Accordion allowToggle allowMultiple={false}>
        <AccordionComponent title="EmSlim" />
        <AccordionComponent title="CoolSculpting" />
        <AccordionComponent title="Lipo Laser" />
      </Accordion>
    </div>
  )
}

export default Aesthetics
