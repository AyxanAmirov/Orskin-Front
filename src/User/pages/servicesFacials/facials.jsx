import { Accordion } from '@chakra-ui/react'
import React from 'react'
import AccordionComponent from '../../components/accordion/accordion'

function Facials() {
  return (
    <div className="container py-[40px]">
      <p className="text-[#949598] text-[18px] font-[400]">
      Regular facials are a must to keep your skin feeling healthy and looking fresh. We focus on bringing you the latest, most effective facial treatments to target a variety of skin conditions and concerns. Plus, we personalize our approach to give your complexion the individual care and attention it deserves. With over 20 years’ experience in beauty and anti-aging, our Founder Orsi ensures we offer the highest-quality services that keep our loyal Dubai clients coming back.      </p>
      <Accordion allowToggle allowMultiple={false}>
        <AccordionComponent title="EmSlim" />
        <AccordionComponent title="CoolSculpting" />
        <AccordionComponent title="Lipo Laser" />
      </Accordion>
    </div>
  )
}

export default Facials
