import { Accordion } from '@chakra-ui/react'
import React, { useContext } from 'react'
import AccordionComponent from '../../components/accordion/accordion'
import { ServiceContext } from '../../../context/ServiceContext';

function Facials() {
  const { moreinfo: { items, description } } = useContext(ServiceContext)
  return (
    <div className="container py-[40px]">
      <p className="text-[#949598] text-[18px] font-[400] mb-[30px]">
        {description}
      </p>
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
  )
}

export default Facials
