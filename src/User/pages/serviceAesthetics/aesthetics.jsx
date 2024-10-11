import React, { useContext } from 'react'
import AccordionComponent from '../../components/accordion/accordion'
import { Accordion } from '@chakra-ui/react'
import { ServiceContext } from '../../../context/ServiceContext';

function Aesthetics() {
  const { moreinfo: { description, items } } = useContext(ServiceContext)

  return (
    <div className="container py-[40px]">
      <p className="text-[#949598] text-[18px] font-[400]">
        {description}
      </p>
      <Accordion allowToggle allowMultiple={false}>
        {
          items?.map(item => <AccordionComponent
            title={item.title}
            description={item.description}
            key={item.id}
          />)
        }
      </Accordion>
    </div>
  )
}

export default Aesthetics
